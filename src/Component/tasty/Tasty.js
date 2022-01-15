import React, { Component } from 'react'
import "./Tasty.css"

class Tasty extends Component {
  constructor(props) {
    super(props);
    this.state = { data:0,scroll:0 }
  }


  handleScroll = () => {
    this.setState({data:window.pageYOffset})
    if(window.matchMedia("(max-width: 360px)").matches){
     if(this.state.data >0 && this.state.data <3650){
    this.setState({scroll:this.state.data})
     
  }
  

    }
    else if(window.matchMedia("(max-width: 375px)").matches){
     if(this.state.data >0 && this.state.data <4650){
    this.setState({scroll:this.state.data})
  
  }
    }
    else if(window.matchMedia("(max-width: 768px)").matches){
    if(this.state.data >800 && this.state.data <4650){
    this.setState({scroll:this.state.data})
   
  }
    }
    else if(window.matchMedia("(max-width: 1440px)").matches){
     if(this.state.data >1200 && this.state.data <4650){
    this.setState({scroll:this.state.data})
    
  }
    }
    else if(window.matchMedia("(max-width: 1680px)").matches){
     if(this.state.data >1200 && this.state.data <4650){
    this.setState({scroll:this.state.data})
    
  }
    }
    else if(window.matchMedia("(max-width: 1920px)").matches){
     if(this.state.data >1200 && this.state.data <4650){
    this.setState({scroll:this.state.data})
   
  }
    }
    else if(window.matchMedia("(max-width: 2560px)").matches){
    if(this.state.data >1200 && this.state.data <4650){
    this.setState({scroll:this.state.data})
  
  }
    }
      }

      handleScroll1 = () =>{
        let el = document.querySelector(".tastyDiv")
        let elPosition = el.getBoundingClientRect();
        let screenPosition = window.innerHeight;

        if(elPosition.top + 200 < screenPosition){
            console.log("test");
            document.querySelector(".tastyText").style ="visibility:visible;opacity:1;transform: translateX(0);"
        }
        if(elPosition.top > screenPosition){
            console.log("test");
            document.querySelector(".tastyText").style ="visibility:hidden;opacity:0"
        }
        if(elPosition.bottom < screenPosition){
            document.querySelector(".tastyText").style ="visibility:hidden;opacity:0"
        }
        }
componentDidMount() {
  window.addEventListener("scroll", this.handleScroll1)
    window.addEventListener("scroll", this.handleScroll)

}
  render() { 
    return ( <div className="tasty">
      <div className="tastyText">
    <h2 ><a href="https://the-tasty-app.netlify.app/" target="_blank" rel="noreferrer">The Tasty App</a></h2>
    <h3 >Front-End Developer • Created with React</h3>
    <p >cook your favorite dishes with your friends</p>
    </div>
    <img style={{transform: `translateY(${-this.state.scroll *0.2}px)`}}  src="/img/tasty/tasty1.png" alt="" />
    <img  style={{transform: `translateY(${-this.state.scroll * 0.6}px)`}} src="img/tasty/tasty2.png" alt="" />
    <img  style={{transform: `translateY(${-this.state.scroll * 0.9}px)`}}  src="img/tasty/tasty3.png" alt="" />

    </div>  );
  }
}
 
export default Tasty;