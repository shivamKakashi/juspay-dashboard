import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { BorderColor } from "@mui/icons-material";

Chart.register(ArcElement, Tooltip, Legend);

const TotalSalesChart = ({ darkMode }) => {


  const salesData = {
    labels: ["Direct", "Affiliate", "Sponsored", "E-mail"],
    datasets: [
      {
        data: [300.56, 135.18, 154.02, 48.96],
        backgroundColor: darkMode
          ? ["#555555", "#4CAF50", "#1E88E5", "#FFC107"]
          : ["#000000", "#6BCB77", "#4D96FF", "#FFD166"],
        hoverBackgroundColor: darkMode
          ? ["#777777", "#66BB6A", "#42A5F5", "#FFCA28"]
          : ["#333333", "#87E393", "#6FB0FF", "#FFE399"],
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false, // Disable the built-in legend
      },
    },
    elements: {
      arc: {
        borderWidth: 0, // Thickness of the segments
        borderRadius: 14, // Rounded edges for each segment
        BorderColor : 'transparent',
      },
    },
  };

  const legendItems = [
    {
      label: "Direct",
      color: darkMode ? "#555555" : "#000000",
      value: "$300.56",
    },
    {
      label: "Affiliate",
      color: darkMode ? "#4CAF50" : "#6BCB77",
      value: "$135.18",
    },
    {
      label: "Sponsored",
      color: darkMode ? "#1E88E5" : "#4D96FF",
      value: "$154.02",
    },
    {
      label: "E-mail",
      color: darkMode ? "#FFC107" : "#FFD166",
      value: "$48.96",
    },
  ];

  return (
    <Card
      sx={{
        height: "100%",
        marginTop: 2, // 16px
        borderRadius: 2, // 16px
        backgroundColor: darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(247,249,251,255)", // Card background based on dark mode
        boxShadow: "none",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ color: darkMode ? "#ffffff" : "#000000" }} // Text color based on dark mode
        >
          Total Sales
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Doughnut data={salesData} options={options} />
        </Box>
        <Box sx={{ textAlign: "center", marginTop: 2 }}>
          {legendItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                marginBottom: 1,
              }}
            >
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: item.color,
                  marginRight: 1,
                }}
              />
              <Typography
                variant="body1"
                sx={{ color: darkMode ? "#ffffff" : "#000000" }} // Text color based on dark mode
              >
                <strong>{item.label}:</strong> {item.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TotalSalesChart;
