import React from 'react';
import styled from "styled-components";

const Tip = styled.div`
	user-select: none;
	background: #e8e8e8;
	padding: 0.5em;
	text-align: center;
`;
function Tips(props){
	const { children } = props;
	return (
		<Tip>{children}</Tip>
	)
}
export default Tips;