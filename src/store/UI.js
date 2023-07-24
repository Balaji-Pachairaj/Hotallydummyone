import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     menuUi: {
          model: false,
     },
};

const uiSlice = createSlice({
     name: "ui slice ",
     initialState,

     reducers: {
          sArMenuModel(state, action) {
               return {
                    ...state,
                    menuUi: {
                         ...state.menuUi,
                         model: action.payload,
                    },
               };
          },
     },
});


export const uiSliceActions = uiSlice.actions;

export default uiSlice;