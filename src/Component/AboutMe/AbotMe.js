import React, { Component } from 'react'



class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {  data:0,
                      scroll:0  }
    }
    // && this.state.data <780
    handleScroll = () => {
            this.setState({data:window.pageYOffset})
             if(this.state.data >0 && this.state.data <920){
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

        
        return ( <article>
                           <h2 style={{transform: `translateX(${this.state.scroll * 0.5}px)`}}>About Me</h2>
                            <p style={{transform: `translateX(${-this.state.scroll * 0.5}px)`}}>Front-end developer who is passionate about developing projects and getting to know new technologies</p>
                        </article> );
    }
}
 
export default AboutMe;