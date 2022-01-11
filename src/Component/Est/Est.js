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
        if(this.state.data >0 && this.state.data <7050){
        this.setState({scroll:this.state.data})

}
}
        else if(window.matchMedia("(max-width: 375px)").matches){
        if(this.state.data >4150 && this.state.data <7050){
        this.setState({scroll:this.state.data})

}
}
        else if(window.matchMedia("(max-width: 1440px)").matches){
        if(this.state.data >4150 && this.state.data <8050){
        this.setState({scroll:this.state.data})

}
if(this.state.data >5000){
    document.querySelector(".estText").style ="visibility:visible;opacity:1"
    
}
if(this.state.data <5000 || this.state.data >5800){
    document.querySelector(".estText").style ="visibility:hidden;opacity:0"
}
}
        else if(window.matchMedia("(max-width: 1920px)").matches){
        if(this.state.data >4150 && this.state.data <8050){
        this.setState({scroll:this.state.data})

}
if(this.state.data >6400){
    document.querySelector(".estText").style ="visibility:visible;opacity:1"
    
}
if(this.state.data <6400 || this.state.data >7350){
    document.querySelector(".estText").style ="visibility:hidden;opacity:0"
}
}
}

    componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
}
    

    render() { 
        console.log(this.state.data);
        return ( <div className="est">
            <div className="estText">
        <h2 ><a href="https://semko1010.github.io/musikProject/assets/html/inspiration.html" target="_blank" rel="noreferrer">Tax calculator</a></h2>
        <h3 >Front-End Developer • Created with HTML/SASS/Javascript</h3>
        <p >Calculate your tax</p>
        </div>
        <img style={{transform: `translateY(${- this.state.scroll * 0.2}px)`}} id="img1" src="./img/Est/iphone-1766253.png" alt="" />
        <img  style={{transform: `translateY(${- this.state.scroll * 0.6}px)`}} id="img2" src="./img/Est/ipad-147691.png" alt="" />
        <img  style={{transform: `translateY(${- this.state.scroll * 0.9}px)`}} id="img3" src="./img/Est/macbook-562499.png" alt="" />
  
        </div>  );
    }
}
 
export default Music;

