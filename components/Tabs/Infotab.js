import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import DialogContent from "@mui/material/DialogContent";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grow from "@mui/material/Grow";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import DeviceForm from "../Forms/DeviceForm";
import axios from "axios";

class InfoTab extends Component {
  constructor(props) {
    super(props);
    this.handleSaveClick.bind(this);
    this.formRef = React.createRef(); // create a ref for DeviceForm component
    this.state = {
      siteOptions: [],
      loading: false,
      editDevice: false,
      error: false,
      site: "",
      location: "",
      rack: "",
      position: "",
      deviceType: "",
      description: "",
      status: "",
      ipv4: "",
      ipv6: "",
      style:
        this.props.site === "HMC Coporate Headquaters"
          ? "primary"
          : "secondary",
    };
  }

  componentDidMount() {
    this.setState({
      siteOptions: [],
      site: this.props.row.site.display,
      location: this.props.row.location.display,
      rack: this.props.row.rack.display,
      position: this.props.row.position,
      deviceType: this.props.row.device_type.display,
      description: this.props.row.description,
      status: this.props.row.status.label,
      ipv4: this.props.row.primary_ip4.display,
      editDevice: false,
    });
  }

  handleDeviceEdit = () => {
    this.setState({ editDevice: true });
  };
  onSiteFocus = async () => {
    try {
      const response = await axios.get("/api/netbox/dcim/sites/get");
      const responseList = response.data.responseList;
      this.setState({ siteOptions: responseList });
    } catch (error) {
      console.log(error);
    }
  };
  handleSaveClick = () => {
    this.setState({ editDevice: false });
  };
  render() {
    const {
      loading,
      editDevice,
      error,
      site,
      location,
      rack,
      position,
      deviceType,
      description,
      status,
      platform,
      ipv4,
      ipv6,
      style,
    } = this.state;
    return (
      <div>
        <DialogContent>
          {editDevice ? (
            <div>
              <Grow in={editDevice} timeout={800} nodeRef={this.formRef}>
                <div ref={this.formRef}>
                  <DeviceForm
                    onSiteFocus={this.onSiteFocus}
                    handleSaveClick={this.handleSaveClick}
                    state={this.state}
                    style={style}
                    unmountOnExit
                  />
                </div>
              </Grow>
            </div>
          ) : (
            <Grow in={!editDevice} timeout={800} unmountOnExit>
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
                        Device Type: {deviceType}
                        <br />
                        Description: {description}
                      </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: "flex-end" }}>
                      <Button
                        color={style}
                        size="small"
                        onClick={this.handleDeviceEdit}
                      >
                        Edit
                      </Button>
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
                      <Button color={style} size="small">
                        Edit
                      </Button>
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
                      <Button color={style} size="small">
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="div" sx={{ mb: 1 }}>
                        Contacts
                      </Typography>
                      <Typography variant="body2">
                        IT Admin: 780-449-2408
                      </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: "flex-end" }}>
                      <Button color={style} size="small">
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grow>
          )}
        </DialogContent>
      </div>
    );
  }
}
export default InfoTab;
