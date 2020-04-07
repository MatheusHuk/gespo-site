import React from 'react';
import MenuBar from './components/menuBar';
import CarouselBack from './components/carousel';
import CartaoBack from './components/cartao';
import CardImgBack from './components/cardImg'
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './components/footer';
import * as img from './assets/images';

function App() {
  return (
	<>
		<MenuBar />
		<CarouselBack />
		<Container className= "container-card">
			<Row>
				<Col><CartaoBack className = "cor-card" titulo = {"QUEM"}
								 subTitulo = {"Somos?"}	
								 texto = {"Descrição Básica"}
								 textoBotao = {"Nossa História"}
								 textoDetalhado = {"Descrição detalhada"}
								 icone = {img.work}/>
								 
								 
				</Col>
				<Col ><CartaoBack titulo = {" O QUE"}
								 subTitulo = {"Fazemos?"}	
								 texto = {"Descrição Básica"}
								 textoBotao = {"Nossos Serviços"}
								 textoDetalhado = {"Descrição detalhada"}
								 icone = {img.support}/>
				</Col>
				<Col ><CartaoBack titulo = {"COMO"}
								 subTitulo = {"Se Associar?"}	
								 texto = {"Descrição Básica"}
								 textoBotao = {"Associe-se"}
								 textoDetalhado = {"Descrição detalhada"}
								 icone = {img.member}/>
				</Col>
			</Row>
		</Container>
		<Container className= "div-class-1">
			<Row>
				<Col>
                	<h1 className= "h1-class-1">Nossos Colaboradores</h1>
				</Col>
			</Row>		
        </Container>
		<Container className = "container-card-img">
			<Row>
				<Col>
					<CardImgBack nome = {"Carla Perez"}
								 texto = {"CEO da Gespo, contribui para o mercado de tecnologia a mais de 8 anos."}
								 img = {img.mulher}/>
				</Col>
				<Col>
					<CardImgBack nome = {"Evandro"}
								 texto = {"CEO da Gespo, contribui para o mercado de tecnologia a mais de 8 anos."}
								 img = {img.pessoa2}/>
								 
				</Col>
				<Col>
					<CardImgBack nome = {"Sam Smith"}
								 texto = {"CEO da Gespo, contribui para o mercado de tecnologia a mais de 8 anos."}
								 img = {img.pessoa3}/>
								 
				</Col>
			</Row>
		</Container>
		<Footer />	
	</>
  );
}

export default App;
