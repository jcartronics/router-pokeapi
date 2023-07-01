import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

  const setActive = ({ isActive }) => isActive ? 'active' : 'inactive';

  return (
    <div className='nav'>
      <NavLink to='/' className={setActive}>Home</NavLink>
      <NavLink to='/pokemon' className={setActive}>Pokemon</NavLink>
    </div>
  )
}
