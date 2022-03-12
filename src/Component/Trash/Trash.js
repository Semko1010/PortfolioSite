import React, { Component } from "react";
import "./Trash.css";

class Trash extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scroll: 0,
		};
	}

	handleScroll1 = () => {
		let el = document.querySelector(".trash");
		let elPosition = el.getBoundingClientRect();
		let screenPosition = window.innerHeight;

		if (elPosition.top + 100 < screenPosition) {
			this.setState({ scroll: window.pageYOffset });
			document.querySelector(".trashText").style =
				"visibility:visible;opacity:1;transform: translateX(0);";
		}
		if (elPosition.top > screenPosition) {
			document.querySelector(".trashText").style =
				"visibility:hidden;opacity:0";
		}
		if (elPosition.bottom < screenPosition) {
			document.querySelector(".trashText").style =
				"visibility:hidden;opacity:0";
		}
	};

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll1);
		window.addEventListener("scroll", this.handleScroll);
	}

	render() {
		return (
			<div className='trash'>
				<div className='trashText'>
					<h2>Nothing to Trash</h2>
					<h3>Full-Stack Developer • Created with Reactjs/Nodejs</h3>
					<p>Sell your second hand stuff</p>
					<a
						href='https://nothing2trash.herokuapp.com/'
						target='_blank'
						rel='noreferrer'
						class='est-flip'
						data-back='Trash'
						data-front='Show Me'>
						{" "}
					</a>
				</div>
				<img
					style={{ transform: `translateY(${-this.state.scroll * 0.2}px)` }}
					id='img1'
					src='./img/Trash/iphone-1766253.png'
					alt=''
				/>
				<img
					style={{ transform: `translateY(${-this.state.scroll * 0.6}px)` }}
					id='img2'
					src='/img/Trash/ipad-147691.png'
					alt=''
				/>
				<img
					style={{ transform: `translateY(${-this.state.scroll * 0.9}px)` }}
					id='img3'
					src='/img/Trash/macbook-562499.png'
					alt=''
				/>
			</div>
		);
	}
}

export default Trash;
