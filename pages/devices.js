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
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
//ICONS
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
//Components
import DeviceTabs from "../components/Tabs/DeviceTabs";

function Devices() {
  const [loading, setLoading] = useState(false);
  const [row, setRow] = useState([]);
  const [site, setSite] = useState("");
  const [style, setStyle] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedCell, setSelectedCell] = useState({});
  const [mainDevices, setMainDevices] = useState([]);
  const [remoteDevices, setRemoteDevices] = useState([]);
  const [deviceSelected, setDeviceSelected] = useState("");
  const [interfaces, setInterfaces] = useState([]);
  const router = useRouter();
  const handleCellClick = (event) => {
    getInterfaces(event.row.id);
    setSelectedCell({
      row: event.row,
    });
    setDeviceSelected(event.row.display);
    setSite(event.row.site.display);
    setRow(event.row);
    setOpen(true);
    if (event.row.site.name == "HMC Coporate Headquaters") {
      setStyle("primary");
    } else {
      setStyle("secondary");
    }
  };

  const getDevices = async () => {
    const mainDev = [];
    const remoteDev = [];
    await axios
      .get("/api/netbox/dcim/devices/get")
      .then(function (response) {
        const deviceJSON = response.data["results"];
        deviceJSON.forEach((i) => {
          if (i["site"]["slug"] == "MAIN") {
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

  const getInterfaces = async (id) => {
    setLoading[true];
    await axios
      .get(`/api/netbox/dcim/interfaces/get/${id}`)
      .then(function (response) {
        const deviceJSON = response.data;
        setInterfaces(deviceJSON);
        setLoading[false];
      })
      .catch((error) => {
        setLoading[false];
        console.log(error);
      });
  };

  useEffect(() => {
    getDevices();
  }, []);
  const columnsInterfaces = [
    {
      field: "name",
      headerName: "Interface",
      width: 110,
    },
    {
      field: "enabled",
      headerName: "Status",
      width: 110,
      renderCell(params) {
        return params.row.enabled === true ? (
          <Chip
            icon={<CheckCircleOutlineIcon />}
            label="Active"
            variant="outlined"
            color="success"
          />
        ) : (
          <Chip
            icon={<CancelOutlinedIcon />}
            label="Offline"
            variant="outlined"
            color="error"
          />
        );
      },
    },
    {
      field: "ipv4",
      headerName: "IPv4",
      width: 140,
      valueGetter: (params) => {
        return params.row && params.row.ip4 && params.row.ip4.display
          ? params.row.ip4.display
          : "-";
      },
    },
    {
      field: "ipv6",
      headerName: "IPv6",
      width: 180,
      valueGetter: (params) => {
        return params.row && params.row.ip6 && params.row.ip6.display
          ? params.row.ip6.display
          : "-";
      },
    },
    {
      field: "connection",
      headerName: "Connection",
      width: 180,
      valueGetter: (params) => {
        return params.row && params.row.link_peers && params.row.link_peers[0]
          ? `${params.row.link_peers[0].display} on ${params.row.link_peers[0].device.display}`
          : "-";
      },
    },
    {
      field: "mode",
      headerName: "Mode",
      width: 180,
      valueGetter: (params) => {
        return params.row && params.row.mode ? `${params.row.mode.label}` : "-";
      },
    },
    {
      field: "routing",
      headerName: "Routing",
      width: 180,
      valueGetter: (params) => {
        return params.row && params.row.custom_fields.routing_information
          ? `${params.row.custom_fields.routing_information}`
          : "-";
      },
    },
    {
      field: "type",
      headerName: "Type",
      width: 130,
      valueGetter: (params) => {
        return params.row.type.label;
      },
    },
    {
      field: "last_updated",
      headerName: "Last Updated",
      width: 230,
    },
    {
      field: "created",
      headerName: "Created",
      width: 230,
    },
  ];

  const columnsDevices = [
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
            icon={<CancelOutlinedIcon />}
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
      field: "device_role",
      headerName: "Device Role",
      width: 190,
      valueGetter: (params) => {
        return params.row.device_role.display;
      },
    },
    {
      field: "site",
      headerName: "Site",
      width: 160,
      valueGetter: (params) => {
        return params.row.site.display;
      },
    },
    {
      field: "last_updated",
      headerName: "Last Updated",
      width: 230,
    },
    {
      field: "created",
      headerName: "Created",
      width: 230,
    },
  ];
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h4" align="center">
              Device Managment
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Dialog fullScreen open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <DeviceTabs
            row={row}
            site={site}
            device={deviceSelected}
            rows={interfaces}
            columns={columnsInterfaces}
          />
        </DialogContent>
        <DialogActions>
          <Button color={style} onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Grid item xs={12} lg={12}>
        <Box
          sx={{
            height: 350,
            width: "100%",
          }}
        >
          <DataGrid
            hideFooter
            onCellClick={handleCellClick}
            disableSelectionOnClick
            rows={mainDevices}
            columns={columnsDevices}
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
      <Grid item xs={12} lg={12}>
        <Box sx={{ height: 350, width: "100%" }}>
          <DataGrid
            hideFooter
            onCellClick={handleCellClick}
            disableSelectionOnClick
            rows={remoteDevices}
            columns={columnsDevices}
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
export default Devices;
