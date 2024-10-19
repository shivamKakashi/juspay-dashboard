import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";

const products = [
  {
    name: "ASOS Ridley High Waist",
    price: 79.49,
    quantity: 82,
    amount: 6518.18,
  },
  {
    name: "Marco Lightweight Shirt",
    price: 128.5,
    quantity: 37,
    amount: 4754.5,
  },
  { name: "Half Sleeve Shirt", price: 39.99, quantity: 64, amount: 2559.36 },
  { name: "Lightweight Jacket", price: 20.0, quantity: 184, amount: 3680.0 },
  { name: "Marco Shoes", price: 79.49, quantity: 64, amount: 1965.81 },
];

const ProductTable = ({ darkMode }) => (
  <Box
    sx={{
      mt: 3,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingBottom: "5px",
      height: "100%",
      backgroundColor: "transparent", // Transparent background
      color: darkMode ? "rgba(255, 255, 255, 0.87)" : "rgba(0, 0, 0, 0.87)", // Text color based on dark mode
    }}
  >
    <div>
      <Typography variant="h6" align="center" gutterBottom>
        Top Selling Products
      </Typography>
    </div>
    <TableContainer
      component={Paper}
      sx={{
        width: "90%",
        maxWidth: 800,
        mt: 2,
        boxShadow: 0,
        height: "100%",
        backgroundColor: "transparent", // Transparent background for table container
        borderRadius : '20px',
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                color: darkMode ? "rgba(255, 255, 255, 0.87)" : "rgba(0, 0, 0, 0.87)", // Header text color based on dark mode
              }}
            >
              <strong>Name</strong>
            </TableCell>
            <TableCell
              align="right"
              sx={{
                color: darkMode ? "rgba(255, 255, 255, 0.87)" : "rgba(0, 0, 0, 0.87)",
              }}
            >
              <strong>Price</strong>
            </TableCell>
            <TableCell
              align="right"
              sx={{
                color: darkMode ? "rgba(255, 255, 255, 0.87)" : "rgba(0, 0, 0, 0.87)",
              }}
            >
              <strong>Quantity</strong>
            </TableCell>
            <TableCell
              align="right"
              sx={{
                color: darkMode ? "rgba(255, 255, 255, 0.87)" : "rgba(0, 0, 0, 0.87)",
              }}
            >
              <strong>Amount</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow
              key={index}
              sx={{
                backgroundColor: "transparent", // Ensures all rows have the same transparent background
                "&:nth-of-type(odd)": {
                  backgroundColor: "transparent", // Override odd row background to be transparent
                },
                "&:nth-of-type(even)": {
                  backgroundColor: "transparent", // Override even row background to be transparent
                },
                "&:hover": {
                  backgroundColor: darkMode ? "rgba(77, 77, 77, 0.5)" : "rgba(240, 240, 240, 0.5)", // Hover effect
                },
                
              }}
            >
              <TableCell>{product.name}</TableCell>
              <TableCell align="right">${product.price.toFixed(2)}</TableCell>
              <TableCell align="right">{product.quantity}</TableCell>
              <TableCell align="right">${product.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);

export default ProductTable;
