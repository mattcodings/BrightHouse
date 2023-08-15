import { BiSolidUpArrow } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import links from "../utils/links";
import Wrapper from "../assets/wrappers/RoomNavbarItem";
import { useState } from "react";
// import livingRoom from "../utils/localStorage";

const RoomNavbar = () => {
  const [tab, setTab] = useState(false);
  const setActiveTab = () => {
    setTab(!tab);
  };
  const bedroom = {
    bedroomPower: localStorage.getItem("bedroompowerOn"),
    bedroomLights: localStorage.getItem("bedroomlightsOn"),
    bedroomPowerSave: localStorage.getItem("bedroompowerSaveOn"),
  };
  const livingRoom = {
    livingRoomPower: localStorage.getItem("livingRoompowerOn"),
    livingRoomLights: localStorage.getItem("livingRoomlightsOn"),
    livingRoomPowerSave: localStorage.getItem("livingRoompowerSaveOn"),
  };
  const kitchen = {
    kitchenPower: localStorage.getItem("kitchenpowerOn"),
    kitchenLights: localStorage.getItem("kitchenlightsOn"),
    kitchenPowerSave: localStorage.getItem("kitchenpowerSaveOn"),
  };
  const bathroom = {
    bathroomPower: localStorage.getItem("bathroompowerOn"),
    bathroomLights: localStorage.getItem("bathroomlightsOn"),
    bathroomPowerSave: localStorage.getItem("bathroompowerSaveOn"),
  };
  const diningRoom = {
    diningRoomPower: localStorage.getItem("diningRoompowerOn"),
    diningRoomLights: localStorage.getItem("diningRoomlightsOn"),
    diningRoomPowerSave: localStorage.getItem("diningRoompowerSaveOn"),
  };
  const kidsRoom = {
    kidsRoomPower: localStorage.getItem("kidsRoompowerOn"),
    kidsRoomLights: localStorage.getItem("kidsRoomlightsOn"),
    kidsRoomPowerSave: localStorage.getItem("kidsRoompowerSaveOn"),
  };

  const bedroomActive = Object.values(bedroom).includes("true");
  const livingRoomActive = Object.values(livingRoom).includes("true");
  const kitchenActive = Object.values(kitchen).includes("true");
  const bathroomActive = Object.values(bathroom).includes("true");
  const diningRoomActive = Object.values(diningRoom).includes("true");
  const kidsRoomActive = Object.values(kidsRoom).includes("true");

  function checkRoomUsage(path) {
    if (bedroomActive && path === "/") {
      return "room-link room-in-use";
    }
    if (livingRoomActive && path === "living-room") {
      return "room-link room-in-use";
    }
    if (kitchenActive && path === "kitchen") {
      return "room-link room-in-use";
    }
    if (bathroomActive && path === "bathroom") {
      return "room-link room-in-use";
    }
    if (diningRoomActive && path === "dining-room") {
      return "room-link room-in-use";
    }
    if (kidsRoomActive && path === "kids-room") {
      return "room-link room-in-use";
    }
    return "room-link";
  }

  const roomInUse =
    localStorage.getItem("livingroom") === "true" ? true : false;

  return (
    <Wrapper>
      {links.map((link) => {
        const { name, path, active } = link;

        return (
          <section key={name} className={checkRoomUsage(path)}>
            <NavLink to={path} onClick={setActiveTab} end>
              <h3 className="room-name">{name}</h3>
              {checkRoomUsage(path) === "room-link" ? (
                <p>Not active</p>
              ) : (
                <p>Active</p>
              )}
            </NavLink>
            <BiSolidUpArrow className="active-arrow" />
          </section>
        );
      })}
    </Wrapper>
  );
};
export default RoomNavbar;
