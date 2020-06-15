import React from 'react';
import * as Style from './style.js';
import * as img from '../../assets/images';

export default function MenuBar(){
	return(
		<Style.Todo>
			<a href = "#home">
				<Style.Img src={img.wood}/>
			</a>
			<Style.PageMenu>
			<a href = "#home">
				<Style.Button>
					Home
				</Style.Button>
			</a>
			<a href = "#nos">
				<Style.Button>
					Sobre Nós
				</Style.Button>
			</a>
			<a href = "#colabs">
				<Style.Button>
					Colaboradores
				</Style.Button>
			</a>
			<a href = "#foot">
				<Style.Button>
					Contatos
				</Style.Button>
			</a>
			</Style.PageMenu>
			<Style.ButtonMenu>
				<Style.Button onClick={() => { window.location.href = "http://localhost:3000/login"}}>
					Login
				</Style.Button>
				<Style.Button>
					Cadastre-se
				</Style.Button>
			</Style.ButtonMenu>
		</Style.Todo>
	);
}