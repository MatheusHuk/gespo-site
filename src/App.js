import React, { useEffect } from 'react';
import MenuBar from './components/menuBar';
import CarouselBack from './components/carousel';
import CartaoBack from './components/cartao';
import CardImgBack from './components/cardImg'
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './components/footer';
import * as img from './assets/images';

function App() {

	useEffect(() => {
		console.log("ENV: ",process.env)
	}, [])
	
  return (
	<>
		<MenuBar />
		<CarouselBack />
		<Container className= "div-class-1">
			<Row>
				<Col>
                	<h1 className= "h1-class-1" id = "nos">Sobre Nós</h1>
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
                	<h1 className= "h1-class-1" id = "colabs">Nossos Colaboradores</h1>
				</Col>
			</Row>		
        </Container>
		<Container className = "container-card-img">
			<Row>
				<Col>
					<CardImgBack nome = {"Marco Rover"}
								 texto = {"Project Manager e diretor de Pesquisa e Inovação contribuindo a mais de 2 anos ao time. "}
								 img = {img.huk}/>
				</Col>
				<Col>
					<CardImgBack nome = {"Victor Massao"}
								 texto = {"Desenvolvedor Back-end Senior do projeto, contribuindo a mais de 2 anos para o grupo. "}
								 img = {img.huk}/>
								 
				</Col>
				<Col>
					<CardImgBack nome = {"Lucas Abreu"}
								 texto = {"DBA da equipe, contribuindo com a administração de nossos bancos de dados."}
								 img = {img.huk}/>
								 
				</Col>
			</Row>
		</Container>
		<Container className = "container-card-img">
			<Row>
				<Col>
				<CardImgBack nome = {"Mateus Huk"}
								 texto = {"CEO da Gespo, contribui para o mercado de tecnologia a mais de 8 anos."}
								 img = {img.huk}/>
				</Col>
				<Col>
					<CardImgBack nome = {"Petter Mene"}
								 texto = {"DBA Senior, liderando a infraesturura e modelagem da base de dados utilizada pela ferramenta."}
								 img = {img.huk}/>
								 
				</Col>
				<Col>
				<CardImgBack nome = {"Bruno Alemida"}
								 texto = {"DEVOPS da Empres, contribuindo para a infraestrutura e arquitetura da nossa empresa."}
								 img = {img.huk}/>
					
								 
				</Col>
			</Row>
		</Container>
		<Footer />	
	</>
  );
}

export default App;
