
# Juspay Dashboard Application

This is a responsive **eCommerce Dashboard** built using React and Material UI. The application provides essential metrics, charts, and data tables for monitoring business performance. It supports a **dark mode** toggle for a customizable user experience.

## Features

- **Dashboard Overview**: Key metrics in cards, such as Customers, Revenue, Orders, and Growth.
- **Dark Mode Toggle**: Switch between light and dark themes.
- **Responsive Layout**: Sidebar navigation and top bar for easy access.
- **Charts**:
  - **Line Chart**: Revenue tracking.
  - **Bar Chart**: Projection vs. actuals.
  - **Doughnut Chart**: Sales breakdown.
  - **World Map**: Revenue by location.
- **Data Tables**: Product listings with customizable data tables.
- **Sidebar Navigation**: Easy navigation to sections like Dashboard, Order List, Reports, etc.
- **Notifications**: Quick notifications in the RightBar for easy monitoring.

## Screenshots

- **Dashboard (Light Mode)**
- **Dashboard (Dark Mode)**

## Technologies Used

- **React**: For building UI components.
- **Material UI**: For faster and customizable web development.
- **Chart.js**: For dynamic charts and data visualizations.
- **React-Chartjs-2**: React wrapper for Chart.js.
- **Axios**: For handling API requests.
- **React Router**: For dynamic routing.

## Project Structure

```
src/
│
├── components/
│   ├── dashboard/
│   │   └── Dashboard.js          // Main dashboard component
│   ├── charts/
│   │   ├── LineChart.js          // Line chart component
│   │   ├── BarChart.js           // Bar chart component
│   │   └── TotalSalesChart.js    // Doughnut chart component
│   ├── mapComponent/
│   │   └── WorldMap.js           // World map component
│   ├── productTable/
│   │   └── ProductTable.js       // Product data table component
│   ├── sidebar/
│   │   └── Sidebar.js            // Sidebar navigation component
│   ├── orderList/
│   │   └── OrderList.js          // Order List component
│   └── rightBar/
│       └── RightBar.js           // Notification sidebar
│
├── App.js                        // Main application logic
├── index.js                      // Entry point of the app
└── App.css                       // Global styles
```

## How to Navigate to Order List

1. **Sidebar Navigation**: On the left side of the app, locate the Sidebar.
2. **Click "Order List"**: Click the Order List option to load all orders.
3. **Switch Back**: Navigate back to the Dashboard by selecting other options, such as **eCommerce**.

## How to Run

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/shivamKakashi/juspay-dashboard.git
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run the Development Server**:
   ```bash
   npm start
   ```
4. **Access the Application**:
   Open your browser at `http://localhost:3000`.

## Dark Mode Integration

The application supports light and dark themes. Toggle between themes using the **TopBar**.

- **Implementation**:
  - `createTheme` from Material UI generates light and dark themes.
  - The state `darkMode` manages the active theme.
  - Components adapt styles based on the `darkMode` prop or state.

## Contributing

We welcome contributions to enhance this project. Follow these steps to contribute:

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature-branch
   ```
3. **Make your changes and commit**.
4. **Push to the branch**:
   ```bash
   git push origin feature-branch
   ```




