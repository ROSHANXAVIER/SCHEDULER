import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner';
import './Cemail.css';



function Cemail() {
    const variant="success";
  
    const [toemail,setToemail]=useState();
    
    const [sub,setSub]=useState();
    const [des,setDes]=useState();
    const [result,setResult]=useState();
    const [loading,setloading]=useState(false);
    async function handleSubmit(event){
        event.preventDefault();
        setloading(true);
        const dat={toemail,sub,des};
        await axios.post('https://backend-scheduler.vercel.app/cemail',dat).then(res=>{setResult(res.data);
  setTimeout(()=>{
    setResult("");
    setloading(false);
    window.location.reload(false);
  },3000)
});
    };
    

  return (
    <div>
       <Container>
      <Row>
        <Col className='bg'>   .</Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col><Card
        border='dark'
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>EMAIL</Card.Header>
          <Card.Body>
          <Form onSubmit={handleSubmit}>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>To</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>{setToemail(e.target.value)}}/>
        
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="head"  onChange={(e)=>{setSub(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" placeholder="description"  onChange={(e)=>{setDes(e.target.value)}}/>
      </Form.Group>
      
      <h1>{(!loading) && <div><Button variant="dark" type="submit">
        Send
      </Button>
</div>}</h1>
      <h1>{loading && <div><Spinner variant="dark" animation="grow"  />
</div>}</h1>

    </Form>
          </Card.Body>
          <Card.Footer>
          <small className="text-muted"><h1>{result}</h1></small>
        </Card.Footer>
        </Card></Col>
        <Col></Col>
      </Row>
    </Container> 
    </div>
  )
}

export default Cemail