import React from 'react';
import ReactDOM from 'react-dom';


const modalRoot = document.body;
class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.el = document.createElement("div");
		this.el.setAttribute("id", props.id);
		this.el.style.cssText = `position:absolute;border:1px solid #000; background: #fff; width: ${props.width}px; z-index:999; left: 67px; top: ${props.top}px;`;
	}
	
	componentDidMount() {
		modalRoot.appendChild(this.el);
	}
	
	componentWillUnmount() {
		modalRoot.removeChild(this.el);
	}
	
	render(){
		const display = this.props.visible ? "block" : "none";
		this.el.style.display = display;
		this.el.style.top = this.props.top + "px";
		return ReactDOM.createPortal(
			this.props.children,
			this.el
		);
	}
}
export default Modal;
