import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { PoweroffOutlined } from '@ant-design/icons';
import { ThemeContext } from './contexts/theme';
import { useContext } from 'react';



export default function Navbar() {
  const [{ isDark }, toggleTheme] = useContext(ThemeContext);
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
   
<input type="checkbox" name="checkbox" class="switch" onChange={toggleTheme}/>

    <Button className='hib' size="lg" variant="outline-light" onClick={handleClick}>{<PoweroffOutlined />}</Button>
  </div>
  )
}
