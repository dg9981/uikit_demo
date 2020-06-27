import React, { Fragment } from 'react';
import TextButton from "./text_btn";
import styled from "styled-components";

const DropMenu = styled.div`
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	padding: 10px;
	&:hover{
		div{
			display: inline-flex;
		}
	}
`;
const Menu = styled.div`
	border:1px solid #ccc;
	display: inline-flex;
	flex-direction: column;
	z-index:999;
	position: absolute;
	top: 30px;
	background: #fff;
	width: 100%;
	line-height: 55px;
	align-items: center;
	display:none;
	>a{
		font-weight: 500;
	}
`;
function Dropdown(props){
	return(
		<DropMenu>
			<TextButton>{props.title}</TextButton>
			<Menu>
				{props.children}
			</Menu>
		</DropMenu>
	)
}
export default Dropdown;
