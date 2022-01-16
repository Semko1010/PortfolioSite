import React from 'react'
import "./Header.css"
class Header extends React.Component {

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
        setTimeout(() => {
        let h1 = document.querySelector(".header h1")
        let h2 = document.querySelector(".header h2")
        h1.style = `visibility:visible;opacity:1;`
        h2.style = `visibility:visible;opacity:1;`
},500)

        }
    render() { 
        return (
        <div>
            <h1>Semir Hamidovic</h1>
            <h2>Front-End & Back End Developer</h2>
        </div>
        )
    }
}
 
export default Header;