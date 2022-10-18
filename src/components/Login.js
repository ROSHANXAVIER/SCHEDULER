import React from 'react'
import './Login.css'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';

function Login(props) {

const [email,setEmail]=useState("");
const [password,setPass]=useState("");

props.funcNav(false);
async function handleClick(e){
    e.preventDefault();
    const dat={email,password};
    await axios.post('https://backend-scheduler.vercel.app/login',dat).then(res=>{
  if(res.status===200){
    toast("Login successful");
    localStorage.setItem('token',res.data.token);
    console.log(localStorage.getItem('token'));
    setTimeout(()=>{
      window.location.href='/home';
    },2000)
  }else{
    toast("Invalid credentials")
  }})
}
  return (
    <div>
      <h1 className='head'>Scheduler</h1>
    <div class="login-box">
    <h2>Login</h2>
    <form onSubmit={handleClick}>
      <div class="user-box">
        <input type="text" required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <label>E-mail</label>
      </div>
      <div class="user-box">
        <input type="password" value={password} required onChange={(e)=>{setPass(e.target.value)}}/>
        <label>Password</label>
      </div>
      <button className='n'>
        Submit
      </button>
    </form>
    <p></p>
    <div className='b'><p className='w'>Haven't Registerd yet? <Link to='/register'><Button size="sm" variant="outline-light">Register</Button></Link></p></div>
  </div>
  <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="success"
/>
<ToastContainer /></div>
  )
}

export default Login