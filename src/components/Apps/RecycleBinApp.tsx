import { useState } from 'react'
import { useFileSystem } from '../../store/fileSystem'

export default function RecycleBinApp() {
  const recycledFiles = useFileSystem(s => s.recycledFiles)
  const restoreFile = useFileSystem(s => s.restoreFile)
  const permanentlyDelete = useFileSystem(s => s.permanentlyDelete)
  const emptyRecycleBin = useFileSystem(s => s.emptyRecycleBin)
  const [selected, setSelected] = useState<string | null>(null)
  const [showConfirmEmpty, setShowConfirmEmpty] = useState(false)

  const handleRestore = () => {
    if (selected) { restoreFile(selected); setSelected(null) }
  }

  const handleDelete = () => {
    if (selected) { permanentlyDelete(selected); setSelected(null) }
  }

  return (
    <div className="recyclebin-app">
      <div className="notepad-menubar">
        <span className="ie7-menu-item">File</span>
        <span className="ie7-menu-item">Edit</span>
        <span className="ie7-menu-item">View</span>
      </div>
      <div className="recyclebin-toolbar">
        <button
          className="recyclebin-toolbar-btn"
          disabled={!selected}
          onClick={handleRestore}
        >📄 Restore</button>
        <button
          className="recyclebin-toolbar-btn"
          disabled={!selected}
          onClick={handleDelete}
        >❌ Delete</button>
        <button
          className="recyclebin-toolbar-btn"
          disabled={recycledFiles.length === 0}
          onClick={() => setShowConfirmEmpty(true)}
        >🗑️ Empty Recycle Bin</button>
      </div>
      {recycledFiles.length === 0 ? (
        <div className="recyclebin-body">Recycle Bin is empty.</div>
      ) : (
        <div className="recyclebin-list">
          <div className="recyclebin-header-row">
            <span className="recyclebin-col-name">Name</span>
            <span className="recyclebin-col-loc">Original Location</span>
            <span className="recyclebin-col-date">Date Deleted</span>
          </div>
          {recycledFiles.map(f => {
            const name = f.path.split('/').pop() || f.path
            const dir = f.path.substring(0, f.path.lastIndexOf('/'))
            const date = new Date(f.deletedAt)
            const dateStr = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
            return (
              <div
                key={f.path}
                className={`recyclebin-row${selected === f.path ? ' selected' : ''}`}
                onClick={() => setSelected(f.path)}
                onDoubleClick={handleRestore}
              >
                <span className="recyclebin-col-name">📄 {name}</span>
                <span className="recyclebin-col-loc">{dir}</span>
                <span className="recyclebin-col-date">{dateStr}</span>
              </div>
            )
          })}
        </div>
      )}
      {showConfirmEmpty && (
        <div className="recyclebin-confirm-overlay">
          <div className="recyclebin-confirm-dialog">
            <p>Are you sure you want to permanently delete all items?</p>
            <div className="recyclebin-confirm-buttons">
              <button onClick={() => { emptyRecycleBin(); setShowConfirmEmpty(false) }}>Yes</button>
              <button onClick={() => setShowConfirmEmpty(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
