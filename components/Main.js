//React
import * as React from "react";
import { useRouter } from "next/router";
import { useState, useEffect, createContext } from "react";
//MUI
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Container } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
//Icons
import RouterIcon from "@mui/icons-material/Router";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RadarIcon from "@mui/icons-material/Radar";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import DescriptionIcon from "@mui/icons-material/Description";

const theme = createTheme({
  palette: {
    mode: "dark",
    //Turquoise
    primary: {
      main: "#03DAc5",
    },
    //Purple
    secondary: {
      main: "#B388FC",
    },
    background: {
      paper: "#1D1D1D",
    },
    text: {
      primary: "#dcdada",
    },
    error: {
      main: "#cf6679",
    },
    success: {
      main: "#81c784",
    },
  },

  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: "#1D1D1D",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "rgb(143 143 143 / 60%)",
        },
      },
    },

    MuiDataGrid: {
      styleOverrides: {
        root: {
          "& .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight) > .MuiDataGrid-cell":
            {
              overflow: "hidden",
              whiteSpace: "normal",
            },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          "&:hover": {
            backgroundColor: "#dcdada",
            color: "#3c52b2",
          },
          "&:active": {
            backgroundColor: "#dcdada",
            color: "#dcdada",
          },
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        borderColor: "#dcdada",
      },
    },
  },
});
const drawerWidth = 240;

const Layout = ({ children }) => {
  // const classes = useStyles()
  const router = useRouter();

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const pageTitles = ["Dashboard", "Scan", "Devices", "Logs"];
  const pagePaths = ["/", "/scan", "/devices", "/logs"];
  const [value, setValue] = useState("/");
  const handleNavigationClickBottom = (event, index) => {
    setValue(index);
    router.push(index);
  };
  const handleNavigationClick = (event, index) => {
    setCurrentPageIndex(index);
  };
  useEffect(() => {
    if (router.pathname.includes("/scan")) {
      setCurrentPageIndex(1);
      setValue("/scan");
    } else if (router.pathname.includes("/devices")) {
      setCurrentPageIndex(2);
      setValue("/devices");
    } else if (router.pathname.includes("/logs")) {
      setCurrentPageIndex(3);
      setValue("/logs");
    } else if (router.pathname.includes("/")) {
      setCurrentPageIndex(0);
      setValue("/");
    }
  }, [router]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Box sx={{ display: "flex" }}>
          <Drawer
            sx={{
              display: { xs: "none", lg: "flex" },
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Toolbar>
              <Typography
                sx={{
                  fontSize: 19,
                  fontWeight: "800",
                }}
                gutterBottom
                align="center"
                justifyContent="center"
              >
                Comrade Solutions
              </Typography>
            </Toolbar>
            <Divider />
            <List>
              {pageTitles.map((page, index) => (
                <ListItem key={page} disablePadding>
                  <ListItemButton
                    selected={index == currentPageIndex}
                    onClick={(event) => {
                      handleNavigationClick(event, index);
                      router.push(pagePaths[index]);
                    }}
                  >
                    {index === currentPageIndex ? (
                      <>
                        {/* selected button */}
                        <ListItemIcon style={{ color: "#fafdfb" }}>
                          {page === "Dashboard" && (
                            <DashboardIcon sx={{ width: 30, height: 30 }} />
                          )}
                          {page === "Scan" && (
                            <RadarIcon sx={{ width: 30, height: 30 }} />
                          )}
                          {page === "Devices" && (
                            <RouterIcon sx={{ width: 30, height: 30 }} />
                          )}
                          {page === "Logs" && (
                            <DescriptionIcon sx={{ width: 30, height: 30 }} />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          style={{ marginLeft: "-10px" }}
                          primaryTypographyProps={{
                            style: {
                              fontSize: "24px",
                              fontWeight: "700",
                              color: "#dcdada",
                            },
                          }}
                          primary={page}
                        />
                      </>
                    ) : (
                      <>
                        <ListItemIcon style={{ color: "#03DAc5" }}>
                          {page === "Dashboard" && (
                            <DashboardIcon sx={{ width: 30, height: 30 }} />
                          )}
                          {page === "Scan" && (
                            <RadarIcon sx={{ width: 30, height: 30 }} />
                          )}
                          {page === "Devices" && (
                            <RouterIcon sx={{ width: 30, height: 30 }} />
                          )}
                          {page === "Logs" && (
                            <DescriptionIcon sx={{ width: 30, height: 30 }} />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          style={{ marginLeft: "-10px" }}
                          primaryTypographyProps={{
                            style: {
                              fontSize: "24px",
                              fontWeight: "500",
                              color: "#4A4A4A",
                            },
                          }}
                          primary={page}
                        />
                      </>
                    )}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Drawer>
          <CssBaseline />
          <Container component="main" sx={{ flexGrow: 1, p: 1 }}>
            {children}
          </Container>
          <BottomNavigation
            sx={{
              display: { xs: "flex", lg: "none" },
              position: "fixed",
              bottom: 0,
            }}
            style={{ width: "100%" }}
            value={value}
            onChange={handleNavigationClickBottom}
          >
            <BottomNavigationAction
              label="Dashboard"
              value="/"
              icon={<DashboardIcon />}
            />
            <BottomNavigationAction
              label="Scan"
              value="/scan"
              icon={<RadarIcon />}
            />
            <BottomNavigationAction
              label="Devices"
              value="/devices"
              icon={<RouterIcon />}
            />
            <BottomNavigationAction
              label="Logs"
              value="/logs"
              icon={<DescriptionIcon />}
            />
          </BottomNavigation>
        </Box>
      </div>
    </ThemeProvider>
  );
};
export default Layout;
