import React, { Component } from 'react'



// class AboutMe extends React.Component {

//     state={data:0,
//         test:0        
//     }

//     handleScroll = () => {
//     this.setState({data:window.pageYOffset})
//     if(this.state.data ==100){
//     this.setState({scroll:100})
//     console.log("test");
    
//     }
//      }
     
//      componentDidMount() {
//         window.addEventListener("scroll", this.handleScroll)
//      }
//     render() { 
//        console.log(this.state.test);
//         return <article>
//                <h2 style={{transform: `translateX(${this.state.test}px)`}}>About Me</h2>
//                 <p style={{transform: `translateX(${-this.state.test}px)`}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe earum sint magnam porro fugiat repellat, molestias aliquid placeat quaerat, atque expedita fuga facilis sunt itaque architecto. Quam, quia! Numquam, facere.</p>
//              </article>;
//     }
// }
 
// export default AboutMe;


class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {  data:0,
                      scroll:0  }
    }

    handleScroll = () => {
            this.setState({data:window.pageYOffset})
             if(this.state.data >0 && this.state.data <780){
            this.setState({scroll:this.state.data})
            
            
            }
              }


    componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    }



    render() { 

        
        return ( <article>
                           <h2 style={{transform: `translateX(${this.state.scroll * 0.5}px)`}}>About Me</h2>
                            <p style={{transform: `translateX(${-this.state.scroll * 0.5}px)`}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe earum sint magnam porro fugiat repellat, molestias aliquid placeat quaerat, atque expedita fuga facilis sunt itaque architecto. Quam, quia! Numquam, facere.</p>
                        </article> );
    }
}
 
export default AboutMe;