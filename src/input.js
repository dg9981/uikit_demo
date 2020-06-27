import React, { Component } from 'react';
import styled, { keyframes } from "styled-components";


const InputStyled = styled.input`
	width: 100%;
	height: 30px;
	border: 1px solid transparent;
	outline: 1px solid transparent;
	padding: 10px;
	font-size: 11px;
	&:focus{
		outline: 1px solid transparent;
		border: 1px solid transparent;
	}
`;

class Input extends Component{
	onChange(e){
		const { onChange } = this.props;
		if(onChange){
			onChange(e);
		}
	}
	render(){
		return (
			<InputStyled
				placeholder={this.props.placeholder}
				value={this.props.value}
				onChange={(e) => this.onChange(e) }
			></InputStyled>
		)
	}
}
export default Input;