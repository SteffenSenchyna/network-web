import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import DialogContent from "@mui/material/DialogContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { S3 } from "aws-sdk";
export default function BackupTab(props) {
  const device = props.device;
  const getBackUp = async (device) => {
    await axios
      .get(`/api/s3/backup/get/${device}`)
      .then(function (response) {})
      .catch((error) => {
        console.log(error);
      });
  };

  const postBackUp = async (id) => {
    await axios
      .get(`/api/netbox/dcim/backup/post/${id}`)
      .then(function (response) {
        const deviceJSON = response.data;
        console.log(deviceJSON);
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
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {[1, 2, 3].map((value) => (
            <ListItem
              key={value}
              disableGutters
              secondaryAction={
                <IconButton aria-label="comment">
                  <CommentIcon />
                </IconButton>
              }
            >
              <ListItemText primary={`Line item ${value}`} />
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </div>
  );
}
