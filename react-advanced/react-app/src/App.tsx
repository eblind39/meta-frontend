import React from 'react'
import { Routes, Route, Link } from 'react-router'
import MainMenu from './components/MainMenu'
import HomePage from './views/HomePage'

function App() {
  return (
    <React.Fragment>
      <nav>
        <MainMenu />
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
