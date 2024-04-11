import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="p-4 ">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
