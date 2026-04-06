import { useEffect, useRef, useState } from "react"
import "./styles/Countdown.css"

export default function Countdown() {
    return (
        <div className="Countdown">
            <h3>Countdown</h3>
            <TimerComponent />
        </div>
    )
}

function TimerComponent() {
    const targetDate = useRef(new Date().getTime() + 4 * 24 * 60 * 60 * 1000)
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate.current))

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate.current))
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="TimerComponent">
            <div className="timecontainer">
                <FlipUnit value={timeLeft.days} />
                <FlipUnit value={timeLeft.hours} />
                <FlipUnit value={timeLeft.minutes} />
                <FlipUnit value={timeLeft.seconds} last={true} />
            </div>
            <div className="digitsLabel">
                <span>Tag</span>
                <span>Stunden</span>
                <span>Minuten</span>
                <span>Sekunden</span>
            </div>
        </section>
    )
}

function FlipUnit({ value, last = false }: { value: number; last?: boolean }) {
    const formatted = value.toString().padStart(2, "0")
    return (
        <div className={`digitsContainer ${!last ? "spacer" : ""}`}>
            <FlipDigit digit={formatted[0]} />
            <FlipDigit digit={formatted[1]} />
        </div>
    )
}

function FlipDigit({ digit }: { digit: string }) {
    const [current, setCurrent] = useState(digit)
    const [previous, setPrevious] = useState(digit)
    const [flipping, setFlipping] = useState(false)
    const busy = useRef(false)

    useEffect(() => {
        if (digit === current || busy.current) return
        busy.current = true
        setPrevious(current)
        setFlipping(true)
        const t = setTimeout(() => {
            setCurrent(digit)
            setFlipping(false)
            busy.current = false
        }, 320)
        return () => clearTimeout(t)
    }, [digit, current])

    return (
        <div className="flip-digit">
            {/* Background static halves — always rendered */}
            <div className="flip-static flip-static-top">
                <span>{current}</span>
            </div>
            <div className="flip-static flip-static-bottom">
                <span>{current}</span>
            </div>
            <div className="flip-divider" />

            {/* Animated flaps — only during flip */}
            {flipping && (
                <>
                    {/* Top flap: starts flat (showing PREVIOUS top), rotates down to -90deg */}
                    <div className="flip-card flip-top-flap">
                        <span>{previous}</span>
                    </div>
                    {/* Bottom flap: starts at 90deg (folded up, showing NEW bottom), rotates to 0 */}
                    <div className="flip-card flip-bottom-flap">
                        <span>{digit}</span>
                    </div>
                </>
            )}
        </div>
    )
}

function calculateTimeLeft(target: number) {
    const diff = target - Date.now()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    }
}
