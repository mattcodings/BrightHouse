const Lamp = ({ room }) => {
  setTimeout(() => {
    const localLight = Number(localStorage.getItem(room + "sliderAmount"));

    const lampLight = document.querySelector(".lamp-light");

    lampLight.style.background = `linear-gradient(
    rgba(255, 255, 0, ${localLight / 100}),
    rgba(255, 255, 0, ${localLight / 100}),
    rgba(255, 255, 0, ${localLight / 100}),
    rgba(255, 255, 0, ${localLight / 250}),
    rgba(255, 255, 0, ${localLight / 500})
  )`;
  }, 100);

  return (
    <div className="relative">
      <div className="lamp"></div>
      <div className="lamp-light"></div>
    </div>
  );
};
export default Lamp;
