import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import NotFound from '../components/partials/NotFound'

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default AppRoutes