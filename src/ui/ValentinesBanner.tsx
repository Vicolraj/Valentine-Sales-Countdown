import "./styles/ValentinesBanner.css"
import AnimatedLove from "../components/AnimatedLove"
import Countdown from "../components/Countdown"
import Summary from "../components/Summary"

export default function ValentinesBanner() {
    return (
        <div className="ValentinesBanner">
            <AnimatedLove />
            <h2>VALENTINE<br />SALE</h2>
            <Countdown />
            <Summary />
            <AnimatedLove />
        </div>
    )
}