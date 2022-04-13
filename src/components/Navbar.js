import './Navbar.css'

import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

import React from 'react'
import Searchbar from './Searchbar'

export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <div className='navbar'>
        <nav>
            <Link to="/" className='brand'>
                <img src='https://uploads.turbologo.com/uploads/design/hq_preview_image/5037623/draw_svg20210613-16856-1t8mf7s.svg.png' alt='logo' className='logo'/>
                <h2>Beer<span>House</span></h2>
            </Link>
            <Searchbar />
            {!user && (
              <>
                <Link to="/login" className="btn">Login</Link>
                <Link to="/signup" className='btn'>Sign up</Link>
              </>
            )}

            {user && (
              <>
                <button className='btn' onClick={logout}>Logout</button>
                <Link to="/create">Add New</Link>
              </>
            )}
        </nav>
    </div>
  )
}
