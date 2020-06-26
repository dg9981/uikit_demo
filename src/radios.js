import React from 'react';
import styled from "styled-components";

const RadiosWrap = styled.div`
	user-select: none;
	display: flex;

`;
const RadioWrap = styled.div`
	position: relative;
	line-height: 30px;
	width: 80px;
	height: 30px;
	margin: 0 10px;
	input[type='radio'] {
		line-height: 30px;
		margin: 0 10px;
		opacity: 0;
		border: none;
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 1;
		cursor: pointer;
	}
	label{
		position: absolute;
		left: 5px;
		top: 3px;
		border-radius: 50%;
		cursor: pointer;
	}
 
	input:checked+label::after {
		position: absolute;
		content: '';
		width: 100%;
		height: 2px;
		bottom: 0px;
		background: #000;
		left: 0px;
	}
`;

class Radio extends React.Component {
	constructor(props){
		super(props);
	}
	onRadioChange(ev){
		const {value, onChange} = this.props;
		const lastValue = value;
		const props = this.props;
		const val = ev.target.value;
		if (onChange) {
			onChange(ev);
		}
	}
	render(){
		const {value, children, selectValue, name,  onChange} = this.props;
		return (
			<RadioWrap>
				<input
					type="radio"
					name={name}
					value={value}
					checked={ value == selectValue }
					onChange={ (e) => this.onRadioChange(e) }
				></input>
				<label>{ children }</label>
			</RadioWrap>
		)
	}

}


function Radios(props){
	const { children, name, value, onChange } = props;
	return (
		<RadiosWrap>
			{
				children.map((child) => 
					<Radio key={child.props.value} name={name} onChange={onChange} selectValue={value} {...child.props}></Radio>
				)
			}
		</RadiosWrap>
	)
}
Radios.Item = Radio;
export default Radios;