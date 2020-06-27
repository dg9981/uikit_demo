import React, { Component } from 'react';
import styled from "styled-components";

const Button = styled.a`
    cursor:  ${props => props.disabled ? "default" : "pointer"};
	user-select: none;
	white-space: nowrap;
	/* margin-right: 25px; */
	font-size: 11px;
	color: ${props => props.disabled ? "#ccc" : "#000"};
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
		const { onClick } = this.props;
		let children = this.props.children;
		const needInserted = isTwoCNChar(children);
		if(children == null) {
			return <Button></Button>;
		}
		const SPACE = needInserted ? ' ' : '';
		if(typeof children === 'string') {
			// if(needInserted){
			// 	children = children.split('').join(SPACE);
			// }
			<Button>{children}</Button>
		}
		else{
			console.log("TitleButton:请输入字符串");
			return <Button></Button>
			
		}
		return (
			<Button disabled={this.props.disabled} onClick={(e) => { this.onClick(e) }}>{children}</Button>
		)
	}
}
export default TextButton;

