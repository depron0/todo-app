import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Dashboard from './components/dashboard/dashboard'
import Login from './components/login/login'
import Preferences from './components/preferences/preferences'
import Todolist from './components/todolist/todolist'


function App() {
  const [token, setToken] = useState()

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className='wrapper'>
      <h1>App</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/preferences' element={<Preferences />}/>
          <Route path='/todolist' element={<Todolist />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;