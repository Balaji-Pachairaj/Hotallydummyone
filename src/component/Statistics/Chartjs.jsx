import React, { useState } from "react";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./Chartjs.css";
import { useSelector } from "react-redux";

const DUMMYDATA = [
     {
          id: "1",
          item: "Dosa",
          saledAmount: 911,
     },
     {
          id: "2",
          item: "Porri",
          saledAmount: 1541,
     },
     {
          id: "3",
          item: "chapathi",
          saledAmount: 800,
     },
];

const Chartjs = () => {
     const statArray = useSelector((state) => state.statistic.statArray);
     console.log(statArray);
     const data = {
          labels: statArray.map((d) => d.item),
          datasets: [
               {
                    label: "items saled",
                    data: statArray.map((d) => d.saledAmount),
                    hoverBorderWidth: 5,
               },
          ],
     };

     return (
          <div className=" d-flex justify-content-center">
               {statArray.length > 0 && <Pie data={data} className="chartjs" />}
          </div>
     );
};

export default Chartjs;
