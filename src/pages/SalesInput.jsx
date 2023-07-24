import React, { useEffect } from "react";
import SalesList from "../component/SalesInput/SalesList";
import { useDispatch } from "react-redux";
import { gettingDataFromProductDatabase, salesInputSliceActions } from "../store/salesinput";

const DUMMYPRODUCTS = [
     {
          title: "Dosa",
          count: 0,
          imgLink: "https://foodiewish.com/wp-content/uploads/2020/05/Masala-Dosa-Recipe.jpg",
     },
     {
          title: "Ven pongal",
          count: 0,
          imgLink: "https://tse3.mm.bing.net/th?id=OIP.UUMFxSKb8I6UyH5AGhIFtwHaFj&pid=Api&P=0&h=180",
     },
     {
          title: "Idly",
          count: 0,
          imgLink: "https://tse2.mm.bing.net/th?id=OIP.9_ukG4vs8SYxG2tTnYJ_RgHaD2&pid=Api&P=0&w=768&h=400",
     },
     {
          title: "Poori",
          count: 0,
          imgLink: "https://tse3.mm.bing.net/th?id=OIP.1g_FUIEZDx_GCZ2qOcf8hgHaFd&pid=Api&P=0&h=180",
     },
     {
          title: "chapathi",
          count: 0,

          imgLink: "https://tse2.mm.bing.net/th?id=OIP.M5Pd6UykpiTXJ5tb7WVx_QHaE6&pid=Api&H=105&W=160",
     },
     {
          title: "medu vadai",
          count: 0,

          imgLink: "https://tse2.mm.bing.net/th?id=OIP.gSiOGsxZGPqSo6PYP8EbuAHaEc&pid=Api&H=95&W=160",
     },
     {
          title: "parotta",
          count: 0,
          imgLink: "https://tse1.mm.bing.net/th?id=OIP.-zjsDwfidzqPehSBR5-T2wHaHa&pid=Api&P=0&h=180",
     },
     {
          title: "Omelette",
          count: 0,
          imgLink: "https://tse4.mm.bing.net/th?id=OIP.nwKsm2UHf5ZkfRR48OXOLwHaFj&pid=Api&P=0&h=180",
     },
];
const SalesInput = () => {
     const dispatch = useDispatch();

     useEffect(()=>{
          dispatch(gettingDataFromProductDatabase())
     },[])
     return (
          <div>
               <SalesList />
          </div>
     );
};

export default SalesInput;
