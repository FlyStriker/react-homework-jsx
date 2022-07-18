import React from "react";
import "./addTimer.css";
import { useState } from "react";
import { useEffect } from "react";
import clock from "./img/ClockFace 1.png";
import clock_s from "./img/ClockFace_S.png";
import clock_m from "./img/ClockFace_M.png";
import clock_h from "./img/ClockFace_H.png";



export class ClassTimer extends React.Component {
  state = { seconds: this.props.seconds, minutes: this.props.minutes };

  componentWillMount() {
    this.state.seconds = this.props.seconds % 60;
    this.state.minutes = Math.floor(this.props.seconds / 60);
  }

  timer = () => {
    const { seconds, minutes } = this.state;
    if (seconds > 0) {
      this.setState(({ seconds }) => ({
        seconds: seconds - 1,
      }));
    }
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(this.timer);
      } else {
        this.setState(({ minutes }) => ({
          minutes: minutes - 1,
          seconds: 59,
        }));
      }
    }
  };
  stopInterval = () => {
    clearInterval(this.time);
    this.setState({ timerStatus: false });
  };

  startInterval = () => {
    this.time = setInterval(this.timer, 1000);
    this.setState({ timerStatus: true });
  };

  render() {
    return (
      <div className="header_info">
        <h1>
          {" "}
          Отчет времени до конца таймера {this.state.minutes} минут(а) :
          {this.state.seconds} секунд(а)
        </h1>

        <button
          onClick={
            !this.state.timerStatus ? this.startInterval : this.stopInterval
          }
        >
          {this.state.timerStatus ? (
            <b>Остановить таймер</b>
          ) : (
            <b>Запустить таймер</b>
          )}
        </button>
      </div>
    );
  }
}

class Watches extends React.Component {
  lal = () => {};
  secondLine = {};
  minuteLine = {};
  hourLine = {};

  componentDidUpdate() {
    this.secondLine = {
      transform: "rotate(" + (this.props.seconds / 60) * 360 + "deg)",
    };

    this.minuteLine = {
      transform: `rotate(${
        (this.props.minutes / 60) * 360 + (this.props.seconds / 60) * 6
      }deg)`,
    };

    this.hourLine = {
      transform: `rotate(${
        (this.props.hours / 12) * 360 + (this.props.minutes / 60) * 30
      }deg)`,
    };
  }

  render() {
    return (
      <div className="watch">
        {this.lal()}
        <img src={clock} alt="clock" className="convas_clock" />
        <img
          src={clock_s}
          style={this.secondLine}
          className="line second-line"
        />
        <img
          src={clock_m}
          style={this.minuteLine}
          className="line minute-line"
        />
        <img src={clock_h} style={this.hourLine} className="line hour-line" />
      </div>
    );
  }
}

const FuncTimerWithInputs = ({
  inpHours,
  inpMinutes,
  inpSeconds,
  refresh,
  render,
}) => {
  const [hours, setHours] = useState(inpHours);
  const [minutes, setMinutes] = useState(inpMinutes);
  const [seconds, setSeconds] = useState(inpSeconds);
  const [timerStatus, SetTimerStatus] = useState(false);

  const RenderField = render;

  const TimeButton = () =>
    SetTimerStatus((timerStatus) => {
      return !timerStatus;
    });

  useEffect(() => {}, [hours, minutes, seconds]);

  useEffect(() => {
    let interval = null;
    if (timerStatus) {
      interval = setInterval(() => {
        setSeconds((seconds) => {
          if (seconds > 0) setSeconds(seconds - 1);
          else if (seconds === 0) {
            setMinutes((minutes) => {
              if (minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds((seconds = 60));
              }
              if (minutes === 0 && seconds === 0) {
                if (hours > 0) {
                  setHours(hours - 1);
                  setMinutes((minutes = 59));
                  setSeconds((seconds = 60));
                } else if (hours === 0) {
                  setHours((hours) => {
                    if (hours === 0 && minutes === 0 && seconds === 0) {
                      clearInterval(interval);
                      return hours;
                    }
                    setMinutes((minutes = 59));
                    setSeconds((seconds = 60));
                  });
                }
                return minutes;
              }
            });
          }
          return seconds;
        });
      }, refresh);
    } else if (!timerStatus && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerStatus, seconds, refresh]);

  return (
    <>
      <div className="timer_convas_clock">
        <RenderField seconds={seconds} minutes={minutes} hours={hours} />
        <input
          type="number"
          className="input_hours"
          max="999"
          placeholder="Hours"
          onChange={(e) => setHours((hours) => (hours = e.target.value))}
        />
        <input
          type="number"
          className="input_minutes"
          max="59"
          placeholder="Minutes"
          onChange={(e) =>
            setMinutes((minutes) => (minutes = e.target.value * 1))
          }
        />
        <input
          type="number"
          className="input_seconds"
          max="59"
          placeholder="Seconds"
          onChange={(e) =>
            setSeconds((seconds) => (seconds = e.target.value * 1))
          }
        />
        <button onClick={TimeButton} className="button_timer">
          {timerStatus ? "Stop counter" : "Start counter"}
        </button>
      </div>
    </>
  );
};

export function TimerContainer({ seconds, minutes, hours }) {
  return (
    <div className="timer_container">
      <h2>
        {hours}:{minutes}:{seconds}
      </h2>
      <br />
      <Watches minutes={minutes} seconds={seconds} hours={hours} />
    </div>
  );
}

export default FuncTimerWithInputs;
