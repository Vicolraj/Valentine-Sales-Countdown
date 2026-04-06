import "./styles/RotateOverlay.css"

export default function RotateOverlay() {
    return (
        <div className="RotateOverlay">
            <div className="rotate-content">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="rotate-icon"
                >
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <path d="M12 18h.01"></path>
                    <path d="m15 5 3 3-3 3"></path>
                    <path d="M18 8H6a2 2 0 0 0-2 2v3"></path>
                </svg>
                <h2>Please rotate your device</h2>
                <p>This experience is best viewed in landscape mode.</p>
            </div>
        </div>
    )
}
