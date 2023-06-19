// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import {useState} from 'react'

// provided a default value for initialState
// make sure it isn't undefined at anytime
function Greeting({initialName = ''}) {
  // 💣 delete this variable declaration and replace it with a React.useState call
  const [name, setName] = useState(initialName)

  function handleChange(event) {
    // 🐨 update the name here based on event.target.value
    // reassigning variable will not trigger a rerender of our component:
    // name = event.target.value
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" value={name} />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Kody" />
}

export default App
