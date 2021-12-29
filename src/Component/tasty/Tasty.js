import {useState} from "react"
const Tasty = () => {
    const [offset, setOffset] =useState()
    const handleScroll = () => setOffset(window.pageYOffset)
    window.addEventListener("scroll", handleScroll)




    return (
    <div className="tasty">
      <h2 style={{transform: `translateX(${offset* 0.1}px) translateY(${offset* 0.5}px)`}}>Tasty</h2>
      <img style={{transform: `translateY(${offset* 0.1}px)`}}  src="/img/tasty/tasty1.png" alt="" />
      <img  style={{transform: `translateY(${offset* 0.4}px)`}} src="img/tasty/tasty2.png" alt="" />
      <img  style={{transform: `translateY(${offset* 0.2}px)`}}  src="img/tasty/tasty3.png" alt="" />

      </div> );
}
 
export default Tasty;