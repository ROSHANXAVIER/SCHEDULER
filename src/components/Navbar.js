import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    
  <div className="topnav">
    <Link to="/" className="active">HOME</Link>
    <Link to='/create'>Create</Link>
    <Link to='/schedules'>Schedules</Link>
    <Link to='/customemail'>E-Remainder</Link>
  </div>
  )
}
