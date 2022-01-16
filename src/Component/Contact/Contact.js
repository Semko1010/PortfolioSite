import React, { Component } from 'react'
import "./Contact.css"


class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {  data:0,
                      scroll:0  }
    }
  
    // handleScroll = () => {
    //         this.setState({data:window.pageYOffset})
    //         if(window.matchMedia("(max-width: 360px)").matches){
    //          if(this.state.data >0 && this.state.data <0){
    //         this.setState({scroll:this.state.data})
    //         console.log("768");
    //     }
    // }
    //         if(window.matchMedia("(max-width: 375px)").matches){
    //          if(this.state.data >0 && this.state.data <0){
    //         this.setState({scroll:this.state.data})
    //         console.log("768");
    //     }
    // }
    //         else if(window.matchMedia("(max-width: 768px)").matches){
    //          if(this.state.data >2000 && this.state.data <7600){
    //         this.setState({scroll:this.state.data})
    //         console.log("768");
    //     }
    // }
    //         else if(window.matchMedia("(max-width: 1024px)").matches){
    //          if(this.state.data >2000 && this.state.data <11000){
    //         this.setState({scroll:this.state.data})
    //         console.log("1440");
    //     }
    // }
    //         else if(window.matchMedia("(max-width: 1440px)").matches){
    //          if(this.state.data >2000 && this.state.data <8800){
    //         this.setState({scroll:this.state.data})
    //         console.log("1440");
    //     }
    // }
    //        else if(window.matchMedia("(max-width: 1680px)").matches){
    //          if(this.state.data >2000 && this.state.data <8800){
    //         this.setState({scroll:this.state.data})
    //         console.log("1680");
    //     }
    // }
    //        else if(window.matchMedia("(max-width: 1920px)").matches){
    //          if(this.state.data >7300 && this.state.data <10100){
    //         this.setState({scroll:this.state.data})
    //         console.log("1920");
    //     }
            
    //         }
    //        else if(window.matchMedia("(max-width: 2560px)").matches){
    //          if(this.state.data >7300 && this.state.data <13100){
    //         this.setState({scroll:this.state.data})
            
    //     }
            
    //         }
    //     }
        handleScroll1 = () =>{
            let el = document.querySelector(".contactDiv")
            let elPosition = el.getBoundingClientRect();
            let screenPosition = window.innerHeight;
            if(window.matchMedia("(max-width: 360px)").matches){
                this.setState({scroll:0})
            }
            if(window.matchMedia("(max-width: 375px)").matches){
                this.setState({scroll:0})
            }
            else if(elPosition.top < screenPosition){
                this.setState({scroll:elPosition.y})
               
                
            }
            
            }


    componentDidMount() {
    window.addEventListener("scroll", this.handleScroll1)
    
}

  

    render() { 

        
        return ( <article className="contact">
                           <h2 style={{transform: `translateX(${-this.state.scroll * 0.5}px)`}}>Contact</h2>
                            <div>
                        <a href="https://github.com/Semko1010" target="_blank" rel="noreferrer"><img src="./img/contact/github.svg" alt="" s/></a>
                        <a href="https://www.linkedin.com/in/semir-hamidovic/" target="_blank" rel="noreferrer"><img src="./img/contact/linkedin.svg" alt="" /></a> 
                        <a href="mailto:semir01020@gmail.com" target="_blank" rel="noreferrer"><img src="./img/contact/at-solid.svg" alt="" /></a>   
                        </div>
                        </article> );
    }
}
 
export default AboutMe;