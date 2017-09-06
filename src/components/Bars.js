import React, { Component } from 'react';
import Bar from './Bar';
import $ from 'jquery';

class Bars extends Component {
	constructor(props) {
		super(props);
		
	}

	render() {

		var htmlBars = []
		for (let i = 0; i < 100; i++){
			var randomWidth = Math.floor(Math.random() * 300 + this.props.barWidth);
			var randomHeight = Math.floor(Math.random() * 15 + 5);
			var randomVelo = Math.floor(Math.random() * 500 + 50)
			htmlBars.push(<Bar velo={randomVelo} colorStyle={this.props.colorStyle} key={i} id={i} randomWidth={randomWidth} randomHeight={randomHeight}/>)
		}

		return(
			<div className='bar-wrapper'>	
				{htmlBars}
			</div>
		)
	}
}

export { Bars };



