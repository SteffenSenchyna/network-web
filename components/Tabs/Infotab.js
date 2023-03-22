import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import DialogContent from "@mui/material/DialogContent";
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
    console.log(props);
    this.handleSaveClick.bind(this);
    this.onFocus = {
      site: this.onSite,
      deviceRole: this.onDeviceRole,
      deviceType: this.onDeviceType,
      manufacturer: this.onManufacturer,
    };
    this.formRef = React.createRef(); // create a ref for DeviceForm component
    this.state = {
      manufacturerOptions: [],
      locationOptions: [],
      deviceRoleOptions: [],
      deviceTypeOptions: [],
      siteOptions: [],
      loading: false,
      editDevice: false,
      error: false,
      name: "",
      site: {},
      location: "",
      rack: "",
      position: "",
      manufacturer: "",
      deviceType: {},
      deviceRole: {},
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
      manufacturerOptions: [],
      deviceRoleOptions: [],
      deviceTypeOptions: [],
      siteOptions: [],
      site: {
        display: this.props.row.site.display,
        id: this.props.row.site.id,
      },
      location: this.props.row.location ? this.props.row.location.display : "-",
      rack: this.props.row.rack.display,
      name: this.props.row.name,
      position: this.props.row.position,
      manufacturer: {
        display: this.props.row.device_type.manufacturer.display,
        id: this.props.row.device_type.manufacturer.id,
      },
      deviceType: {
        display: this.props.row.device_type.display,
        id: this.props.row.device_type.id,
      },
      deviceRole: {
        display: this.props.row.device_role.display,
        id: this.props.row.device_role.id,
      },
      description: this.props.row.description,
      status: this.props.row.status.label,
      ipv4: this.props.row.primary_ip4.display,
      ipv6: this.props.row.primary_ip6
        ? this.props.row.primary_ip6.display
        : "-",

      editDevice: false,
    });
  }

  handleDeviceEdit = () => {
    this.setState({ editDevice: true });
  };

  onSite = async () => {
    try {
      this.setState({ loading: true });
      const response = await axios.get("/api/netbox/dcim/get/sites");
      const responseList = response.data.responseList;
      this.setState({ siteOptions: responseList });
      this.setState({ loading: false });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  };
  onDeviceType = async () => {
    try {
      this.setState({ loading: true });
      const response = await axios.get("/api/netbox/dcim/get/device-types");
      const responseList = response.data.responseList;
      this.setState({ deviceTypeOptions: responseList });
      this.setState({ loading: false });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  };
  onDeviceRole = async () => {
    try {
      this.setState({ loading: true });
      const response = await axios.get("/api/netbox/dcim/get/device-roles");
      const responseList = response.data.responseList;
      this.setState({ deviceRoleOptions: responseList });
      this.setState({ loading: false });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  };
  onManufacturer = async () => {
    try {
      this.setState({ loading: true });
      const response = await axios.get("/api/netbox/dcim/get/manufacturers");
      const responseList = response.data.responseList;
      this.setState({ manufacturerOptions: responseList });
      this.setState({ loading: false });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  };

  onLocation = async () => {
    try {
      this.setState({ loading: true });
      const response = await axios.get("/api/netbox/dcim/get/locations");
      const responseList = response.data.responseList;
      this.setState({ deviceRoleOptions: responseList });
      this.setState({ loading: false });
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
      deviceRole,
      description,
      name,
      status,
      platform,
      ipv4,
      ipv6,
      style,
    } = this.state;
    return (
      <div>
        {editDevice ? (
          <div>
            <Grow in={editDevice} timeout={800} nodeRef={this.formRef}>
              <div ref={this.formRef}>
                <DeviceForm
                  onFocus={this.onFocus}
                  onSiteFocus={this.onSiteFocus}
                  onDeviceTypeFocus={this.onDeviceTypeFocus}
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
                      Name: {name}
                      <br />
                      Role: {deviceRole.display}
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
                      Device Type: {deviceType.display}
                      <br />
                      Platform: {platform}
                      <br />
                      IPv4: {ipv4}
                      <br />
                      IPv6: {ipv6}
                      <br />
                      Site: {site.display}
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
                      Location
                    </Typography>
                    <Typography variant="body2">
                      Site: {site.display}
                      <br />
                      Location: {location}
                      <br />
                      Rack: {rack}
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
      </div>
    );
  }
}
export default InfoTab;
