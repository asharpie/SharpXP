import { useState, useRef, useCallback } from 'react'

interface Props {
  icon: string
  label: string
  selected: boolean
  position?: { x: number; y: number }
  onClick: () => void
  onDoubleClick: () => void
  onDragEnd?: (x: number, y: number) => void
}

export default function DesktopIcon({ icon, label, selected, position, onClick, onDoubleClick, onDragEnd }: Props) {
  const [dragging, setDragging] = useState(false)
  const [dragPos, setDragPos] = useState<{ x: number; y: number } | null>(null)
  const startRef = useRef<{ mx: number; my: number; ox: number; oy: number } | null>(null)
  const didDragRef = useRef(false)

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button !== 0) return
    e.stopPropagation()
    onClick() // select on mousedown
    const el = (e.currentTarget as HTMLElement)
    const rect = el.getBoundingClientRect()
    startRef.current = { mx: e.clientX, my: e.clientY, ox: rect.left, oy: rect.top }
    didDragRef.current = false

    const onMove = (ev: MouseEvent) => {
      const s = startRef.current
      if (!s) return
      const dx = ev.clientX - s.mx
      const dy = ev.clientY - s.my
      if (!didDragRef.current && (Math.abs(dx) > 4 || Math.abs(dy) > 4)) {
        didDragRef.current = true
        setDragging(true)
      }
      if (didDragRef.current) {
        setDragPos({ x: s.ox + dx, y: s.oy + dy })
      }
    }

    const onUp = (ev: MouseEvent) => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      if (didDragRef.current && startRef.current) {
        const dx = ev.clientX - startRef.current.mx
        const dy = ev.clientY - startRef.current.my
        const newX = startRef.current.ox + dx
        const newY = startRef.current.oy + dy
        onDragEnd?.(newX, newY)
      }
      setDragging(false)
      setDragPos(null)
      startRef.current = null
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }, [onClick, onDragEnd])

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    // Selection already done in mousedown
  }

  const handleDblClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!didDragRef.current) onDoubleClick()
  }

  const style: React.CSSProperties = position
    ? { position: 'absolute', left: position.x, top: position.y }
    : {}

  if (dragging && dragPos) {
    style.position = 'fixed'
    style.left = dragPos.x
    style.top = dragPos.y
    style.zIndex = 9999
    style.opacity = 0.8
    style.pointerEvents = 'none'
  }

  return (
    <div
      className={`desktop-icon ${selected ? 'selected' : ''}`}
      style={style}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      onDoubleClick={handleDblClick}
    >
      <img src={icon} alt={label} draggable={false} />
      <span className="desktop-icon-label">{label}</span>
    </div>
  )
}
