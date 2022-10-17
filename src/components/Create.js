import React from 'react'
import  { useState,useEffect,useRef} from "react";
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import jwt from 'jwt-decode';
function Create() {
  useEffect(()=>{
    const token=localStorage.getItem('token')
    if(token){
      const user=jwt(token);
      if(!user){
        localStorage.removeItem('token')
        window.location.href='/'
      }
    }
    focus();
  },[])
    const [title,setTitle]=useState("");
    const [body,setBody]=useState("");
    const [date, setDate] = useState(Date.now());
    const [result,setResult]=useState("")
    const [loading,setloading]=useState(false);
    async function handleSubmit(event){
        event.preventDefault();
        setloading(true);
        const dat={title,body,date};
        const token=localStorage.getItem('token')
        await axios.post('http://localhost:8001/schedulerin',dat,{headers:{'Authorization':`Bearer ${token}`,}}).then(res=>{setResult(res.data)
      setTitle("");
    setBody("");
    setDate();
    setloading(false);
  setTimeout(()=>{
    setResult("");
  },3000)});
    };
    const inputRef=useRef();

    function focus(){
      inputRef.current.focus()
    }
  return (
    <div>
        <CardGroup>
        <Card border="success" className='m-5' bg={'Dark'.toLowerCase()} text={'Dark'.toLowerCase() === 'light' ? 'dark' : 'white'}>
        <Card.Body>
          <Card.Title >Create a Schedule</Card.Title>
          <p></p>
          <Card.Text>
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
        <Form.Label>SUBJECT</Form.Label>
        <Form.Control ref={inputRef}  type="text" value={title} required onChange={(e)=>{setTitle(e.target.value)}} placeholder="enter sub"/>
        <p> </p>
        <Form.Label>DESCRIPTION</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="enter body"
          style={{ height: '100px' }}
          value={body}
          required
          onChange={(e)=>{setBody(e.target.value)}}
        />
        <p></p>
        <Form.Label>DUE</Form.Label>
        <DatePicker selected={date} onChange={date => setDate(date)} />
        <p></p>
        <Form.Text className="text-muted">
          We'll never share your schedules with anyone else
        </Form.Text>
      </Form.Group>
      <h1>{(!loading) && <div><Button variant="success" type="submit">
        Create
      </Button>
</div>}</h1>
      <h1>{loading && <div><Spinner variant="success" animation="grow"  />
</div>}</h1>
        </Form>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><h1>{result}</h1></small>
        </Card.Footer>
      </Card>
        </CardGroup>
    </div>
  )
}

export default Create