import { useState,useEffect } from 'react'
import './App.css'
import { list_mentors } from './backend/firebase'

function App() {
  const mentors = list_mentors()

  return (
    <>
      <div className = "w-screen h-screen bg-gradient-to-b from-cyan-500 to-blue-900">
      </div>
    </>
  )
}

export default App
