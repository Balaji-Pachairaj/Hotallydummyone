
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { retrivalDataFromDatabase } from "../store";


const Home = () => {
    const dispatch = useDispatch()
    const data = new Date();
    useEffect(()=> {
     console.log("fsadfsa "  , data)
     dispatch(retrivalDataFromDatabase())
    },[])
     return <div></div>;
};

export default Home;
