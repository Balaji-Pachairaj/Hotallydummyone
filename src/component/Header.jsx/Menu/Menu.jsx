import React from "react";
import "./Menu.css";
import { Card, CloseButton } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { uiSliceActions } from "../../../store/UI";
import { NavLink } from "react-router-dom";
const Menu = () => {
     const dispatch = useDispatch();
     const closeMenuHandler = () => {
          dispatch(uiSliceActions.sArMenuModel(false));
     };
     return (
          <Card className="menuBox p-4">
               <span className=" w-100 h-100 position-relative">
                    <NavLink
                         to="/"
                         className={({ isActive }) =>
                              isActive
                                   ? " text-decoration-underline text-primary"
                                   : null
                         }
                    >
                         <h1>Menu</h1>
                    </NavLink>
                    <NavLink
                         to="/salesinput"
                         className={({ isActive }) =>
                              isActive
                                   ? " text-decoration-underline text-primary"
                                   : null
                         }
                    >
                         <h1>Sales Input</h1>
                    </NavLink>
                    <NavLink
                         to="/inventory"
                         className={({ isActive }) =>
                              isActive
                                   ? " text-decoration-underline text-primary"
                                   : null
                         }
                    >
                         <h1>Inventory</h1>
                    </NavLink>
                    <NavLink
                         to="/statistics"
                         className={({ isActive }) =>
                              isActive
                                   ? " text-decoration-underline text-primary"
                                   : null
                         }
                    >
                         <h1>Statistics</h1>
                    </NavLink>
                    <div className="closeButton">
                         <CloseButton onClick={closeMenuHandler} />
                    </div>
               </span>
          </Card>
     );
};

export default Menu;
