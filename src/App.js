import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Dashboard from './components/dashboard/dashboard'
import Login from './components/login/login'
import Preferences from './components/preferences/preferences'
import useToken from '../useToken'
import Todolist from './components/todolist/todolist'


function App() {
  const { token, setToken } = useToken()

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className='wrapper'>
      <h1>App</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/preferences' element={<Preferences />}/>
          <Route path='/todolist' element={<Todolist />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;