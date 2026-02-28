import { useCallback, useMemo } from 'react'
import { Rnd } from 'react-rnd'
import { WindowState, useDesktopStore } from '../../store/windowStore'

interface Props {
  window: WindowState
  isActive: boolean
  children: React.ReactNode
}

export default function Window({ window: win, isActive, children }: Props) {
  const { closeWindow, minimizeWindow, maximizeWindow, focusWindow, updatePosition, updateSize } = useDesktopStore()

  const handleFocus = useCallback(() => {
    // Don't refocus a minimized window (prevents touch mousedown from undoing minimize)
    const w = useDesktopStore.getState().windows.find(w => w.id === win.id)
    if (w?.minimized) return
    focusWindow(win.id)
  }, [focusWindow, win.id])
  const handleClose = useCallback((e: React.MouseEvent | React.TouchEvent) => { e.stopPropagation(); e.preventDefault(); closeWindow(win.id) }, [closeWindow, win.id])
  const handleMin = useCallback((e: React.MouseEvent | React.TouchEvent) => { e.stopPropagation(); e.preventDefault(); minimizeWindow(win.id) }, [minimizeWindow, win.id])
  const handleMax = useCallback((e: React.MouseEvent | React.TouchEvent) => { e.stopPropagation(); e.preventDefault(); maximizeWindow(win.id) }, [maximizeWindow, win.id])
  const handleTitleDbl = useCallback(() => { if (win.resizable) maximizeWindow(win.id) }, [maximizeWindow, win.id, win.resizable])

  const enableResizing = useMemo(() => {
    if (!win.resizable || win.maximized) return false
    return { top: true, right: true, bottom: true, left: true, topRight: true, bottomRight: true, bottomLeft: true, topLeft: true }
  }, [win.resizable, win.maximized])

  return (
    <Rnd
      className={`xp-window-wrapper ${win.minimized ? 'minimized' : ''}`}
      position={win.position}
      size={win.size}
      minWidth={win.minSize?.width || 200}
      minHeight={win.minSize?.height || 150}
      style={{ zIndex: win.zIndex, display: win.minimized ? 'none' : undefined }}
      disableDragging={win.maximized}
      enableResizing={enableResizing}
      dragHandleClassName="xp-titlebar"
      cancel=".xp-titlebar-buttons"
      onDragStart={handleFocus}
      onDragStop={(_e, d) => updatePosition(win.id, { x: d.x, y: d.y })}
      onResizeStop={(_e, _d, ref, _delta, position) => {
        updateSize(win.id, { width: parseInt(ref.style.width), height: parseInt(ref.style.height) })
        updatePosition(win.id, position)
      }}
      onMouseDown={handleFocus}
      bounds="parent"
    >
      <div className={`xp-window ${isActive ? '' : 'inactive'}`}>
        <div className="xp-titlebar" onDoubleClick={handleTitleDbl}>
          <img className="xp-titlebar-icon" src={win.icon} alt="" draggable={false} />
          <span className="xp-titlebar-title">{win.title}</span>
          <div className="xp-titlebar-buttons">
            <button className="xp-titlebar-btn min-btn" onClick={handleMin} onTouchEnd={handleMin} title="Minimize">
              <svg width="9" height="9" viewBox="0 0 9 9"><rect x="0" y="7" width="9" height="2" fill="white"/></svg>
            </button>
            <button className="xp-titlebar-btn max-btn" onClick={handleMax} onTouchEnd={handleMax} title={win.maximized ? 'Restore' : 'Maximize'}>
              {win.maximized ? (
                <svg width="9" height="9" viewBox="0 0 9 9"><rect x="2" y="0" width="7" height="7" fill="none" stroke="white" strokeWidth="1.4"/><rect x="0" y="2" width="7" height="7" fill="none" stroke="white" strokeWidth="1.4"/></svg>
              ) : (
                <svg width="9" height="9" viewBox="0 0 9 9"><rect x="0" y="0" width="9" height="9" fill="none" stroke="white" strokeWidth="2"/></svg>
              )}
            </button>
            <button className="xp-titlebar-btn close-btn" onClick={handleClose} onTouchEnd={handleClose} title="Close">
              <svg width="9" height="9" viewBox="0 0 9 9"><line x1="0" y1="0" x2="9" y2="9" stroke="white" strokeWidth="2"/><line x1="9" y1="0" x2="0" y2="9" stroke="white" strokeWidth="2"/></svg>
            </button>
          </div>
        </div>
        <div className="xp-window-body">{children}</div>
      </div>
    </Rnd>
  )
}
