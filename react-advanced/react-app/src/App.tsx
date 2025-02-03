import React from 'react'
import { Routes, Route } from 'react-router'
import MainMenu from './components/MainMenu'
import HomePage from './views/HomePage'
import Forms from './views/Forms'

function App() {
  return (
    <React.Fragment>
      <nav>
        <MainMenu />
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/forms' element={<Forms />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
