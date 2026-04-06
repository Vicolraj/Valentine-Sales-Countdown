import './App.css'
import ValentinesBanner from './ui/ValentinesBanner'
import RotateOverlay from './components/RotateOverlay'

function App() {
  return (
    <>
      <RotateOverlay />
      <section className='mainPage'>
        <ValentinesBanner />
      </section>
    </>
  )
}

export default App
