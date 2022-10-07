import React from 'react'
import axios from 'axios'
import { useEffect,useState,useCallback } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Schedules.css'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import {Link} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { GoMail } from "react-icons/go";

function Scehdules() {
  const [today,setToday]=useState([]);
  const [up,setUp]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
       axios.get('https://backend-scheduler.vercel.app/scheduleup').then(res=>{setUp((res.data))});
       axios.get('https://backend-scheduler.vercel.app/scheduletoday').then(res=>{setToday((res.data));setLoading(false);});
  })
  
  
  async function handleClick(val){
    const dat={val}
    await axios.post('https://backend-scheduler.vercel.app/scheduledelete',dat).then(res=>{console.log(res.data)});
  }
  
  return (
    <div>
    <Container fluid >
      <Row>
        <Col className='col1' border="light"><div>
          <h1 className='head'>TODAYS</h1>
          <div>
          {
        today.map((item)=>
        <div className='head'>
          <Card border="light">
      <Card.Header className='cardheader'>
      <Accordion defaultActiveKey="0" flush>
      <Accordion.Item >
        <Accordion.Header><Card.Title>{item.title}</Card.Title></Accordion.Header>
        <Accordion.Body>
          {item.body}
          <p> </p>
          <Link to={'/emailit/'+item._id}><button type="button" ><GoMail/></button></Link>
        </Accordion.Body>
        <button  type="button" class="btn btn-outline-dark btn-sm" value={item.title} onClick={()=>{handleClick(item.title)}}>DELETE</button>
        <Link to={'/update/'+item._id}><button type="button" class="btn btn-outline-dark btn-sm ">UPDATE</button></Link>
      </Accordion.Item>  
    </Accordion></Card.Header>
    </Card>

       </div>)
      }
          </div>
          </div></Col>
        <Col className='col1'><div>
          <h1 className='head'>UPCOMING </h1>
          <div>
          {
        up.map((item)=>
        <div className='head'>
          <Card border="light">
      <Card.Header className='cardheader'>
      <Accordion defaultActiveKey="0" flush>
      <Accordion.Item >
      {item.date}
        <Accordion.Header><Card.Title>{item.title}</Card.Title></Accordion.Header>
        <Accordion.Body>
          {item.body}
          <p> </p>
          <Link to={'/emailit/'+item._id}><button type="button" ><GoMail/></button></Link>
        </Accordion.Body>
        <button type="button" class="btn btn-outline-dark btn-sm" value={item.title} onClick={()=>{handleClick(item.title)}}>DELETE</button>
        
        <Link to={'/update/'+item._id}><button type="button" class="btn btn-outline-dark btn-sm ">UPDATE</button></Link>
      </Accordion.Item>  
    </Accordion></Card.Header>
    </Card>

       </div>)
      }
          </div>
          </div></Col>
      </Row>
    </Container>  
    <h1>{loading && <div className="head"><Spinner variant="success" animation="grow"  />
</div>}</h1>
    </div>
  )
}

export default Scehdules