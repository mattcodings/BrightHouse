import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import Wrapper from "../assets/wrappers/Temperature";
import { useEffect, useRef, useState } from "react";
const Temperature = ({ title, measurement, room }) => {
  // Code for 'mouse hold' retrieved from : https://stackoverflow.com/questions/61746141/change-state-as-long-as-mouse-is-over-an-element-in-react
  const interval = useRef(null);
  const [holdRaise, setHoldRaise] = useState(false);
  const [holdLower, setHoldLower] = useState(false);
  let [temperature, setTemperature] = useState(
    Number(localStorage.getItem(room + title)) || 70
  );

  useEffect(() => {
    if (holdRaise) {
      interval.current = setInterval(
        () => setTemperature((temperature) => temperature + 1),
        100
      );
    } else if (holdLower) {
      interval.current = setInterval(
        () => setTemperature((temperature) => temperature - 1),
        100
      );
    } else {
      clearInterval(interval.current);
    }
    localStorage.setItem(room + title, temperature);
    return () => clearInterval(interval.current);
  }, [holdRaise, holdLower]);

  function raiseTemperature() {
    setTemperature(temperature + 1);
    localStorage.setItem(room + title, temperature + 1);
  }
  function lowerTemperature() {
    setTemperature(temperature - 1);
    localStorage.setItem(room + title, temperature - 1);
  }
  if (temperature < 0) {
    temperature = 0;
  }
  if (temperature > 100) {
    temperature = 100;
  }
  return (
    <Wrapper>
      <section className="control-box">
        <h2 className="title">{title}</h2>
        <div
          className="arrow-box"
          onClick={raiseTemperature}
          onMouseDown={() => setHoldRaise(true)}
          onTouchStart={() => setHoldRaise(true)}
          onMouseUp={() => setHoldRaise(false)}
          onTouchEnd={() => setHoldRaise(false)}
        >
          <BiUpArrow className="arrow" />
        </div>
        <h2 className="amount">
          {temperature}
          {measurement}
        </h2>
        <div
          className="arrow-box"
          onClick={lowerTemperature}
          onMouseDown={() => setHoldLower(true)}
          onMouseUp={() => setHoldLower(false)}
        >
          <BiDownArrow className="arrow" />
        </div>
      </section>
    </Wrapper>
  );
};
export default Temperature;
