// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  // const inputRef = React.useRef(null)
  // const [error, setError] = React.useState(null)
  const [username, setUsername] = React.useState('')
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0]
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input by specifying an `id` on
  // the input and a matching value as an `htmlFor` prop on the label.

  const handleSubmit = event => {
    console.dir(event.target)
    event.preventDefault()
    // onSubmitUsername(event.target.usernameInput.value)
    // onSubmitUsername(event.target.elements.username.value)
    // onSubmitUsername(event.target.elements.usernameInput.value)
    // onSubmitUsername(inputRef.current.value)
    onSubmitUsername(username)
  }

  const handleChange = event => {
    const {value} = event.target
    // const isValid = value === value.toLowerCase()
    // setError(isValid ? null : 'Username must be lower case')
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          name="username"
          id="usernameInput"
          type="text"
          ref={inputRef}
          onChange={handleChange}
        />
      </div>
      {error && <div>{error}</div>}
      <button type="submit" disabled={Boolean(error)}>
        Submit
      </button> */}
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          name="username"
          id="usernameInput"
          type="text"
          value={username}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
