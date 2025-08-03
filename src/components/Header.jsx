import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Button from './Button'

const Header = () => {
  return (
    <header>
      <div className='containerb py-[30px] flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <Link to={'/'}>
            <h1 className='roboto font-normal text-2xl hover:opacity-70 text-[#313131]'>
              Web.Dev
            </h1>
          </Link>
        </div>
        <div className='flex items-center gap-12'>
          <ul className='flex items-center gap-12'>
            <li>
              <NavLink to={"/"} className="flex group flex-col items-stretch gap-1">
                <h2 className='roboto font-normal text-lg text-[#313131]'>
                  Home
                </h2>
                <div className='h-0.5 bg-[#313131] w-0 group-hover:w-full transition-all duration-300 ease-in-out'></div>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} className="flex group flex-col items-stretch gap-1">
                <h2 className='roboto font-normal text-lg text-[#313131]'>
                  About
                </h2>
                <div className='h-0.5 bg-[#313131] w-0 group-hover:w-full transition-all duration-300 ease-in-out'></div>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} className="flex group flex-col items-stretch gap-1">
                <h2 className='roboto font-normal text-lg text-[#313131]'>
                  Testimonials
                </h2>
                <div className='h-0.5 bg-[#313131] w-0 group-hover:w-full transition-all duration-300 ease-in-out'></div>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} className="flex group flex-col items-stretch gap-1">
                <h2 className='roboto font-normal text-lg text-[#313131]'>
                  Contact
                </h2>
                <div className='h-0.5 bg-[#313131] w-0 group-hover:w-full transition-all duration-300 ease-in-out'></div>
              </NavLink>
            </li>
          </ul>
          <div className='flex items-center gap-4'>
            <Button transparent={true} text="Sign in"/>
            <Button transparent={false} text="Sign up"/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header