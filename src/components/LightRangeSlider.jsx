import { useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const LightRangeSlider = ({ room }) => {
  let [amount, setAmount] = useState(
    Number(localStorage.getItem(room + "sliderAmount")) || 0
  );

  const slideAmount = localStorage.getItem(room + "sliderAmount");
  function setSliderAmount(e) {
    setAmount(e.target.value);
    setLocalAmount();
  }
  function setLocalAmount() {
    localStorage.setItem(room + "sliderAmount", amount);
  }

  function increaseAmount() {
    setAmount(amount + 1);
    if (amount > 99) {
      amount = 99;
    }
    localStorage.setItem(room + "sliderAmount", amount + 1);
  }
  function decreaseAmount() {
    setAmount(amount - 1);
    if (amount < 1) {
      amount = 1;
    }
    localStorage.setItem(room + "sliderAmount", amount - 1);
  }

  return (
    <div>
      <span onClick={decreaseAmount}>
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

      <span onClick={increaseAmount}>
        <BsFillSunFill />
      </span>
      <p>{slideAmount}%</p>
    </div>
  );
};
export default LightRangeSlider;
