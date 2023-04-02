import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import axios from "axios";
import LogTable from "../../components/Tables/SyslogTable";

function Logs() {
  const [logs, setLogs] = useState([]);

  const getLogs = async () => {
    try {
      const response = await axios.get("/api/syslogs/get");
      setLogs(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLogs();
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h4" align="center">
              System Logs
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Box sx={{ minWidth: 120 }}>
              <LogTable {...logs.collections} />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
export default Logs;
