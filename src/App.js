import React from 'react';
import MenuBar from './components/menuBar';
import CarouselBack from './components/carousel';
import CartaoBack from './components/cartao';
import CardImgBack from './components/cardImg'
import { Container, Row, Col } from 'react-bootstrap';
import * as img from './assets/images';

function App() {
  return (
	<>
		<MenuBar />
		<CarouselBack />
		<Container className= "div-class-1">
			<Row>
				<Col>
                	<h1 className= "h1-class-1">Sobre Nós</h1>
				</Col>
			</Row>		
        </Container>
		<Container className= "container-card">
			<Row>
				<Col><CartaoBack className = "cor-card" titulo = {"QUEM"}
								 subTitulo = {"Somos?"}	
								 texto = {"Consultoria Gerencial"}
								 textoBotao = {"Nossa História"}
								 textoDetalhado = {"O Projeto Gespo teve início, no primeiro semstre de 2020, com a união"+
								" de 5 colegas de faculdade que enxergaram um problema gerencial nas empresas mundiais. Dessa forma"+
								" uniram-se 5 diferentes expertises, para, o desenvolvimento de uma ferramenta que solucionasse esses problemas"}
								 icone = {img.work}/>
								 
								 
				</Col>
				<Col ><CartaoBack titulo = {" O QUE"}
								 subTitulo = {"Fazemos?"}	
								 texto = {"Implementação de Sistemas"}
								 textoBotao = {"Nossos Serviços"}
								 textoDetalhado = {"Viemos com a idéia de além de implementar o Gespo, também oferecemos total suporte a plataforma"+
								" com o sistema de HelpDesk integrado, além de, possibilitar ao cliente as customizações necessárias para o seu negócio"+
							" trazendo mais conforto e funcionalidade ao sistema"}
								 icone = {img.support}/>
				</Col>
				<Col ><CartaoBack titulo = {"COMO"}
								 subTitulo = {"Se Associar?"}	
								 texto = {"Leia a Descrição"}
								 textoBotao = {"Associe-se"}
								 textoDetalhado = {"Para se cadastrar é simples, basta selecionar o botão 'Cadastre-se', localizado no menu"+
								" no canto superior direito da Tela, o cadastro é rápido e simples, assim como nossa ferramente, associe-se já!"}
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
	</>
  );
}

export default App;
