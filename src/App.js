import React from 'react';
import MenuBar from './components/menuBar';
import CarouselBack from './components/carousel';
import CartaoBack from './components/cartao';
import { Container, Row, Col } from 'react-bootstrap';
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
	</>
  );
}

export default App;
