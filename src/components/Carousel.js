import {Carousel} from 'react-bootstrap';
import React, { useState } from 'react';
import "./Carousel.css";
import { FaGithub,FaLinkedin} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneFill} from "react-icons/bs";
import { ThemeContext } from './contexts/theme';
import { useContext } from 'react';



function UncontrolledExample() {
  const [{ isDark }, toggleTheme] = useContext(ThemeContext);
    const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel fade variant="success" activeIndex={index} onSelect={handleSelect}>
      {!isDark && <Carousel.Item>
  <img
    className="imgs"
    src="https://c1.wallpaperflare.com/preview/221/227/669/blank-business-composition-computer.jpg"
    alt="First slide"
  />
  <Carousel.Caption>
    <h3 className='lcolr'>PERSONAL SCHEDULER</h3>
    <p className='lcolr'>Schedule your life . A personal project build out of MERN stack , bootstrap.</p>
  </Carousel.Caption>
</Carousel.Item>}
{isDark&& <Carousel.Item>
  <img
    className="imgs"
    src="https://images.unsplash.com/photo-1544377137-b01b843568a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
    alt="First slide"
  />
  <Carousel.Caption>
    <h3 className='dcolr'>PERSONAL SCHEDULER</h3>
    <p className='dcolr'>Schedule your life . A personal project build out of MERN stack , bootstrap.</p>
  </Carousel.Caption>
</Carousel.Item>}
      {!isDark && <Carousel.Item>
        <img
          className="imgs"
          src="https://c1.wallpaperflare.com/preview/762/164/882/paper-composition-business-writing.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='lcolr'>Contact Creator</h3>
          <a href='/home'><FaLinkedin className='colr' onClick={()=>{window.open("https://www.linkedin.com/in/roshan-xavier-1ab097214/")}}/></a>
          <a href='/home'><SiGmail className='colr' onClick={()=>{window.open("mailto:rxgody@gmail.com")}}/></a>
          <a href='/home'><FaGithub className='colr' onClick={()=>{window.open("https://github.com/ROSHANXAVIER")}}/></a>
          <a href="tel:9447567495"><BsFillTelephoneFill className='colr'/></a>
        </Carousel.Caption>
      </Carousel.Item>}
      {isDark && <Carousel.Item>
        <img
          className="imgs"
          src="https://images.unsplash.com/photo-1544377208-215a63786183?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1276&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='dcolr'>Contact Creator</h3>
          <a href='/home'><FaLinkedin className='colr' onClick={()=>{window.open("https://www.linkedin.com/in/roshan-xavier-1ab097214/")}}/></a>
          <a href='/home'><SiGmail className='colr' onClick={()=>{window.open("mailto:rxgody@gmail.com")}}/></a>
          <a href='/home'><FaGithub className='colr' onClick={()=>{window.open("https://github.com/ROSHANXAVIER")}}/></a>
          <a href="tel:9447567495"><BsFillTelephoneFill className='colr'/></a>
        </Carousel.Caption>
      </Carousel.Item>}
    </Carousel>
  );
}

export default UncontrolledExample;

