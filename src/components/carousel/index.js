import React from 'react';
import { Carousel } from 'react-bootstrap';
import * as img from '../../assets/images';
import './index.css';

export default function CarouselBack(){
	return(
		<>
			<Carousel className="carousel" interval={5000} id = "home">
			  <Carousel.Item>
				<img
				  className="d-block w-100"
				  src={img.s1}
				  alt="First slide"
				/>
				<Carousel.Caption className="carousel-caption">
				</Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
				<img
				  className="d-block w-100"
				  src={img.s2}
				  alt="Second slide"
				/>
			  </Carousel.Item>
			</Carousel>
		</>
	);
}