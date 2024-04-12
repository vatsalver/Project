import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="p-4 flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
