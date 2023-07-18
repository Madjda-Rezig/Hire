import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

function Statistiqueadmin() {
  const data = {
    labels: ["a", "b", "c", "n", "r", "f", "h"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return (
    <div>
      <div>
        <h1>Statistiques</h1>
      </div>
      <Line data={data} />
    </div>
  );
}

export default Statistiqueadmin;
