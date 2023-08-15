import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import Wrapper from "../assets/wrappers/Temperature";
import { useState } from "react";
const Temperature = ({ title, measurement, room }) => {
  const [temperature, setTemperature] = useState(
    Number(localStorage.getItem(room + title)) || 70
  );

  function raiseTemperature() {
    setTemperature(temperature + 1);
    localStorage.setItem(room + title, temperature + 1);
  }
  function lowerTemperature() {
    setTemperature(temperature - 1);
    localStorage.setItem(room + title, temperature - 1);
  }
  return (
    <Wrapper>
      <section className="control-box">
        <h2>{title}</h2>
        <div className="arrow-box" onClick={raiseTemperature}>
          <BiUpArrow className="arrow" />
        </div>
        <h3>
          {temperature}
          {measurement}
        </h3>
        <div className="arrow-box" onClick={lowerTemperature}>
          <BiDownArrow className="arrow" />
        </div>
      </section>
    </Wrapper>
  );
};
export default Temperature;
