import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { list_mentors } from './backend/firebase'

function App() {
  const [count, setCount] = useState(0)
  const mentors = list_mentors()

  return (
    <>
      <div className = "w-[1440px] h-[922px] bg-gradient-to-b from-cyan-500 to-blue-900">
      </div>
    </>
  )
}

export default App
