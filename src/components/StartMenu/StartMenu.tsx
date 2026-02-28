import { useDesktopStore } from '../../store/windowStore'
import { apps, startMenuApps } from '../../data/appRegistry'

export default function StartMenu() {
  const open = useDesktopStore(s => s.startMenuOpen)
  const close = useDesktopStore(s => s.closeStartMenu)
  const openWindow = useDesktopStore(s => s.openWindow)

  if (!open) return null

  const launch = (appId: string) => {
    const def = apps[appId]
    if (def) openWindow(def)
    close()
  }

  return (
    <>
      <div className="start-menu-backdrop" onClick={close} />
      <div className="start-menu">
        <div className="start-menu-header">
          <div className="start-menu-avatar">AS</div>
          <div className="start-menu-username">Aaron Sharp</div>
        </div>
        <div className="start-menu-body">
          <div className="start-menu-left">
            {startMenuApps.map(a => (
              <div key={a.appId + a.label} className="start-menu-item" onClick={() => launch(a.appId)}>
                <img src={a.icon} alt="" draggable={false} /><span>{a.label}</span>
              </div>
            ))}
            <div className="start-menu-divider" />
            <div className="start-menu-item" style={{ opacity: 0.5 }}>
              <img src="/icons/folder.svg" alt="" draggable={false} /><span>All Programs ▸</span>
            </div>
          </div>
          <div className="start-menu-right">
            <div className="start-menu-item small" onClick={() => launch('mycomputer')}>
              <img src="/icons/mycomputer.svg" alt="" draggable={false} /><span>My Computer</span>
            </div>
            <div className="start-menu-item small" style={{ opacity: 0.5 }}>
              <img src="/icons/folder.svg" alt="" draggable={false} /><span>My Documents</span>
            </div>
            <div className="start-menu-divider" />
            <div className="start-menu-item small" onClick={() => launch('notepad')}>
              <img src="/icons/notepad.svg" alt="" draggable={false} /><span>Notepad</span>
            </div>
          </div>
        </div>
        <div className="start-menu-footer">
          <button className="start-menu-footer-btn" onClick={() => window.location.reload()}>Log Off</button>
          <button className="start-menu-footer-btn" onClick={() => window.location.reload()}>Turn Off Computer</button>
        </div>
      </div>
    </>
  )
}
