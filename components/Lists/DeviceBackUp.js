import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import DialogContent from "@mui/material/DialogContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import download from "downloadjs";
export default function BackupTab(props) {
  const [loading, setLoading] = useState(true);
  const [backups, setBackups] = useState([]);
  const device = props.device;
  const getBackUp = async (device) => {
    await axios
      .get(`/api/s3/backup/get/${device}`)
      .then(function (response) {
        setBackups(response.data.reverse());
        setLoading(false);
      })
      .catch((error) => {
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
        <Typography>Backups</Typography>
        {loading && <CircularProgress />}
        <List
          sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" }}
        >
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
      </DialogContent>
    </div>
  );
}
