import React, { Component } from 'react'
import "./Shop.css"


class DesignShop extends Component {
    constructor(props) {
        super(props);
        this.state = {
        scroll:0
        }
    }


    handleScroll1 = () =>{
        let el = document.querySelector(".shopDiv")
        let elPosition = el.getBoundingClientRect();
        let screenPosition = window.innerHeight;
    
        if(elPosition.top + 100 < screenPosition){
            this.setState({scroll:window.pageYOffset})
            document.querySelector(".shopText").style ="visibility:visible;opacity:1;transform: translateX(0);"
        }
        if(elPosition.top > screenPosition){
            
            document.querySelector(".shopText").style ="visibility:hidden;opacity:0"
        }
        if(elPosition.bottom < screenPosition){
            document.querySelector(".shopText").style ="visibility:hidden;opacity:0"
        }
        }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll1)
        window.addEventListener("scroll", this.handleScroll)

    }


    render() { 
        
        return ( <div className="shop">
            <div className="shopText">
        <h2 >Design Shop</h2>
        <h3 >Front-End Developer • Created with HTML/CSS</h3>
        <p >Find your favorite cloths and gadgets</p>
        <a href="https://semko1010.github.io/designShop/" target="_blank" rel="noreferrer" class="shop-flip" data-back="Design Shop" data-front="Show Me"> </a>
        </div>
        <img style={{transform: `translateY(${- this.state.scroll * 0.2}px)`}} id="img1" src="./img/DesignShop/iphone-1766253.png" alt="" />
        <img  style={{transform: `translateY(${- this.state.scroll * 0.6}px)`}} id="img2" src="./img/DesignShop/ipad-147691.png" alt="" />
        <img  style={{transform: `translateY(${- this.state.scroll * 0.9}px)`}} id="img3" src="./img/DesignShop/macbook-562499.png" alt="" />
  
        </div>  );
    }
}
 
export default DesignShop;

