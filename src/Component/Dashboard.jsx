import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";


export const Dashboard = () => {
  return (
    
    <div className="d-flex">
     
      <Sidebar/>

     
      <div className="flex-grow-1 ">
        <Outlet />
      </div>
    </div>
  );
};
