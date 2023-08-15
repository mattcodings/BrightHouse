import { Outlet } from "react-router-dom";

import RoomNavbar from "./RoomNavbar";

const Layout = () => {
  return (
    <div>
      <RoomNavbar />
      <Outlet />
    </div>
  );
};
export default Layout;
