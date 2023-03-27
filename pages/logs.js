import * as React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect } from "react";
import axios from "axios";
import SyslogTable from "../components/Tables/SyslogTable";

function Logs() {
  const [deviceOptions, setDeviceOptions] = useState([]);
  const [device, setDevice] = useState("");
  const [logs, setLogs] = useState([]);

  const getLogs = async () => {
    try {
      const response = await axios.get("/api/syslogs/get");
      setLogs(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const getDevices = async () => {
    await axios
      .get("/api/netbox/dcim/devices/get")
      .then(function (response) {
        const deviceJSON = response.data["results"];
        setDeviceOptions(deviceJSON);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChange = (event) => {
    setDevice(event.target.value);
  };
  useEffect(() => {
    getDevices();
    getLogs();
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h4" align="center">
              Device Logs
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Box sx={{ minWidth: 120 }}>
              <SyslogTable {...logs.collections} />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
export default Logs;
