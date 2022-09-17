import React from 'react'
import  { useState,useEffect,useRef} from "react";
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Create() {
  useEffect(()=>{
    focus();
  },[])
    const [title,setTitle]=useState("");
    const [body,setBody]=useState("");
    const [date, setDate] = useState(Date.now());
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
            <Button variant="success" type="submit" className='mt-5'>Create</Button>
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