import React from 'react';
import { Carousel } from 'react-bootstrap';
import * as Style from './style.js';
import * as img from '../../assets/images';
import './index.css';

export default function CarouselBack(){
	return(
		<>
			<Carousel className="carousel" interval={5000}>
			  <Carousel.Item>
				<img
				  className="d-block w-100"
				  src={img.s1}
				  alt="First slide"
				/>
				<Carousel.Caption className="carousel-caption">
				  <h3>Primeiro slide label	</h3>
				  <p>Esse é um comentário aleatório, só para ter algo.</p>
				</Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
				<img
				  className="d-block w-100"
				  src={img.s2}
				  alt="Third slide"
				/>

				<Carousel.Caption>
				  <h3>Segundo Slide Label</h3>
				  <p>Esse é o segundp comentário aleatório, só para ter algo..</p>
				</Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
				<img
				  className="d-block w-100"
				  src={img.s3}
				  alt="Third slide"
				/>

				<Carousel.Caption>
				  <h3>Terceiro slide label</h3>
				  <p>Esse é o terceiro comentário aleatório, só para ter algo..</p>
				</Carousel.Caption>
			  </Carousel.Item>
			</Carousel>
		</>
	);
}