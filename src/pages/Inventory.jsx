import React, { useEffect } from "react";
import Table from "../component/inventory/Table";
import InventoryHeader from "../component/inventory/InventoryHeader";

import { useDispatch } from "react-redux";
import { gettingDataFromInventoryDatabase, inventorySliceActions } from "../store/inventory";

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

const Inventory = () => {
     const dispatch = useDispatch();
     // useEffect(() => {
     //      dispatch(inventorySliceActions.setInventoryArray(DUMMYLIST));
     // }, []);

     useEffect(()=> {
          dispatch(gettingDataFromInventoryDatabase())
     },[])
     return (
          <div className="mb-5">
               <div>
                    <InventoryHeader />
               </div>
               <div>
                    <Table />
               </div>
          </div>
     );
};

export default Inventory;
