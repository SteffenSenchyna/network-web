import { useState, useEffect, Component } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
class DeviceForm extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Card sx={{ overflow: "auto" }}>
                <CardContent>
                  <Typography variant="h5" component="div" sx={{ mb: 1 }}>
                    Device
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                      <TextField
                        color={this.props.state.style}
                        variant="filled"
                        label="Name"
                        fullWidth
                      ></TextField>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                      <Autocomplete
                        defaultValue={this.props.state.deviceRole}
                        loading={this.props.state.loading}
                        options={this.props.state.deviceRoleOptions}
                        onFocus={this.props.onFocus.deviceRole}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            color={this.props.state.style}
                            label="Device Role"
                            variant="filled"
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                      <TextField
                        color={this.props.state.style}
                        variant="filled"
                        label="Description"
                        fullWidth
                      ></TextField>
                    </Grid>
                    <Grid item xs={2}></Grid>
                  </Grid>
                  <Typography variant="h5" component="div" sx={{ mb: 1 }}>
                    Hardware
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                      <Autocomplete
                        defaultValue={this.props.state.deviceRole}
                        loading={this.props.state.loading}
                        options={this.props.state.deviceRoleOptions}
                        onFocus={this.props.onFocus.deviceRole}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            color={this.props.state.style}
                            label="Manufacturer"
                            variant="filled"
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                      <Autocomplete
                        defaultValue={this.props.state.deviceType}
                        loading={this.props.state.loading}
                        options={this.props.state.deviceTypeOptions}
                        onFocus={this.props.onFocus.deviceType}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            color={this.props.state.style}
                            label="Device Type"
                            variant="filled"
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                      <TextField
                        color={this.props.state.style}
                        variant="filled"
                        label="Serial Number"
                        fullWidth
                      ></TextField>
                    </Grid>
                    <Grid item xs={2}></Grid>
                  </Grid>
                  <Typography variant="h5" component="div" sx={{ my: 1 }}>
                    Location
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                      <Autocomplete
                        defaultValue={this.props.state.site}
                        loading={this.props.state.loading}
                        options={this.props.state.siteOptions}
                        onFocus={this.props.onFocus.site}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            color={this.props.state.style}
                            label="Site"
                            variant="filled"
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                      <TextField
                        color={this.props.state.style}
                        variant="filled"
                        label="Location"
                        fullWidth
                      ></TextField>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                      <TextField
                        color={this.props.state.style}
                        variant="filled"
                        label="Rack"
                        fullWidth
                      ></TextField>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                      <TextField
                        color={this.props.state.style}
                        variant="filled"
                        label="Device Type"
                        fullWidth
                      ></TextField>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                      <TextField
                        color={this.props.state.style}
                        variant="filled"
                        label="Description"
                        fullWidth
                      ></TextField>
                    </Grid>
                    <Grid item xs={2}></Grid>
                  </Grid>
                </CardContent>
                <CardActions style={{ justifyContent: "flex-end" }}>
                  <Button
                    color={this.props.state.style}
                    onClick={this.props.handleSaveClick}
                  >
                    Save
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default DeviceForm;
