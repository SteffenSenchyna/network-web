import * as React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
//MUI
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { DataGrid } from "@mui/x-data-grid";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
//ReCharts
import {
  PieChart,
  Pie,
  Label,
  Cell,
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Man } from "@mui/icons-material";

function Home() {
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const [mainDevices, setMainDevices] = useState([]);
  const [remoteDevices, setRemoteDevices] = useState([]);
  const [totalDevicesMain, setTotalDevicesMain] = useState(0);
  const [upDevicesMain, setUpDevicesMain] = useState(0);
  const [downDevicesMain, setDownDevicesMain] = useState(0);
  const [totalDevicesRemote, setTotalDevicesRemote] = useState(0);
  const [upDevicesRemote, setUpDevicesRemote] = useState(0);
  const [downDevicesRemote, setDownDevicesRemote] = useState(0);
  const [bandwidthMain, setBandwidthMain] = useState([]);
  const [bandwidthRemote, setBandwidthRemote] = useState([]);

  const router = useRouter();
  const coloursMain = ["#03DAc5", "#006b60"];
  const coloursRemote = ["#B388FC", "rgba(179, 136, 252, 0.27)"];

  const getUpDevices = async () => {
    await axios
      .get("/api/scan/")
      .then(function (response) {
        const deviceJSON = response.data;
        setUpDevicesMain(deviceJSON["upDevicesMain"]);
        setTotalDevicesMain(deviceJSON["totalDevicesMain"]);
        setDownDevicesMain(deviceJSON["downDevicesMain"]);
        setUpDevicesRemote(deviceJSON["upDevicesRemote"]);
        setTotalDevicesRemote(deviceJSON["totalDevicesRemote"]);
        setDownDevicesRemote(deviceJSON["downDevicesRemote"]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getBandwidth = async () => {
    await axios
      .get("/api/bandwidth/")
      .then(function (response) {
        const deviceJSON = response.data;
        setBandwidthMain(deviceJSON["bandwidthSpeedsMain"]);
        setBandwidthRemote(deviceJSON["bandwidthSpeedsRemote"]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getDevices = async () => {
    const mainDev = [];
    const remoteDev = [];
    await axios
      .get("/api/netbox/dcim/getDevices/")
      .then(function (response) {
        const deviceJSON = response.data["results"];
        deviceJSON.forEach((i) => {
          if (i["site"]["slug"] == "primary-data-centre") {
            mainDev.push(i);
          } else {
            remoteDev.push(i);
          }
        });
        setMainDevices(mainDev);
        setRemoteDevices(remoteDev);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBandwidth();
    getUpDevices();
    getDevices();
  }, []);

  const bandDataMain = bandwidthMain;
  const bandDataRemote = bandwidthRemote;
  const dataMain = [
    { name: "OnlineMain", value: upDevicesMain },
    { name: "DownMain", value: downDevicesMain },
  ];
  const dataRemote = [
    { name: "OnlineRemote", value: upDevicesRemote },
    { name: "DownRemote", value: downDevicesRemote },
  ];
  const labelMain = dataMain[0].value + "/" + totalDevicesMain;
  const labelRemote = dataRemote[0].value + "/" + totalDevicesRemote;
  const columns = [
    {
      field: "name",
      headerName: "Device",
      width: 110,
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
      renderCell(params) {
        return params.value.value === "active" ? (
          <Chip
            icon={<CheckCircleOutlineIcon />}
            label="Active"
            variant="outlined"
            color="success"
          />
        ) : (
          <Chip
            icon={<CheckCircleOutlineIcon />}
            label="Offline"
            variant="outlined"
            color="error"
          />
        );
      },
    },
    {
      field: "primary_ip",
      headerName: "Primary IP",
      width: 130,
      valueGetter: (params) => {
        return params.row.primary_ip.display;
      },
    },
    {
      field: "device_type",
      headerName: "Device Type",
      width: 160,
      valueGetter: (params) => {
        return params.row.device_type.display;
      },
    },
    {
      field: "last_updated",
      headerName: "Last Updated",
      width: 230,
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h4" align="center">
              Welcome to Network Admin App
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} lg={5}>
        <Card style={{ flex: 1 }} sx={{ pb: "40px" }}>
          <CardContent sx={{ pb: "60px" }}>
            <Typography gutterBottom variant="h4" component="div">
              Network Devices Online
            </Typography>

            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              <Grid item>
                <Typography gutterBottom variant="h5" component="div">
                  Main Site
                </Typography>
                <PieChart
                  id="PieMain"
                  margin={{ top: 40, left: 0, right: 0, bottom: 0 }}
                  width={200}
                  height={200}
                >
                  <Pie
                    dataKey="value"
                    data={dataMain}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={0}
                    startAngle={-90}
                    label={false}
                    labelLine={false}
                    stroke="none"
                    isSelectionDisabled={true}
                  >
                    {dataMain.map((entry, index) => (
                      <Cell
                        isSelectionDisabled={true}
                        key={`cell-${index}`}
                        fill={coloursMain[index % coloursMain.length]}
                      />
                    ))}
                    <Label value={labelMain} position="center" />
                  </Pie>
                </PieChart>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h5" component="div">
                  Remote Site
                </Typography>
                <PieChart
                  id="PieRemote"
                  margin={{ top: 40, left: 0, right: 0, bottom: 0 }}
                  width={200}
                  height={200}
                >
                  <Pie
                    activeIndex={activeIndex}
                    dataKey="value"
                    data={dataRemote}
                    innerRadius={60}
                    outerRadius={80}
                    margin={{ top: 20 }}
                    fill="#8884d8"
                    paddingAngle={0}
                    startAngle={-90}
                    label={false}
                    labelLine={false}
                    stroke="none"
                  >
                    {dataRemote.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={coloursRemote[index % coloursRemote.length]}
                      />
                    ))}
                    <Label value={labelRemote} position="center" />
                  </Pie>
                </PieChart>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={7}>
        <Card sx={{ minWidth: 345, minHeight: 350 }}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Network Bandwidth
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Main Site
            </Typography>
            <ResponsiveContainer width="99%" height={100}>
              <AreaChart width={540} height={100} data={bandDataMain}>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#03DAc5"
                  strokeWidth={2}
                  fill="#006b60"
                />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active) {
                      return (
                        <div>
                          <p>{`${label}: ${payload[0].value}Mbps`}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
            <Typography gutterBottom variant="h5" component="div">
              Remote Site
            </Typography>
            <ResponsiveContainer width="99%" height={100}>
              <AreaChart width={540} height={100} data={bandDataRemote}>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#B388FC"
                  strokeWidth={2}
                  fill="rgba(179, 136, 252, 0.27)"
                />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active) {
                      return (
                        <div>
                          <p>{`${label}: ${payload[0].value}Mbps`}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Box
          sx={{
            height: 300,
            width: "100%",
          }}
        >
          <DataGrid
            hideFooter
            disableSelectionOnClick
            rows={mainDevices}
            columns={columns}
            sx={{
              border: 2,
              borderColor: "primary.light",
              "& .MuiDataGrid-cell:hover": {
                color: "primary.main",
              },
              ".MuiDataGrid-menuIconButton": {
                color: "primary.main",
              },
              ".MuiDataGrid-sortIcon": {
                color: "primary.main",
              },
              ".MuiDataGrid-cell:focus": {
                outline: "none",
              },
              "& .MuiDataGrid-columnHeader--sortable:focus": {
                outline: "none",
              },
              ".MuiDataGrid-columnHeader:focus-within": {
                outline: "none",
              },
              "& > .MuiDataGrid-columnSeparator": {
                visibility: "hidden",
              },
              "& .MuiDataGrid-columnHeader:last-child .MuiDataGrid-columnSeparator":
                {
                  display: "none",
                },
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Box sx={{ height: 300, width: "100%" }}>
          <DataGrid
            hideFooter
            disableSelectionOnClick
            rows={remoteDevices}
            columns={columns}
            sx={{
              boxShadow: 2,
              border: 2,
              borderColor: "secondary.light",
              "& .MuiDataGrid-cell:hover": {
                color: "secondary.main",
              },
              ".MuiDataGrid-menuIconButton": {
                color: "secondary.main",
              },
              ".MuiDataGrid-sortIcon": {
                color: "secondary.main",
              },
              ".MuiDataGrid-cell:focus": {
                outline: "none",
              },
              "& .MuiDataGrid-columnHeader--sortable:focus": {
                outline: "none",
              },
              ".MuiDataGrid-columnHeader:focus-within": {
                outline: "none",
              },
              "& .MuiDataGrid-columnHeader:last-child .MuiDataGrid-columnSeparator":
                {
                  display: "none",
                },
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
export default Home;
