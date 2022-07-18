import "./addSpoiler.css";
import ShowSpoiler from "./addSpoiler";
import RangeInput from "./RangeInput.jsx";
import PasswordInput from "./PasswordConfirm";

function App() {
  return (
    <div className="App">
      <ShowSpoiler header={<b>Нажми что бы открыть !</b>} children>
        <p>
          Доброе имя, как и живописное полотно, невозможно создать одним взмахом
          кисти: оно складывается из множества незначительных поступков.
          Поступая тем или иным образом, мы постепенно заслуживаем определённую
          репутацию.
        </p>
      </ShowSpoiler>
      <div className="rangeInput">
        <RangeInput min={3} max={12} />
        <br />
      </div>
      <div className="passwordInput">
        <PasswordInput />
      </div>
    </div>
  );
}

export default App;
