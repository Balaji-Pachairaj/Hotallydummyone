import React from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";

const SearchBar = () => {
     return (
          <div className="searchBarBox">
               <span className="d-flex justify-content-center">
                    <Form>
                         <input type="text" className="searchInput" placeholder="Search items" />
                         <button>
                              <FontAwesomeIcon icon={faMagnifyingGlass} />
                         </button>
                    </Form>
               </span>
          </div>
     );
};

export default SearchBar;
