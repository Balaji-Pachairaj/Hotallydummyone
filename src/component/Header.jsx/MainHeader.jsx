import React from "react";
import "./Header.css";
import titleLogo from "../../assert/image/titleLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { uiSliceActions } from "../../store/UI";
import SearchBar from "./Menu/SearchBar";
import LogoBar from "./Menu/LogoBar";
const MainHeader = () => {
     const menuUi = useSelector((state) => {
          return state.ui.menuUi;
     });
     const dispatch = useDispatch();

     const OpenModulHandler = () => {
          dispatch(uiSliceActions.sArMenuModel(true));
     };
     return (
          <div className="mainHeaderBox position-relative">
               <div className="hamTitleBox d-flex gap-5 ">
                    <div className="hamBox">
                         <button onClick={OpenModulHandler}>
                              <FontAwesomeIcon icon={faBars} />
                         </button>
                    </div>
                    <div className="titleBox">
                         <img src={titleLogo} />
                    </div>
               </div>

               <LogoBar />
               <SearchBar />

               {menuUi.model && <Menu />}
          </div>
     );
};

export default MainHeader;
