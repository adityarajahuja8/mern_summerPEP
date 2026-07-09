import { useState } from 'react'
import Index from './components/index.jsx'
// import child from "./components/Child.jsx"
import Parent from "./components/Parent.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Index /> */}
      {/* <child/> */}
      <Parent/>
    </>
  )
}

export default App
