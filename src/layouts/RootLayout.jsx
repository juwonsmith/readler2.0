import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

export default function RootLayout() {
  return (
    <div className='w-full h-full bg-[#121212] text-white '>
      <NavBar />

      
      <main>
          <Outlet />
      </main>
    </div>
  )
}
