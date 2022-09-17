import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

function Scehdules() {
  useEffect(()=>{
    axios.get('http://localhost:8001/scheduleup').then(res=>{console.log(res.data)});
    axios.get('http://localhost:8001/scheduletoday').then(res=>{console.log(res.data)});
  },[])
  return (
    <div>Scehdules</div>
  )
}

export default Scehdules