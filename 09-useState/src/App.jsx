import React, { useState } from 'react'

const App = () => {

  const [first, setfirst] = useState(0)

  function increase() {
    setfirst(first + 1)
  }

  function decrease() {
    setfirst(first - 1)
  }

  function jumpBy5() {
    setfirst(first + 5)
  }
  return (
    <div>
      <h1>{first}</h1>
      <button className="btn-aurora" onClick={increase}>increse</button>
      <button className="btn-aurora" onClick={decrease}>decrease</button>
      <button className="btn-aurora" onClick={jumpBy5}>jump by 5</button>
    </div>
  )
}

export default App