# SharpXP

A fully interactive Windows XP desktop environment built with React and TypeScript. Originally designed as a portfolio website, it recreates the classic XP experience in the browser with draggable/resizable windows, a working taskbar, start menu, and several built-in applications.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)

## Features

### Desktop Environment
- Authentic Windows XP Luna Blue theme with custom wallpaper support
- Draggable and resizable windows powered by `react-rnd`
- Full window management: minimize, maximize, restore, close
- Cascading window placement with proper z-index stacking
- Taskbar with running application tabs and system tray clock
- Start menu with pinned and recent applications
- Desktop icons with double-click to open
- Right-click context menu
- Mobile and touch device support
- XP boot screen animation

### Built-in Applications

| App | Description |
|-----|-------------|
| **Internet Explorer 7** | Portfolio browser with favorites bar, address bar, and navigation across portfolio sections (About, Experience, Projects, etc.) |
| **Notepad** | Text editor with a virtual file system |
| **My Computer** | File explorer showing drives and system info |
| **Recycle Bin** | Recycle bin viewer |
| **Windows Media Player** | Music player with playlist, album art, and visualizer |
| **Video Player** | Video player with movie grid and cover art |
| **Outlook Express** | Email compose form |
| **Snake** | Classic snake game |
| **Minesweeper** | Classic minesweeper game |
| **Clippy** | The beloved Office assistant |

### Portfolio Integration

Desktop icons and the IE7 favorites bar link to portfolio sections including About Me, Experience, Research, Awards, Education, Projects, Extracurriculars, and Hobbies. Social links (GitHub, LinkedIn, Instagram) open both an in-browser recreation and redirect to the real profile in a new tab.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for development and builds
- **Zustand** for state management (window store, file system)
- **react-rnd** for draggable/resizable windows
- **Howler.js** for audio playback
- **xp.css** as a style reference

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/asharpie/sharpxp.git
cd sharpxp
npm install
```

### Development

```bash
npm run dev
```

Opens the app at `http://localhost:5173/`.

### Build

```bash
npm run build
```

Output goes to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Adding Media

The project includes a Vite plugin that auto-generates a media manifest from local files.

### Music

Place MP3 files in `public/music/` using this naming convention:

```
public/music/Song-Title_Album-Name_Artist-Name.mp3
public/music/Song-Title_Album-Name_Artist-Name.png  (optional cover art)
```

Dashes in names are converted to spaces for display. Fields are separated by underscores.

### Videos

Place video files in `public/videos/`:

```
public/videos/Movie-Name.mp4
public/videos/Movie-Name.png  (optional cover art)
```

The manifest is regenerated automatically during development whenever files change.

## Customization

### Wallpaper

Place any image at `public/wallpaper.jpg` to set a custom desktop wallpaper.

### Desktop Icons

Edit `src/data/appRegistry.ts` to add, remove, or reorder desktop icons and start menu entries.

### Portfolio Content

Edit `src/data/portfolio.ts` to update the portfolio sections displayed in Internet Explorer.

## Project Structure

```
src/
  components/
    Apps/              Individual application components
    BootScreen/        XP boot animation
    Clippy/            Clippy assistant
    Desktop/           Desktop, icons, context menu
    IE7Browser/        Internet Explorer 7 browser
    StartMenu/         Start menu
    Taskbar/           Taskbar with app tabs
    Window/            Window component and manager
  data/
    appRegistry.ts     App definitions, desktop icons, start menu config
    portfolio.ts       Portfolio section content
    mediaConfig.ts     Media/CDN configuration
  store/
    windowStore.ts     Window state management (Zustand)
    fileSystem.ts      Virtual file system
  styles/
    global.css         All styles (XP Luna theme)
public/
  icons/               App and desktop icons (SVG)
  sounds/              System sounds
  music/               Local music files (optional)
  videos/              Local video files (optional)
```

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel --prod
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments on push.

### Netlify

Connect your GitHub repo at [netlify.com](https://netlify.com). Set the build command to `npm run build` and the publish directory to `dist`.

## License

This project is for personal/portfolio use. Windows XP visual assets and trademarks belong to Microsoft.
