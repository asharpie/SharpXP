import { useState, useEffect, useCallback } from 'react'

export default function ContextMenu() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)

  const handleContext = useCallback((e: MouseEvent) => {
    const t = e.target as HTMLElement
    if (t.closest('.desktop') && !t.closest('.desktop-icon') && !t.closest('.xp-window-wrapper')) {
      e.preventDefault()
      setPos({ x: e.clientX, y: e.clientY })
    }
  }, [])

  useEffect(() => {
    const close = () => setPos(null)
    window.addEventListener('contextmenu', handleContext)
    window.addEventListener('click', close)
    return () => { window.removeEventListener('contextmenu', handleContext); window.removeEventListener('click', close) }
  }, [handleContext])

  if (!pos) return null
  return (
    <div className="context-menu" style={{ left: pos.x, top: pos.y }}>
      <div className="context-menu-item disabled">Arrange Icons By ▸</div>
      <div className="context-menu-divider" />
      <div className="context-menu-item" onClick={() => window.location.reload()}>Refresh</div>
      <div className="context-menu-divider" />
      <div className="context-menu-item disabled">Paste</div>
      <div className="context-menu-item disabled">New ▸</div>
      <div className="context-menu-divider" />
      <div className="context-menu-item disabled">Properties</div>
    </div>
  )
}
