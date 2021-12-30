import {useState} from "react"
const Mov = () => {
    
    const [offset, setOffset] =useState()
    const [offset1, setOffset1] =useState()
    const handleScroll1 = () => {
      
        // && Math.floor(window.pageYOffset) <3000
        setOffset1(Math.floor(Math.floor(window.pageYOffset)))
     if(Math.floor(window.pageYOffset) >1400 ){
      setOffset(Math.floor(Math.floor(window.pageYOffset)))
     
     }
   
    }
    window.addEventListener("scroll", handleScroll1)





    return (
    <div className="mov">
      <h2 style={{transform: `translateX(${offset * 0.1}px) translateY(${offset* 0.1}px)`}}>The Movie App</h2>
      <img style={{transform: `translateY(${-offset *0.4}px)`}} id="img1" src="./img/mov/Bildschirmfoto 2021-12-29 um 09.59.27.png" alt="" />
      <img  style={{transform: `translateY(${-offset*0.6}px)`}} id="img2" src="./img/mov/Bildschirmfoto 2021-12-29 um 09.58.07.png" alt="" />
      <img  style={{transform: `translateY(${-offset* 0.8}px)`}} id="img3" src="./img/mov/Bildschirmfoto 2021-12-29 um 09.56.23.png" alt="" />

      </div> );
}
 
export default Mov;

