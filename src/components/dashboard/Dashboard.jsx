import React from "react";
import { Grid2 ,Box, Card, CardContent, Typography } from "@mui/material";
// import Grid2 from "@mui/material/Unstable_Grid2";  // Ensure you're importing Grid2 correctly
import BarChart from "../charts/barChart/BarChart";
import LineChart from "../charts/lineCharts/LineChart";
import WorldMap from "../mapComponent/WorldMap";
import ProductTable from "../productTable/ProductTable";
import TotalSalesChart from "../charts/doughtNutChart/TotalSalesChart";
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement);


function Dashboard({ darkMode }) {
  const metrics = [
    { title: "Customers", value: "3,781", growth: "+11.01%" },
    { title: "Revenue", value: "$695", growth: "+15.0%" },
    { title: "Orders", value: "1,219", growth: "-0.03%" },
    { title: "Growth", value: "30.1%", growth: "+6.0%" },
  ];

  // Divide the metrics into two columns
  const half = Math.ceil(metrics.length / 2);
  const firstColumn = metrics.slice(0, half);
  const secondColumn = metrics.slice(half);
  
  let textColor = darkMode ? "#ffffff" : "#000000";
  let subTextColor = darkMode ? "#bbbbbb" : "#666666";
  // Function to dynamically change the background color for cards
  const getBackgroundColor = (index) => {
    if (darkMode) {
      textColor = index % 2 === 0? "#000000" : "#ffffff";
      subTextColor = index % 2 === 0? "#000000" : "#ffffff";
      return index % 2 === 0 ? "rgba(227, 245, 255, 1)" : "rgba(255, 255, 255, 0.05)";
    } else {
      return index % 2 === 0 ? "rgba(227, 245, 255, 1)" : "rgba(247, 249, 251, 1)";
    }
  };
  const getBackgroundColor2 = (index) => {
    if (darkMode) {
      textColor = index % 2 === 0? "#ffffff" : "#000000" ;
      subTextColor = index % 2 === 0? "#ffffff" : "#000000" ;
      return index % 2 === 0 ? "rgba(255, 255, 255, 0.05)" : "rgba(229, 236, 246, 1)";
    } else {
      return index % 2 === 0 ? "rgba(247, 249, 251, 1)" : "rgba(229, 236, 246, 1)";
    }
  };


  // Set text colors based on dark mode

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <h2 style={{ margin: "0", color: textColor }}>eCommerce</h2>
      
      {/* Metrics Section */}
      <Grid2 container spacing={3}>
        <Grid2 item xs={12} md={6}>
          <Card sx={{ height: "100%", boxShadow: "none", backgroundColor: darkMode ? "rgb(0 , 0 ,0)" : "#ffffff" }}>
            <CardContent>
              <Grid2 container spacing={2}>
                <Grid2 item xs={12} sm={6}>
                  {firstColumn.map((metric, index) => (
                    <Card
                      key={index}
                      sx={{
                        mb: 2,
                        borderRadius: "16px",
                        padding: "16px",
                        height: "160px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        boxShadow: "none",
                        backgroundColor: getBackgroundColor(index),
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6" gutterBottom sx={{ color: textColor }}>
                          {metric.title}
                        </Typography>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography variant="h4" sx={{ color: textColor }}>
                            {metric.value}
                          </Typography>
                          <Typography color="textSecondary" sx={{ paddingLeft: "25px", color: subTextColor }}>
                            {metric.growth}
                          </Typography>
                          <img
                            src="/icons/IconSet.png"
                            alt="Arrow Rise"
                            style={{ width: "16px", height: "16px" }} 
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </Grid2>
                <Grid2 item xs={12} sm={6}>
                  {secondColumn.map((metric, index) => (
                    <Card
                      key={index}
                      sx={{
                        mb: 2,
                        borderRadius: "16px",
                        padding: "16px",
                        height: "160px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        boxShadow: "none",
                        backgroundColor: getBackgroundColor2(index),
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6" gutterBottom sx={{ color: textColor }}>
                          {metric.title}
                        </Typography>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography variant="h4" sx={{ color: textColor }}>
                            {metric.value}
                          </Typography>
                          <Typography color="textSecondary" sx={{ paddingLeft: "25px", color: subTextColor }}>
                            {metric.growth}
                          </Typography>
                          <img
                            src={index === 0 ? "/icons/ArrowFall.png" : "/icons/IconSet.png"}
                            alt={index === 0 ? "Arrow Fall" : "Arrow Rise"}
                            style={{ width: "16px", height: "16px" }} 
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </Grid2>
              </Grid2>
            </CardContent>
          </Card>
        </Grid2>

        {/* Bar Chart Section */}
        <Grid2 item xs={12} md={6}>
          <Card
            sx={{
              height: "100%",
              boxShadow: "none",
              backgroundColor: darkMode ? "#1F2224" : "rgba(247,249,251,255)",
              borderRadius : '20px'
            }}
          >
            <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <Typography variant="h6" gutterBottom sx={{ color: darkMode ? "#ffffff" : "#000000"}}>
                Projections VS Actuals
              </Typography>
              <div style={{ flexGrow: 1, height: "310px", width: "100%" }}>
                <BarChart darkMode={darkMode} />  {/* Make sure BarChart can handle dark mode */}
              </div>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>

      {/* Line Chart and World Map Section */}
      <Grid2 container spacing={2}>
        <Grid2 item xs={12} md={8}>
          <Card sx={{ height: "100%", boxShadow: "none", backgroundColor: darkMode ? "#1F2224" : "#ffffff" ,borderRadius : '20px'}}>
            <CardContent sx={{ height: "400px", borderRadius: "20px" }}>
              <Typography variant="h6" gutterBottom sx={{ color: darkMode ? "#ffffff" : "#000000" }}>
                Revenue
              </Typography>
              <div style={{ height: "300px", width: "555px" ,borderRadius : '20px'}}>
                <LineChart darkMode={darkMode} />  {/* Make sure LineChart can handle dark mode */}
              </div>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 item xs={12} md={4}>
          <Card
            sx={{
              height: "100%",
              width: "250px",
              backgroundColor: darkMode ? "#1F2224" : "#ffffff",
              borderRadius: "20px",
              boxShadow: "none",
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ color: textColor }}>
                Revenue by Location
              </Typography>
              <div style={{ height: "auto", width: "100%" }}>
                <WorldMap darkMode={darkMode} />  {/* Make sure WorldMap supports dark mode */}
              </div>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>

      {/* Product Table and Doughnut Chart Section */}
      <Grid2 container spacing={3} sx={{ height: "500px" }}>
        <Grid2 item xs={12} md={8} sx={{ height: "100%", width: "70%" }}>
          <Card sx={{ height: "100%", width: "100%", boxShadow: "none", borderRadius: '20px', backgroundColor: darkMode ? "#1F2224" : "#ffffff" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ color: darkMode ? "#ffffff" : "#000000" }}>
                Products
              </Typography>
              <div style={{ height: "auto", width: "100%" }}>
                <ProductTable darkMode={darkMode} />  {/* Ensure ProductTable handles dark mode */}
              </div>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 item xs={12} md={4} sx={{ height: "100%", width: "25%", boxShadow: "none", borderRadius: "20px" }}>
          <TotalSalesChart darkMode={darkMode} />  {/* Ensure TotalSalesChart handles dark mode */}
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default Dashboard;
