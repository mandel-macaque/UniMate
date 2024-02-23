import './App.css'
import Navbar from './components/navbar.tsx';
import {Route, Routes} from "react-router-dom"
import {Mentors} from "./pages/Mentors.tsx"

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/"/>
          <Route path="/mentors" element={<Mentors/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
