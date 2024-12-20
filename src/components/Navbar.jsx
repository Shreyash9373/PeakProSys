import React, { useState } from 'react'
import logo from'../assets/images/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import menu_icon from '../assets/images/menu_icon.svg'
import cross_icon from '../assets/images/cross_icon.png'


const Navbar = () => {

  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD] '>
      <div className='flex items-center'>
      <img onClick={() => navigate('/')} className='w-[5rem] h-[4rem] cursor-pointer' src={logo} alt="" />
      <p className='m-2 font-medium text-lg border-b-gray-400 sm:leading-[1.25rem] '>PEAKPROSYS SOLUTIONS </p>
      </div>
      <ul className='md:flex items-start gap-5 font-medium hidden'>
        <NavLink to='/' >
          <li className='py-1'>Home</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about' >
          <li className='py-1'>About</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/services' >
          <li className='py-1'>Services</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/career' >
          <li className='py-1'>Career</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/events' >
          <li className='py-1'>Events</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/workshop' >
          <li className='py-1'>Workshop</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact' >
          <li className='py-1'>Contact</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={menu_icon} alt="" />

        {/* ---- Mobile Menu ---- */}
        <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img src={logo} className='w-[5rem] h-[4rem] cursor-pointer' alt="" />
            <img onClick={() => setShowMenu(false)} src={cross_icon} className='w-7' alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded full inline-block'>Home</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about' ><p className='px-4 py-2 rounded full inline-block'>About</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/services' ><p className='px-4 py-2 rounded full inline-block'>Services</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/career' ><p className='px-4 py-2 rounded full inline-block'>Career</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/events' ><p className='px-4 py-2 rounded full inline-block'>Events</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/workshop' ><p className='px-4 py-2 rounded full inline-block'>Workshops</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact' ><p className='px-4 py-2 rounded full inline-block'>Contact</p></NavLink>
          </ul>
        </div>
      </div>
    
  )
}

export default Navbar