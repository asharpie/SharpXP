import { useState } from 'react'
import { useDesktopStore } from '../../store/windowStore'

export default function BootScreen() {
  const boot = useDesktopStore(s => s.boot)
  const [fading, setFading] = useState(false)

  const handleClick = () => {
    if (fading) return
    setFading(true)
    setTimeout(() => boot(), 800)
  }

  return (
    <div className={`boot-screen ${fading ? 'fading' : ''}`} onClick={handleClick}>
      <div className="boot-logo-area">
        <div className="boot-flag">
          <div className="boot-flag-piece" />
          <div className="boot-flag-piece" />
          <div className="boot-flag-piece" />
          <div className="boot-flag-piece" />
        </div>
        <div className="boot-title">
          <span className="boot-microsoft">Microsoft</span>
          <span className="boot-windows">Windows</span>
          <span className="boot-xp">XP</span>
        </div>
        <div className="boot-loading-bar-track">
          <div className="boot-loading-blocks">
            <div className="boot-block" /><div className="boot-block" /><div className="boot-block" />
          </div>
        </div>
      </div>
      <div className="boot-click-hint">Click anywhere to enter</div>
      <div className="boot-bottom-text">Aaron Sharp's Portfolio</div>
    </div>
  )
}
