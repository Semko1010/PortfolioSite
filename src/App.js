
import Mov from "./Component/mov/Mov"
import AboutMe from "./Component/AboutMe/AbotMe"
import Tasty from "./Component/tasty/Tasty"
import Music from "./Component/Music/Music"
import DesignShop from "./Component/DesignSHop/DesignShop"
import './App.css';



function App() {
  
  window.onbeforeunload = function () {
 
    window.scrollTo(0,0);

};
  return (
   
    <div className="App">
      <main>
      <div className="header">
        
      <h1>Semir Hamidovic</h1>
      <h2>Front End & Back End Developer</h2>
      
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
      </main>
    </div>
  );
}

export default App;

