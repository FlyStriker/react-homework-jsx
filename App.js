import "./addSpoiler.css";
import ShowSpoiler from "./addSpoiler";

function App() {
  return (
    <div className="App">
      <ShowSpoiler header={<b>Push to show</b>} children>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quia
          enim illum ea eum laudantium odit modi esse minus impedit earum iusto
          officiis animi porro voluptatibus dolor ab et aspernatur!
        </p>
      </ShowSpoiler>
    </div>
  );
}

export default App;
