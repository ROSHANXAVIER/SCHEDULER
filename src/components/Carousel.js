import {Carousel} from 'react-bootstrap';
import React, { useState } from 'react';

function UncontrolledExample() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel fade variant="dark" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
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
          className="d-block w-100"
          src="https://c1.wallpaperflare.com/preview/762/164/882/paper-composition-business-writing.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://c0.wallpaperflare.com/preview/276/1000/17/planner-2019-year-calendar.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;