import {Carousel} from 'react-bootstrap';
import React, { useState } from 'react';
import "./Carousel.css";
import { FaGithub,FaLinkedin} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
function UncontrolledExample() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel fade variant="dark" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="imgs"
          src="https://c1.wallpaperflare.com/preview/221/227/669/blank-business-composition-computer.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>PERSONAL SCHEDULER</h3>
          <p>Schedule your life . A personal project build out of mernstack , bootstrap.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imgs"
          src="https://c1.wallpaperflare.com/preview/762/164/882/paper-composition-business-writing.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Contact Creator</h3>
          <a href='/'><FaLinkedin className='colr' onClick={()=>{window.open("https://www.linkedin.com/in/roshan-xavier-1ab097214/")}}/></a>
          <a href='/'><SiGmail className='colr' onClick={()=>{window.open("mailto:rxgody@gmail.com")}}/></a>
          <a href='/'><FaGithub className='colr' onClick={()=>{window.open("https://github.com/ROSHANXAVIER")}}/></a>
          <a href="tel:9447567495"><BsFillTelephoneFill className='colr'/></a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;