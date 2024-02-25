import { useState } from 'react'

import './App.css'

function App() {

 const [counter,setCounter] = useState(0)


const addValue = () => {
  console.log("clicked",counter)
  setCounter(counter+1)
}
const removeValue = () => {
  console.log("clicked",counter)
  setCounter(counter-1)
}
  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value :{counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br></br>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
