import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProjectNavIcon, ProjectContent, Bars } from './';


class Projects extends Component {
	constructor(props) {
		super(props);

		this.state = {
			projectId: this.props.match.params.prjId,
			enabledProjectId: 1,
		}

		this.changeProject = this.changeProject.bind(this)
	}

	changeProject(projectId) {
		this.setState({
			projectId
		});
	}

	render() {

		return(
			<div className='body-wrapper'>

				<Bars colorStyle={'#6567B4'} barWidth={500}/>
				<Bars colorStyle={'#01F3FE'} barWidth={400}/>

				<Link to='/'>
					<div className='navbar'>
						<img src='/images/mini-logo-icon.png' />
					</div>
				</Link>

				<ProjectContent projId={this.state.projectId} />

				<div className='prj-nav-wrapper'>	

						<a onClick={() => this.changeProject(0)}>
							<ProjectNavIcon 
								projectNumber={1} 
								enabled={this.state.enabledProjectId}
							/>
						</a>	

						<a onClick={() => this.changeProject(1)}>
							<ProjectNavIcon 
								projectNumber={2} 
								enabled={this.state.enabledProjectId}
							/>
						</a>	

						<a onClick={() => this.changeProject(2)}>
							<ProjectNavIcon 
								projectNumber={3} 
								enabled={this.state.enabledProjectId}
							/>
						</a>	
						
				</div>

			</div>
		)
	}
}

export { Projects }


// Make sure to do media queries for smaller screen sizes