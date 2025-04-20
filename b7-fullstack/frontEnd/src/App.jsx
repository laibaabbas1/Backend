import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [jokes, setJokes] = useState([])


  useEffect(() => {
    axios.get("/api/jokes")
      .then((response) => {
        setJokes(response.data);

      })
      .catch((error) => { console.log("its errorr" + error) })
  })


  return (
    <>

      <h1>Welcome to Backend integration </h1>
      <p>Jokes: {jokes.length} </p>
      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App