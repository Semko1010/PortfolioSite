import React, { Component } from 'react'


class NumberFrameWork extends Component {
    constructor(props) {
        super(props);
        this.state = {number:null,framework:"",data:0 }
    }

    handleScroll=()=>{
    this.setState({data:window.pageYOffset}) 
    if(this.state.data >=0 && this.state.data<1800){
        let numberPtag = document.querySelector(".NumberFramework p:nth-of-type(1)")
        let frameWorkPtag = document.querySelector(".NumberFramework p:nth-of-type(2)")
        numberPtag.style.visibility = "hidden"
        numberPtag.style.opacity =0;
        frameWorkPtag.style.visibility = "hidden"
        frameWorkPtag.style.opacity =0;
    } 
    if(this.state.data >1700 && this.state.data<2000){
        this.setState({number:1})
        this.setState({framework:"React"})
        let numberPtag = document.querySelector(".NumberFramework p:nth-of-type(1)")
        let frameWorkPtag = document.querySelector(".NumberFramework p:nth-of-type(2)")
        numberPtag.style = `visibility:visible;opacity:1;left: 2vw; top:2vh`
        frameWorkPtag.style =`visibility:visible;opacity:1;left: 2vw; bottom:2vh`
        
       
    }  
    if(this.state.data >3000 && this.state.data<4100){
        let numberPtag = document.querySelector(".NumberFramework p:nth-of-type(1)")
        let frameWorkPtag = document.querySelector(".NumberFramework p:nth-of-type(2)")
        this.setState({number:2})
        this.setState({framework:"React"})
        numberPtag.style = `visibility:visible;opacity:1;right: 2vw; top:2vh`
        frameWorkPtag.style =`visibility:visible;opacity:1;right: 2vw; bottom:2vh`
    
    }  
    }

    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll)  
    }

    render() { 
        return ( <div className="NumberFramework">
            <p>{this.state.number}</p>
            <p>{this.state.framework}</p>

        </div> );
    }
}
 
export default NumberFrameWork;