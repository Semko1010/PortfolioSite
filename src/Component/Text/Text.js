// import React, { Component } from 'react'
// import "./Text.css"

// class Text extends React.Component {
//     state={h2:"",p1:"",p2:"",data:0}


//     handleScroll = () => {
//         this.setState({data:window.pageYOffset})
//         if(window.matchMedia("(max-width: 1920px)").matches){
//         if(this.state.data >1700 && this.state.data <3000){
//             // document.querySelector(".textNewDiv").style="background:linear-gradient(to bottom, rgb(109, 109, 109) 50%, #fff 50%);"
        
        
//         this.setState({h2:"The Movie App"})
//         this.setState({p1:"Front-End Developer • Created with React"})
//         this.setState({p2:"Find your favorite movies and enjoy them with your friends"})
        
       
        
//         document.querySelector(".textNewDiv").style.backgroundPosition = "top left"
//         document.querySelector(".textNewDiv").style.color = "white"
//         console.log("test");
//         }
//     }
//         if(window.matchMedia("(max-width: 1920px)").matches){
//         if(this.state.data >3000 && this.state.data <5000){
        
//         this.setState({h2:"The Tasty App"})
//         this.setState({p1:"Front-End Developer • Created with React"})
//         this.setState({p2:"Find your favorite movies and enjoy them with your friends"})
//         // document.querySelector(".textNewDiv").style="background:linear-gradient(to top, rgb(159, 159, 159) 50%, #fff 50%);"
//         document.querySelector(".textNewDiv").style.backgroundPosition = "top left"
//         document.querySelector(".textNewDiv").style.color = "black"
        
        
    
//         console.log("test");
//         }
//     }
        
        
// }
// handleScroll1 = () =>{
//     let el = document.querySelector(".movDiv")
//     let elPosition = el.getBoundingClientRect();
//     let screenPosition = window.innerHeight;
//     let tasty = document.querySelector(".tastyDiv")
//     let elPositionTasty = tasty.getBoundingClientRect();

//     if(elPosition.top < screenPosition){
//         this.setState({h2:"The Movie App"})
//         this.setState({p1:"Front-End Developer • Created with React"})
//         this.setState({p2:"Find your favorite movies and enjoy them with your friends"})
//         document.querySelector(".textNewDiv").style.backgroundPosition = "top left"
//         document.querySelector(".textNewDiv").style.opacity = 1
//         document.querySelector(".textNewDiv").style.visibility = "visible"
//         console.log("test");
        
//     }
//     if(elPosition.top > screenPosition){
        
//         document.querySelector(".textNewDiv").style.opacity = 0
//         document.querySelector(".textNewDiv").style.visibility = "hidden"
       
//     }
//     if(elPosition.bottom < screenPosition){
        
//         document.querySelector(".textNewDiv").style.opacity = 0
//         document.querySelector(".textNewDiv").style.visibility = "hidden"
//     }

   
//     if(elPositionTasty.top < screenPosition){
//         this.setState({h2:"The Tasty App"})
//         this.setState({p1:"Front-End Developer • Created with React"})
//         this.setState({p2:"Find your favorite movies and enjoy them with your friends"})
//         document.querySelector(".textNewDiv").style.backgroundPosition = "top left"
//         document.querySelector(".textNewDiv").style.opacity = 1
//         document.querySelector(".textNewDiv").style.visibility = "visible"
//         console.log("test");
        
//     }
//     if(elPositionTasty.top > screenPosition){
        
//         document.querySelector(".textNewDiv").style.opacity = 0
//         document.querySelector(".textNewDiv").style.visibility = "hidden"
       
//     }
//     if(elPositionTasty.bottom < screenPosition){
        
//         document.querySelector(".textNewDiv").style.opacity = 0
//         document.querySelector(".textNewDiv").style.visibility = "hidden"
//     }
//     }

//     componentDidMount() {
//         window.addEventListener("scroll", this.handleScroll1)
       
// }
//     render() { 

//         return <div className="textNewDiv">
//             <h2>{this.state.h2}</h2>
//             <p>{this.state.p1}</p>
//             <p>{this.state.p2}</p>
//         </div>;
//     }
// }
 
// export default Text;