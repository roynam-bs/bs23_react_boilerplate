import './RootNavigation.css';
import { Outlet } from "react-router-dom";

import TopBar from "../../components/TopBar/TopBar";
import SideBar from "../../components/SideBar/SideBar";

const RootNavigation = () => {
  return <>
      <SideBar/>
      <TopBar />
      <Outlet />
  </>
};

export default RootNavigation;

