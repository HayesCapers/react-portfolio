import React, { Component } from 'react';
import { CSSTransition, transit } from 'react-css-transition';


class Bar extends Component {
	constructor(props) {
		super(props);
		
		this.initX = -(this.props.randomWidth + this.props.velo)
		this.fianlX = this.props.randomWidth + this.props.velo

		this.state = {
			active: false
		}
	}

	componentDidMount() {
		this.setState({
			active: !this.state.active
		})
	}

	render(){

		const inlineStyle = {
			width: this.props.randomWidth + 'px',
			height: this.props.randomHeight + 'px',
			backgroundColor: this.props.colorStyle,
			position: 'relative',
			left: this.initX
		}

		return(
			<CSSTransition
				defaultStyle={{ transform: `translateX(${this.initX})` }}
				enterStyle={{ transform: transit(`translateX(${this.fianlX}px)`, 2000, 'ease-in-out') }}
				leaveStyle={{ transform: transit(`translateX(0px)`, 2000, 'ease-in-out') }}
				activeStyle={{ transform: `translateX(${this.finalX}px)` }}
				active={this.state.active}
			>
				<div 
					id={'bar-' + this.props.id} 
					style={inlineStyle}>
				</div>
			</CSSTransition>	
		)

	}
}

export default Bar;