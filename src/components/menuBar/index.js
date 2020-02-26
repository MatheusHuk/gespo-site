import React from 'react';
import * as Style from './style.js';
import * as img from '../../assets/images';

export default function MenuBar(){
	return(
		<Style.Todo>
			<Style.Img src={img.wood}/>
			<Style.PageMenu>
				<Style.Button>
					Lorem
				</Style.Button>
				<Style.Button>
					Ipsum
				</Style.Button>
				<Style.Button>
					Lorem
				</Style.Button>
				<Style.Button>
					Ipsum
				</Style.Button>
			</Style.PageMenu>
			<Style.ButtonMenu>
				<Style.Button>
					Lorem
				</Style.Button>
				<Style.Button>
					Ipsum
				</Style.Button>
			</Style.ButtonMenu>
		</Style.Todo>
	);
}