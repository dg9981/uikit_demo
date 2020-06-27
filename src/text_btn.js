import React, { Component } from 'react';
import styled from "styled-components";

const Button = styled.a`
	cursor:  ${props => props.disabled ? "default" : "pointer"};
	user-select: none;
	white-space: nowrap;
	/* margin-right: 25px; */
	font-size: 11px;
	color: ${props => props.disabled ? "#ccc" : "#000"};
	text-decoration: ${props => props.active ? "underline" : "none"};
	:hover{
		text-decoration:  ${props => props.disabled ? "none" : "underline"};
	}
	:visited{
		text-decoration: none;
	}
`;
//* 组件逻辑的一些辅助常量 */
const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;

/* 判断是否为两个中文字符*/
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(){
  return typeof str === 'string';
}
class TextButton extends React.Component {
	constructor(props){
		super(props);
	}
	onClick(ev){
		const { onClick } = this.props;
		if (onClick) {
			onClick(ev);
		}
	}
	render(){
		const { onClick, id, active} = this.props;
		let children = this.props.children;
		const needInserted = isTwoCNChar(children);
		if(children == null) {
			return <Button id={id}></Button>;
		}
		const SPACE = needInserted ? ' ' : '';
		if(typeof children === 'string') {
			return <Button
				id={id}
				disabled={this.props.disabled}
				onClick={(e) => { this.onClick(e) }}
				active={active}
			>{children}</Button>
		}
		else{
			console.log("TitleButton:请输入字符串");
			return <Button id={id}></Button>
			
		}
	}
}
export default TextButton;

