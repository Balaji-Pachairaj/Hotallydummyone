import React from "react";
import "./StatusBar.jsx";
import StatusBar from "./StatusBar.jsx";

const DUMMYLIST = [
     {
          id: "asjdkff",
          name: "Itly",
          unit: "1000", //mg
          unitPrice: "90",
          stockStatus: "IN", // "Out" ,
          reOrderQuality: "90000",
     },
];

export const qualityConverter = (mg) => {
     if (mg < 1000) {
          return mg + "mg";
     } else {
          let kg = (mg / 1000).toFixed(2);
          return kg + "kg";
     }
};
export const qualityml = (ml) => {
     if (ml < 1000) {
          return ml + "ml";
     } else {
          let lit = (ml / 1000).toFixed(2);
          return lit + "lit";
     }
};
const IndivItem = ({ item, index }) => {

     let unit , reOrderQuality;

     if (item.type =="S"){
          unit = qualityConverter(item.unit);
          reOrderQuality = qualityConverter(item.reOrderQuality);
     }
     else {
          unit = qualityml(item.unit);
          reOrderQuality = qualityml(item.reOrderQuality);
     }




     return (
          <>
               <div className="item text-center mt-3">
                    <div className="pt-2 Sno">
                         <p>{index + ")"}</p>
                    </div>
                    <div className="pt-2 indivList">
                         <p>{item.id}</p>
                    </div>
                    <div className="pt-2 indivList">
                         <p>{item.name}</p>
                    </div>
                    <div className="pt-2 indivList">
                         <p>{unit}</p>
                    </div>
                    <div className="pt-2 indivList">
                         <p>{"र" + item.unitPrice}</p>
                    </div>
                    <div className="pt-2 indivList d-flex justify-content-center">
                         <StatusBar
                              status={item.stockStatus}
                              remaining={item.qualityRemaining}
                              qualityUsed={item.qualityUsed}
                              type = {item.type}
                         />
                    </div>
                    <div className="pt-2 indivList">
                         <p>{reOrderQuality}</p>
                    </div>
               </div>
               <hr className="w-100 ms-5" />
          </>
     );
};

export default IndivItem;
