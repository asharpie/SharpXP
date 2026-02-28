import { AppDefinition } from '../store/windowStore'

export const apps: Record<string, AppDefinition> = {
  ie7: {
    id: 'ie7',
    title: 'Internet Explorer',
    icon: '/icons/ie7.svg',
    defaultSize: { width: 920, height: 640 },
    minSize: { width: 500, height: 380 },
    resizable: true,
    singleton: true,
  },
  mycomputer: {
    id: 'mycomputer',
    title: 'My Computer',
    icon: '/icons/mycomputer.svg',
    defaultSize: { width: 620, height: 460 },
    minSize: { width: 320, height: 260 },
    resizable: true,
    singleton: true,
  },
  notepad: {
    id: 'notepad',
    title: 'Untitled - Notepad',
    icon: '/icons/notepad.svg',
    defaultSize: { width: 520, height: 420 },
    minSize: { width: 280, height: 200 },
    resizable: true,
  },
  recyclebin: {
    id: 'recyclebin',
    title: 'Recycle Bin',
    icon: '/icons/recyclebin.svg',
    defaultSize: { width: 500, height: 380 },
    minSize: { width: 280, height: 200 },
    resizable: true,
    singleton: true,
  },
  snake: {
    id: 'snake',
    title: 'Snake',
    icon: '/icons/snake.svg',
    defaultSize: { width: 420, height: 480 },
    minSize: { width: 420, height: 480 },
    resizable: false,
    singleton: true,
  },
  minesweeper: {
    id: 'minesweeper',
    title: 'Minesweeper',
    icon: '/icons/minesweeper.svg',
    defaultSize: { width: 290, height: 380 },
    minSize: { width: 290, height: 380 },
    resizable: false,
    singleton: true,
  },
  musicplayer: {
    id: 'musicplayer',
    title: 'Windows Media Player',
    icon: '/icons/musicplayer.svg',
    defaultSize: { width: 480, height: 400 },
    minSize: { width: 360, height: 300 },
    resizable: true,
    singleton: true,
  },
  videoplayer: {
    id: 'videoplayer',
    title: 'Windows Media Player',
    icon: '/icons/videoplayer.svg',
    defaultSize: { width: 640, height: 520 },
    minSize: { width: 400, height: 340 },
    resizable: true,
    singleton: true,
  },
  outlookexpress: {
    id: 'outlookexpress',
    title: 'New Message - Outlook Express',
    icon: '/icons/email.svg',
    defaultSize: { width: 560, height: 440 },
    minSize: { width: 380, height: 300 },
    resizable: true,
  },
}

export interface DesktopIconDef {
  appId: string
  label: string
  icon: string
  initialData?: Record<string, unknown>
}

export const desktopIcons: DesktopIconDef[] = [
  // System icons
  { appId: 'mycomputer', label: 'My Computer', icon: '/icons/mycomputer.svg' },
  { appId: 'ie7', label: 'Internet Explorer', icon: '/icons/ie7.svg' },
  { appId: 'recyclebin', label: 'Recycle Bin', icon: '/icons/recyclebin.svg' },
  // Portfolio sections — open IE7 to that section
  { appId: 'ie7', label: 'About Me', icon: '/icons/aboutme.svg', initialData: { section: 'about' } },
  { appId: 'ie7', label: 'Experience', icon: '/icons/experience.svg', initialData: { section: 'experience' } },
  { appId: 'ie7', label: 'Research', icon: '/icons/research.svg', initialData: { section: 'research' } },
  { appId: 'ie7', label: 'Awards', icon: '/icons/awards.svg', initialData: { section: 'awards' } },
  { appId: 'ie7', label: 'Education', icon: '/icons/education.svg', initialData: { section: 'education' } },
  { appId: 'ie7', label: 'Projects', icon: '/icons/projects.svg', initialData: { section: 'projects' } },
  { appId: 'ie7', label: 'Extracurricular', icon: '/icons/extracurriculars.svg', initialData: { section: 'extracurriculars' } },
  { appId: 'ie7', label: 'Hobbies', icon: '/icons/guitar.svg', initialData: { section: 'hobbies' } },
  // Social links — open local recreation + redirect to real profile in new tab
  { appId: 'ie7', label: 'GitHub', icon: '/icons/github.svg', initialData: { section: 'github', externalUrl: 'https://github.com/asharpie' } },
  { appId: 'ie7', label: 'LinkedIn', icon: '/icons/linkedin.svg', initialData: { section: 'linkedin', externalUrl: 'https://www.linkedin.com/in/AaronSharp05' } },
  { appId: 'ie7', label: 'Instagram', icon: '/icons/instagram.svg', initialData: { section: 'instagram', externalUrl: 'https://www.instagram.com/aaronsharp_2/' } },
  { appId: 'outlookexpress', label: 'Email', icon: '/icons/email.svg' },
  // Apps & games
  { appId: 'notepad', label: 'README.txt', icon: '/icons/notepad.svg', initialData: { openFile: 'C:/Documents and Settings/Aaron/Desktop/README.txt' } },
  { appId: 'musicplayer', label: 'Media Player', icon: '/icons/musicplayer.svg' },
  { appId: 'videoplayer', label: 'Video Player', icon: '/icons/videoplayer.svg' },
  { appId: 'snake', label: 'Snake', icon: '/icons/snake.svg' },
  { appId: 'minesweeper', label: 'Minesweeper', icon: '/icons/minesweeper.svg' },
]

export const startMenuApps = [
  { appId: 'ie7', label: 'Internet Explorer', icon: '/icons/ie7.svg', pinned: true },
  { appId: 'musicplayer', label: 'Windows Media Player', icon: '/icons/musicplayer.svg', pinned: true },
  { appId: 'notepad', label: 'Notepad', icon: '/icons/notepad.svg' },
  { appId: 'snake', label: 'Snake', icon: '/icons/snake.svg' },
  { appId: 'minesweeper', label: 'Minesweeper', icon: '/icons/minesweeper.svg' },
  { appId: 'mycomputer', label: 'My Computer', icon: '/icons/mycomputer.svg' },
]

// IE7 Favorites bar items — these open inside IE7
export const ie7Favorites = [
  { label: 'About Me', section: 'about' },
  { label: 'Experience', section: 'experience' },
  { label: 'Research', section: 'research' },
  { label: 'Awards', section: 'awards' },
  { label: 'Education', section: 'education' },
  { label: 'Projects', section: 'projects' },
  { label: 'Extracurricular', section: 'extracurriculars' },
  { label: 'Hobbies', section: 'hobbies' },
  { type: 'divider' as const },
  { label: 'GitHub', section: 'github', icon: '/icons/github.svg', externalUrl: 'https://github.com/asharpie' },
  { label: 'LinkedIn', section: 'linkedin', icon: '/icons/linkedin.svg', externalUrl: 'https://www.linkedin.com/in/AaronSharp05' },
  { label: 'Instagram', section: 'instagram', icon: '/icons/instagram.svg', externalUrl: 'https://www.instagram.com/aaronsharp_2/' },
]
