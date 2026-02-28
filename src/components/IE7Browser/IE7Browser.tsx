import { useState, useCallback, useEffect, useRef } from 'react'
import { portfolioSections, GOOGLE_HOME_HTML } from '../../data/portfolio'
import { ie7Favorites, apps } from '../../data/appRegistry'
import { useDesktopStore } from '../../store/windowStore'
import { prefixMediaInHtml } from '../../data/mediaBaseUrl'

type PageType = 'google' | 'portfolio' | 'iframe' | 'notfound'

interface Page {
  type: PageType
  sectionId?: string
  url: string
  title: string
}

const GOOGLE_PAGE: Page = { type: 'google', url: 'http://www.google.com', title: 'Google' }

export default function IE7Browser({ windowId }: { windowId: string }) {
  const win = useDesktopStore(s => s.windows.find(w => w.id === windowId))
  const openWindow = useDesktopStore(s => s.openWindow)
  const [history, setHistory] = useState<Page[]>([GOOGLE_PAGE])
  const [historyIdx, setHistoryIdx] = useState(0)
  const [loading, setLoading] = useState(false)
  const [addressVal, setAddressVal] = useState(GOOGLE_PAGE.url)
  const [iframeError, setIframeError] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const initialHandled = useRef(false)
  const searchInputRef = useRef<string>('')
  const [showTip, setShowTip] = useState(true)

  const currentPage = history[historyIdx]

  // Handle initialData from desktop icon clicks
  useEffect(() => {
    if (!win?.initialData || initialHandled.current) return
    const data = win.initialData
    initialHandled.current = true
    if (data.section) {
      navigateToSection(data.section as string)
      // Also open external URL in a new tab if provided
      if (data.externalUrl) {
        window.open(data.externalUrl as string, '_blank', 'noopener,noreferrer')
      }
    } else if (data.url) {
      navigateToUrl(data.url as string)
    }
  }, [win?.initialData])

  // Intercept clicks on media links (data-open-video / data-open-music) in portfolio HTML
  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>('[data-open-video], [data-open-music]')
      if (!target) return
      e.preventDefault()
      e.stopPropagation()
      const videoSrc = target.getAttribute('data-open-video')
      const musicSrc = target.getAttribute('data-open-music')
      if (videoSrc) {
        openWindow(apps.videoplayer, undefined, { playSrc: videoSrc })
      } else if (musicSrc) {
        openWindow(apps.musicplayer, undefined, { playSrc: musicSrc })
      }
    }
    el.addEventListener('click', handler)
    return () => el.removeEventListener('click', handler)
  })

  // ── Navigation helpers ──

  const pushPage = useCallback((page: Page) => {
    setHistory(prev => [...prev.slice(0, historyIdx + 1), page])
    setHistoryIdx(prev => prev + 1)
    setAddressVal(page.url)
    setIframeError(false)
  }, [historyIdx])

  const navigateToSection = useCallback((sectionId: string) => {
    const section = portfolioSections.find(s => s.id === sectionId)
    if (!section) return
    const page: Page = { type: 'portfolio', sectionId, url: section.url, title: section.title }
    setLoading(true)
    pushPage(page)
    setTimeout(() => setLoading(false), 250 + Math.random() * 300)
  }, [pushPage])

  const navigateToGoogle = useCallback(() => {
    setLoading(true)
    pushPage(GOOGLE_PAGE)
    setTimeout(() => setLoading(false), 200)
  }, [pushPage])

  const navigateToUrl = useCallback((rawUrl: string) => {
    // Check if it's a portfolio section
    const match = portfolioSections.find(s =>
      s.url.toLowerCase() === rawUrl.toLowerCase() ||
      s.id === rawUrl.toLowerCase() ||
      s.title.toLowerCase() === rawUrl.toLowerCase()
    )
    if (match) {
      navigateToSection(match.id)
      return
    }

    // Check if it's google
    if (rawUrl.toLowerCase().replace(/https?:\/\//, '').replace('www.', '').startsWith('google')) {
      navigateToGoogle()
      return
    }

    // Handle mailto: links — can't iframe these
    if (rawUrl.trim().toLowerCase().startsWith('mailto:')) {
      window.location.href = rawUrl.trim()
      return
    }

    // Normalize URL
    let url = rawUrl.trim()
    if (!url.match(/^https?:\/\//)) {
      // If it looks like a domain (has a dot, no spaces)
      if (url.includes('.') && !url.includes(' ')) {
        url = 'https://' + url
      } else {
        // Treat as Google search — load Google results in iframe
        url = `https://www.google.com/search?igu=1&q=${encodeURIComponent(rawUrl.trim())}`
      }
    }

    // Check if the normalized URL matches a portfolio section (e.g. github.com/asharpie)
    const urlMatch = portfolioSections.find(s =>
      s.url.toLowerCase() === url.toLowerCase() ||
      url.toLowerCase().replace(/\/$/, '') === s.url.toLowerCase().replace(/\/$/, '')
    )
    if (urlMatch) {
      navigateToSection(urlMatch.id)
      return
    }

    const page: Page = { type: 'iframe', url, title: url }
    setLoading(true)
    setIframeError(false)
    pushPage(page)
    // Loading state cleared by iframe onLoad or timeout
  }, [pushPage, navigateToSection, navigateToGoogle])

  // ── History navigation ──

  const goBack = useCallback(() => {
    if (historyIdx <= 0) return
    const idx = historyIdx - 1
    setHistoryIdx(idx)
    setAddressVal(history[idx].url)
    setIframeError(false)
  }, [historyIdx, history])

  const goForward = useCallback(() => {
    if (historyIdx >= history.length - 1) return
    const idx = historyIdx + 1
    setHistoryIdx(idx)
    setAddressVal(history[idx].url)
    setIframeError(false)
  }, [historyIdx, history])

  const refresh = useCallback(() => {
    if (currentPage.type === 'iframe' && iframeRef.current) {
      setLoading(true)
      setIframeError(false)
      // Force reload by toggling src
      const src = iframeRef.current.src
      iframeRef.current.src = ''
      setTimeout(() => { if (iframeRef.current) iframeRef.current.src = src }, 50)
    }
  }, [currentPage])

  // ── Address bar submit ──

  const handleAddressSubmit = useCallback(() => {
    const input = addressVal.trim()
    if (!input) return
    navigateToUrl(input)
  }, [addressVal, navigateToUrl])

  // ── Google homepage interaction ──

  const handleGoogleSearch = useCallback(() => {
    const query = searchInputRef.current.trim()
    if (query) {
      // Navigate to Google search results INSIDE the iframe
      const url = `https://www.google.com/search?igu=1&q=${encodeURIComponent(query)}`
      const page: Page = { type: 'iframe', url, title: `${query} - Google Search` }
      setLoading(true)
      setIframeError(false)
      pushPage(page)
    }
  }, [pushPage])

  // Wire up Google homepage inputs
  useEffect(() => {
    if (currentPage.type !== 'google' || loading) return
    const el = contentRef.current
    if (!el) return
    const input = el.querySelector('#googleSearchInput') as HTMLInputElement
    const btn = el.querySelector('#googleSearchBtn') as HTMLButtonElement
    const lucky = el.querySelector('#googleLuckyBtn') as HTMLButtonElement
    if (input) {
      input.value = ''
      searchInputRef.current = ''
      input.oninput = (e: Event) => { searchInputRef.current = (e.target as HTMLInputElement).value }
      input.onkeydown = (e: KeyboardEvent) => { if (e.key === 'Enter') handleGoogleSearch() }
      setTimeout(() => input.focus(), 100)
    }
    if (btn) btn.onclick = handleGoogleSearch
    if (lucky) lucky.onclick = handleGoogleSearch
  }, [currentPage.type, loading, handleGoogleSearch])

  // ── Iframe handlers ──

  const handleIframeLoad = useCallback(() => {
    setLoading(false)
    setIframeError(false)
    // Try to read the iframe title (only works for same-origin)
    try {
      const doc = iframeRef.current?.contentDocument
      if (doc?.title) {
        setHistory(prev => {
          const next = [...prev]
          if (next[historyIdx]) next[historyIdx] = { ...next[historyIdx], title: doc.title }
          return next
        })
      }
    } catch {
      // Cross-origin — expected, ignore
    }
  }, [historyIdx])

  // Timeout fallback: if iframe doesn't fire onLoad in 15s, assume it may be blocked
  useEffect(() => {
    if (currentPage.type !== 'iframe' || !loading) return
    const timer = setTimeout(() => {
      setLoading(false)
      setIframeError(true)
    }, 15000)
    return () => clearTimeout(timer)
  }, [currentPage, loading])

  // ── Favorites click ──

  const handleFavClick = (fav: (typeof ie7Favorites)[number]) => {
    if ('externalUrl' in fav && fav.externalUrl) {
      // Open external URL in new tab
      window.open(fav.externalUrl as string, '_blank', 'noopener,noreferrer')
    }
    if ('section' in fav && fav.section) {
      navigateToSection(fav.section)
    } else if ('externalUrl' in fav && fav.externalUrl) {
      navigateToUrl(fav.externalUrl as string)
    }
  }

  // ── Render helpers ──

  const section = currentPage.sectionId
    ? portfolioSections.find(s => s.id === currentPage.sectionId)
    : null

  return (
    <div className="ie7-browser">
      {/* Navigation Bar */}
      <div className="ie7-navbar">
        <button className="ie7-nav-btn" onClick={goBack} disabled={historyIdx <= 0} title="Back">
          <svg width="12" height="12" viewBox="0 0 12 12"><path d="M8 1L3 6l5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button className="ie7-nav-btn" onClick={goForward} disabled={historyIdx >= history.length - 1} title="Forward">
          <svg width="12" height="12" viewBox="0 0 12 12"><path d="M4 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button className="ie7-nav-btn" onClick={refresh} title="Refresh">
          <svg width="12" height="12" viewBox="0 0 12 12"><path d="M1 6a5 5 0 019-2m1 2a5 5 0 01-9 2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M10 1v3h-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button className="ie7-nav-btn" onClick={navigateToGoogle} title="Home">
          <svg width="12" height="12" viewBox="0 0 12 12"><path d="M1 6l5-5 5 5M3 5.5V11h2.5V8h1V11H9V5.5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="ie7-address-bar">
          <span className="ie7-address-label">Address</span>
          <input
            className="ie7-address-input"
            value={addressVal}
            onChange={e => setAddressVal(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleAddressSubmit()}
            spellCheck={false}
          />
          <button className="ie7-go-btn" onClick={handleAddressSubmit}>Go</button>
        </div>
        <svg className={`ie7-throbber ${loading ? 'loading' : ''}`} viewBox="0 0 20 20" width="20" height="20">
          <circle cx="10" cy="10" r="7" fill="none" stroke={loading ? '#0078D4' : '#ccc'} strokeWidth="2" strokeDasharray="18 26" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Menu Bar */}
      <div className="ie7-menubar">
        <span className="ie7-menu-item">File</span>
        <span className="ie7-menu-item">Edit</span>
        <span className="ie7-menu-item">View</span>
        <span className="ie7-menu-item">Favorites</span>
        <span className="ie7-menu-item">Tools</span>
        <span className="ie7-menu-item">Help</span>
      </div>

      {/* Favorites Bar */}
      <div className="ie7-favbar">
        <span className="ie7-favbar-label">★ Favorites</span>
        <div className="ie7-favbar-sep" />
        {ie7Favorites.map((fav, i) => {
          if ('type' in fav && fav.type === 'divider') {
            return <div key={i} className="ie7-favbar-sep" />
          }
          const isActive = 'section' in fav && fav.section === currentPage.sectionId
          return (
            <button
              key={i}
              className={`ie7-favbar-item ${isActive ? 'active' : ''}`}
              onClick={() => handleFavClick(fav)}
            >
              {'icon' in fav && fav.icon && <img src={fav.icon} alt="" width="14" height="14" />}
              {fav.label}
            </button>
          )
        })}
      </div>

      {/* Content Area */}
      <div className="ie7-content" ref={contentRef}>
        {/* Sticky tip note */}
        {showTip && (
          <div className="ie7-tip-note">
            <button className="ie7-tip-close" onClick={() => setShowTip(false)}>&times;</button>
            <div className="ie7-tip-icon">&#128161;</div>
            <div className="ie7-tip-text">
              <strong>Tip:</strong> Most external websites can&apos;t be embedded here due to browser security.
              Use the <strong>&#9733; Favorites</strong> bar to browse Aaron&apos;s portfolio, or click
              &ldquo;Open in new tab&rdquo; to view external sites.
            </div>
          </div>
        )}
        {/* Loading overlay for non-iframe pages */}
        {loading && currentPage.type !== 'iframe' && (
          <div className="ie7-loading">
            <div className="ie7-loading-text">Loading...</div>
            <div className="ie7-progress-track"><div className="ie7-progress-bar" /></div>
          </div>
        )}

        {/* Google Homepage */}
        {!loading && currentPage.type === 'google' && (
          <div dangerouslySetInnerHTML={{ __html: GOOGLE_HOME_HTML }} />
        )}

        {/* Portfolio section (rendered locally) */}
        {!loading && currentPage.type === 'portfolio' && section && (
          <div dangerouslySetInnerHTML={{ __html: prefixMediaInHtml(section.content) }} />
        )}

        {/* External website in iframe */}
        {currentPage.type === 'iframe' && (
          <div className="ie7-iframe-wrapper">
            {loading && (
              <div className="ie7-iframe-loading">
                <div className="ie7-progress-track" style={{ width: 200 }}>
                  <div className="ie7-progress-bar" />
                </div>
                <span>Connecting to {new URL(currentPage.url).hostname}...</span>
              </div>
            )}
            <iframe
              ref={iframeRef}
              src={currentPage.url}
              className="ie7-iframe"
              onLoad={handleIframeLoad}
              onError={() => { setLoading(false); setIframeError(true) }}
              title="Browser"
              referrerPolicy="no-referrer-when-downgrade"
              allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone; clipboard-write"
            />
            {iframeError && (
              <div className="ie7-iframe-error" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fff', gap: 12, textAlign: 'center', padding: 32 }}>
                <div style={{ fontSize: 48, marginBottom: 8 }}>🔒</div>
                <h3 style={{ margin: 0 }}>This page can&apos;t be displayed</h3>
                <p style={{ color: '#666', maxWidth: 400, lineHeight: 1.5 }}>The website refused the connection or does not allow embedding.</p>
                <button
                  onClick={() => window.open(currentPage.url, '_blank')}
                  style={{
                    padding: '8px 24px', background: '#0078D4', color: '#fff', border: 'none',
                    borderRadius: 4, cursor: 'pointer', fontSize: 14, fontWeight: 600
                  }}
                >
                  Open in new tab ↗
                </button>
              </div>
            )}
          </div>
        )}

        {/* 404 */}
        {!loading && currentPage.type === 'notfound' && (
          <div className="ie7-page">
            <h1>Page not found</h1>
            <p>The page you requested could not be found. Try the Favorites bar above.</p>
          </div>
        )}
      </div>

      {/* Status Bar */}
      <div className="ie7-statusbar">
        <span>{loading ? 'Loading...' : 'Done'}</span>
        <span className="ie7-statusbar-right">
          {currentPage.type === 'iframe' && (
            <button
              className="ie7-external-btn"
              onClick={() => window.open(currentPage.url, '_blank')}
              title="Open in new browser tab"
            >
              Open in new tab ↗
            </button>
          )}
          <span>Internet | Protected Mode: On</span>
        </span>
      </div>
    </div>
  )
}
