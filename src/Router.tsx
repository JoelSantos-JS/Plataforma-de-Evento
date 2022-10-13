import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Event from './pages/Event'
import Subscrive from './pages/Subscrive';

function Router() {
  return (
    <Routes>
        <Route path='/' element={ <Subscrive/>}/>
        <Route path='/event' element={<Event/>}/>
        <Route path='/event/lesson/:slug' element={<Event/>}/>
    </Routes>
  )
}

export default Router