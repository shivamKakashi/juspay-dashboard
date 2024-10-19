// components/BarChart.js
import React , { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function BarChart() {

    useEffect(() => {
        return () => {
          const canvas = document.getElementById('bar-chart'); // Unique ID
          console.log("canvas bar chart",canvas)
          if (canvas) {
            const chartInstance = ChartJS.getInstance(canvas);
            if (chartInstance) {
              chartInstance.destroy();
            }
          }
        };
      }, []);
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Actuals",
        data: [70, 120, 90, 150, 110, 95], // Filled values for each bar
        backgroundColor: "rgba(168,197,218,255)", // Color for the filled portion
        borderRadius: 8,
      },
      {
        label: "Projections",
        data: [30, 40, 60, 30, 45, 55], // Remaining values for each bar
        backgroundColor: "rgba(208,223,235,255)", // Color for the remaining portion
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        stacked: true, // Stack the bars on the x-axis
      },
      y: {
        stacked: true, // Stack the bars on the y-axis
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ height: "100%", width: "100%", position: "relative" }}>
      <Bar data={data} options={options}  height={150} width={300}/>
    </div>
  );
}

export default BarChart;
