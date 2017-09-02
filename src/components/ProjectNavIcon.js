import React, { Component } from 'react';
import $ from 'jquery';

class ProjectNavIcon extends Component {
	constructor(props) {
		super(props);

		this.state = {
			projectNumber: this.props.projectNumber,
			enabled: false
		}

		this.onHover = this.onHover.bind(this)
	}

	onHover() {

		this.setState({
			enabled: !this.state.enabled
		});

	}

	render() {

		if (!this.state.enabled) {
			return(
				<div className='prj-nav-button' onMouseEnter={this.onHover} onMouseLeave={this.onHover}>
					<img className='slash' src='/images/slash.png'/>
				</div>
			)
		}

		return(
			<div className='prj-nav-button' onMouseLeave={this.onHover}>
				<div className='nums' id='num1'>{this.props.projectNumber}</div>
				<img className='slash' src='/images/slash.png'/>
				<div className='nums' id='num2'>3</div>
			</div>
		)
	}
}

export default ProjectNavIcon