import { useState } from 'react'
import './App.css'
import { Route, Router, Routes, BrowserRouter } from 'react-router-dom'
import Main from './components/MainPage/Main'
import Catalog from './components/MainPage/Catalog/Catalog'
import './index.css'
import SmartphonesPage from './components/Smartphones Page/SmartphonesPage'
import LaptopPage from './components/LaptopPage/LaptopPage'
import ViewedPage from './components/ViewedPage/ViewedPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Main />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/smartphones' element = {<SmartphonesPage/>}/>
        <Route path='/laptop' element = {<LaptopPage/>}/>
        <Route path='/viewed' element = {<ViewedPage/>}/>
      </Routes>
  </BrowserRouter>
  )
}

export default App
