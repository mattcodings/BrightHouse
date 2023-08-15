import { FaPowerOff } from "react-icons/fa";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import Wrapper from "../assets/wrappers/Power";
import { useState } from "react";

const Power = ({ title, icon, rangeBar, room, localName }) => {
  const checkPower = () => {
    const power = localStorage.getItem(room + localName) === "true";
    document.body.classList.toggle("power-on", power);
    return power;
  };
  const [power, setPower] = useState(checkPower);

  const togglePower = () => {
    const newPower = !power;
    setPower(newPower);
    document.body.classList.toggle("power-on", power);
    localStorage.setItem(room + localName, newPower);
  };

  return (
    <Wrapper>
      <section className={power ? "control-box power-on" : "control-box"}>
        <div className="box-heading">
          <h3>{title}</h3>
          {icon}
        </div>
        <div className="box-content">
          {power ? (
            <BsToggleOn onClick={togglePower} className="toggle-icon" />
          ) : (
            <BsToggleOff onClick={togglePower} className="toggle-icon" />
          )}
          {power ? <span>Currently On</span> : <span>Currently Off</span>}
        </div>
        <div className="range-bar">{rangeBar}</div>
      </section>
    </Wrapper>
  );
};
export default Power;
