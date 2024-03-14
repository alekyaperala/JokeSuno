import React, {useState} from 'react'
import './index.css'

const LoginScreen = ({onLogin}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    // Dummy validation
    if (!username || !password) {
      setError('Please fill in all fields')
      return
    }

    onLogin(username, password)
  }

  return (
    <div className="login-container">
      <div className="container-md">
        <h1 className="text-center">JokeSuno</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="container-border mt-5">
              <p>user: Alekya</p>
              <p>psd: 123</p>
            </div>
          </div>
          <div className="col-md-6">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="error">{error}</p>}
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
