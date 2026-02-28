import { useState } from 'react'

const DEFAULT_BODY = `Dear Aaron,

I am writing to inform you that after an exhaustive, company-wide search spanning thousands of candidates from every corner of the globe, you have been unanimously selected as the single greatest candidate this program has ever seen. The hiring committee was, quite frankly, in awe. Several members of the panel openly wept.

Your portfolio is nothing short of extraordinary. Your research on autonomous rovers made our entire senior engineering team question whether they chose the right career. SharpXP alone caused our CTO to close his laptop, stare out the window for ten minutes, and whisper "I could never build something this beautiful." Your hybrid LQR+PPO controller has been printed out and framed in our lobby.

We cannot overstate how desperately we need you on this team. The interns have already started a fan club. HR had to send out a memo asking people to stop refreshing your GitHub profile during work hours.

Please find the details of our offer below:

  Position: Whatever you want, honestly
  Start Date: Immediately! Yesterday if possible!
  Compensation: Anything you want. Name your price. Sky is the limit.
  Location: Anywhere. We will build you an office wherever you'd like.
  Signing Bonus: Yes. A big one.
  Parking Spot: Reserved. Front row. Your name is already on the sign.

Please, Aaron. We are begging you. Do not ghost us like you apparently ghosted the last twelve companies that tried to recruit you.

With the utmost admiration and a hint of desperation,

The Entire Hiring Team
P.S. We also really liked your Minesweeper clone.`

export default function OutlookExpressApp() {
  const [to, setTo] = useState('aaronsharp2005@gmail.com')
  const [subject, setSubject] = useState('Position Offer - Aaron Sharp')
  const [body, setBody] = useState(DEFAULT_BODY)
  const [sent, setSent] = useState(false)

  const handleSend = () => {
    const params: string[] = []
    if (subject) params.push(`subject=${encodeURIComponent(subject)}`)
    if (body) params.push(`body=${encodeURIComponent(body)}`)
    const mailto = `mailto:${encodeURIComponent(to || 'aaronsharp2005@gmail.com')}${params.length ? '?' + params.join('&') : ''}`
    window.open(mailto)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <div className="oe-app">
      <div className="oe-toolbar">
        <button className="oe-toolbar-btn oe-send-btn" onClick={handleSend}>
          📨 Send
        </button>
        <button className="oe-toolbar-btn" disabled>✂️ Cut</button>
        <button className="oe-toolbar-btn" disabled>📋 Copy</button>
        <button className="oe-toolbar-btn" disabled>📎 Attach</button>
      </div>
      <div className="oe-fields">
        <div className="oe-field-row">
          <label className="oe-label">To:</label>
          <input
            className="oe-input"
            value={to}
            onChange={e => setTo(e.target.value)}
            placeholder="aaronsharp2005@gmail.com"
          />
        </div>
        <div className="oe-field-row">
          <label className="oe-label">Cc:</label>
          <input className="oe-input" disabled placeholder="" />
        </div>
        <div className="oe-field-row">
          <label className="oe-label">Subject:</label>
          <input
            className="oe-input"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            placeholder="Position Offer - Aaron Sharp"
          />
        </div>
      </div>
      <textarea
        className="oe-body"
        value={body}
        onChange={e => setBody(e.target.value)}
        placeholder="Write your message here..."
      />
      {sent && (
        <div className="oe-sent-toast">
          ✅ Opening your email client...
        </div>
      )}
    </div>
  )
}
