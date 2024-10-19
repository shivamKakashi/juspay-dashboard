import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const LineChart = ({ darkMode }) => {
  useEffect(() => {
    return () => {
      // Clean up chart instance
      const canvas = document.getElementById("your-chart-id");
      if (canvas) {
        const chartInstance = ChartJS.getInstance(canvas);
        if (chartInstance) {
          chartInstance.destroy();
        }
      }
    };
  }, []);

  // Adjust chart colors based on dark mode
  const backgroundColor = darkMode ? "#2c2c2c" : "rgba(247,249,251,255)";
  const borderColorCurrent = darkMode ? "rgba(198, 199, 248, 1)" : "rgba(28, 28, 28, 1)"; // Change to warm tones for dark mode
  const backgroundColorCurrent = darkMode ? "rgba(198, 199, 248, 1)" : "rgba(28, 28, 28, 1)";
  const borderColorPrevious = darkMode ? "rgba(168, 197, 218, 1)" : "rgba(168, 197, 218, 1)"; // Softer tones in dark mode
  const backgroundColorPrevious = darkMode ? "rgba(168, 197, 218, 1)" : "rgba(168, 197, 218, 1)";
  const textColor = darkMode ? "#ffffff" : "#000000"; // White text in dark mode
  const gridColor = darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"; // Subtle grid lines

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Current Week",
        data: [14, 9, 12, 16, 18, 16],
        borderColor: borderColorCurrent,
        backgroundColor: backgroundColorCurrent,
        tension: 0.4, // Add tension to make the line curved
      },
      {
        label: "Previous Week",
        data: [10, 18, 14.3, 11, 13, 23],
        borderColor: borderColorPrevious,
        backgroundColor: backgroundColorPrevious,
        tension: 0.4, // Add tension to make the line curved
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false, // Disable the grid for x-axis
        },
        ticks: {
          color: textColor, // Adjust text color for dark mode
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: gridColor, // Adjust grid color for dark mode
        },
        ticks: {
          color: textColor, // Adjust text color for dark mode
          callback: (value) => `${value}M`,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: textColor, // Adjust legend text color for dark mode
        },
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: backgroundColor, // Background adjusts to dark mode
        padding: "16px",
        borderRadius: "8px",
      }}
    >
      <Line data={data} options={options} height={300} width={800} />
    </div>
  );
};

export default LineChart;
