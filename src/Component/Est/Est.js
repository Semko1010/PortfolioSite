import React, { Component } from "react";
import "./Est.css";

class Music extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scroll: 0,
		};
	}

	handleScroll1 = () => {
		let el = document.querySelector(".est");
		let elPosition = el.getBoundingClientRect();
		let screenPosition = window.innerHeight;

		if (elPosition.top + 100 < screenPosition) {
			this.setState({ scroll: window.pageYOffset });
			document.querySelector(".estText").style =
				"visibility:visible;opacity:1;transform: translateX(0);";
		}
		if (elPosition.top > screenPosition) {
			document.querySelector(".estText").style = "visibility:hidden;opacity:0";
		}
		if (elPosition.bottom < screenPosition) {
			document.querySelector(".estText").style = "visibility:hidden;opacity:0";
		}
	};

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll1);
		window.addEventListener("scroll", this.handleScroll);
	}

	render() {
		return (
			<div className='est'>
				<div className='estText'>
					<h2>Energie Wetteruhr</h2>
					<h3>Front-End Developer • Created with Next JS</h3>
					<p>Look at the weather</p>
					<a
						href='https://energiewetteruhr.wsw-online.de/'
						target='_blank'
						rel='noreferrer'
						class='est-flip'
						data-back='Wetteruhr'
						data-front='Show Me'>
						{" "}
					</a>
				</div>
				<img
					style={{ transform: `translateY(${-this.state.scroll * 0.2}px)` }}
					id='img1'
					src='./img/Est/wetterIphone.png'
					alt=''
				/>
				<img
					style={{ transform: `translateY(${-this.state.scroll * 0.6}px)` }}
					id='img2'
					src='./img/Est/wetterIpad.png'
					alt=''
				/>
				<img
					style={{ transform: `translateY(${-this.state.scroll * 0.9}px)` }}
					id='img3'
					src='./img/Est/wetter.png'
					alt=''
				/>
			</div>
		);
	}
}

export default Music;
