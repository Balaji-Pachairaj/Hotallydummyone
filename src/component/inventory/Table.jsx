import React from "react";
import "./Table.css";

import IndivItem from "./IndivItem";
import { useSelector } from "react-redux";
import inventorySlice from "../../store/inventory";

const DUMMYLIST = [
     {
          id: "asjdkff",
          name: "Itly",
          unit: "1000", //mg
          unitPrice: "90",
          stockStatus: "IN", // "Out" ,
          reOrderQuality: "90000",
     },
     {
          id: "asadff",
          name: "Dosa",
          unit: "1500", //mg
          unitPrice: "78",
          stockStatus: "OUT", // "Out" ,
          reOrderQuality: "9800",
     },
     {
          id: "asfdasdf",
          name: "Pongal",
          unit: "3500", //mg
          unitPrice: "60",
          stockStatus: "OUT", // "Out" ,
          reOrderQuality: "7500",
     },
     {
          id: "asadff",
          name: "Bread",
          unit: "890", //mg
          unitPrice: "90",
          stockStatus: "OUT", // "Out" ,
          reOrderQuality: "6500",
     },
     {
          id: "asfdasdf",
          name: "Chapathi",
          unit: "9000", //mg
          unitPrice: "100",
          stockStatus: "IN", // "Out" ,
          reOrderQuality: "2300",
     },
];

const Table = () => {
     const inventoryArray = useSelector((state) => state.inventory.inventoryArray)
     console.log(inventoryArray)
     return (

          <div className=" tableBox">
               <div className="cardTable">
                    <div className="headerBox text-center">
                         <div className="pt-3 Sno ">
                              <h4>S no</h4>
                         </div>
                         <div className="pt-3 indivList">
                              <h4>Material Id</h4>
                         </div>
                         <div className="pt-3 indivList ">
                              <h4>Name</h4>
                         </div>
                         <div className="pt-3 indivList ">
                              <h4>Unit</h4>
                         </div>
                         <div className="pt-3 indivList ">
                              <h4>Unit Price</h4>
                         </div>
                         <div className="pt-3 indivList ">
                              <h4>Status</h4>
                         </div>
                         <div className="pt-3 indivList ">
                              <h4>Re order quality</h4>
                         </div>
                    </div>
                    <hr className="m-0 ms-5" />

                    <div className="d-flex flex-column mb-5">
                        {
                            inventoryArray.map((item , index) => {

                                return <IndivItem item={item} index ={index+1} />
                            })
                        }
                    </div>
               </div>
          </div>
     );
};

export default Table;
