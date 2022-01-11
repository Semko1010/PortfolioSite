import React, { Component } from 'react'
import "./Mov.css"


class Mov extends Component {
    constructor(props) {
        super(props);
        this.state = {data:0,
                    scroll:0
        }
    }

    handleScroll = () => {
        this.setState({data:window.pageYOffset})
        if(window.matchMedia("(max-width: 375px)").matches){
         if(this.state.data >0 && this.state.data <2500){
        this.setState({scroll:this.state.data})
        }
    }
        if(window.matchMedia("(max-width: 1440px)").matches){
         if(this.state.data >700 && this.state.data <3500){
        this.setState({scroll:this.state.data})
        }
        if(this.state.data >1050){
            document.querySelector(".movText").style ="visibility:visible;opacity:1"
            
        }
        if(this.state.data <1050 || this.state.data >1800){
            document.querySelector(".movText").style ="visibility:hidden;opacity:0"
        }

    }
        else if(window.matchMedia("(max-width: 1920px)").matches){
         if(this.state.data >700 && this.state.data <3500){
        this.setState({scroll:this.state.data})
        }
        if(this.state.data >1250){
            document.querySelector(".movText").style ="visibility:visible;opacity:1"
            
        }
        if(this.state.data <1250 || this.state.data >2150){
            document.querySelector(".movText").style ="visibility:hidden;opacity:0"
        }

    }
          }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)

    }


    render() { 
        console.log(this.state.data);
        return ( <div className="mov">
            <div className="movText">
        <h2 ><a href="https://the-movie-app-2021.netlify.app/" target="_blank" rel="noreferrer">The Movie App</a></h2>
        <h3 >Front-End Developer • Created with React</h3>
        <p >Find your favorite movies and enjoy them with your friends</p>
        </div>
        <img style={{transform: `translateY(${- this.state.scroll * 0.2}px)`}} id="img1" src="./img/mov/Bildschirmfoto 2021-12-29 um 09.59.27.png" alt="" />
        <img  style={{transform: `translateY(${- this.state.scroll * 0.6}px)`}} id="img2" src="./img/mov/Bildschirmfoto 2021-12-29 um 09.58.07.png" alt="" />
        <img  style={{transform: `translateY(${- this.state.scroll * 0.9}px)`}} id="img3" src="./img/mov/Bildschirmfoto 2021-12-29 um 09.56.23.png" alt="" />
  
        </div>  );
    }
}
 
export default Mov;

