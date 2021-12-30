import {useState}from 'react'
const AboutMe = () => {
    const [offset, setOffset] =useState()
    const [offset1, setOffset1] =useState()
    const handleScroll1 = () => {
      
       
        setOffset1(Math.floor(Math.floor(window.pageYOffset)))
     if(Math.floor(window.pageYOffset) >100 && Math.floor(window.pageYOffset) <3000){
      setOffset(Math.floor(Math.floor(window.pageYOffset)))
     
     }
   
    }
    window.addEventListener("scroll", handleScroll1)


    return ( <article>
        <h2 style={{transform: `translateX(${offset * 0.5}px)`}}>About Me</h2>
        <p style={{transform: `translateX(${-offset * 0.5}px)`}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe earum sint magnam porro fugiat repellat, molestias aliquid placeat quaerat, atque expedita fuga facilis sunt itaque architecto. Quam, quia! Numquam, facere.</p>
      </article> );
}
 
export default AboutMe;