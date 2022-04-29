import React, { Component } from "react";
import "./Tasty.css";

class Tasty extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scroll: 0,
		};
	}

	handleScroll1 = () => {
		let el = document.querySelector(".tastyDiv");
		let elPosition = el.getBoundingClientRect();
		let screenPosition = window.innerHeight;

		if (elPosition.top + 100 < screenPosition) {
			this.setState({ scroll: window.pageYOffset });
			document.querySelector(".tastyText").style =
				"visibility:visible;opacity:1;transform: translateX(0);";
		}
		if (elPosition.top > screenPosition) {
			document.querySelector(".tastyText").style =
				"visibility:hidden;opacity:0";
		}
		if (elPosition.bottom < screenPosition) {
			document.querySelector(".tastyText").style =
				"visibility:hidden;opacity:0";
		}
	};
	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll1);
		window.addEventListener("scroll", this.handleScroll);
	}
	render() {
		return (
			<div className='tasty'>
				<div className='tastyText'>
					<h2>Tasty App</h2>
					<h3>Front-End Developer • Created with React</h3>
					<p>cook your favorite dishes with your friends</p>
					<a
						href='https://the-tasty-app.netlify.app/'
						target='_blank'
						rel='noreferrer'
						class='tasty-flip'
						data-back='Tasty App'
						data-front='Show Me'>
						{" "}
					</a>
				</div>
				<img
					style={{ transform: `translateY(${-this.state.scroll * 0.2}px)` }}
					src='/img/tasty/tasty1.png'
					alt=''
				/>
				<img
					style={{ transform: `translateY(${-this.state.scroll * 0.6}px)` }}
					src='img/tasty/tasty2.png'
					alt=''
				/>
				<img
					style={{ transform: `translateY(${-this.state.scroll * 0.9}px)` }}
					src='img/tasty/tasty3.png'
					alt=''
				/>
			</div>
		);
	}
}

export default Tasty;
