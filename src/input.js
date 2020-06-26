import React from 'react';
import styled, { keyframes } from "styled-components";


const InputStyled = styled.input`
	height: 30px;
	margin: 10px auto;
	border: 1px solid transparent;
	outline: 1px solid #ccc;
	padding: 10px;
	&:focus{
		outline: 1px solid #ccc;
		border: 1px solid transparent;
	}
`;
function Input(props){
	return (
		<InputStyled
			placeholder={props.placeholder}
			value={props.value}
		></InputStyled>
	)
}
export default Input;