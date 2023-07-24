import { createSlice } from "@reduxjs/toolkit";
import { get, onValue, ref, set, update } from "firebase/database";
import { db } from "../firebase";
import { uid } from "uid";

const initialState = {
     statArray: [],
};

const statisticSlice = createSlice({
     name: "statistic state management",
     initialState,

     reducers: {
          setStatArray(state, action) {
               const array = action.payload;

               return {
                    ...state,
                    statArray: array,
               };
          },
     },
});

export const statisticSliceActions = statisticSlice.actions;

export default statisticSlice;

//thunk to get data from billing

export const gettingDataFromBillingDatabase = () => {
     return async (dispatch) => {
          const data = await getStatWholeData();
          console.log(data);
          dispatch(statisticSliceActions.setStatArray(data.statArray));
     };
};

export const updateStat = async (todayStatArray) => {
     let data = await getStatWholeData();

     let wholeStatArray = data.statArray;
     let newArray = [];
     for (let i = 0; i < todayStatArray.length; i++) {
          let existingItem = wholeStatArray.find(
               (item) => item.id === todayStatArray[i].id
          );

          console.log(existingItem, todayStatArray[i]);
          // existingItem.statArray.saledAmount += todayStatArray.saledAmount;

          let obj = {
               ...existingItem,
               saledAmount:
                    existingItem.saledAmount + todayStatArray[i].saledAmount,
          };
          newArray.push(obj);
     }

     setTodaystat(todayStatArray)
     update(ref(db, "/Billing/whole"), {
          date: new Date(),
          id: data.id,
          statArray: newArray,
     });
};

const getStatWholeData = () => {
     return new Promise((resolve) => {
          onValue(ref(db, "/Billing/whole"), (snapshot) => {
               const data = snapshot.val();

               resolve(data);
          });
     });
};

const setTodaystat = (obj) => {
     let rand = uid(6);
     let current = new Date()
     return new Promise((resolve) => {
          set(ref(db, "/Billing/" + rand), {
               id: rand,
               statArray: obj,
               date: current,
          });
          resolve()
     });
};
