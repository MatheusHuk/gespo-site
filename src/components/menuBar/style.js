import styled from 'styled-components';

export const Todo = styled.div`
	border: 1px solid #E1CFCF;
	width: 100VW;
	height: 6.4VH;
	background-color: white;
	color: white;
	margin: 0;
	display: flex;
	position: fixed;
	overflow: auto;
	z-index: 999;
	border-radius: 0 0 10px 10px;
`;

export const Img = styled.img`
	height: 6VH;
	width: 6VH;
	background-color: red;
	margin-left: 3VW;
	cursor: pointer;
	src: ${props => props.src}
`;

export const Button = styled.div`
	color: black;
	margin-left: 6vh;
	padding: 0px 10px 0 10px;
	border-radius: 3px;
	height: 6VH;
	width: auto;
	text-align: center;
	vertical-align: middle;
	line-height: 6VH;
	cursor: pointer;
	transition: 0.3s;
	:hover{
		background-color: #1F1462;
		color: white
	}
`;

export const ButtonMenu = styled.div`
	margin-right:6vh;
	display: flex;
	position: absolute;
	justify-content: space-between;
	right: 1VW;
	height: auto;
	width: auto;

`;

export const PageMenu = styled.div`
	display: flex;
	justify-content: space-between;
	height: auto;
	width: auto;
	margin-left: 1VW;
`;