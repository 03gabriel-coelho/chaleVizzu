import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import CarouselOne from '../../images/CarouselOne.png';
import CarouselTwo from '../../images/CarouselTwo.png';
import CarouselTrhee from '../../images/CarouselTrhee.png';

export default function Carousell() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 imgCarousel"
          src={CarouselOne}
          alt="First slide"
          height="590px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgCarousel"
          src={CarouselTwo}
          alt="Second slide"
          height="590px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgCarousel"
          src={CarouselTrhee}
          alt="Third slide"
          height="590px"
        />
      </Carousel.Item>
    </Carousel>
  );
}
