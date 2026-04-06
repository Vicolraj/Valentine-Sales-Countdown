import loverDown from "../assets/loverlayerdown.webp"
import loverUp from "../assets/loverlayer1.webp"
import "./styles/AnimatedLove.css"

export default function AnimatedLove() {
    return (
        <div className="AnimatedLove">
            <img className="loverDown" src={loverDown} alt="" />
            <img className="loverUp" src={loverUp} alt="" />
        </div>
    )
}