import React, { Component } from "react";
import "./Expensee.css";

class Expensee extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scroll: 0,
		};
	}

	handleScroll1 = () => {
		let el = document.querySelector(".expensee");
		let elPosition = el.getBoundingClientRect();
		let screenPosition = window.innerHeight;

		if (elPosition.top + 100 < screenPosition) {
			this.setState({ scroll: window.pageYOffset });
			document.querySelector(".expenseeText").style =
				"visibility:visible;opacity:1;transform: translateX(0);";
		}
		if (elPosition.top > screenPosition) {
			document.querySelector(".expenseeText").style =
				"visibility:hidden;opacity:0";
		}
		if (elPosition.bottom < screenPosition) {
			document.querySelector(".expenseeText").style =
				"visibility:hidden;opacity:0";
		}
	};

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll1);
		window.addEventListener("scroll", this.handleScroll);
	}

	render() {
		return (
			<div className='expensee'>
				<div className='expenseeText'>
					<h2>Expensee</h2>
					<h3>Full-Stack Developer • Created with React Native/Nodejs</h3>
					<p>set your own money in the app</p>
					<a
						href='https://nothing2trash.herokuapp.com/'
						target='_blank'
						rel='noreferrer'
						class='est-flip'
						data-back='Calculator'
						data-front='Show Me'>
						{" "}
					</a>
				</div>
				<img
					style={{ transform: `translateY(${-this.state.scroll * 0.2}px)` }}
					id='img1'
					src='/img/Expensee/iphone-1766253.png'
					alt=''
				/>
				<img
					style={{ transform: `translateY(${-this.state.scroll * 0.6}px)` }}
					id='img2'
					src='/img/Expensee/iphone3-1766253.png'
					alt=''
				/>
				<img
					style={{ transform: `translateY(${-this.state.scroll * 0.9}px)` }}
					id='img3'
					src='/img/Expensee/iphone1-1766253.png'
					alt=''
				/>
				<img
					style={{ transform: `translateY(${-this.state.scroll * 1.1}px)` }}
					id='img3'
					src='/img/Expensee/iphone2-1766253.png'
					alt=''
				/>
			</div>
		);
	}
}

export default Expensee;
