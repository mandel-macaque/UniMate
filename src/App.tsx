<<<<<<< HEAD
 import './App.css'

function App() {
=======
import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { list_mentors } from './backend/firebase'

function App() {
  const [count, setCount] = useState(0)
  const mentors = list_mentors()

>>>>>>> c98de0256a858bdac59ea72965b71fca215426b8
  return (
    <>
      <div className = "w-[1440px] h-[922px] bg-gradient-to-b from-cyan-500 to-blue-900">
        <h1 className="w-[558px] h-[110px] text-white text-[46px] font-normal font-['Georgia'] leading-loose tracking-wide">Meet your mentors</h1>
      </div>
    </>
  )
}

export default App
