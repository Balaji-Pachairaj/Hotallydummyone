import { createSlice } from "@reduxjs/toolkit";
import { onValue, ref } from "firebase/database";
import { db } from "../firebase";

const initialState = {
     inventoryArray: [],
};

const inventorySlice = createSlice({
     name: "inventory state management",
     initialState,
     reducers: {
          setInventoryArray(state, action) {
               const array = action.payload;

               return {
                    ...state,
                    inventoryArray: array,
               };
          },
     },
});

export const inventorySliceActions = inventorySlice.actions;

export default inventorySlice;



export const settingDataToInventory = (array, dispatch) => {
     console.log(array);
     let inventoryArray = [];

     for (const item in array) {
          let obj = {
               id: item,
               name: array[item].inventory.ingradients.mainitem,
               unit: array[item].inventory.unit,
               unitPrice: array[item].inventory.unitPrice,
               stockStatus: array[item].inventory.qualityDetails.stockStatus,
               reOrderQuality:
                    array[item].inventory.qualityDetails.reOrderQuality,
               qualityUsed: array[item].inventory.qualityDetails.qualityused,
               qualityRemaining:
                    array[item].inventory.qualityDetails.qualityRemaining,
          };
          inventoryArray.unshift(obj);
     }
     dispatch(inventorySliceActions.setInventoryArray(inventoryArray));
};

///Thunk to get inventory data from the database

export const gettingDataFromInventoryDatabase = () => {
     return async (dispatch) => {
          const data = await setInventoryData();

       

          settingToInventorySlice(data , dispatch)
     };
};

const setInventoryData = () => {
     return new Promise((resolve) => {
          onValue(ref(db, "/inventory"), (snapshot) => {
               const data = snapshot.val();
             
               resolve(data);
          });
     });
};


//setting data to inventory slice 

const settingToInventorySlice = (obj , dispatch)=>{

     let returnArray = [];
     for (const item in obj){
          let itemObj = {
               id : item , 
               name : obj[item].item,
               unit : obj[item].unit,
               unitPrice : obj[item].unitPrice,

               qualityUsed : obj[item].qualityDetails.qualityUsed,
               qualityRemaining : obj[item].qualityDetails.qualityRemaining,
               type : obj[item].type,
               stockStatus: calStockAvailable(obj[item].qualityDetails.minQuality , obj[item].qualityDetails.qualityRemaining), 
               reOrderQuality: reStoreQualityCal(obj[item].qualityDetails.fullQuality ,obj[item].qualityDetails.minQuality , obj[item].qualityDetails.qualityRemaining),
          }

          returnArray.push(itemObj)
     }

     dispatch(inventorySliceActions.setInventoryArray(returnArray))
}


//helper function
//to calculate stock available
 
const calStockAvailable = (min , remain) => {
     if (remain >= min){
          return "IN"
     }
     return "OUT"
}
///calculate restorequality
const reStoreQualityCal = (full , min  , remain)=>{
     if (remain < min){
          return full-remain; 
     }
     return 0
}

const indivInventory = {
     id: "asjdkff",
     name: "Itly",
     unit: "1000", //mg
     unitPrice: "90",
     stockStatus: "IN", // "Out" ,
     reOrderQuality: "90000",
};