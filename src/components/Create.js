import React from 'react'
import  { useState} from "react";
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Create() {
    const [title,setTitle]=useState("");
    const [body,setBody]=useState("");
    const [date, setDate] = useState();
    const [result,setResult]=useState("")
    const handleSubmit=(event)=>{
        event.preventDefault();
        const dat={title,body,date};
        axios.post('http://localhost:8001/schedulerin',dat).then(res=>{setResult(res.data)
      setTitle("");
    setBody("");
    setDate();
  setTimeout(()=>{
    setResult("");
  },3000)});
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
        <h1>{result}</h1>
    </div>
  )
}

export default Create