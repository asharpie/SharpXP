import { useDesktopStore } from './store/windowStore'
import BootScreen from './components/BootScreen/BootScreen'
import Desktop from './components/Desktop/Desktop'
import Taskbar from './components/Taskbar/Taskbar'
import WindowManager from './components/Window/WindowManager'
import StartMenu from './components/StartMenu/StartMenu'
import ContextMenu from './components/Desktop/ContextMenu'
import Sharppy from './components/Clippy/Clippy'

export default function App() {
  const booted = useDesktopStore(s => s.booted)
  if (!booted) return <BootScreen />

  return (
    <>
      <Desktop />
      <WindowManager />
      <StartMenu />
      <Taskbar />
      <ContextMenu />
      <Sharppy />
    </>
  )
}
