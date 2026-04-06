import { useState } from "react"
import "./styles/Summary.css"

export default function Summary(){
    const [copied, setCopied] = useState(false)
    const code = "STERNIFY50"

    const handleCopy = () => {
        navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="summaryContainer">
            <h3>Save up to <span className="colored">50%</span> with the<br />code:
            </h3>
            <button className="coppyButton" onClick={handleCopy} style={{ cursor: 'pointer', position: 'relative' }}>
                {code}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginLeft: '8px', opacity: 0.8 }}
                >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                {copied && (
                    <span style={{
                        position: 'absolute',
                        top: '-25px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '0.7rem',
                        background: 'rgba(0,0,0,0.6)',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        color: 'white'
                    }}>
                        Copied!
                    </span>
                )}
            </button>
        </div>
    )
}