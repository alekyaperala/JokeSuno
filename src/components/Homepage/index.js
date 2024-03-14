import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const Homepage = ({user}) => {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await fetch(
          'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10',
        )
        const data = await response.json()
        setJokes(data.jokes)
      } catch (error) {
        console.error('Error fetching jokes:', error)
      }
    }

    fetchJokes()
  }, [])

  return (
    <div className="homepage-container">
      <h2>Welcome, {user}!</h2>
      <h3>Jokes:</h3>
      <div className="row">
        {jokes.map(joke => (
          <div key={`${joke.category}-${joke.id}`} className="mb-3">
            <div className="card col-12">
              <div className="card-body col-md-6">
                <h5 className="card-title ">{joke.category}</h5>
                <p className="card-text">{joke.joke}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Homepage
