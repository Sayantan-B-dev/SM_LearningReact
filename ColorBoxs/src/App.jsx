import './App.css'
import Box from "./Box"

function App() {

  return (
    <>
      <div className="outerDiv">
        <div className="innerDiv"><Box /><Box /><Box /><Box /><Box /></div>
        <div className="innerDiv"><Box /><Box /><Box /><Box /><Box /></div>
        <div className="innerDiv"><Box /><Box /><Box /><Box /><Box /></div>
        <div className="innerDiv"><Box /><Box /><Box /><Box /><Box /></div>
      </div>
    </>
  )
}

export default App
