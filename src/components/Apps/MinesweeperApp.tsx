import { useState, useCallback } from 'react'

const ROWS = 9
const COLS = 9
const MINES = 10

type CellState = {
  mine: boolean
  revealed: boolean
  flagged: boolean
  adjacent: number
}

function createBoard(): CellState[][] {
  const board: CellState[][] = Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => ({ mine: false, revealed: false, flagged: false, adjacent: 0 }))
  )
  let placed = 0
  while (placed < MINES) {
    const r = Math.floor(Math.random() * ROWS)
    const c = Math.floor(Math.random() * COLS)
    if (!board[r][c].mine) { board[r][c].mine = true; placed++ }
  }
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (board[r][c].mine) continue
      let count = 0
      for (let dr = -1; dr <= 1; dr++)
        for (let dc = -1; dc <= 1; dc++) {
          const nr = r + dr, nc = c + dc
          if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && board[nr][nc].mine) count++
        }
      board[r][c].adjacent = count
    }
  }
  return board
}

const NUM_COLORS: Record<number, string> = {
  1: '#0000FF', 2: '#008000', 3: '#FF0000', 4: '#000080',
  5: '#800000', 6: '#008080', 7: '#000000', 8: '#808080',
}

export default function MinesweeperApp() {
  const [board, setBoard] = useState(createBoard)
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost'>('playing')
  const [face, setFace] = useState('🙂')

  const flagsLeft = MINES - board.flat().filter(c => c.flagged).length

  const reset = () => { setBoard(createBoard()); setGameState('playing'); setFace('🙂') }

  const reveal = useCallback((r: number, c: number) => {
    setBoard(prev => {
      const next = prev.map(row => row.map(cell => ({ ...cell })))
      const flood = (rr: number, cc: number) => {
        if (rr < 0 || rr >= ROWS || cc < 0 || cc >= COLS) return
        if (next[rr][cc].revealed || next[rr][cc].flagged) return
        next[rr][cc].revealed = true
        if (next[rr][cc].adjacent === 0 && !next[rr][cc].mine) {
          for (let dr = -1; dr <= 1; dr++)
            for (let dc = -1; dc <= 1; dc++) flood(rr + dr, cc + dc)
        }
      }
      flood(r, c)
      return next
    })
  }, [])

  const handleClick = (r: number, c: number) => {
    if (gameState !== 'playing') return
    const cell = board[r][c]
    if (cell.revealed || cell.flagged) return
    if (cell.mine) {
      // Reveal all mines
      setBoard(prev => prev.map(row => row.map(cell => cell.mine ? { ...cell, revealed: true } : cell)))
      setGameState('lost')
      setFace('😵')
      return
    }
    reveal(r, c)
    // Check win
    setTimeout(() => {
      setBoard(prev => {
        const unrevealed = prev.flat().filter(c => !c.revealed && !c.mine).length
        if (unrevealed === 0) { setGameState('won'); setFace('😎') }
        return prev
      })
    }, 10)
  }

  const handleRightClick = (e: React.MouseEvent, r: number, c: number) => {
    e.preventDefault()
    if (gameState !== 'playing') return
    if (board[r][c].revealed) return
    setBoard(prev => {
      const next = prev.map(row => row.map(cell => ({ ...cell })))
      next[r][c].flagged = !next[r][c].flagged
      return next
    })
  }

  return (
    <div className="ms-app">
      <div className="ms-header">
        <div className="ms-counter">{String(flagsLeft).padStart(3, '0')}</div>
        <button className="ms-face-btn" onClick={reset}>{face}</button>
        <div className="ms-counter">000</div>
      </div>
      <div className="ms-board" onContextMenu={e => e.preventDefault()}>
        {board.map((row, r) => (
          <div key={r} className="ms-row">
            {row.map((cell, c) => (
              <div
                key={c}
                className={`ms-cell ${cell.revealed ? 'revealed' : ''} ${cell.revealed && cell.mine ? 'mine-hit' : ''}`}
                onClick={() => handleClick(r, c)}
                onContextMenu={e => handleRightClick(e, r, c)}
              >
                {cell.revealed
                  ? cell.mine
                    ? '💣'
                    : cell.adjacent > 0
                      ? <span style={{ color: NUM_COLORS[cell.adjacent], fontWeight: 'bold' }}>{cell.adjacent}</span>
                      : ''
                  : cell.flagged
                    ? '🚩'
                    : ''
                }
              </div>
            ))}
          </div>
        ))}
      </div>
      {gameState === 'won' && <div className="ms-message">You win! 🎉</div>}
      {gameState === 'lost' && <div className="ms-message">Game over! 💥</div>}
    </div>
  )
}
