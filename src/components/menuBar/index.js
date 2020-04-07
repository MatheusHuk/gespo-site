import React from 'react';
import * as Style from './style.js';
import * as img from '../../assets/images';

export default function MenuBar(){
	return(
		<Style.Todo>
			<Style.Img src={img.wood}/>
			<Style.PageMenu>
				<Style.Button>
					Home
				</Style.Button>

				<Style.Button>
					Sobre Nós
				</Style.Button>

				<Style.Button>
					Colaboradores
				</Style.Button>

				<Style.Button>
					Contatos
				</Style.Button>
			</Style.PageMenu>
			<Style.ButtonMenu>
				<Style.Button>
					Login
				</Style.Button>
				<Style.Button>
					Cadastre-se
				</Style.Button>
			</Style.ButtonMenu>
		</Style.Todo>
	);
}