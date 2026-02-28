import { useState, useEffect } from 'react'
import { useDesktopStore } from '../../store/windowStore'

export default function Taskbar() {
  const windows = useDesktopStore(s => s.windows)
  const maxZIndex = useDesktopStore(s => s.maxZIndex)
  const toggleStartMenu = useDesktopStore(s => s.toggleStartMenu)
  const focusWindow = useDesktopStore(s => s.focusWindow)
  const minimizeWindow = useDesktopStore(s => s.minimizeWindow)
  const restoreWindow = useDesktopStore(s => s.restoreWindow)
  const [time, setTime] = useState(getTime())

  useEffect(() => {
    const i = setInterval(() => setTime(getTime()), 15000)
    return () => clearInterval(i)
  }, [])

  const handleWinBtn = (id: string, minimized: boolean, zIndex: number) => {
    if (minimized) {
      restoreWindow(id)
    } else if (zIndex === maxZIndex) {
      minimizeWindow(id)
    } else {
      focusWindow(id)
    }
  }

  return (
    <div className="taskbar" onMouseDown={e => e.stopPropagation()}>
      <button className="start-button" onClick={toggleStartMenu}>
        <svg width="18" height="18" viewBox="0 0 20 20">
          <rect x="1" y="1" width="8" height="8" rx="1" fill="#F44336"/>
          <rect x="11" y="1" width="8" height="8" rx="1" fill="#4CAF50"/>
          <rect x="1" y="11" width="8" height="8" rx="1" fill="#2196F3"/>
          <rect x="11" y="11" width="8" height="8" rx="1" fill="#FFC107"/>
        </svg>
        <span>start</span>
      </button>
      <div className="taskbar-separator" />
      <div className="taskbar-window-list">
        {windows.map(w => (
          <button
            key={w.id}
            className={`taskbar-window-btn ${!w.minimized && w.zIndex === maxZIndex ? 'active' : ''}`}
            onClick={() => handleWinBtn(w.id, w.minimized, w.zIndex)}
          >
            <img src={w.icon} alt="" draggable={false} />
            <span>{w.title}</span>
          </button>
        ))}
      </div>
      <div className="system-tray">
        <svg className="tray-icon" viewBox="0 0 16 16" fill="white" opacity=".8"><path d="M1 12h2V5H1zm3 0h2V3H4zm3 0h2V7H7zm3 0h2V1h-2zm3 0h2V9h-2z"/></svg>
        <span className="tray-clock">{time}</span>
      </div>
    </div>
  )
}

function getTime() {
  return new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
}
