import React, { Component } from 'react'
import "./Contact.css"


class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {  data:0,
                      scroll:0  }
    }
    // && this.state.data <780
    handleScroll = () => {
            this.setState({data:window.pageYOffset})
            if(window.matchMedia("(max-width: 375px)").matches){
             if(this.state.data >5400 && this.state.data <7600){
            this.setState({scroll:this.state.data})
            console.log("768");
        }
    }
            else if(window.matchMedia("(max-width: 768px)").matches){
             if(this.state.data >7000 && this.state.data <7600){
            this.setState({scroll:this.state.data})
            console.log("768");
        }
    }
            else if(window.matchMedia("(max-width: 1440px)").matches){
             if(this.state.data >6200 && this.state.data <8800){
            this.setState({scroll:this.state.data})
            console.log("1440");
        }
    }
           else if(window.matchMedia("(max-width: 1680px)").matches){
             if(this.state.data >6900 && this.state.data <8800){
            this.setState({scroll:this.state.data})
            console.log("1680");
        }
    }
           else if(window.matchMedia("(max-width: 1920px)").matches){
             if(this.state.data >7300 && this.state.data <8800){
            this.setState({scroll:this.state.data})
            console.log("1920");
        }
            
            }
        }
    


    componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    setTimeout(() => {
    let h1 = document.querySelector(".header h1")
    let h2 = document.querySelector(".header h2")
    h1.style = `visibility:visible;opacity:1`
    h2.style = `visibility:visible;opacity:1`
},500)
    }

  

    render() { 

        
        return ( <article className="contact">
                           <h2 style={{transform: `translateX(${-this.state.scroll * 0.5}px)`}}>Contact</h2>
                            
                        <a href="https://github.com/Semko1010"><img src="./img/contact/github.svg" alt="" style={{transform: `translateX(${this.state.scroll * 0.5}px)`}}/></a>
                        <a href="https://www.linkedin.com/in/semir-hamidovic/"><img src="./img/contact/linkedin.svg" alt="" style={{transform: `translateX(${this.state.scroll * 0.5}px)`}}/></a> 
                        <a href="mailto:semir01020@gmail.com"><img src="./img/contact/at-solid.svg" alt="" style={{transform: `translateX(${this.state.scroll * 0.5}px)`}}/></a>   
                            
                        </article> );
    }
}
 
export default AboutMe;