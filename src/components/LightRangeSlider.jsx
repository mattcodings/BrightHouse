import { useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const LightRangeSlider = ({ room }) => {
  const [amount, setAmount] = useState(
    Number(localStorage.getItem(room + "sliderAmount")) || 50
  );

  const slideAmount = localStorage.getItem(room + "sliderAmount");
  function setSliderAmount(e) {
    setAmount(e.target.value);
    setLocalAmount();
  }
  function setLocalAmount() {
    localStorage.setItem(room + "sliderAmount", amount);
  }

  return (
    <div>
      <span>
        <BsFillMoonFill />
      </span>
      <input
        type="range"
        min="0"
        max="100"
        step="0"
        value={slideAmount}
        onChange={setSliderAmount}
        className="range-meter"
      />

      <span>
        <BsFillSunFill />
      </span>
      <p>{slideAmount}%</p>
    </div>
  );
};
export default LightRangeSlider;
