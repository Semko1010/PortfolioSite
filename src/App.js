import {useState} from "react"


import Mov from "./Component/mov/Mov"
import AboutMe from "./Component/AboutMe/AbotMe"
import Tasty from "./Component/tasty/Tasty"
import './App.css';



function App() {
  
//   const [offset, setOffset] =useState()
//   const [offset1, setOffset1] =useState()
  
//   const handleScroll1 = () => {
    
      
//       setOffset1(Math.floor(window.pageYOffset))
//    if(Math.floor(window.pageYOffset) >1400 && window.pageYOffset <3000){
//    document.querySelector(".number").innerHTML="1"
//    document.querySelector(".frameWork").innerHTML="react"
//    }
//    if(Math.floor(window.pageYOffset) >3100 && Math.floor(window.pageYOffset) <4000){
//     document.querySelector(".number").innerHTML="2"
//    document.querySelector(".frameWork").innerHTML="react"
//    }
//   }

  
//   window.addEventListener("scroll", handleScroll1)

// console.log(window.pageYOffset);
  return (
   
    <div className="App">
      <div className="header">
        <p className="number"></p>
      <h1>Semir Hamidovic</h1>
      <h2>Front End & Back End Developer</h2>
      <p className="frameWork"></p>
      </div>
      <div className="AboutMeDiv">
      <AboutMe/>
      </div>
      <div className="movDiv">
      <Mov/>
      </div>
      
      <div className="tastyDiv">
      <Tasty/>
      </div>

    </div>
  );
}

export default App;

