import React from 'react'
import { Routes, Route, NavLink, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import Layout from './pages/Layout'



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
  )
}

export default App