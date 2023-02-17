import React from 'react';
import axios from 'axios';
import { useEffect,useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Schedules.css'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import {Link} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { GoMail } from "react-icons/go";
import jwt from 'jwt-decode';


function Scehdules() {
  const [today,setToday]=useState([]);
  const [up,setUp]=useState([]);
  const [loading,setLoading]=useState(true);
  const [del,setDel]=useState(false);
  const [style,setStyle]=useState("button")

  useEffect(()=>{
    const token=localStorage.getItem('token')
    console.log("hello")
    if(token){
      const user=jwt(token);
      if(!user){
        localStorage.removeItem('token')
        window.location.href='/'
      }
    }
       axios.get('https://backend-scheduler.vercel.app/scheduleup',{headers:{'Authorization':`Bearer ${token}`,}}).then(res=>{setUp((res.data));
      if(res.status===201){
        localStorage.removeItem('token')
        window.location.href='/'
      }});
       axios.get('https://backend-scheduler.vercel.app/scheduletoday',{headers:{'Authorization':`Bearer ${token}`,}}).then(res=>{setToday((res.data));setLoading(false);});
  });
  const h=()=>{
    setStyle("button");
    setTimeout(()=>{
      setStyle("buttons");
    },2000)
    setTimeout(()=>{
      setDel(false);
    },5000)
  }
  
  async function handleClick(val){
    const dat={val}
    setDel(true)
    await h();
    await axios.post('https://backend-scheduler.vercel.app/scheduledelete',dat,).then(res=>{setDel(false)});
    setDel(false);
  }
  
  return (
    <div>
    <Container fluid >
      {!del && <Row>
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
        <button type="button"  value={item.title} class="btn btn-outline-dark btn-sm " onClick={()=>{handleClick(item.title)}}>DELETE</button>
        
        <Link to={'/update/'+item._id}><button type="button" class="btn btn-outline-dark btn-sm ">UPDATE</button></Link>
      </Accordion.Item>  
    </Accordion></Card.Header>
    </Card>

       </div>)
      }
          </div>
          </div></Col>
      </Row>}
    </Container>  
    <h1>{loading && <div className="head"><Spinner variant="success" animation="grow"  />
</div>}</h1>
<h1>{del &&<div className='centrer'> <button onClick={h} class={style}>
    <div class="trash">
        <div class="top">
            <div class="paper"></div>
        </div>
        <div class="box"></div>
        <div class="check">
            <svg viewBox="0 0 8 6">
                <polyline points="1 3.4 2.71428571 5 7 1"></polyline>
            </svg>
        </div>
    </div>
    <span>Deleting..</span>
</button></div>}</h1>
    </div>
  )
}

export default Scehdules