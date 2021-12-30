import {useState} from "react"
const Tasty = () => {
    const [offset, setOffset] =useState()
    const [offset1, setOffset1] =useState()
    const handleScroll = () => {
      // && Math.floor(window.pageYOffset) <6100
      setOffset1(Math.floor(Math.floor(window.pageYOffset)))
      if(Math.floor(window.pageYOffset) >2500){
        setOffset(Math.floor(Math.floor(window.pageYOffset)))
       
       }
 
  }
  window.addEventListener("scroll", handleScroll)
    
  
   
  

  
  

    return (
    <div className="tasty">
      <h2 style={{transform: `translateX(${offset* 0.1}px) translateY(${offset* 0.2}px)`}}>The Tasty App</h2>
      <img style={{transform: `translateY(${-offset *0.4}px)`}}  src="/img/tasty/tasty1.png" alt="" />
      <img  style={{transform: `translateY(${-offset * 0.6}px)`}} src="img/tasty/tasty2.png" alt="" />
      <img  style={{transform: `translateY(${-offset * 1}px)`}}  src="img/tasty/tasty3.png" alt="" />

      </div> );
}
 
export default Tasty;