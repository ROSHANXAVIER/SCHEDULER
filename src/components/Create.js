import React from 'react'
import  { useState,useEffect } from "react";
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Create() {
    const [title,setTitle]=useState("");
    const [body,setBody]=useState("");
    const [date, setDate] = useState(new Date());
    const handleSubmit=()=>{
        const dat={title,body,date};
        axios.post('https://www.digitalocean.com/community/tutorials/react-axios-react',dat).then(res=>{console.log(res)});
    };
  return (
    <div>
        <h1>CREATE YOUR SCHEDULE</h1>
        <form onSubmit={handleSubmit}>
            <label>ENTER TITLE:</label>
            <input type="text" value={title} required onChange={(e)=>{setTitle(e.target.value)}}></input>
            <label>ENTER BODY:</label>
            <textarea required value={body} onChange={(e)=>{setBody(e.target.value)}}></textarea>
            <label>DUE:</label>
            <DatePicker selected={date} onChange={date => setDate(date)} />
            <button>CREATE !</button>
        </form>
    </div>
  )
}

export default Create