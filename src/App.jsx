import { useState } from 'react'
import './App.css'
import { Route, Router, Routes, BrowserRouter } from 'react-router-dom'
import Main from './components/Main'
import Catalog from './components/Catalog/Catalog'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Main />} />
        <Route path='/catalog' element={<Catalog />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App
