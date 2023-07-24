import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../component/Header.jsx/MainHeader";
const Root = () => {
     return (
          <div >
               <div>
                    <MainHeader />
               </div>
            
               <div>
                    <Outlet />
               </div>
           
          </div>
     );
};

export default Root;
