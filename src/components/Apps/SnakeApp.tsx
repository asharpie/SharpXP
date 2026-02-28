import { useRef, useEffect, useState, useCallback } from 'react'

const GRID = 20
const COLS = 19
const ROWS = 19
const W = COLS * GRID
const H = ROWS * GRID
const SPEED = 110

type Dir = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'
type Pos = { x: number; y: number }

export default function SnakeApp() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [started, setStarted] = useState(false)
  const gameRef = useRef({
    snake: [{ x: 9, y: 9 }] as Pos[],
    dir: 'RIGHT' as Dir,
    nextDir: 'RIGHT' as Dir,
    food: { x: 5, y: 5 } as Pos,
    alive: true,
    score: 0,
  })

  const spawnFood = useCallback(() => {
    const g = gameRef.current
    let pos: Pos
    do {
      pos = { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * ROWS) }
    } while (g.snake.some(s => s.x === pos.x && s.y === pos.y))
    g.food = pos
  }, [])

  const reset = useCallback(() => {
    const g = gameRef.current
    g.snake = [{ x: 9, y: 9 }]
    g.dir = 'RIGHT'
    g.nextDir = 'RIGHT'
    g.alive = true
    g.score = 0
    spawnFood()
    setScore(0)
    setGameOver(false)
    setStarted(true)
  }, [spawnFood])

  const draw = useCallback(() => {
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return
    const g = gameRef.current

    // Background
    ctx.fillStyle = '#1a3300'
    ctx.fillRect(0, 0, W, H)

    // Grid
    ctx.strokeStyle = '#224400'
    ctx.lineWidth = 0.5
    for (let x = 0; x <= COLS; x++) { ctx.beginPath(); ctx.moveTo(x * GRID, 0); ctx.lineTo(x * GRID, H); ctx.stroke() }
    for (let y = 0; y <= ROWS; y++) { ctx.beginPath(); ctx.moveTo(0, y * GRID); ctx.lineTo(W, y * GRID); ctx.stroke() }

    // Food
    ctx.fillStyle = '#ff3333'
    ctx.beginPath()
    ctx.arc(g.food.x * GRID + GRID / 2, g.food.y * GRID + GRID / 2, GRID / 2 - 2, 0, Math.PI * 2)
    ctx.fill()

    // Snake
    g.snake.forEach((seg, i) => {
      ctx.fillStyle = i === 0 ? '#66ff33' : '#44cc22'
      ctx.fillRect(seg.x * GRID + 1, seg.y * GRID + 1, GRID - 2, GRID - 2)
      if (i === 0) {
        ctx.fillStyle = '#1a3300'
        const cx = seg.x * GRID + GRID / 2
        const cy = seg.y * GRID + GRID / 2
        ctx.beginPath(); ctx.arc(cx - 3, cy - 2, 2, 0, Math.PI * 2); ctx.fill()
        ctx.beginPath(); ctx.arc(cx + 3, cy - 2, 2, 0, Math.PI * 2); ctx.fill()
      }
    })
  }, [])

  useEffect(() => {
    if (!started) return

    const handleKey = (e: KeyboardEvent) => {
      const g = gameRef.current
      const map: Record<string, Dir> = {
        ArrowUp: 'UP', ArrowDown: 'DOWN', ArrowLeft: 'LEFT', ArrowRight: 'RIGHT',
        w: 'UP', s: 'DOWN', a: 'LEFT', d: 'RIGHT',
      }
      const nd = map[e.key]
      if (!nd) return
      e.preventDefault()
      const opp: Record<Dir, Dir> = { UP: 'DOWN', DOWN: 'UP', LEFT: 'RIGHT', RIGHT: 'LEFT' }
      if (nd !== opp[g.dir]) g.nextDir = nd
    }

    window.addEventListener('keydown', handleKey)

    const interval = setInterval(() => {
      const g = gameRef.current
      if (!g.alive) return

      g.dir = g.nextDir
      const head = { ...g.snake[0] }
      if (g.dir === 'UP') head.y--
      else if (g.dir === 'DOWN') head.y++
      else if (g.dir === 'LEFT') head.x--
      else head.x++

      // Wall collision
      if (head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS) {
        g.alive = false
        setGameOver(true)
        return
      }

      // Self collision
      if (g.snake.some(s => s.x === head.x && s.y === head.y)) {
        g.alive = false
        setGameOver(true)
        return
      }

      g.snake.unshift(head)

      // Food
      if (head.x === g.food.x && head.y === g.food.y) {
        g.score += 10
        setScore(g.score)
        spawnFood()
      } else {
        g.snake.pop()
      }

      draw()
    }, SPEED)

    draw()
    return () => { clearInterval(interval); window.removeEventListener('keydown', handleKey) }
  }, [started, draw, spawnFood])

  return (
    <div className="snake-app">
      <div className="snake-header">
        <span>Score: {score}</span>
        {gameOver && <span style={{ color: '#ff3333' }}>GAME OVER</span>}
      </div>
      <div className="snake-canvas-wrap">
        <canvas ref={canvasRef} width={W} height={H} />
        {!started && (
          <div className="snake-overlay">
            <button className="snake-start-btn" onClick={reset}>Start Game</button>
            <p>Use arrow keys or WASD</p>
          </div>
        )}
        {gameOver && (
          <div className="snake-overlay">
            <p style={{ fontSize: 20, fontWeight: 'bold' }}>Game Over!</p>
            <p>Score: {score}</p>
            <button className="snake-start-btn" onClick={reset}>Play Again</button>
          </div>
        )}
      </div>
    </div>
  )
}
