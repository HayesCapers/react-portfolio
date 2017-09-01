import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectContent from './ProjectContent';
import $ from 'jquery';


class Projects extends Component {
	constructor(props) {
		super(props);
	}

	

	render() {
		return(
			<div className='body-wrapper'>
				{this.loadScript}
				<Link to='/'>
					<div className='navbar'>
						<img src='/images/mini-logo-icon.png' />
					</div>
				</Link>

				<ProjectContent projId={this.props.match.params.prjId}/>

				<div className='prj-nav-wrapper'>	
					<div className='prj-nav-button'>
						<div className='nums' id='num1'>1</div>
						<img className='slash' src='/images/slash.png'/>
						<div className='nums' id='num2'>3</div>
					</div>
				</div>
			</div>
		)
	}
}

export { Projects }