import React from 'react';
import styled from "styled-components";

const CheckboxWrap = styled.div`
	user-select: none;
	display: flex;

`;
const CheckItemWrap = styled.div`
	line-height: 30px;
	height: 30px;
	margin: 0 10px;
	input[type='checkbox'] {
		line-height: 30px;
		margin: 0 10px;
	}
`;

class CheckItem extends React.Component {
	constructor(props){
		super(props);
	}
	onCheckboxChange(ev){
		// const {value, onChange} = this.props;
		// const props = this.props;
		// const val = ev.target.value;
		// console.log(ev)
		// if (onChange) {
		// 	onChange(ev);
		// }
	}
	render(){
		const {value, children, selectValue, name,  onChange} = this.props;
		return (
			<CheckItemWrap>
				<input
					type="checkbox"
					name={name}
					value={value}
					// checked={ value.indexOf(selectValue) >= 0 }
					onChange={ (e) => this.onCheckboxChange(e) }
				></input>
				<label>{ children }</label>
			</CheckItemWrap>
		)
	}

}


function Checkbox(props){
	const { children, name, value, onChange } = props;
	return (
		<CheckboxWrap>
			{
				children.map((child) => 
					<CheckItem key={child.props.value} name={name} onChange={onChange} selectValue={value} {...child.props}></CheckItem>
				)
			}
		</CheckboxWrap>
	)
}
Checkbox.Item = CheckItem;
export default Checkbox;