import React, { useState } from 'react'

export default function Count() {
    const [count, setCount] = useState(1);
  return (
    <>
    <p>{count}</p>
          <button onClick={() => setCount((p) => p + 1)}>ADD</button>
          <button onClick={() => setCount((p) => p - 1)}>MINUS</button>
          </>
  )
}
