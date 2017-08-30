import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Parallax } from '../script/parallax.min.js';
import $ from 'jquery';
import Parallax from 'parallax-js';
import { onHoverHide, offHoverShow } from '../Mods';


class Home extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.parallax = new Parallax(this.scene)
	}	

	componentWillUnmount() {
		this.parallax.disable()		
	}

	mouseOn() {

	}

	render(){

		const projArr = ['.contact-nav', '#about-nav'];
		const contactArr = ['#roje-power', '#ts-power', '#about-nav'];
		const aboutArr = ['.project-nav', '#ont-power', '#ct-power'];

		return(
			<div className='main' >
				<div className="icon-wrapper">
					<a href="https://www.linkedin.com/in/hayes-capers-637041139"><span className="fa">&#xf08c;</span></a>
					<a href="https://github.com/HayesCapers"><span className="fa">&#xf092;</span></a>
					<a href="https://twitter.com/imLemnade"><span className="fa">&#xf081;</span></a>
					<a href="https://www.youtube.com/channel/UCLlTlqBWyRZkCcG1aCLAV2Q"><span className="fa">&#xf166;</span></a>
				</div>

				<div className="profile-wrapper hidden-xs" onMouseEnter={this.moveFace}>
					<div id="scene" data-hover-only="true" ref={el => this.scene = el}>
						<div className="layer1 layer" data-depth="0.10"><img id="comp1" src="/images/composite-1.png"/></div>
						<div className="layer1 layer" data-depth="0.20"><img id="comp2" src="/images/composite-2.png"/></div>
						<div className="layer1 layer" data-depth="0.30"><img id="comp3" src="/images/composite-3.png"/></div>
						<div className="layer1 layer" data-depth="0.40"><img id="comp4" src="/images/composite-4.png"/></div>
						<div className="layer1 layer" data-depth="0.50"><img id="comp5" src="/images/composite-5.png"/></div>
						<div className="layer1 layer" data-depth="0.60"><img id="comp6" src="/images/composite-6.png"/></div>
						<div className="layer1 layer" data-depth="0.70"><img id="comp7" src="/images/composite-7.png"/></div>
						<div className="layer1 layer" data-depth="0.80"><img id="comp8" src="/images/composite-8.png"/></div>
						<div className="layer1 layer" data-depth="1.00"><img id="comp9" src="/images/composite-9.png"/></div>
					</div>
				</div>

				<div className="name-wrapper col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-4">
					<img src="images/name.png"/>
					<Link to='/projects/0'>
						<div 
							id='project-nav-wrapper' 
							className="col-xs-2 col-sm-2"
							onMouseEnter={() => onHoverHide(projArr)}
							onMouseLeave={() => offHoverShow(projArr)}
						>
							<div className="project-nav" id="roje-power">ROJE</div>
							<div className="project-nav" id="c-power">C</div>
							<div className="project-nav" id="ts-power">TS</div>
						</div>
					</Link>
					<div 
						id='contact-nav-wrapper' 
						className="col-xs-2 col-sm-2"
						onMouseEnter={() => onHoverHide(contactArr)}
						onMouseLeave={() => offHoverShow(contactArr)}
					>
						<span className="contact-nav" id="ont-power">ONT</span>
						<span className="contact-nav" id="a-power">A</span>
						<span className="contact-nav" id="ct-power">CT</span>
					</div>
					<div 
						id='about-nav-wrapper' 
						className="col-xs-2 col-sm-2"
						onMouseEnter={() => onHoverHide(aboutArr)}
						onMouseLeave={() => offHoverShow(aboutArr)}
					>
						<div id="about-nav">BOUT</div>
					</div>
				</div>
			</div>	
		)
	}
}

export { Home }