/**
 * =====================================================
 *  MEDIA CONFIGURATION — Edit this file to add your music and videos!
 * =====================================================
 *
 *  HOW TO ADD MUSIC:
 *  1. Put your .mp3 files in the /public/music/ folder
 *  2. Add an entry below with JUST the filename (not the full path)
 *
 *  HOW TO ADD VIDEOS:
 *  1. Put your .mp4 files in the /public/videos/ folder
 *  2. Add an entry below with JUST the filename
 *
 *  The app serves files from /public/ at the root URL, so a file at
 *  /public/music/song.mp3 is available at /music/song.mp3
 */

export interface Track {
  title: string
  artist: string
  file: string // just the filename, e.g. "my-song.mp3"
}

export interface Video {
  title: string
  description: string
  file: string // just the filename, e.g. "clip.mp4"
}

// ──────────────────────────────────────────────
//  🎵 MUSIC PLAYLIST — Add your songs here!
// ──────────────────────────────────────────────
export const musicPlaylist: Track[] = [
  // Example (uncomment and edit):
  // { title: 'My Song', artist: 'Artist Name', file: 'my-song.mp3' },

  { title: 'Swim Between Trees', artist: 'Unknown', file: 'ytmp3free.cc_swim-between-trees-youtubemp3free.org.mp3' },
]

// ──────────────────────────────────────────────
//  🎬 VIDEO PLAYLIST — Add your videos here!
// ──────────────────────────────────────────────
export const videoPlaylist: Video[] = [
  // Example (uncomment and edit):
  // { title: 'My Video', description: 'A cool clip', file: 'clip.mp4' },
]
