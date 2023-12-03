import up from "../../assets/up.png";
import down from "../../assets/down.png";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { useState } from "react";
const TimerSection = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hideCursor, setHideCursor] = useState(false);
  const increaseSecond = () => {
    if (seconds == 59) {
      return;
    }
    setSeconds((sec) => sec + 1);
  };
  const increaseMinute = () => {
    if (minutes == 59) {
      return;
    }
    setMinutes((min) => min + 1);
  };
  const increaseHour = () => {
    setHours((hours) => hours + 1);
  };
  const decreaseSecond = () => {
    if (seconds == 0) {
      return;
    }
    setSeconds((sec) => sec - 1);
  };
  const decreaseMinute = () => {
    if (minutes == 0) {
      return;
    }
    setMinutes((min) => min - 1);
  };
  const decreaseHour = () => {
    if (hours == 0) {
      return;
    }
    setHours((hours) => hours - 1);
  };

  function toHoursAndMinutes(totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}:${minutes}:${seconds}`;
  }

  const handleButtonClick = () => {
    setPlaying((prev) => !prev);
    setHideCursor(true);
  };

  return (
    <div
      style={{
        width: "64vw",
        height: "27vh",
        background: "#1E2343",
        position: "absolute",
        borderRadius: "12px",
        marginTop: "26px",
        display: "flex",
        boxSizing: "border-box",
        padding: "12px",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <div>
        <CountdownCircleTimer
          isPlaying={playing}
          duration={seconds + minutes * 60 + hours * 60 * 60}
          colors={["#FF6A6A"]}
        >
          {({ remainingTime }) => (
            <span style={{  color: "white", fontSize: "1.5rem" }}>
              {toHoursAndMinutes(remainingTime)}
            </span>
          )}
        </CountdownCircleTimer>
      </div>
      <div style={{ width: "35vw", height: "15px", textAlign: "center", marginTop: "-200px" }}>
        <div
          style={{
            color: "white",
            display: "flex",
            fontSize: "2rem",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ textAlign: "center", marginTop: "-15px" }}>
            <p style={{fontFamily:"Roboto", fontSize: "24px", color: "rgba(148, 148, 148, 1)"}}>Hours</p>
            <img
              style={{ width: "20px", height: "20px", position: "absolute", marginTop:"-10px", marginLeft: "-7px"}}
              onClick={increaseHour}
              src={up}
            />
            <p style={{paddingTop: "6px"}}>{hours}</p>
            <img
              style={{ width: "20px", height: "20px", position: "absolute", marginLeft: "-10px", marginTop:"-25px"}}
              onClick={decreaseHour}
              src={down}
            />
          </div>
          <div style={{ textAlign: "center", marginTop: "-13px" }}>
            <p style={{fontFamily:"Roboto", fontSize: "24px", color: "rgba(148, 148, 148, 1)"}}>Minutes</p>
            <img
              style={{ width: "20px", height: "20px", marginTop: "-10px", position: "absolute", marginLeft: "-10px"  }}
              onClick={increaseMinute}
              src={up}
            />
            <p style={{paddingTop: "6px"}}>{minutes}</p>
            <img
              style={{ width: "20px", height: "20px", position: "absolute", marginLeft: "-10px", marginTop:"-25px" }}
              onClick={decreaseMinute}
              src={down}
            />
          </div>
          <div style={{ textAlign: "center", marginTop: "-13px" }}>
            <p style={{fontFamily:"Roboto", fontSize: "24px", color: "rgba(148, 148, 148, 1)"}}>Seconds</p>
            <img
              style={{ width: "20px", height: "20px", position: "absolute", marginTop:"-10px", marginLeft: "-7px" }}
              onClick={increaseSecond}
              src={up}
            />
            <p style={{paddingTop: "6px"}}>{seconds}</p>
            <img
              style={{ width: "20px", height: "20px", position: "absolute", marginLeft: "-10px", marginTop:"-25px" }}
              onClick={decreaseSecond}
              src={down}
            />
          </div>
        </div>
        <div
          onClick={handleButtonClick}
          onMouseEnter={() => setHideCursor(false)}
          onMouseLeave={() => setHideCursor(true)}
          style={{
            marginTop: "-10px",
            background: "#FF6A6A",
            borderRadius: "12px",
            fontSize: "19px",
            padding: "0px",
            color: "white",
            textAlign: "center",
            height : "35px",
            width: "418px",
            marginLeft: "72px",
            cursor: hideCursor ? "none" : "pointer",
          }}
        >
          {playing ? <p>Pause</p> : <p>Start</p>}
        </div>
      </div>
    </div>
  );
};
export default TimerSection;
