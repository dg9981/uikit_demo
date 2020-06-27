import React, { Fragment } from 'react';
import styled from "styled-components";

const RadiosWrap = styled.div`
	user-select: none;
	display: flex;
`;
const ListUl = styled.ul`
	margin-bottom: 10px;
	li{
		line-height: 20px;
		cursor: pointer;
		&:hover{
			text-decoration: underline;
		}
	}
`;
const Title = styled.div`
	line-height: 20px;
	color: #757575;
	user-select: none;
`;

function List(props){
	const { dataSource, searchVal } = props;
	return (
		<Fragment>
			<Title>DESIGNERS</Title>
			<ListUl>
				{
					dataSource.DESIGNERS.map((child) => 
						<li key={child}>{searchVal}{child}</li>
					)
				}
			</ListUl>
			<Title>SUGGESTED CATEGORIES</Title>
			<ListUl>
				{
					dataSource.SUGGESTED.map((child) => 
						<li key={child}>{searchVal}{child}</li>
					)
				}
			</ListUl>
		</Fragment>
		
	)
}
export default List;