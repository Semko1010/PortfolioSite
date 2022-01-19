import React, { Component } from 'react'
import "./Music.css"


class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
        scroll:0
        }
    }


handleScroll1 = () =>{
    let el = document.querySelector(".musicDiv")
    let elPosition = el.getBoundingClientRect();
    let screenPosition = window.innerHeight;

    if(elPosition.top + 100 < screenPosition){
        this.setState({scroll:window.pageYOffset})
        document.querySelector(".musicText").style ="visibility:visible;opacity:1;transform: translateX(0);"
    }
    if(elPosition.top > screenPosition){
        
        document.querySelector(".musicText").style ="visibility:hidden;opacity:0"
    }
    if(elPosition.bottom < screenPosition){
        document.querySelector(".musicText").style ="visibility:hidden;opacity:0"
    }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll1)
        window.addEventListener("scroll", this.handleScroll)
}
    

    render() { 
       
        return ( <div className="music">
            <div className="musicText">
        <h2 >Beyond Music</h2>
        <h3 >Front-End Developer • Created with HTML/CSS</h3>
        <p >Find your passion and inspiration in music</p>
        <a href="https://semko1010.github.io/musikProject/assets/html/inspiration.html" target="_blank" rel="noreferrer" class="music-flip" data-back="Music Beyond" data-front="Show Me"> </a>
        </div>
        <img style={{transform: `translateY(${- this.state.scroll * 0.2}px)`}} id="img1" src="./img/music/iphone-1766253.png" alt="" />
        <img  style={{transform: `translateY(${- this.state.scroll * 0.6}px)`}} id="img2" src="./img/music/ipad-147691.png" alt="" />
        <img  style={{transform: `translateY(${- this.state.scroll * 0.9}px)`}} id="img3" src="./img/music/macbook-562499.png" alt="" />
  
        </div>  );
    }
}
 
export default Music;

