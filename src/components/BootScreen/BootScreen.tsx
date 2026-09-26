import { useCallback, useEffect, useState } from 'react'
import { useDesktopStore } from '../../store/windowStore'

export default function BootScreen() {
  const boot = useDesktopStore(s => s.boot)
  const [fading, setFading] = useState(false)

  const enterDesktop = useCallback(() => {
    if (fading) return
    setFading(true)
    setTimeout(() => boot(), 800)
  }, [boot, fading])

  useEffect(() => {
    const timer = window.setTimeout(enterDesktop, 2200)
    return () => window.clearTimeout(timer)
  }, [enterDesktop])

  return (
    <button
      type="button"
      className={`boot-screen ${fading ? 'fading' : ''}`}
      onClick={enterDesktop}
      aria-label="Start SharpXP now. The desktop starts automatically after three seconds."
    >
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
      <div className="boot-click-hint">Starting automatically · Click to skip</div>
      <div className="boot-bottom-text">Aaron Sharp's Portfolio</div>
    </button>
  )
}
