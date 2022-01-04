import React, { Component } from 'react'
let x =window.matchMedia("(max-width: 375px)")

class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {data:0,
                    scroll:0
        }
    }

    handleScroll = () => {
        this.setState({data:window.pageYOffset})
         if(this.state.data >2500 && this.state.data <5750){
        this.setState({scroll:this.state.data})
         if(x.matches){

         }
        
        }
          }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)

    }
    

    render() { 
        console.log(this.state.data);
        return ( <div className="music">
        <h2 style={{transform: `translateX(${ this.state.scroll * 0.10}px) `}}><a href="https://semko1010.github.io/musikProject/assets/html/inspiration.html" target="_blank" rel="noreferrer">Beyond Music</a></h2>
        <h3 style={{transform: `translateX(${ this.state.scroll * 0.10}px) `}}>Front-End Developer • Created with HTML/CSS</h3>
        <p style={{transform: `translateX(${ this.state.scroll * 0.10}px) `}}>Find your passion and inspiration in music</p>
        <img style={{transform: `translateY(${- this.state.scroll * 0.2}px)`}} id="img1" src="./img/music/iphone-1766253.png" alt="" />
        <img  style={{transform: `translateY(${- this.state.scroll * 0.6}px)`}} id="img2" src="./img/music/ipad-147691.png" alt="" />
        <img  style={{transform: `translateY(${- this.state.scroll * 0.9}px)`}} id="img3" src="./img/music/macbook-562499.png" alt="" />
  
        </div>  );
    }
}
 
export default Music;

//lernen wie man lernt
//trotz it studium wenig kentnisse in der programierung
//aerbeiten auch mit photoshop