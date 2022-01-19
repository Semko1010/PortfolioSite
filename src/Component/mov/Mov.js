import React, { Component } from 'react'
import "./Mov.css"

class Mov extends Component {
    constructor(props) {
        super(props);
        this.state = {
        scroll:0
        }
    }




        handleScroll1 = () =>{
            let el = document.querySelector(".movDiv")
            let elPosition = el.getBoundingClientRect();
            let screenPosition = window.innerHeight;
            
            if(elPosition.top + 100 < screenPosition){
                this.setState({scroll:window.pageYOffset})
                document.querySelector(".movText").style ="visibility:visible;opacity:1;transform: translateX(0);"
                
            }
            if(elPosition.top > screenPosition){
                
                document.querySelector(".movText").style ="visibility:hidden;opacity:0"
            }
            if(elPosition.bottom < screenPosition){
                document.querySelector(".movText").style ="visibility:hidden;opacity:0;"
            }
            }

    componentDidMount() {
        
        window.addEventListener("scroll", this.handleScroll1)
        window.addEventListener("scroll", this.handleScroll)

    }


    render() { 
        
        return ( <div className="mov">
            <div className="movText">
        <h2>The Movie App</h2>
        <h3 >Front-End Developer • Created with React</h3>
        <p >Find your favorite movies and enjoy them with your friends</p>
    
        <a href="https://the-movie-app-2021.netlify.app/" target="_blank" rel="noreferrer" class="movie-flip" data-back="Movie App" data-front="Show Me"> </a>
        </div>
        <img style={{transform: `translateY(${- this.state.scroll * 0.2}px)`}} id="img1" src="./img/mov/Bildschirmfoto 2021-12-29 um 09.59.27.png" alt="" />
        <img  style={{transform: `translateY(${- this.state.scroll * 0.6}px)`}} id="img2" src="./img/mov/Bildschirmfoto 2021-12-29 um 09.58.07.png" alt="" />
        <img  style={{transform: `translateY(${- this.state.scroll * 0.9}px)`}} id="img3" src="./img/mov/Bildschirmfoto 2021-12-29 um 09.56.23.png" alt="" />
  
        </div>  );
    }
}
 
export default Mov;
// import { useState } from "react"
// import { useEffect } from "react"
// function Mov(){
// const [scroll,setScroll] = useState(0)


    
//                 useEffect(() => {
//                     const handleScroll1 = () =>{
//                         let el = document.querySelector(".movDiv")
//                         let elPosition = el.getBoundingClientRect();
//                         let screenPosition = window.innerHeight;
                        
//                         if(elPosition.top + 100 < screenPosition){
//                             setScroll(window.pageYOffset)
//                             document.querySelector(".movText").style ="visibility:visible;opacity:1;transform: translateX(0);"
                            
//                         }
//                         if(elPosition.top > screenPosition){
                            
//                             document.querySelector(".movText").style ="visibility:hidden;opacity:0"
//                         }
//                         if(elPosition.bottom < screenPosition){
//                             document.querySelector(".movText").style ="visibility:hidden;opacity:0;"
//                         }
//                         }
//                         window.addEventListener("scroll", handleScroll1)
//                         console.log(window.pageYOffset);
//                   });  

// return ( <div className="mov">
//             <div className="movText">
//          <h2>The Movie App</h2>
//         <h3 >Front-End Developer • Created with React</h3>
//         <p >Find your favorite movies and enjoy them with your friends</p>
    
//          <a href="https://the-movie-app-2021.netlify.app/" target="_blank" rel="noreferrer" class="movie-flip" data-back="Movie App" data-front="Show Me"> </a>
//          </div>
//          <img style={{transform: `translateY(${- scroll * 0.2}px)`}} id="img1" src="./img/mov/Bildschirmfoto 2021-12-29 um 09.59.27.png" alt="" />
//          <img  style={{transform: `translateY(${- scroll * 0.6}px)`}} id="img2" src="./img/mov/Bildschirmfoto 2021-12-29 um 09.58.07.png" alt="" />
//          <img  style={{transform: `translateY(${- scroll * 0.9}px)`}} id="img3" src="./img/mov/Bildschirmfoto 2021-12-29 um 09.56.23.png" alt="" />
  
//          </div>  );
// }

// export default Mov
