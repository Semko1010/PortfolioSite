import Mov from "./Component/mov/Mov"
import Tasty from "./Component/tasty/Tasty"
import './App.css';

function App() {
  



  return (
   
    <div className="App">
      <div className="header">
      <h1>Semir Hamidovic Portfolio</h1>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam sequi itaque mollitia expedita officiis facere nulla accusantium laboriosam eos distinctio numquam possimus iste voluptates voluptatum perferendis consequatur natus, reprehenderit corrupti suscipit voluptas impedit voluptatem corporis accusamus! Inventore ipsum amet mollitia aspernatur? Quod eligendi odio fuga mollitia qui similique architecto! Accusamus, culpa quisquam sapiente nostrum officia beatae officiis veritatis error rerum, at voluptates? Minima, praesentium, est unde aut soluta enim esse debitis voluptatibus labore consequatur neque beatae ea, quaerat necessitatibus tenetur earum ipsam facere iusto quia saepe maxime asperiores quo? Velit eveniet harum veritatis dolores cumque minima asperiores obcaecati corporis ad?</p>
      </div>
      <div className="movDiv">
      <Mov/>
      </div>
      <div ClassName="tastyDiv">
      <Tasty/>
      </div>

    </div>
  );
}

export default App;

