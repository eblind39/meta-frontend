import React from 'react'
import { Routes, Route } from 'react-router'
import MainMenu from './components/app/MainMenu'
import HomePage from './views/HomePage'
import Forms from './views/Forms'
import SignUp from './views/SignUp'
import Theme from './views/Theme'

function App() {
  return (
    <React.Fragment>
      <nav>
        <MainMenu />
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/forms' element={<Forms />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/theme' element={<Theme />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
