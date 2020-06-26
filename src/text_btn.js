import React from 'react';
import styled from "styled-components";

const Button = styled.a`
    cursor: pointer;
	user-select: none;
	white-space: nowrap;
	margin: 10px;
	:hover{
		text-decoration-line: underline;
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
var TextButton = function(props){
	let children = props.children;
	const needInserted = isTwoCNChar(children);
	if(children == null) {
		return <Button></Button>;
	}
	const SPACE = needInserted ? ' ' : '';
	if(typeof children === 'string') {
		if(needInserted){
			children = children.split('').join(SPACE);
		}
		<Button>{children}</Button>
	}
	else{
		console.log("TitleButton:请输入字符串");
		return <Button></Button>
		
	}
	return (
		<Button>{children}</Button>
	)
}
export default TextButton;

