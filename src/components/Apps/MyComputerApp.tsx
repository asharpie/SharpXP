import { useState } from 'react'
import { useDesktopStore } from '../../store/windowStore'
import { useFileSystem } from '../../store/fileSystem'
import { apps } from '../../data/appRegistry'

export default function MyComputerApp() {
  const openWindow = useDesktopStore(s => s.openWindow)
  const files = useFileSystem(s => s.files)
  const recycleFile = useFileSystem(s => s.recycleFile)
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; path: string } | null>(null)

  const userFiles = Object.keys(files).map(path => ({
    path,
    name: path.split('/').pop() || path,
  }))

  const shortcuts = [
    { name: 'My Portfolio', icon: '/icons/ie7.svg', action: () => openWindow(apps.ie7) },
    { name: 'Resume (Experience)', icon: '/icons/experience.svg', action: () => openWindow(apps.ie7, undefined, { section: 'experience' }) },
    { name: 'Research Paper', icon: '/icons/research.svg', action: () => openWindow(apps.ie7, undefined, { section: 'research' }) },
    { name: 'Awards', icon: '/icons/awards.svg', action: () => openWindow(apps.ie7, undefined, { section: 'awards' }) },
  ]

  const handleContextMenu = (e: React.MouseEvent, path: string) => {
    e.preventDefault()
    e.stopPropagation()
    setContextMenu({ x: e.clientX, y: e.clientY, path })
  }

  const handleDelete = () => {
    if (contextMenu) {
      recycleFile(contextMenu.path)
      setContextMenu(null)
    }
  }

  return (
    <div className="mycomputer-app" onClick={() => setContextMenu(null)}>
      <div className="mycomputer-toolbar">
        <div className="mycomputer-address">
          <span className="mycomputer-address-label">Address</span>
          <input className="mycomputer-address-path" value="C:\Documents and Settings\Aaron" readOnly />
        </div>
      </div>
      <div className="mycomputer-body">
        <div className="mycomputer-sidebar">
          <div className="mycomputer-sidebar-section">
            <div className="mycomputer-sidebar-title">System Tasks</div>
            <div className="mycomputer-sidebar-link" onClick={() => openWindow(apps.ie7)}>View portfolio</div>
            <div className="mycomputer-sidebar-link" onClick={() => window.open('https://github.com/asharpie', '_blank')}>GitHub</div>
          </div>
          <div className="mycomputer-sidebar-section">
            <div className="mycomputer-sidebar-title">Details</div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 10, padding: '0 6px' }}>
              SharpXP v2.1<br/>Aaron Sharp<br/>University of Alabama
            </div>
          </div>
        </div>
        <div className="mycomputer-files">
          {shortcuts.map(s => (
            <div key={s.name} className="mycomputer-file-item" onDoubleClick={s.action}>
              <img src={s.icon} alt="" draggable={false} /><span className="mycomputer-file-name">{s.name}</span>
            </div>
          ))}
          <div style={{ width: '100%', height: 1, background: '#ddd', margin: '4px 0' }} />
          {userFiles.map(f => (
            <div
              key={f.path}
              className="mycomputer-file-item"
              onDoubleClick={() => openWindow(apps.notepad, undefined, { openFile: f.path })}
              onContextMenu={(e) => handleContextMenu(e, f.path)}
            >
              <img src="/icons/notepad.svg" alt="" draggable={false} /><span className="mycomputer-file-name">{f.name}</span>
            </div>
          ))}
        </div>
      </div>
      {contextMenu && (
        <div
          className="context-menu"
          style={{ left: contextMenu.x, top: contextMenu.y, position: 'fixed' }}
        >
          <div className="context-menu-item" onClick={() => { openWindow(apps.notepad, undefined, { openFile: contextMenu.path }); setContextMenu(null) }}>Open</div>
          <div className="context-menu-divider" />
          <div className="context-menu-item" onClick={handleDelete} style={{ color: '#c00' }}>Delete</div>
        </div>
      )}
    </div>
  )
}
