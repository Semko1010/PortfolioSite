import React, { Component } from 'react'
import "./Est.css"


class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {data:0,
                    scroll:0
        }
    }

    handleScroll = () => {
        this.setState({data:window.pageYOffset})
        if(window.matchMedia("(max-width: 360px)").matches){
        if(this.state.data >3750 && this.state.data <7050){
        this.setState({scroll:this.state.data})

}
}
        else if(window.matchMedia("(max-width: 375px)").matches){
        if(this.state.data >4150 && this.state.data <7050){
        this.setState({scroll:this.state.data})

}
}
        else if(window.matchMedia("(max-width: 1920px)").matches){
        if(this.state.data >4150 && this.state.data <7050){
        this.setState({scroll:this.state.data})

}
}
}

    componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
}
    

    render() { 
        console.log(this.state.data);
        return ( <div className="est">
        <h2 style={{transform: `translateX(${this.state.scroll * 0.10}px) `}}><a href="https://semko1010.github.io/musikProject/assets/html/inspiration.html" target="_blank" rel="noreferrer">Tax calculator</a></h2>
        <h3 style={{transform: `translateX(${this.state.scroll * 0.10}px) `}}>Front-End Developer • Created with HTML/SASS/Javascript</h3>
        <p style={{transform: `translateX(${this.state.scroll * 0.10}px) `}}>Calculate your tax</p>
        <img style={{transform: `translateY(${- this.state.scroll * 0.2}px)`}} id="img1" src="./img/Est/iphone-1766253.png" alt="" />
        <img  style={{transform: `translateY(${- this.state.scroll * 0.6}px)`}} id="img2" src="./img/Est/ipad-147691.png" alt="" />
        <img  style={{transform: `translateY(${- this.state.scroll * 0.9}px)`}} id="img3" src="./img/Est/macbook-562499.png" alt="" />
  
        </div>  );
    }
}
 
export default Music;

