import React, { Component } from 'react'
import "./Tasty.css"

class Tasty extends Component {
  constructor(props) {
    super(props);
    this.state = { data:0,scroll:0 }
  }


  handleScroll = () => {
    this.setState({data:window.pageYOffset})
    if(window.matchMedia("(max-width: 360px)").matches){
     if(this.state.data >0 && this.state.data <3650){
    this.setState({scroll:this.state.data})
     
  }
    }
    else if(window.matchMedia("(max-width: 1440px)").matches){
     if(this.state.data >1200 && this.state.data <4650){
    this.setState({scroll:this.state.data})
    if(this.state.data >2050){
      document.querySelector(".tastyText").style ="visibility:visible;opacity:1"
      
  }
  if(this.state.data <2050 || this.state.data >2830){
      document.querySelector(".tastyText").style ="visibility:hidden;opacity:0"
  }
  }
    }
    else if(window.matchMedia("(max-width: 1680px)").matches){
     if(this.state.data >1200 && this.state.data <4650){
    this.setState({scroll:this.state.data})
    if(this.state.data >2450){
      document.querySelector(".tastyText").style ="visibility:visible;opacity:1"
      
  }
  if(this.state.data <2450 || this.state.data >3300){
      document.querySelector(".tastyText").style ="visibility:hidden;opacity:0"
  }
  }
    }
    else if(window.matchMedia("(max-width: 1920px)").matches){
     if(this.state.data >1200 && this.state.data <4650){
    this.setState({scroll:this.state.data})
    if(this.state.data >2550){
      document.querySelector(".tastyText").style ="visibility:visible;opacity:1"
      
  }
  if(this.state.data <2550 || this.state.data >3480){
      document.querySelector(".tastyText").style ="visibility:hidden;opacity:0"
  }
  }
    }
      }

componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)

}
  render() { 
    return ( <div className="tasty">
      <div className="tastyText">
    <h2 ><a href="https://the-tasty-app.netlify.app/" target="_blank" rel="noreferrer">The Tasty App</a></h2>
    <h3 >Front-End Developer • Created with React</h3>
    <p >Find your favorite movies and enjoy them with your friends</p>
    </div>
    <img style={{transform: `translateY(${-this.state.scroll *0.2}px)`}}  src="/img/tasty/tasty1.png" alt="" />
    <img  style={{transform: `translateY(${-this.state.scroll * 0.6}px)`}} src="img/tasty/tasty2.png" alt="" />
    <img  style={{transform: `translateY(${-this.state.scroll * 0.9}px)`}}  src="img/tasty/tasty3.png" alt="" />

    </div>  );
  }
}
 
export default Tasty;