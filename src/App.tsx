import './App.css'
import Card from './card'

function App() {
  const userProfile = {
    name: 'John Doe',
    avatar: 'https://media.istockphoto.com/id/464988959/photo/mallard-duck-on-white-background.jpg?s=612x612&w=0&k=20&c=S1jcDuyXuoCVUaTobTrZ5f6SlscukkyheqKDHAeflW8=', // Sample avatar image URL
  };
  const attributes = ['BU', 'Class of 2026', 'Computer Science', 'Vietnam', 'Topics: Math']; // Sample attributes

  return (
    <>
      <div className = "w-screen h-screen bg-gradient-to-b from-cyan-500 to-blue-900">
      </div>
      <div>
        <Card userProfile={userProfile} attributes={attributes} />
        <button type="button">Click Me!</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
