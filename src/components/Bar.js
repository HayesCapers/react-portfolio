import React, { Component } from 'react';


class Bar extends Component {
	render(){

		const inlineStyle = {
			width: this.props.randomWidth + 'px',
			height: this.props.randomHeight + 'px',
			backgroundColor: this.props.colorStyle
		}

		return(
			<div 
				id={'bar-' + this.props.id} 
				style={inlineStyle}>
			</div>
		)

	}
}

export default Bar;