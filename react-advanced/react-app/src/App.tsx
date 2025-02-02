import React from 'react'
import { Routes, Route, Link } from 'react-router'
import HomePage from './views/HomePage'

function App() {
  return (
    <React.Fragment>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
