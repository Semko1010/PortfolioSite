import Header from "./Component/Header/Header"
import Mov from "./Component/mov/Mov"
import AboutMe from "./Component/AboutMe/AbotMe"
import Tasty from "./Component/tasty/Tasty"
import Music from "./Component/Music/Music"
import DesignShop from "./Component/DesignSHop/DesignShop"
import Est from "./Component/Est/Est"
import Skills from "./Component/Skills/Skills"
import Contact from "./Component/Contact/Contact"

import './App.css';



function App() {
  
window.onbeforeunload = function () {
window.scrollTo(0,0);
};
  return (
   
    <div className="App">
      <main>
      <div className="header">
        <Header/>
      
      
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
      <div className="musicDiv">
      <Music/>
      </div>
      <div className="shopDiv">
        <DesignShop/>
      </div>
      <div className="estDiv">
        <Est/>
      </div>
      <div className="skillsDiv">
        <Skills/>
      </div>
      <div className="contactDiv">
        <Contact/>
      </div>
      </main>
    </div>
  );
}

export default App;

