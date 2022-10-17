import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
export default function Navbar() {
 function handleClick(e){
    e.preventDefault();
    localStorage.removeItem('token');
    window.location.href='/'
  }
  return (
    
  <div className="topnav">
    <Link to="/home" className="active">HOME</Link>
    <Link to='/create'>Create</Link>
    <Link to='/schedules'>Events</Link>
    <Link to='/customemail'>E-Remind</Link>
    <Button className='hib' size="lg" variant="outline-danger" onClick={handleClick}>Logout</Button>
  </div>
  )
}
