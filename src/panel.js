import React from 'react';
import ReactDOM from 'react-dom';


const modalRoot = document.body;
class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.el = document.createElement("div");
		this.el.style.cssText = `border:1px solid #ccc; width: ${props.width}px; z-index:999`;
	}

	componentDidMount() {
		modalRoot.appendChild(this.el);
	}

	componentWillUnmount() {
		modalRoot.removeChild(this.el);
	}

	render(){
		return ReactDOM.createPortal(
			this.props.children,
			this.el
		);
	}
}
export default Modal;
