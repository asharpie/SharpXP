import { useDesktopStore } from '../../store/windowStore'
import Window from './Window'
import IE7Browser from '../IE7Browser/IE7Browser'
import NotepadApp from '../Apps/NotepadApp'
import MyComputerApp from '../Apps/MyComputerApp'
import RecycleBinApp from '../Apps/RecycleBinApp'
import SnakeApp from '../Apps/SnakeApp'
import MinesweeperApp from '../Apps/MinesweeperApp'
import MusicPlayer from '../Apps/MusicPlayer'
import VideoPlayer from '../Apps/VideoPlayer'
import OutlookExpressApp from '../Apps/OutlookExpressApp'

function AppContent({ appId, windowId }: { appId: string; windowId: string }) {
  switch (appId) {
    case 'ie7': return <IE7Browser windowId={windowId} />
    case 'notepad': return <NotepadApp windowId={windowId} />
    case 'mycomputer': return <MyComputerApp />
    case 'recyclebin': return <RecycleBinApp />
    case 'snake': return <SnakeApp />
    case 'minesweeper': return <MinesweeperApp />
    case 'musicplayer': return <MusicPlayer windowId={windowId} />
    case 'videoplayer': return <VideoPlayer windowId={windowId} />
    case 'outlookexpress': return <OutlookExpressApp />
    default: return <div style={{ padding: 16 }}>Unknown application</div>
  }
}

export default function WindowManager() {
  const windows = useDesktopStore(s => s.windows)
  const maxZIndex = useDesktopStore(s => s.maxZIndex)

  return (
    <>
      {windows.map(win => (
        <Window key={win.id} window={win} isActive={win.zIndex === maxZIndex && !win.minimized}>
          <AppContent appId={win.appId} windowId={win.id} />
        </Window>
      ))}
    </>
  )
}
