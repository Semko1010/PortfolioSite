import React, { Component } from 'react'


class Tasty extends Component {
  constructor(props) {
    super(props);
    this.state = { data:0,scroll:0 }
  }


  handleScroll = () => {
    this.setState({data:window.pageYOffset})
     if(this.state.data >1200 && this.state.data <3650){
    this.setState({scroll:this.state.data})
     
    
    }
      }

componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)

}
  render() { 
    return ( <div className="tasty">
    <h2 style={{transform: `translateX(${-this.state.scroll * 0.10}px`}}><a href="https://the-tasty-app.netlify.app/" target="_blank" rel="noreferrer">The Tasty App</a></h2>
    <h3 style={{transform: `translateX(${-this.state.scroll * 0.10}px) `}}>Front-End Developer • Created with React</h3>
        <p style={{transform: `translateX(${-this.state.scroll * 0.10}px) `}}>Find your favorite movies and enjoy them with your friends</p>
    <img style={{transform: `translateY(${-this.state.scroll *0.2}px)`}}  src="/img/tasty/tasty1.png" alt="" />
    <img  style={{transform: `translateY(${-this.state.scroll * 0.6}px)`}} src="img/tasty/tasty2.png" alt="" />
    <img  style={{transform: `translateY(${-this.state.scroll * 0.9}px)`}}  src="img/tasty/tasty3.png" alt="" />

    </div>  );
  }
}
 
export default Tasty;