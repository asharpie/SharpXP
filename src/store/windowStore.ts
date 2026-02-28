import { create } from 'zustand'

export interface WindowState {
  id: string
  appId: string
  title: string
  icon: string
  position: { x: number; y: number }
  size: { width: number; height: number }
  minimized: boolean
  maximized: boolean
  zIndex: number
  resizable: boolean
  minSize?: { width: number; height: number }
  maximizedPrev?: { position: { x: number; y: number }; size: { width: number; height: number } }
  initialData?: Record<string, unknown>
}

export interface AppDefinition {
  id: string
  title: string
  icon: string
  defaultSize: { width: number; height: number }
  minSize?: { width: number; height: number }
  resizable: boolean
  singleton?: boolean
}

interface DesktopStore {
  windows: WindowState[]
  maxZIndex: number
  startMenuOpen: boolean
  booted: boolean

  boot: () => void
  openWindow: (appDef: AppDefinition, extraTitle?: string, initialData?: Record<string, unknown>) => string
  closeWindow: (id: string) => void
  minimizeWindow: (id: string) => void
  maximizeWindow: (id: string) => void
  restoreWindow: (id: string) => void
  focusWindow: (id: string) => void
  updatePosition: (id: string, pos: { x: number; y: number }) => void
  updateSize: (id: string, size: { width: number; height: number }) => void
  toggleStartMenu: () => void
  closeStartMenu: () => void
  getWindowById: (id: string) => WindowState | undefined
}

let windowCounter = 0

const cascadeOffset = (index: number) => ({
  x: 80 + (index % 6) * 30,
  y: 50 + (index % 6) * 30,
})

export const useDesktopStore = create<DesktopStore>((set, get) => ({
  windows: [],
  maxZIndex: 100,
  startMenuOpen: false,
  booted: false,

  boot: () => set({ booted: true }),

  openWindow: (appDef, extraTitle, initialData) => {
    const state = get()

    if (appDef.singleton) {
      const existing = state.windows.find(w => w.appId === appDef.id)
      if (existing) {
        // Update initialData if provided (e.g., navigate IE7 to a section)
        set(s => ({
          windows: s.windows.map(w =>
            w.id === existing.id
              ? { ...w, minimized: false, initialData: initialData || w.initialData }
              : w
          ),
          maxZIndex: s.maxZIndex + 1,
        }))
        get().focusWindow(existing.id)
        return existing.id
      }
    }

    const id = `window-${++windowCounter}`
    const newZ = state.maxZIndex + 1
    const offset = cascadeOffset(state.windows.length)

    const vw = window.innerWidth
    const vh = window.innerHeight - 40

    // Clamp window size to fit within the viewport
    const w = Math.min(appDef.defaultSize.width, vw - 10)
    const h = Math.min(appDef.defaultSize.height, vh - 10)

    let x = offset.x
    let y = offset.y
    if (w > vw * 0.5) {
      x = Math.max(0, (vw - w) / 2)
      y = Math.max(0, (vh - h) / 2)
    }
    // Ensure window doesn't hang off screen
    x = Math.max(0, Math.min(x, vw - w))
    y = Math.max(0, Math.min(y, vh - h))

    const newWindow: WindowState = {
      id,
      appId: appDef.id,
      title: extraTitle || appDef.title,
      icon: appDef.icon,
      position: { x, y },
      size: { width: w, height: h },
      minimized: false,
      maximized: false,
      zIndex: newZ,
      resizable: appDef.resizable,
      minSize: appDef.minSize,
      initialData,
    }

    set({
      windows: [...state.windows, newWindow],
      maxZIndex: newZ,
      startMenuOpen: false,
    })
    return id
  },

  closeWindow: (id) =>
    set(s => ({ windows: s.windows.filter(w => w.id !== id) })),

  minimizeWindow: (id) =>
    set(s => ({
      windows: s.windows.map(w => (w.id === id ? { ...w, minimized: true } : w)),
    })),

  restoreWindow: (id) =>
    set(s => {
      const newZ = s.maxZIndex + 1
      return {
        maxZIndex: newZ,
        windows: s.windows.map(w =>
          w.id === id ? { ...w, minimized: false, zIndex: newZ } : w
        ),
      }
    }),

  maximizeWindow: (id) =>
    set(s => {
      const win = s.windows.find(w => w.id === id)
      if (!win) return s
      if (win.maximized) {
        return {
          windows: s.windows.map(w =>
            w.id === id
              ? {
                  ...w,
                  maximized: false,
                  position: w.maximizedPrev?.position || w.position,
                  size: w.maximizedPrev?.size || w.size,
                  maximizedPrev: undefined,
                }
              : w
          ),
        }
      }
      const newZ = s.maxZIndex + 1
      return {
        maxZIndex: newZ,
        windows: s.windows.map(w =>
          w.id === id
            ? {
                ...w,
                maximized: true,
                maximizedPrev: { position: w.position, size: w.size },
                position: { x: 0, y: 0 },
                size: { width: window.innerWidth, height: window.innerHeight - 40 },
                zIndex: newZ,
              }
            : w
        ),
      }
    }),

  focusWindow: (id) =>
    set(s => {
      const newZ = s.maxZIndex + 1
      return {
        maxZIndex: newZ,
        windows: s.windows.map(w => (w.id === id ? { ...w, zIndex: newZ } : w)),
      }
    }),

  updatePosition: (id, pos) =>
    set(s => ({
      windows: s.windows.map(w => (w.id === id ? { ...w, position: pos } : w)),
    })),

  updateSize: (id, size) =>
    set(s => ({
      windows: s.windows.map(w => (w.id === id ? { ...w, size } : w)),
    })),

  toggleStartMenu: () => set(s => ({ startMenuOpen: !s.startMenuOpen })),
  closeStartMenu: () => set({ startMenuOpen: false }),
  getWindowById: (id) => get().windows.find(w => w.id === id),
}))
