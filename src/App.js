const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

const App = () => {

  console.log('Hello from component')

  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <div>
        <h1>Greetings</h1>
        <Hello />
      </div>
    </div>
  )
}


export default App