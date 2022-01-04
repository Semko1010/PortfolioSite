import React, { Component } from 'react'
import "./Mov.css"
let x =window.matchMedia("(max-width: 375px)")

class Mov extends Component {
    constructor(props) {
        super(props);
        this.state = {data:0,
                    scroll:0
        }
    }

    handleScroll = () => {
        this.setState({data:window.pageYOffset})
         if(this.state.data >700 && this.state.data <2500){
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
        return ( <div className="mov">
        <h2 style={{transform: `translateX(${ this.state.scroll * 0.10}px) `}}><a href="https://the-movie-app-2021.netlify.app/" target="_blank" rel="noreferrer">The Movie App</a></h2>
        <h3 style={{transform: `translateX(${ this.state.scroll * 0.10}px) `}}>Front-End Developer • Created with React</h3>
        <p style={{transform: `translateX(${ this.state.scroll * 0.10}px) `}}>Find your favorite movies and enjoy them with your friends</p>
        <img style={{transform: `translateY(${- this.state.scroll * 0.2}px)`}} id="img1" src="./img/mov/Bildschirmfoto 2021-12-29 um 09.59.27.png" alt="" />
        <img  style={{transform: `translateY(${- this.state.scroll * 0.6}px)`}} id="img2" src="./img/mov/Bildschirmfoto 2021-12-29 um 09.58.07.png" alt="" />
        <img  style={{transform: `translateY(${- this.state.scroll * 0.9}px)`}} id="img3" src="./img/mov/Bildschirmfoto 2021-12-29 um 09.56.23.png" alt="" />
  
        </div>  );
    }
}
 
export default Mov;

