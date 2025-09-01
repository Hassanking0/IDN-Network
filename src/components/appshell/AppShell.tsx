import { Outlet } from "react-router-dom";
import Navbar from "../navbar"

const AppShell = () => {
  return (
    <div>
      <h1>App Shell Layout</h1>
      <Outlet /> {/* For rendering child routes */}
    </div>
  );
};


export default AppShell