// App.js
import React, {useState} from 'react'
import './App.css'
import LoginScreen from './components/LoginScreen'
import Homepage from './components/Homepage'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState('')

  const handleLogin = (username, password) => {
    // Dummy authentication
    if (username === 'Alekya' && password === '123') {
      setLoggedIn(true)
      setUser(username)
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div className="App">
      {!loggedIn ? (
        <LoginScreen onLogin={handleLogin} />
      ) : (
        <Homepage user={user} />
      )}
    </div>
  )
}

export default App
