import React from 'react'
import axios from 'axios'
import {useState} from 'react';
import validator from "validator";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';

function Register(props) {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPass]=useState("");
  const navigate=useNavigate();
  props.funcNav(false);
async function handleClick(e){
  e.preventDefault()
  const dat={name,email,password}
  if(validator.isEmail(email)){
    await axios.post('https://backend-scheduler.vercel.app/register',dat).then(async res=>{
  console.log(res)
    if(res.status===201){
      toast("Welcome");
      setTimeout(()=>{
        navigate('/');
      },2000)
    }
    else if(res.status===200){
      toast(res.data);
    }
    else if(res.status===400){
      toast('Invalid user data');
    }
  })}
  }



  return (
    <div>
      <h1 className='head'>SCHEDULER</h1>
      <div class="login-box">
    <h2>Register</h2>
    <form onSubmit={handleClick}>
    <div class="user-box">
        <input type="text"  required value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <label>Name</label>
      </div>
      <div class="user-box">
        <input type="text"  required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <label>E-mail</label>
      </div>
      <div class="user-box">
        <input type="password" required value={password} onChange={(e)=>{setPass(e.target.value)}}/>
        <label>Password</label>
      </div>
      <button className='n' >
        Submit
      </button>
    </form> 
  </div>
  <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="success"
/>
<ToastContainer />
    </div>
  )
}

export default Register