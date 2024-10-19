import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Typography,
  Checkbox,
  IconButton,
  TablePagination,
  Toolbar,
  Tooltip,
  TextField,
  InputAdornment,
} from "@mui/material";
import { format, parseISO } from "date-fns";
import { useTheme } from "@mui/material/styles";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import SortIcon from "@mui/icons-material/Sort";
import SearchIcon from "@mui/icons-material/Search";
import SwapVertIcon from '@mui/icons-material/SwapVert';


const data = [
  {
    id: "#CM9801",
    user: "Natali Craig",
    avatar: "/path/to/avatar1.jpg",
    project: "Landing Page",
    address: "Meadow Lane, Oakland",
    date: "2023-10-18",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: "Kate Morrison",
    avatar: "/path/to/avatar2.jpg",
    project: "CRM Admin pages",
    address: "Larry, San Francisco",
    date: "2023-10-18",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: "Johnathan Carter",
    avatar: "/path/to/avatar3.jpg",
    project: "Marketing Website",
    address: "Sunset Blvd, Los Angeles",
    date: "2023-10-17",
    status: "In Progress",
  },
  {
    id: "#CM9804",
    user: "Emily Clark",
    avatar: "/path/to/avatar4.jpg",
    project: "E-commerce App",
    address: "Maple Street, Chicago",
    date: "2023-10-16",
    status: "Pending",
  },
  {
    id: "#CM9805",
    user: "David Smith",
    avatar: "/path/to/avatar5.jpg",
    project: "Social Media App",
    address: "Central Ave, New York",
    date: "2023-10-15",
    status: "In Progress",
  },
  {
    id: "#CM9806",
    user: "Sophia Martinez",
    avatar: "/path/to/avatar6.jpg",
    project: "Dashboard UI",
    address: "Ocean Drive, Miami",
    date: "2023-10-14",
    status: "Complete",
  },
  {
    id: "#CM9807",
    user: "Chris Taylor",
    avatar: "/path/to/avatar7.jpg",
    project: "Booking System",
    address: "5th Ave, Seattle",
    date: "2023-10-13",
    status: "In Progress",
  },
  {
    id: "#CM9808",
    user: "Amelia Johnson",
    avatar: "/path/to/avatar8.jpg",
    project: "Portfolio Website",
    address: "Baker Street, Boston",
    date: "2023-10-12",
    status: "Pending",
  },
  {
    id: "#CM9809",
    user: "Mason Garcia",
    avatar: "/path/to/avatar9.jpg",
    project: "HR Management",
    address: "Lombard Street, Philadelphia",
    date: "2023-10-11",
    status: "Complete",
  },
  {
    id: "#CM9810",
    user: "Ella Cooper",
    avatar: "/path/to/avatar10.jpg",
    project: "Inventory System",
    address: "Greenwich Village, New York",
    date: "2023-10-10",
    status: "In Progress",
  },
  {
    id: "#CM9811",
    user: "James Wright",
    avatar: "/path/to/avatar11.jpg",
    project: "Content Management",
    address: "Mission St, San Francisco",
    date: "2023-10-09",
    status: "Complete",
  },
  {
    id: "#CM9812",
    user: "Lily Brown",
    avatar: "/path/to/avatar12.jpg",
    project: "Mobile Banking App",
    address: "Elm St, Dallas",
    date: "2023-10-08",
    status: "Pending",
  },
  {
    id: "#CM9813",
    user: "Jacob Wilson",
    avatar: "/path/to/avatar13.jpg",
    project: "Email Marketing Tool",
    address: "Peachtree St, Atlanta",
    date: "2023-10-07",
    status: "In Progress",
  },
  {
    id: "#CM9814",
    user: "Mia Davis",
    avatar: "/path/to/avatar14.jpg",
    project: "Restaurant App",
    address: "Wall St, New York",
    date: "2023-10-06",
    status: "In Progress",
  },
  {
    id: "#CM9815",
    user: "Henry Anderson",
    avatar: "/path/to/avatar15.jpg",
    project: "Task Management",
    address: "Rodeo Drive, Beverly Hills",
    date: "2023-10-05",
    status: "Complete",
  },
  {
    id: "#CM9816",
    user: "Ava Robinson",
    avatar: "/path/to/avatar16.jpg",
    project: "Online Marketplace",
    address: "Broadway, Nashville",
    date: "2023-10-04",
    status: "Pending",
  },
  {
    id: "#CM9817",
    user: "Lucas Martinez",
    avatar: "/path/to/avatar17.jpg",
    project: "Event Management",
    address: "Hollywood Blvd, Los Angeles",
    date: "2023-10-03",
    status: "In Progress",
  },
  {
    id: "#CM9818",
    user: "Charlotte Thompson",
    avatar: "/path/to/avatar18.jpg",
    project: "Real Estate Platform",
    address: "Cabrillo Blvd, Santa Barbara",
    date: "2023-10-02",
    status: "Complete",
  },
  {
    id: "#CM9819",
    user: "Logan White",
    avatar: "/path/to/avatar19.jpg",
    project: "Job Portal",
    address: "Union Square, San Francisco",
    date: "2023-10-01",
    status: "Pending",
  },
  {
    id: "#CM9820",
    user: "Harper Clark",
    avatar: "/path/to/avatar20.jpg",
    project: "Video Streaming App",
    address: "Magnolia Ave, Houston",
    date: "2023-09-30",
    status: "In Progress",
  },
];

const OrderList = ({darkMode}) => {
  const theme = useTheme();
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchText, setSearchText] = useState("");

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredData = data.filter(
    (row) =>
      row.user.toLowerCase().includes(searchText.toLowerCase()) ||
      row.project.toLowerCase().includes(searchText.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "purple";
      case "Complete":
        return "green";
      case "Pending":
        return "yellow";
      case "Approved":
        return "orange";
      case "Rejected":
        return "gray";
      default:
        return "white";
    }
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: theme.palette.background.default,
          paddingLeft : '0 !important' 
        }}
      >
        <div>
          <Tooltip title="Add">
            <IconButton>
              <AddIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Filter">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Sort">
            <IconButton>
            <SwapVertIcon />
            </IconButton>
          </Tooltip>
        </div>
        <TextField
          variant="outlined"
          placeholder="Search"
          value={searchText}
          onChange={handleSearchChange}
          size="small"
          sx={{ width: 200 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Toolbar>
      <TableContainer
        component={Paper}
        sx={{ backgroundColor: theme.palette.background.default }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{
                      backgroundColor: theme.palette.background.paper,
                    }}
                    selec>
              <TableCell padding="checkbox" >
                <Checkbox
                style={ darkMode ? { color : 'rgba(28, 28, 28, 0.4)'}: { color : 'rgba(126, 126, 126, 1)'}}
                  indeterminate={
                    selected.length > 0 && selected.length < data.length
                  }
                  checked={data.length > 0 && selected.length === data.length}
                  onChange={(event) => {
                    if (event.target.checked) {
                      const newSelecteds = data.map((row) => row.id);
                      setSelected(newSelecteds);
                      return;
                    }
                    setSelected([]);
                  }}
                />
              </TableCell>
              <TableCell style={ darkMode ? { color : 'rgba(28, 28, 28, 0.4)'}: { color : 'rgba(126, 126, 126, 1)'}}>Order ID</TableCell>
              <TableCell style={ darkMode ? { color : 'rgba(28, 28, 28, 0.4)'}: { color : 'rgba(126, 126, 126, 1)'}}>User</TableCell>
              <TableCell style={ darkMode ? { color : 'rgba(28, 28, 28, 0.4)'}: { color : 'rgba(126, 126, 126, 1)'}}>Project</TableCell>
              <TableCell style={ darkMode ? { color : 'rgba(28, 28, 28, 0.4)'}: { color : 'rgba(126, 126, 126, 1)'}}>Address</TableCell>
              <TableCell style={ darkMode ? { color : 'rgba(28, 28, 28, 0.4)'}: { color : 'rgba(126, 126, 126, 1)'}}>Date</TableCell>
              <TableCell style={ darkMode ? { color : 'rgba(28, 28, 28, 0.4)'}: { color : 'rgba(126, 126, 126, 1)'}}>Status</TableCell>
              <TableCell style={ darkMode ? { color : 'rgba(28, 28, 28, 0.4)'}: { color : 'rgba(126, 126, 126, 1)'}}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${row.id}`;

                return (
                  <TableRow
                    key={row.id}
                    sx={{
                      backgroundColor: theme.palette.background.paper,
                    }}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        onChange={(event) => handleClick(event, row.id)}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </TableCell>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          src={row.avatar}
                          sx={{ width: 32, height: 32, marginRight: 1 }}
                        />
                        <Typography variant="body2">{row.user}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>{row.project}</TableCell>
                    <TableCell>{row.address}</TableCell>
                    <TableCell>
                      <CalendarTodayIcon
                        fontSize="small"
                        sx={{ marginRight: 0.5 }}
                      />
                      {format(parseISO(row.date), "MMM d, yyyy")}
                    </TableCell>
                    <TableCell>
                      <span style={{ color: getStatusColor(row.status) }}>
                        {row.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <IconButton size="small">
                        <MoreVertIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default OrderList;
