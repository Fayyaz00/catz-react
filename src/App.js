import React, { useState } from 'react'


// Event handlers must always be a function or a reference to a function.
const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      {value}
      <button onClick={() => setToValue(1000)}>
        thousand
      </button>
      <button onClick={() => setToValue(0)}>
        reset
      </button>
      <button onClick={() => setToValue(value + 1)}>
        increment
      </button>
      <button onClick={() => setToValue(0)}>reset</button>

    </div>
  )
}

export default App