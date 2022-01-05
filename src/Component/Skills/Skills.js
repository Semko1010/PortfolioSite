import React, { Component } from 'react'
import "./Skills.css"


class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {  data:0,
                      scroll:0  }
    }
    // && this.state.data <780
    handleScroll = () => {
            this.setState({data:window.pageYOffset})
             if(this.state.data >6800 && this.state.data <8000){
            this.setState({scroll:this.state.data})
            
            
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

        
        return ( <article className="skills">
                           <h2 style={{transform: `translateX(${this.state.scroll * 0.5}px)`}}>Skills</h2>
                            <p style={{transform: `translateX(${-this.state.scroll * 0.5}px)`}}>HTML</p>
                            <p style={{transform: `translateX(${-this.state.scroll * 0.5}px)`}}>CSS</p>
                            <p style={{transform: `translateX(${-this.state.scroll * 0.5}px)`}}>Javascript</p>
                            <p style={{transform: `translateX(${-this.state.scroll * 0.5}px)`}}>React</p>
                            <p style={{transform: `translateX(${-this.state.scroll * 0.5}px)`}}>React Native</p>
                            <p style={{transform: `translateX(${-this.state.scroll * 0.5}px)`}}>Node.Js</p>
                            
                        </article> );
    }
}
 
export default AboutMe;