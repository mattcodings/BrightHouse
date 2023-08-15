import { FaBolt, FaLightbulb, FaPowerOff } from "react-icons/fa";
import Power from "../components/Power";
import Temperature from "../components/Temperature";
import LightRangeSlider from "../components/LightRangeSlider";
import Lamp from "../components/Lamp";

const RoomControls = ({ room }) => {
  const title = room.charAt(0).toUpperCase() + room.slice(1);
  return (
    <div>
      <h2 className="room-header">{title}</h2>
      <hr />
      <div className="controls">
        <Power
          title="Power"
          className="power-box"
          localName="powerOn"
          icon={<FaPowerOff />}
          room={room}
        />
        <Power
          title="Lights"
          className="power-box"
          localName="lightsOn"
          icon={<FaLightbulb />}
          rangeBar={<LightRangeSlider room={room} />}
          room={room}
        />
        <Power
          title="Power Saving Mode"
          className="power-box"
          localName="powerSaveOn"
          icon={<FaBolt />}
          room={room}
        />
      </div>

      <div className="controls">
        <Temperature
          title="Temperature"
          localName="temperature"
          room={room}
          measurement="&deg;F"
        />
        <Lamp room={room} />
        <Temperature
          title="Humidity"
          localName="temperature"
          room={room}
          measurement="%"
        />
      </div>
    </div>
  );
};
export default RoomControls;
