import React, { Component } from 'react'
let x =window.matchMedia("(max-width: 375px)")

class DesignShop extends Component {
    constructor(props) {
        super(props);
        this.state = {data:0,
                    scroll:0
        }
    }

    handleScroll = () => {
        this.setState({data:window.pageYOffset})
         if(this.state.data >3700 && this.state.data <6150){
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
        return ( <div className="shop">
        <h2 style={{transform: `translateX(${-this.state.scroll * 0.10}px) `}}><a href="https://semko1010.github.io/designShop/" target="_blank" rel="noreferrer">Design Shop</a></h2>
        <h3 style={{transform: `translateX(${-this.state.scroll * 0.10}px) `}}>Front-End Developer • Created with HTML/CSS</h3>
        <p style={{transform: `translateX(${-this.state.scroll * 0.10}px) `}}>Find your favorite cloths and gadges</p>
        <img style={{transform: `translateY(${- this.state.scroll * 0.2}px)`}} id="img1" src="./img/DesignShop/iphone-1766253.png" alt="" />
        <img  style={{transform: `translateY(${- this.state.scroll * 0.6}px)`}} id="img2" src="./img/DesignShop/ipad-147691.png" alt="" />
        <img  style={{transform: `translateY(${- this.state.scroll * 0.9}px)`}} id="img3" src="./img/DesignShop/macbook-562499.png" alt="" />
  
        </div>  );
    }
}
 
export default DesignShop;

