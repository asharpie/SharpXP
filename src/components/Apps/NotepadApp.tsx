import { useState, useEffect, useCallback, useRef } from 'react'
import { useDesktopStore } from '../../store/windowStore'
import { useFileSystem } from '../../store/fileSystem'

export default function NotepadApp({ windowId }: { windowId: string }) {
  const win = useDesktopStore(s => s.windows.find(w => w.id === windowId))
  const { readFile, createFile, updateFile, listFiles } = useFileSystem()
  const [text, setText] = useState('')
  const [fileName, setFileName] = useState('Untitled')
  const [filePath, setFilePath] = useState<string | null>(null)
  const [saved, setSaved] = useState(true)
  const [showSaveDialog, setShowSaveDialog] = useState(false)
  const [showOpenDialog, setShowOpenDialog] = useState(false)
  const [saveNameInput, setSaveNameInput] = useState('Untitled.txt')
  const [showFileMenu, setShowFileMenu] = useState(false)
  const fileMenuRef = useRef<HTMLDivElement>(null)

  // Load file from initialData
  useEffect(() => {
    if (win?.initialData?.openFile) {
      const path = win.initialData.openFile as string
      const content = readFile(path)
      if (content !== undefined) {
        const name = path.split('/').pop() || 'Untitled'
        setText(content)
        setFileName(name)
        setFilePath(path)
        setSaved(true)
        // Update the window title to reflect the opened file
        const title = `${name} - Notepad`
        useDesktopStore.setState(s => ({
          windows: s.windows.map(w => w.id === windowId ? { ...w, title } : w)
        }))
      }
    }
  }, [])

  // Close file menu when clicking outside
  useEffect(() => {
    if (!showFileMenu) return
    const handler = (e: MouseEvent) => {
      if (fileMenuRef.current && !fileMenuRef.current.contains(e.target as Node)) {
        setShowFileMenu(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [showFileMenu])

  const updateTitle = useCallback((name: string, isSaved: boolean) => {
    const title = `${name}${isSaved ? '' : ' *'} - Notepad`
    useDesktopStore.setState(s => ({
      windows: s.windows.map(w => w.id === windowId ? { ...w, title } : w)
    }))
  }, [windowId])

  const handleTextChange = (val: string) => {
    setText(val)
    setSaved(false)
    updateTitle(fileName, false)
  }

  const handleNew = () => {
    setText('')
    setFileName('Untitled')
    setFilePath(null)
    setSaved(true)
    updateTitle('Untitled', true)
  }

  const handleSave = () => {
    if (filePath) {
      updateFile(filePath, text)
      setSaved(true)
      updateTitle(fileName, true)
    } else {
      setShowSaveDialog(true)
    }
  }

  const handleSaveAs = () => {
    const path = `C:/Documents and Settings/Aaron/My Documents/${saveNameInput}`
    createFile(path, text)
    setFilePath(path)
    setFileName(saveNameInput)
    setSaved(true)
    updateTitle(saveNameInput, true)
    setShowSaveDialog(false)
  }

  const handleOpen = (path: string) => {
    const content = readFile(path)
    if (content !== undefined) {
      setText(content)
      const name = path.split('/').pop() || 'file'
      setFileName(name)
      setFilePath(path)
      setSaved(true)
      updateTitle(name, true)
    }
    setShowOpenDialog(false)
  }

  const allFiles = listFiles('C:/')

  return (
    <div className="notepad-app">
      <div className="notepad-menubar">
        <div className="notepad-file-menu-wrapper" ref={fileMenuRef}>
          <span
            className={`ie7-menu-item${showFileMenu ? ' active' : ''}`}
            onClick={() => setShowFileMenu(v => !v)}
          >File</span>
          {showFileMenu && (
            <div className="notepad-dropdown">
              <div className="notepad-dropdown-item" onClick={() => { handleNew(); setShowFileMenu(false); }}>New</div>
              <div className="notepad-dropdown-item" onClick={() => { setShowOpenDialog(true); setShowFileMenu(false); }}>Open...</div>
              <div className="notepad-dropdown-separator" />
              <div className="notepad-dropdown-item" onClick={() => { handleSave(); setShowFileMenu(false); }}>Save</div>
              <div className="notepad-dropdown-item" onClick={() => { setShowSaveDialog(true); setShowFileMenu(false); }}>Save As...</div>
            </div>
          )}
        </div>
      </div>
      <textarea
        className="notepad-textarea"
        value={text}
        onChange={e => handleTextChange(e.target.value)}
        spellCheck={false}
        placeholder="Start typing..."
      />

      {/* Save Dialog */}
      {showSaveDialog && (
        <div className="notepad-dialog-overlay">
          <div className="notepad-dialog window">
            <div className="title-bar"><div className="title-bar-text">Save As</div>
              <div className="title-bar-controls"><button aria-label="Close" onClick={() => setShowSaveDialog(false)} /></div>
            </div>
            <div className="window-body" style={{ padding: 12 }}>
              <p style={{ marginBottom: 8, fontSize: 11 }}>File name:</p>
              <input
                style={{ width: '100%', marginBottom: 12, padding: '2px 4px', fontSize: 12 }}
                value={saveNameInput}
                onChange={e => setSaveNameInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSaveAs()}
                autoFocus
              />
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 6 }}>
                <button onClick={handleSaveAs} style={{ padding: '3px 16px', fontSize: 11 }}>Save</button>
                <button onClick={() => setShowSaveDialog(false)} style={{ padding: '3px 16px', fontSize: 11 }}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Open Dialog */}
      {showOpenDialog && (
        <div className="notepad-dialog-overlay">
          <div className="notepad-dialog window">
            <div className="title-bar"><div className="title-bar-text">Open</div>
              <div className="title-bar-controls"><button aria-label="Close" onClick={() => setShowOpenDialog(false)} /></div>
            </div>
            <div className="window-body" style={{ padding: 12, minHeight: 120 }}>
              {allFiles.length === 0 ? (
                <p style={{ fontSize: 11, color: '#888' }}>No saved files.</p>
              ) : (
                allFiles.map(path => (
                  <div
                    key={path}
                    className="notepad-file-row"
                    onClick={() => handleOpen(path)}
                  >
                    📄 {path.split('/').pop()}
                  </div>
                ))
              )}
              <div style={{ marginTop: 12, textAlign: 'right' }}>
                <button onClick={() => setShowOpenDialog(false)} style={{ padding: '3px 16px', fontSize: 11 }}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
