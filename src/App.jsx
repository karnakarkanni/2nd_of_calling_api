import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Api from './api_calling/api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Enter the country name</h1>
      <Api/>
    </>
  )
}

export default App
