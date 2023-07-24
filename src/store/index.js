import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./UI";
import salesInputSlice from "./salesinput";
import inventorySlice from "./inventory";
import statisticSlice from "./statistic";
import { uid } from "uid";
import { onValue, ref, set } from "firebase/database";
import { db } from "../firebase";

const store = configureStore({
     reducer: {
          ui: uiSlice.reducer,
          salesInput: salesInputSlice.reducer,
          inventory: inventorySlice.reducer,
          statistic : statisticSlice.reducer
     },
});

export default store;

//Thunk to retrival data from realtime database

export const retrivalDataFromDatabase = () => {
     return async (dispatch) => {
          //getting data helper function

          const data = await getData();
          settingDataToSalesInput(data, dispatch);

     };
};

const getData = () => {
     return new Promise((resolve) => {
          onValue(ref(db, "/items"), (snapshot) => {
               const data = snapshot.val();
               resolve(data);
          });
     });
};

/*
{
          id: "asjdkff",
          name: "Itly",
          unit: "1000", //mg
          unitPrice: "90",
          stockStatus: "IN", // "Out" ,
          reOrderQuality: "90000",
     },

 {
          title: "Poori",
          imgLink: "https://tse3.mm.bing.net/th?id=OIP.1g_FUIEZDx_GCZ2qOcf8hgHaFd&pid=Api&P=0&h=180",
     },



FINAL OBJECT 
{
    id : "" ,
    title : "",
    inventory : {
        name : "chapathi"
         unit: "1000", //mg
          unitPrice: "90",
          stockStatus: "IN", // "Out" ,
          reOrderQuality: "90000",
          minQuality  : 50000 , 
    }
    salesinput : {
        imgLink :""
    }

}



*/

// const setDatabase = async () => {
//      let rand = uid(6);
//      console.log(rand);

//      const itemsss = {
//           id: rand,
//           title: "Omelette",
//           imgLink:"https://tse4.mm.bing.net/th?id=OIP.nwKsm2UHf5ZkfRR48OXOLwHaFj&pid=Api&P=0&h=180",
//           inventory: {
//                name: "Omelette",
//                unit: "1",
//                unitPrice: "20",
//                qualityDetails: {
//                     stockStatus: "IN",
//                     reOrderQuality: 30,
//                     qualityused: 0,
//                     qualityRemaining: 100,
//                },
//                ingradients: {
//                     mainitem: "Egg",
//                },
//           },
//      };
//      const response = await set(ref(db, "/items/" + rand), itemsss);

//      console.log(response);
// };
// setDatabase();

///

/**

Dosa = *****
Dosa batter => 100 grams
salt => 3grams
sunflower oil => 7 ml


idly =>*****
idly batter => 50grams
salt => 3grams 


chapathi ****
Wheat flour => 75 grams
sunflower oil => 7 ml

porri ****
wheat flour => 75grams
sunflower oil => 10ml


parotta =>*****
maida => 75grams
sunflower => 7ml


meduvadai => *****
urad dal => 50grams 
salt => 10 grams 


ven pongal => ****
raw rice => 150 grams 
salt => 7grams 
Moong Dal => 50grams



 */

//formula for stockAvailable
// minQuality < qualityRemaining

// reStoreQuality = fullQuality - qualityRemaining

/*
items list 

Wheat flout => chapathi , porri ****
quality : 20000
minQuality : 5000
6c8f49


Dosa batter => Dosa //6716ff  *****
idly batter => idly //b89fae  ****
unit : 100 // 75
quality : 20000
minQuality : 5000

maida => parotta  //36fc5c
unit 
quality :  30000
minquality : 5000 *****

raw rice => ven pongal //216cb9
quality : 250000
minquality : 5000 ****

moong dal => ven pongal //a3cfd5
quality : 10000
minQuality : 3000


urad dal => medu vadai //66e3b0
quality : 15000
minquality : 5000 *****

sun flower => parotta , dosa , chapathi , porri //c89a16 
quality : 15000ml
minquality : 3000ml *****

salt => Dosa , idly , medu vadai , ven pongal //82171e
quality : 15000
minQuality : 2500******
*/

// let invenObj = {
//      id: "",
//      item: "",
//      unit: "",
//      unitPrice: "",
//      type: "S OR Q",
//      qualityDetails: {
//           reOrderQuality: "-",
//           qualityused: 0,
//           qualityRemaining: 100,
//           minQuality: 50,
//           fullQuality: 75,
//      },
// };
// const inventoryData = () => {
//      let rand = uid(6);

//      // salt => Dosa , idly , medu vadai , ven pongal
//      // quality : 15000
//      // minQuality : 2500
//      let inObj = {
//           id: rand,
//           item: "Salt",
//           unit: "30",
//           unitPrice: "250",
//           type: "S",
//           qualityDetails: {
//                qualityUsed: 0,
//                qualityRemaining: 15000,
//                fullQuality: 15000,
//                minQuality: 2500,
//           },
//      };
//      set(ref(db, "/inventory/" + rand), inObj);
// };

//  inventoryData();

// let productid = {
//      id: "",
//      title: "",
//      imgLink: "",
//      ingradients: [
//           {
//                itemid: "ks",
//                itemTitle: "",
//                qualityPerUnit: 454,
//                type: "S",
//           },
//           {
//                itemid: "ks",
//                itemTitle: "",
//                qualityPerUnit: 454,
//                type: "L",
//           },
//      ],
// };

// const productIdData = () => {
//      let rand = uid(6);

//      // // idly =>
//      // idly batter => 50grams
//      // salt => 3grams
//      let proObj = {
//           id: rand,
//           title: "Idly",
//           imgLink: "https://tse2.mm.bing.net/th?id=OIP.9_ukG4vs8SYxG2tTnYJ_RgHaD2&pid=Api&P=0&w=768&h=400",
//           ingradients: [
//                {
//                     itemTitle: "Idly batter",
//                     itemId: "b89fae",
//                     type: "S",
//                     qualityPerUnit: 65,
//                },
//                {
//                     itemTitle: "Salt",
//                     itemId: "82171e",
//                     type: "S",
//                     qualityPerUnit: 5,
//                },
//           ],
//      };

//      set(ref(db, "/products/" + rand), proObj);
// };
//productIdData();
// const DUMMYPRODUCTS = [
//      {
//           title: "Dosa",
//           count: 0,
//           imgLink: "https://foodiewish.com/wp-content/uploads/2020/05/Masala-Dosa-Recipe.jpg",
//      },
//      {
//           title: "Ven pongal",
//           count: 0,
//           imgLink: "https://tse3.mm.bing.net/th?id=OIP.UUMFxSKb8I6UyH5AGhIFtwHaFj&pid=Api&P=0&h=180",
//      },
//      {
//           title: "Idly",
//           count: 0,
//           imgLink: "https://tse2.mm.bing.net/th?id=OIP.9_ukG4vs8SYxG2tTnYJ_RgHaD2&pid=Api&P=0&w=768&h=400",
//      },
//      {
//           title: "Poori",
//           count: 0,
//           imgLink: "https://tse3.mm.bing.net/th?id=OIP.1g_FUIEZDx_GCZ2qOcf8hgHaFd&pid=Api&P=0&h=180",
//      },
//      {
//           title: "chapathi",
//           count: 0,

//           imgLink: "https://tse2.mm.bing.net/th?id=OIP.M5Pd6UykpiTXJ5tb7WVx_QHaE6&pid=Api&H=105&W=160",
//      },
//      {
//           title: "medu vadai",
//           count: 0,

//           imgLink: "https://tse2.mm.bing.net/th?id=OIP.gSiOGsxZGPqSo6PYP8EbuAHaEc&pid=Api&H=95&W=160",
//      },
//      {
//           title: "parotta",
//           count: 0,
//           imgLink: "https://tse1.mm.bing.net/th?id=OIP.-zjsDwfidzqPehSBR5-T2wHaHa&pid=Api&P=0&h=180",
//      },
//      {
//           title: "Omelette",
//           count: 0,
//           imgLink: "https://tse4.mm.bing.net/th?id=OIP.nwKsm2UHf5ZkfRR48OXOLwHaFj&pid=Api&P=0&h=180",
//      },
// ];
