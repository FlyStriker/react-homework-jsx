import "./addSpoiler.css";
import ShowSpoiler from "./addSpoiler.jsx";
import RangeInput from "./RangeInput.jsx";
import PasswordInput from "./PasswordConfirm.jsx";
import {ClassTimer} from "./addTimer.jsx";
import FuncTimerWithInputs from "./addTimer.jsx";
import {TimerContainer} from "./addTimer.jsx";


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
      <ClassTimer minutes={0} seconds={62} />
      <FuncTimerWithInputs inpHours={0} inpMinutes={0} inpSeconds={0} refresh={1000} render={TimerContainer}/>
    </div>
  );
}

export default App;
