import React, { Component } from 'react'
import "./Text.css"
const mystyle = {
    background: 'linear-gradient(to bottom, rgb(109, 109, 109) 50%, #fff 50%);background-size: 100% 200%;background-position: bottom left;transition: all .5s ease-out;'
 }
class Text extends React.Component {
    state={h2:"",p1:"",p2:"",data:0}


    handleScroll = () => {
        this.setState({data:window.pageYOffset})
        if(window.matchMedia("(max-width: 1920px)").matches){
        if(this.state.data >1700 && this.state.data <3000){
            // document.querySelector(".textNewDiv").style="background:linear-gradient(to bottom, rgb(109, 109, 109) 50%, #fff 50%);"
        
        
        this.setState({h2:"The Movie App"})
        this.setState({p1:"Front-End Developer • Created with React"})
        this.setState({p2:"Find your favorite movies and enjoy them with your friends"})
        
       
        
        document.querySelector(".textNewDiv").style.backgroundPosition = "top left"
        document.querySelector(".textNewDiv").style.color = "white"
        console.log("test");
        }
    }
        if(window.matchMedia("(max-width: 1920px)").matches){
        if(this.state.data >3000 && this.state.data <5000){
        
        this.setState({h2:"The Tasty App"})
        this.setState({p1:"Front-End Developer • Created with React"})
        this.setState({p2:"Find your favorite movies and enjoy them with your friends"})
        // document.querySelector(".textNewDiv").style="background:linear-gradient(to top, rgb(159, 159, 159) 50%, #fff 50%);"
        document.querySelector(".textNewDiv").style.backgroundPosition = "top left"
        document.querySelector(".textNewDiv").style.color = "black"
        
        
    
        console.log("test");
        }
    }
        
        
}


    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
}
    render() { 

        return <div className="textNewDiv">
            <h2>{this.state.h2}</h2>
            <p>{this.state.p1}</p>
            <p>{this.state.p2}</p>
        </div>;
    }
}
 
export default Text;