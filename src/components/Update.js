import React from 'react'
import {useState,useEffect} from 'react'
import {useParams} from "react-router"
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';




function Update() {
    const [upd,setUpd]=useState([]);
    const [title,setTitle]=useState();
    const [body,setBody]=useState();
    const [date, setDate] = useState(Date.now());
    const [result,setResult]=useState("")
    const params=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        console.log(params);
        axios.post('http://localhost:8001/update',params).then(res=>{setUpd((res.data))});
    },[params])
    const handleSubmit=(event)=>{
      event.preventDefault();
      const ids=upd._id;
      const dat={ids,title,body,date};
      axios.post('http://localhost:8001/updateres',dat).then(res=>{setResult(res.data)
setTimeout(()=>{
  setResult("");
  navigate('/schedules');
},1000)});
  };
  return (
    
    <div><CardGroup>
    <Card border="success" className='m-5' bg={'Dark'.toLowerCase()} text={'Dark'.toLowerCase() === 'light' ? 'dark' : 'white'}>
    <Card.Body>
      <Card.Title >Make changes...</Card.Title>
      <p></p>
      <Card.Text>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
    <Form.Label>SUBJECT</Form.Label>
    <Form.Control  type="textarea" defaultValue={upd.title} required onChange={(e)=>{setTitle(e.target.value)}} />
    <p> </p>
    <Form.Label>DESCRIPTION</Form.Label>
    <Form.Control
      as="textarea"
      style={{ height: '100px' }}
      defaultValue={upd.body}
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
        <Button variant="success" type="submit" className='mt-5'>Update</Button>
    </Form>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><h1>{result}</h1></small>
    </Card.Footer>
  </Card>
    </CardGroup></div>
  )
}

export default Update;