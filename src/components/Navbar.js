import './Navbar.css'

import { Link } from 'react-router-dom'

import React from 'react'
import Searchbar from './Searchbar'

export default function Navbar() {
  return (
    <div className='navbar'>
        <nav>
            <Link to="/" className='brand'>
                <h1>Craft Beer Database</h1>
            </Link>
            <Searchbar />
            <Link to="/create">Add New</Link>
        </nav>
    </div>
  )
}
