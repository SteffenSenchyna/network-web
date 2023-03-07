import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import DialogContent from "@mui/material/DialogContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Grow from "@mui/material/Grow";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import download from "downloadjs";
export default function BackupTab(props) {
  const [loading, setLoading] = useState(true);
  const [backups, setBackups] = useState([]);
  const [error, setError] = useState(false);
  // const [style, setBackups] = useState("");
  var style = "";
  const device = props.device;
  if (props.site == "HMC Coporate Headquaters") {
    style = "primary";
  } else {
    style = "secondary";
  }
  const getBackUp = async (device) => {
    await axios
      .get(`/api/s3/backup/get/${device}`)
      .then(function (response) {
        setBackups(response.data.reverse());
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        console.log(error);
      });
  };

  const pullBackUp = async (index) => {
    await axios
      .get(`/api/s3/backup/pull/${index}`)
      .then(function (response) {
        const backup = response.data;
        download(backup, `${index}.txt`, "text/plain");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getBackUp(device);
  }, []);
  return (
    <div>
      <DialogContent>
        <Grow in={true} timeout={800} unmountOnExit>
          <Grid container spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Backups</Typography>
                  {loading && (
                    <>
                      <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Grid item>
                          <CircularProgress color={style} />
                        </Grid>
                      </Grid>
                    </>
                  )}
                  {error && <Typography>No Backups Available</Typography>}
                  <List>
                    {backups.map((index) => (
                      <ListItem
                        key={index}
                        disableGutters
                        secondaryAction={
                          <IconButton onClick={() => pullBackUp(index)}>
                            <CloudDownloadIcon />
                          </IconButton>
                        }
                      >
                        <ListItemText primary={index} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grow>
      </DialogContent>
    </div>
  );
}
