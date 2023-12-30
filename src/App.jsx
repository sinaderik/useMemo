import React, { useMemo } from 'react'
import { useState } from 'react'
import ExpensiveComponent from './ExpensiveComponent/ExpensiveComponent'

export default function App() {
  const [data, setData] = useState([1, 2, 3, 4, 5, 8, 9, 10, 11, 12])
  const [isDark, setIsDark] = useState(false)

  return (
    <div>

      <button onClick={() => {
        const randomNumber = Math.floor(Math.random() * 30)
        setData(previous => [...previous, randomNumber])
      }}>
        Update Data
      </button>

      <button onClick={() => setIsDark(previous => !previous)}>Change theme</button>

      <ExpensiveComponent data={data} darkMode={isDark} />
    </div>
  )
}
