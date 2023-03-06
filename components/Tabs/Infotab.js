import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import DialogContent from "@mui/material/DialogContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
export default function InfoTab(props) {
  const [loading, setLoading] = useState(true);
  const [backups, setBackups] = useState([]);
  const [error, setError] = useState(false);
  const [site, setSite] = useState("");
  const [location, setLocation] = useState("");
  const [rack, setRack] = useState("");
  const [position, setPosition] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [platform, setPlatform] = useState("");
  const [ipv4, setIPv4] = useState("");
  const [ipv6, setIPv6] = useState("");

  // const [style, setBackups] = useState("");
  var style = "";
  if (props.site == "primary-data-centre") {
    style = "primary";
  } else {
    style = "secondary";
  }

  useEffect(() => {
    setSite(props.row.site.display);
    setLocation(props.row.location);
    setRack(props.row.rack.display);
    setPosition(props.row.position);
    setDeviceType(props.row.device_type.display);
    setDescription(props.row.description);
    setStatus(props.row.status.label);
    setIPv4(props.row.primary_ip4.display);
    // setIPv6(props.row.primary_ip6.display);
  }, []);
  return (
    <div>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" sx={{ mb: 1 }}>
                  Device
                </Typography>
                <Typography variant="body2">
                  Site: {site}
                  <br />
                  Location: {location}
                  <br />
                  Rack: {rack}
                  <br />
                  Position: {position}
                  <br />
                  Device Type: {deviceType}
                  <br />
                  Description: {description}
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "flex-end" }}>
                <Button size="small">Edit</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" sx={{ mb: 1 }}>
                  Managment
                </Typography>
                <Typography variant="body2">
                  Status: {status}
                  <br />
                  Role:
                  <br />
                  Platform: {platform}
                  <br />
                  IPv4: {ipv4}
                  <br />
                  IPv6:
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "flex-end" }}>
                <Button size="small">Edit</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" sx={{ mb: 1 }}>
                  Services
                </Typography>
                <Typography variant="body2"></Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "flex-end" }}>
                <Button size="small">Edit</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" sx={{ mb: 1 }}>
                  Contacts
                </Typography>
                <Typography variant="body2">IT Admin: 780-449-2408</Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "flex-end" }}>
                <Button size="small">Edit</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </DialogContent>
    </div>
  );
}
