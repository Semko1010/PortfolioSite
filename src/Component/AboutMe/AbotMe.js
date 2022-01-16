import React, { Component } from 'react'
import "./AboutMe.css"


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
             if(this.state.data >0 && this.state.data <1500){
            this.setState({scroll:this.state.data})
            }
        }
           else if(window.matchMedia("(max-width: 768px)").matches){
             if(this.state.data >0 && this.state.data <1220){
            this.setState({scroll:this.state.data})
            }
}
           else if(window.matchMedia("(max-width: 1024px)").matches){
             if(this.state.data >0 && this.state.data <2000){
            this.setState({scroll:this.state.data})
            }
}
           else if(window.matchMedia("(max-width: 1440px)").matches){
             if(this.state.data >0 && this.state.data <1050){
            this.setState({scroll:this.state.data})
            }
}
          else if(window.matchMedia("(max-width: 1920px)").matches){
          if(this.state.data >0 && this.state.data <1520){
            this.setState({scroll:this.state.data})
            }
}
          else if(window.matchMedia("(max-width: 2560px)").matches){
          if(this.state.data >0){
            this.setState({scroll:this.state.data})
            }
}

              }


    componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  

    render() { 

        
        return ( <article className="aboutmearticle">
                           <h2 style={{transform: `translateX(${this.state.scroll * 0.5}px)`}}>About Me</h2>
                            <p style={{transform: `translateX(${-this.state.scroll * 0.5}px)`}}>Front-End developer who is passionate about developing projects and getting to know new technologies</p>
                        </article> );
    }
}
 
export default AboutMe;