import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-black text-white flex justify-between px-4 py-4'>

      <h1 className='text-2xl'>
        <NavLink to='/' >Tailwind</NavLink>
      </h1>

      <nav className='space-x-4'>

        <NavLink to='/addForm'>AddForm</NavLink>

        <NavLink to='/about' className={({ isActive }) => {
          return isActive ? 'text-red-600' : 'text-white';
        }}>About</NavLink>
      </nav>

    </div>
  )
}

export default Header