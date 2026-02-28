import { useState, useEffect } from 'react'

const TIPS = [
  "Hi! I'm Sharppy! 🖊️ Double-click Internet Explorer to browse Aaron's portfolio!",
  "Try the ★ Favorites bar in IE7 to jump between portfolio sections!",
  "Did you know? Aaron's hybrid LQR+PPO controller improved path tracking by 48%!",
  "You can play Snake and Minesweeper from the desktop icons! 🎮",
  "Right-click the desktop for a context menu — just like real XP!",
  "Aaron was the first transfer student Goldwater nominee in UA history! 🏆",
  "Try creating a new file in Notepad — it has a working file system!",
  "Check out the Start menu for more apps and games!",
  "Aaron won the TOM Global Innovation Challenge Grand Prize! 🥇",
  "The Media Player is ready for your favorite songs — add mp3s to public/music/!",
  "You can drag, resize, minimize, and maximize windows — just like Windows XP!",
  "Right-click files in My Computer to delete them — check the Recycle Bin!",
  "Click the Email icon to open Outlook Express and send Aaron a message! 📧",
  "Click any movie or song in the Hobbies section to play it in the media player! 🎬🎵",
  "Aaron 3D-printed a guitar from scratch — check it out under Hobbies!",
  "This entire site was built with React, TypeScript, and Vite — no Windows required! 💻",
  "Try minimizing a window and clicking it on the taskbar to restore it!",
  "Aaron has been to over 20 concerts in the past 3 years — ask him about them! 🎸",
  "The Video Player has 10 of Aaron's favorite movies — click one in Hobbies to watch!",
]

export default function Sharppy() {
  const [visible, setVisible] = useState(false)
  const [tipIdx, setTipIdx] = useState(0)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Show Sharppy after 8 seconds
    const timer = setTimeout(() => {
      if (!dismissed) setVisible(true)
    }, 8000)
    return () => clearTimeout(timer)
  }, [dismissed])

  useEffect(() => {
    if (!visible || dismissed) return
    // Cycle tips every 30 seconds
    const timer = setInterval(() => {
      setTipIdx(i => (i + 1) % TIPS.length)
    }, 30000)
    return () => clearInterval(timer)
  }, [visible, dismissed])

  const dismiss = () => { setVisible(false); setDismissed(true) }
  const nextTip = () => setTipIdx(i => (i + 1) % TIPS.length)

  if (!visible) return null

  return (
    <div className="clippy-container">
      <div className="clippy-bubble">
        <button className="clippy-close" onClick={dismiss}>×</button>
        <p className="clippy-text">{TIPS[tipIdx]}</p>
        <div className="clippy-actions">
          <button className="clippy-btn" onClick={nextTip}>Next tip</button>
          <button className="clippy-btn" onClick={dismiss}>Dismiss</button>
        </div>
      </div>
      <div className="clippy-character" onClick={nextTip}>
        {/* Real Sharpie proportions: ~11:1 length:diameter, dome top, rounded bottom */}
        <svg viewBox="0 0 50 220" width="100" height="185">
          <g transform="rotate(20, 25, 110)">
            {/* === Black cap — shorter dome/bullet top === */}
            <path d="M19 85 L19 30 Q19 18 25 18 Q31 18 31 30 L31 85 Z" fill="#1a1a1a" stroke="#000" strokeWidth="0.7"/>
            {/* Cap clip */}
            <rect x="31" y="26" width="2" height="16" rx="0.8" fill="#2a2a2a" stroke="#000" strokeWidth="0.3"/>
            {/* Cap bottom ring */}
            <path d="M17.5 83 L32.5 83 Q33.5 85.5 32.5 88 L17.5 88 Q16.5 85.5 17.5 83 Z" fill="#444" stroke="#222" strokeWidth="0.5"/>

            {/* === Gray barrel — long cylindrical body === */}
            <rect x="18" y="88" width="14" height="110" rx="1.5" fill="#b0b0b0" stroke="#888" strokeWidth="0.6"/>
            {/* Subtle barrel highlight (left specular) */}
            <rect x="18" y="88" width="5" height="110" rx="1.5" fill="#c8c8c8" opacity="0.35"/>

            {/* === SHARPIE label along barrel length === */}
            <text
              x="25" y="150"
              textAnchor="middle"
              fontSize="10"
              fontWeight="900"
              fontStyle="italic"
              fill="#1a1a1a"
              fontFamily="'Georgia','Times New Roman',serif"
              letterSpacing="1.2"
              transform="rotate(-90, 25, 148)"
            >SHARPPY</text>

            {/* Fine print */}
            <text
              x="25" y="148"
              textAnchor="middle"
              fontSize="2.6"
              fill="#666"
              fontFamily="Arial,sans-serif"
              transform="rotate(-90, 30, 148)"
            >PERMANENT MARKER</text>

            {/* === Rounded bottom end === */}
            <path d="M18 198 L32 198 L32 202 Q32 210 25 210 Q18 210 18 202 Z" fill="#999" stroke="#777" strokeWidth="0.5"/>

            {/* === Face on cap — comically oversized === */}
            
            {/* Eyes — bulging way beyond the body */}
            <ellipse cx="20" cy="52" rx="6.5" ry="8" fill="#fff" stroke="#444" strokeWidth="0.8"/>
            <ellipse cx="30" cy="52" rx="6.5" ry="8" fill="#fff" stroke="#444" strokeWidth="0.8"/>
            <circle cx="21.5" cy="53.5" r="3.2" fill="#1a1a1a"/>
            <circle cx="31.5" cy="53.5" r="3.2" fill="#1a1a1a"/>
            {/* Pupils (eye glint) */}
            <circle cx="22.5" cy="52" r="1" fill="#fff"/>
            <circle cx="32.5" cy="52" r="1" fill="#fff"/>
            {/* Smile — cartoonish Clippy-style mouth */}
            <path d="M18 68 Q25 75 32 68 Q25 77 18 68" fill="#ddd" stroke="#bbb" strokeWidth="0.8" strokeLinejoin="round"/>
            {/* Lower lip highlight */}
            <path d="M21 70 Q25 74 29 70" fill="none" stroke="#eee" strokeWidth="0.5" strokeLinecap="round"/>
          </g>
        </svg>
      </div>
    </div>
  )
}
