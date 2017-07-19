import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';


class Projects extends Component {
	constructor(props) {
		super(props);
	}

	mouseOn(){
		$('#wnd-2').children('img').removeClass('img-2-out');
		$('#wnd-3').children('img').removeClass('img-3-out');
		$('#wnd-4').children('img').removeClass('img-4-out');

		$('#wnd-2').children('img').addClass('img-2-in');
		$('#wnd-3').children('img').addClass('img-3-in');
		$('#wnd-4').children('img').addClass('img-4-in');

		$('.cls-1').addClass('draw');
		$('.demo-link').addClass('demo-draw');
	}

	mouseOff(){
		$('#wnd-2').children('img').addClass('img-2-out');
		$('#wnd-3').children('img').addClass('img-3-out');
		$('#wnd-4').children('img').addClass('img-4-out');

		$('#wnd-2').children('img').removeClass('img-2-in');
		$('#wnd-3').children('img').removeClass('img-3-in');
		$('#wnd-4').children('img').removeClass('img-4-in');

		$('.cls-1').removeClass('draw');
		$('.demo-link').removeClass('demo-draw');
	}

	render() {

		const images = [
			'Wnd.png'
		]
		const titles = [
			'WINE AND DINE'
		]
		var currPrj = this.props.match.params.prjId

		return(
			<div className='body-wrapper'>
				{this.loadScript}
				<div className='navbar'>
					<img src='/images/mini-logo-icon.png' />
				</div>

				<div className='main-wrapper' onMouseEnter={this.mouseOn} onMouseLeave={this.mouseOff}>
					<svg id="layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 798.04 470.77">
					  <polyline className="cls-1" points="797.67 432.73 797.67 0.38 0.38 0.38 0.38 459.93 729.25 459.93 735.64 447.32 736.55 469.21 742.02 457.35 757.52 457.35"/>
					</svg>

					<div className="wnd-main" id="wnd-1"><img src={`/images/${images[currPrj]}`} /></div>
					<div className="wnd-main" id="wnd-2"><img src={`/images/${images[currPrj]}`} className="img-2-out" /></div>
					<div className="wnd-main" id="wnd-3"><img src={`/images/${images[currPrj]}`} className="img-3-out" /></div>
					<div className="wnd-main" id="wnd-4"><img src={`/images/${images[currPrj]}`} className="img-4-out" /></div>

					<div className='title-wrapper'>{titles[currPrj]}</div>
					<div className='demo-link'>DEMO</div>
				</div>

				<div className='prj-nav-wrapper'>	
					<Link to='/projects/0'>
						<div className='prj-nav-button'>
							<div className='nums' id='num1'>1</div>
							<img className='slash' src='/images/slash.png'/>
							<div className='nums' id='num2'>3</div>
						</div>
					</Link>	
				</div>
			</div>
		)
	}
}

export { Projects }