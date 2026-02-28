import { create } from 'zustand'

interface RecycledFile {
  path: string
  content: string
  deletedAt: number
}

interface FileSystemStore {
  files: Record<string, string>
  recycledFiles: RecycledFile[]
  createFile: (path: string, content: string) => void
  readFile: (path: string) => string | undefined
  updateFile: (path: string, content: string) => void
  deleteFile: (path: string) => void
  recycleFile: (path: string) => void
  restoreFile: (path: string) => void
  emptyRecycleBin: () => void
  permanentlyDelete: (path: string) => void
  listFiles: (dir: string) => string[]
  fileExists: (path: string) => boolean
}

const DEFAULT_FILES: Record<string, string> = {
  'C:/Documents and Settings/Aaron/Desktop/README.txt':
`===================================
  SharpXP - Aaron Sharp's Portfolio
===================================

Welcome to SharpXP! This website is a
recreation of Windows XP built entirely
in React + TypeScript.

How to navigate:
- Double-click "Internet Explorer" on
  the desktop to browse my portfolio
- Use the tabs in IE7 to switch between
  sections
- While Google searches work, many
  external websites won't load due to
  browser security restrictions (CORS)
  and iframe sandboxing. Use the
  Favorites bar to explore my portfolio!
- Try the Start menu for more apps!
- Play Snake or Minesweeper!
- Check out the Music & Video players

Built by Aaron Sharp
University of Alabama
Computer Science & Robotics

Email: aaronsharp2005@gmail.com
GitHub: github.com/asharpie

Roll Tide!`,

  'C:/Documents and Settings/Aaron/My Documents/notes.txt':
`My research notes:
- Hybrid LQR+PPO controller: 48% CTE improvement
- Next: fractional factorial screening experiments
- Need to optimize reward function
- Physical sandpit testing coming soon`,
}

export const useFileSystem = create<FileSystemStore>((set, get) => ({
  files: { ...DEFAULT_FILES },
  recycledFiles: [],

  createFile: (path, content) =>
    set(s => ({ files: { ...s.files, [path]: content } })),

  readFile: (path) => get().files[path],

  updateFile: (path, content) =>
    set(s => ({ files: { ...s.files, [path]: content } })),

  deleteFile: (path) =>
    set(s => {
      const next = { ...s.files }
      delete next[path]
      return { files: next }
    }),

  recycleFile: (path) =>
    set(s => {
      const content = s.files[path]
      if (content === undefined) return s
      const next = { ...s.files }
      delete next[path]
      return {
        files: next,
        recycledFiles: [...s.recycledFiles, { path, content, deletedAt: Date.now() }],
      }
    }),

  restoreFile: (path) =>
    set(s => {
      const item = s.recycledFiles.find(f => f.path === path)
      if (!item) return s
      return {
        files: { ...s.files, [item.path]: item.content },
        recycledFiles: s.recycledFiles.filter(f => f.path !== path),
      }
    }),

  emptyRecycleBin: () => set({ recycledFiles: [] }),

  permanentlyDelete: (path) =>
    set(s => ({ recycledFiles: s.recycledFiles.filter(f => f.path !== path) })),

  listFiles: (dir) => {
    const prefix = dir.endsWith('/') ? dir : dir + '/'
    return Object.keys(get().files).filter(k => k.startsWith(prefix))
  },

  fileExists: (path) => path in get().files,
}))
