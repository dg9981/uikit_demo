import React from 'react';
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;
const LoadWrapper = styled.div`
	width: 30x;
	height: 30px;
	position: relative;
	margin: 10px auto;
`;
const Load = styled.div`
	width: 25px;
	height: 25px;
	border: 2px solid #f3f3f3;
	border-top: 2px solid #0dc5c1;
	border-radius: 50%;
	animation: ${rotate} 1s linear infinite;
`;
function Tips(props){
	return (
		<LoadWrapper>
			<Load></Load>
		</LoadWrapper>
	)
}
export default Tips;