import './App.css'
import ScoreKeeper from "./ScoreKeeper"
function App() {
  return (
    <>
    <h1>Score keeper</h1>
      <ScoreKeeper numPlayers={5} target={3}/>
    </>
  )
}

export default App
