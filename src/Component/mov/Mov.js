import {useState} from "react"
const Mov = () => {
    const [offset, setOffset] =useState()
    const handleScroll = () => setOffset(window.pageYOffset)
    window.addEventListener("scroll", handleScroll)



console.log(offset);
    return (
    <div className="mov">
      <h2 style={{transform: `translateX(${offset* 0.3}px) translateY(${offset* 0.5}px)`}}>Movie Liste</h2>
      <img style={{transform: `translateY(${offset* 0.4}px)`}} id="img1" src="./img/mov/Bildschirmfoto 2021-12-29 um 09.59.27.png" alt="" />
      <img  style={{transform: `translateY(${offset* 0.3}px)`}} id="img2" src="./img/mov/Bildschirmfoto 2021-12-29 um 09.58.07.png" alt="" />
      <img  style={{transform: `translateY(${offset* 0.1}px)`}} id="img3" src="./img/mov/Bildschirmfoto 2021-12-29 um 09.56.23.png" alt="" />

      </div> );
}
 
export default Mov;