import { useState, useEffect, useRef, useCallback } from 'react'
import { useDesktopStore } from '../../store/windowStore'
import { desktopIcons, apps } from '../../data/appRegistry'
import DesktopIcon from './DesktopIcon'

export default function Desktop() {
  const openWindow = useDesktopStore(s => s.openWindow)
  const closeStartMenu = useDesktopStore(s => s.closeStartMenu)
  const [selectedIcon, setSelectedIcon] = useState<number | null>(null)
  const startupDone = useRef(false)

  // Track custom (dragged) positions for icons: index -> {x,y}
  const [iconPositions, setIconPositions] = useState<Record<number, { x: number; y: number }>>({})

  // Auto-open README.txt on first boot
  useEffect(() => {
    if (startupDone.current) return
    startupDone.current = true
    const readmeIcon = desktopIcons.find(i => i.label === 'README.txt')
    if (readmeIcon) {
      const appDef = apps[readmeIcon.appId]
      if (appDef) openWindow(appDef, undefined, readmeIcon.initialData)
    }
  }, [])

  const handleDesktopClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.desktop-icon')) return
    setSelectedIcon(null)
    closeStartMenu()
  }

  const handleIconDoubleClick = (index: number) => {
    const icon = desktopIcons[index]
    const appDef = apps[icon.appId]
    if (!appDef) return
    openWindow(appDef, undefined, icon.initialData)
  }

  const handleIconDragEnd = useCallback((index: number, x: number, y: number) => {
    setIconPositions(prev => ({ ...prev, [index]: { x, y } }))
  }, [])

  // Separate icons into grid (no custom position) and free-floating (custom position)
  const gridIcons = desktopIcons.map((icon, i) => ({ icon, i })).filter(({ i }) => !(i in iconPositions))
  const freeIcons = desktopIcons.map((icon, i) => ({ icon, i })).filter(({ i }) => i in iconPositions)

  return (
    <div className="desktop" onClick={handleDesktopClick}>
      <div className="desktop-icons-grid">
        {gridIcons.map(({ icon, i }) => (
          <DesktopIcon
            key={`${icon.appId}-${icon.label}-${i}`}
            icon={icon.icon}
            label={icon.label}
            selected={selectedIcon === i}
            onClick={() => setSelectedIcon(i)}
            onDoubleClick={() => handleIconDoubleClick(i)}
            onDragEnd={(x, y) => handleIconDragEnd(i, x, y)}
          />
        ))}
      </div>
      {freeIcons.map(({ icon, i }) => (
        <DesktopIcon
          key={`free-${icon.appId}-${icon.label}-${i}`}
          icon={icon.icon}
          label={icon.label}
          selected={selectedIcon === i}
          position={iconPositions[i]}
          onClick={() => setSelectedIcon(i)}
          onDoubleClick={() => handleIconDoubleClick(i)}
          onDragEnd={(x, y) => handleIconDragEnd(i, x, y)}
        />
      ))}
    </div>
  )
}
