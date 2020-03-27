import styled from 'styled-components';

export const Todo = styled.div`
	width: 100VW;
	height: 6VH;
	background-color: black;
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
	height: 6VH;
	width: 7VW;
	color: white;
	text-align: center;
	vertical-align: middle;
	line-height: 6VH;
	cursor: pointer;
	:hover{
		color: gray;
	}
`;

export const ButtonMenu = styled.div`
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