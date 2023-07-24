import { createSlice, current } from "@reduxjs/toolkit";
import { onValue, ref, set, update } from "firebase/database";
import { db } from "../firebase";
import { gettingDataFromBillingDatabase, statisticSliceActions, updateStat } from "./statistic";
import { uid } from "uid";
import { gettingDataFromInventoryDatabase } from "./inventory";

const indivaSalesInput = {
     id: "sdf",
     title: "Omelette",
     count: 0,
     imgLink: "https://tse4.mm.bing.net/th?id=OIP.nwKsm2UHf5ZkfRR48OXOLwHaFj&pid=Api&P=0&h=180",
};
let initialState = {
     salesInputArray: [],
};

const salesInputSlice = createSlice({
     name: "sales input state management",
     initialState,
     reducers: {
          setSalesInput(state, action) {
               const array = action.payload;

               return {
                    ...state,
                    salesInputArray: array,
               };
          },

          buttonChangeSalesInput(state, action) {
               const id = action.payload.id;
               const changeCount = action.payload.change;

               let salesinput1 = current(state.salesInputArray);
               let salesinput = [...salesinput1];
               let existingproductIndex = salesinput.findIndex(
                    (product) => product.id === id
               );
               let existingproduct = salesinput[existingproductIndex];
               let updateProduct = {
                    ...existingproduct,
               };

               updateProduct.count = updateProduct.count + changeCount;

               salesinput[existingproductIndex] = {
                    ...updateProduct,
               };

               return {
                    ...state,
                    salesInputArray: salesinput,
               };
          },
     },
});

export const salesInputSliceActions = salesInputSlice.actions;

export default salesInputSlice;

// export const settingDataToSalesInput = (array, dispatch) => {
//      const setArray = [];
//      for (const item in array) {
//           let obj = {
//                id: item,
//                title: array[item].title,
//                count: 0,
//                imgLink: array[item].imgLink,
//           };
//           setArray.unshift(obj);
//      }

//      dispatch(salesInputSliceActions.setSalesInput(setArray));
// };

///thunk to product data from database

export const gettingDataFromProductDatabase = () => {
     return async (dispatch) => {
          const data = await getProductFromDatabase();

          let returnArray = [];

          for (const product in data) {
               data[product].count = 0;

               returnArray.push(data[product]);
          }

          dispatch(salesInputSliceActions.setSalesInput(returnArray));
     };
};

const getProductFromDatabase = () => {
     return new Promise((resolve) => {
          onValue(ref(db, "/products"), (snapshot) => {
               const data = snapshot.val();

               resolve(data);
          });
     });
};

///Thunk to update the inventory

// formula
// using item id retrival the item quality details ,

// count * qualityperunit = used today quality
// qualityused += usedtodayquality
//qualityremaning -= usedtodayquality
//

//skip if the count is zero

export const updateInventoryThunk = (salesinput) => {
     return async (dispatch) => {
          let array = salesinput;
          let obj = [];
          for (let i = 0; i < array.length; i++) {
              
            console.log(array[i].title, " = ", array[i].count);
              
              
               let statObj = {
                    id: array[i].id,
                    item: array[i].title,
                    saledAmount: array[i].count,
               };
               obj.push(statObj);


               for (let j = 0; j < array[i].ingradients.length; j++) {
                    let todayUsedQuality =
                         array[i].count *
                         array[i].ingradients[j].qualityPerUnit;

                    console.log(
                         j,
                         array[i].ingradients[j].itemId,
                         array[i].ingradients[j].itemTitle,
                         "  =  ",
                         array[i].ingradients[j].qualityPerUnit,
                         " ===== ",
                         todayUsedQuality
                    );

                    const data = await setItemById(
                         array[i].ingradients[j].itemId
                    );
                    let qualityDetails = data.qualityDetails;
                    console.log(qualityDetails);
                    qualityDetails = {
                         ...qualityDetails,
                         qualityUsed:
                              qualityDetails.qualityUsed + todayUsedQuality,
                         qualityRemaining:
                              qualityDetails.qualityRemaining -
                              todayUsedQuality,
                    };
                    console.log(qualityDetails);
                    updateInventory(array[i].ingradients[j].itemId , qualityDetails)

               }
          }
          console.log(obj);
          dispatch(statisticSliceActions.setStatArray(obj))
          
          updateStat(obj)


          dispatch(gettingDataFromProductDatabase())
          dispatch(gettingDataFromBillingDatabase())
          dispatch(gettingDataFromInventoryDatabase())
        };
};

const setItemById = (id) => {
     return new Promise((resolve) => {
          onValue(ref(db, "/inventory/" + id), (snapshot) => {
               const data = snapshot.val();

               resolve(data);
          });
     });
};

const updateInventory = (id, qualityObj) => {
     const data = new Promise(async (resolve) => {
          update(ref(db, "/inventory/" + id), { qualityDetails: qualityObj });
          console.log(id +  " is updated");
          resolve();
     });

     return data;
};

const ioio = async (inven) => {
     const data = new Promise(async (resolve) => {
          update(ref(db, "/items/45ee09"), { inventory: inven });
          console.log(909090);
          resolve();
     });

     console.log(data);
     console.log(2484848);
};

ioio({ id: "saffddsddsda" });
