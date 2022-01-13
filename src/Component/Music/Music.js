import React, { Component } from 'react'
import "./Music.css"


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
        if(this.state.data >0 && this.state.data <4750){
        this.setState({scroll:this.state.data})
        
        }
       
    }
        else if(window.matchMedia("(max-width: 375px)").matches){
        if(this.state.data >0 && this.state.data <4750){
        this.setState({scroll:this.state.data})
        
        }
       
    }
        else if(window.matchMedia("(max-width: 768px)").matches){
        if(this.state.data >1500 && this.state.data <5750){
        this.setState({scroll:this.state.data})
        
        }

}
        else if(window.matchMedia("(max-width: 1440px)").matches){
        if(this.state.data >2500 && this.state.data <5750){
        this.setState({scroll:this.state.data})
       
        }

}
        else if(window.matchMedia("(max-width: 1680px)").matches){
        if(this.state.data >2500 && this.state.data <5750){
        this.setState({scroll:this.state.data})
       
        }
    }
        else if(window.matchMedia("(max-width: 1920px)").matches){
        if(this.state.data >2500 && this.state.data <5750){
        this.setState({scroll:this.state.data})
        
        }

}
        else if(window.matchMedia("(max-width: 2560px)").matches){
        if(this.state.data >2500 && this.state.data <8750){
        this.setState({scroll:this.state.data})
       
        }

}

}
handleScroll1 = () =>{
    let el = document.querySelector(".musicDiv")
    let elPosition = el.getBoundingClientRect();
    let screenPosition = window.innerHeight;

    if(elPosition.top < screenPosition){
        
        document.querySelector(".musicText").style ="visibility:visible;opacity:1"
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
        <h2 ><a href="https://semko1010.github.io/musikProject/assets/html/inspiration.html" target="_blank" rel="noreferrer">Beyond Music</a></h2>
        <h3 >Front-End Developer • Created with HTML/CSS</h3>
        <p >Find your passion and inspiration in music</p>
        </div>
        <img style={{transform: `translateY(${- this.state.scroll * 0.2}px)`}} id="img1" src="./img/music/iphone-1766253.png" alt="" />
        <img  style={{transform: `translateY(${- this.state.scroll * 0.6}px)`}} id="img2" src="./img/music/ipad-147691.png" alt="" />
        <img  style={{transform: `translateY(${- this.state.scroll * 0.9}px)`}} id="img3" src="./img/music/macbook-562499.png" alt="" />
  
        </div>  );
    }
}
 
export default Music;

