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
           
            if(window.matchMedia("(max-width: 360px)").matches){
                if(this.state.data >0 && this.state.data <0){
                    this.setState({scroll:this.state.data})
                    console.log("768");
                    
                }
            }
            else if(window.matchMedia("(max-width: 375px)").matches){
                if(this.state.data >0 && this.state.data <0){
                    this.setState({scroll:this.state.data})
                    console.log("768");
                    
                }
            }
            else if(window.matchMedia("(max-width: 768px)").matches){
                if(this.state.data >1500 && this.state.data <7100){
                    this.setState({scroll:this.state.data})
                    console.log("768");
                    
                }
            }
            else if(window.matchMedia("(max-width: 1024px)").matches){
                if(this.state.data >1950 && this.state.data <10000){
                    this.setState({scroll:this.state.data})
                    console.log("1440");
                    
                }
            }
            else if(window.matchMedia("(max-width: 1440px)").matches){
                if(this.state.data >2000 && this.state.data <6950){
                    this.setState({scroll:this.state.data})
                    console.log("1440");
                    
                }
            }
             else if(window.matchMedia("(max-width: 1680px)").matches){
                if(this.state.data >2500 && this.state.data <8050){
                    this.setState({scroll:this.state.data})
                    console.log("1680");
                    
                }
            }
            else if(window.matchMedia("(max-width: 1920px)").matches){
                if(this.state.data >5600 && this.state.data <8950){
                    this.setState({scroll:this.state.data})
                    console.log("1920");
                    
                }
            }
            else if(window.matchMedia("(max-width: 2560px)").matches){
                if(this.state.data >5600 && this.state.data <13050){
                    this.setState({scroll:this.state.data})
                    
                    
                }
            }
            
            
             
            }

    componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
   
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