import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import * as fs from 'fs'
import * as path from 'path'

/**
 * Vite plugin that auto-scans public/music/ and public/videos/ directories
 * and generates a media-manifest.json file. Watches for changes during dev.
 *
 * Music file structure: public/music/SongName/AlbumName/ArtistName.mp3
 * Music cover structure: public/music/SongName/AlbumName/ArtistName.png
 * Video file structure:  public/videos/MovieName.mp4
 * Video cover structure: public/videos/MovieName.png
 *
 * Dashes in folder/file names are converted to spaces for display.
 */
function mediaManifestPlugin(): Plugin {
  function generateManifest() {
    const publicDir = path.resolve(process.cwd(), 'public')
    const manifestPath = path.join(publicDir, 'media-manifest.json')
    const musicDir = path.join(publicDir, 'music')
    const videosDir = path.join(publicDir, 'videos')

    // If neither folder exists, keep the existing manifest (media hosted externally)
    if (!fs.existsSync(musicDir) && !fs.existsSync(videosDir)) {
      if (fs.existsSync(manifestPath)) {
        console.log('[media-manifest] Music/video folders not found — keeping existing manifest')
      } else {
        fs.writeFileSync(manifestPath, JSON.stringify({ music: [], videos: [] }, null, 2))
        console.log('[media-manifest] No media folders or manifest found — created empty manifest')
      }
      return
    }

    const manifest: {
      music: { title: string; album: string; artist: string; src: string; cover: string | null }[]
      videos: { title: string; src: string; cover: string | null }[]
    } = { music: [], videos: [] }

    // Scan music: public/music/SongTitle_Album_Artist.mp3 (use underscores to separate fields, dashes for spaces)
    if (fs.existsSync(musicDir)) {
      walkDir(musicDir, (filePath) => {
        if (!filePath.endsWith('.mp3')) return
        const relative = path.relative(musicDir, filePath).replace(/\\/g, '/')
        const fileName = relative.split('/').pop() // Only use the file name
        if (!fileName) return
        // Expect format: SongTitle_Album_Artist.mp3
        const [songRaw, albumRaw, artistRaw] = fileName.replace('.mp3', '').split('_')
        if (songRaw && albumRaw && artistRaw) {
          const songName = songRaw.replace(/-/g, ' ')
          const albumName = albumRaw.replace(/-/g, ' ')
          const artistName = artistRaw.replace(/-/g, ' ')
          const src = '/music/' + relative
          const coverRelative = relative.replace('.mp3', '.png')
          const coverFullPath = path.join(musicDir, coverRelative)
          const cover = fs.existsSync(coverFullPath) ? '/music/' + coverRelative : null
          manifest.music.push({ title: songName, album: albumName, artist: artistName, src, cover })
        }
      })
    }

    // Scan videos: public/videos/MovieName.mp4 or .avi
    const videoExts = ['.mp4', '.avi', '.webm']
    if (fs.existsSync(videosDir)) {
      for (const file of fs.readdirSync(videosDir)) {
        const ext = videoExts.find(e => file.endsWith(e))
        if (!ext) continue
        const title = file.replace(ext, '').replace(/-/g, ' ')
        const coverFile = path.join(videosDir, file.replace(ext, '.png'))
        const cover = fs.existsSync(coverFile) ? '/videos/' + file.replace(ext, '.png') : null
        manifest.videos.push({ title, src: '/videos/' + file, cover })
      }
    }

    manifest.music.sort((a, b) => a.artist.localeCompare(b.artist) || a.title.localeCompare(b.title))
    manifest.videos.sort((a, b) => a.title.localeCompare(b.title))
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))
    console.log(`[media-manifest] ${manifest.music.length} song(s), ${manifest.videos.length} video(s)`)
  }

  function walkDir(dir: string, cb: (fp: string) => void) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, e.name)
      if (e.isDirectory()) walkDir(full, cb)
      else cb(full)
    }
  }

  return {
    name: 'media-manifest',
    buildStart() { generateManifest() },
    configureServer(server) {
      generateManifest()
      server.watcher.on('all', (_ev, p) => {
        const n = p.replace(/\\/g, '/')
        if ((n.includes('/music/') || n.includes('/videos/')) && !n.endsWith('media-manifest.json')) {
          generateManifest()
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), mediaManifestPlugin()],
})
