import React, { useState } from "react";
import "./Table.css";
import { Button, Card, Dropdown, DropdownButton } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faAngleUp,
     faCircleChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { qualityConverter, qualityml } from "./IndivItem";
const StatusBar = ({ status , remaining , qualityUsed , type}) => {
     const [showDropdown, setShowDropdown] = useState(false);
     let variant = status === "IN" ? "success" : "danger";

     const toggleDropdown = () => {
          setShowDropdown((state) => !state);
     };

     let Used , qualityRemaining ; 

     if (type == "S"){
          Used = qualityConverter(qualityUsed);
          qualityRemaining =qualityConverter(remaining)
     }
     else {
          Used = qualityml(qualityUsed);
          qualityRemaining =qualityml(remaining)
     }
    
     return (
          <div className="status">
               <Card className="statusBar">
                    <Button
                         className="d-flex justify-content-around"
                         variant={variant}
                         onClick={toggleDropdown}
                    >
                         <p>Stock {status}</p>{" "}
                         {!showDropdown && (
                              <FontAwesomeIcon
                                   className="pt-1 ps-2"
                                   icon={faCircleChevronDown}
                              />
                         )}
                         {showDropdown && (
                              <FontAwesomeIcon
                                   className="pt-1 ps-2"
                                   icon={faAngleUp}
                              />
                         )}
                    </Button>
               </Card>
               {showDropdown && (
                    <Card className="dropdown">
                         <Card.Text className="m-0">Qty used {Used}</Card.Text>
                         <hr className="m-0 mt-1 mb-1" />
                         <Card.Text className="m-0">
                              Qty remaining {qualityRemaining}
                         </Card.Text>
                    </Card>
               )}
          </div>
     );
};

export default StatusBar;
