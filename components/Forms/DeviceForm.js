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
    this.handleSaveClick.bind(this);
    this.handleSiteFocus.bind(this);
  }

  handleSiteFocus = async () => {
    await this.props.onSiteFocus();
  };

  handleSaveClick = () => {
    this.props.handleSaveClick();
  };

  render() {
    return (
      <>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Card sx={{ maxHeight: 460, overflow: "auto" }}>
                <CardContent>
                  <Typography variant="h5" component="div" sx={{ mb: 1 }}>
                    Device
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                      <TextField
                        variant="filled"
                        label="Name"
                        fullWidth
                      ></TextField>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                      <Autocomplete
                        options={this.props.state.siteOptions}
                        onFocus={this.handleSiteFocus}
                        renderInput={(params) => (
                          <TextField
                            {...params}
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
                        variant="filled"
                        label="Description"
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
                      <TextField
                        required
                        variant="filled"
                        label="Site"
                        fullWidth
                      ></TextField>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                      <TextField
                        variant="filled"
                        label="Location"
                        fullWidth
                      ></TextField>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                      <TextField
                        variant="filled"
                        label="Rack"
                        fullWidth
                      ></TextField>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                      <TextField
                        variant="filled"
                        label="Device Type"
                        fullWidth
                      ></TextField>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                      <TextField
                        variant="filled"
                        label="Description"
                        fullWidth
                      ></TextField>
                    </Grid>
                    <Grid item xs={2}></Grid>
                  </Grid>
                </CardContent>
                <CardActions style={{ justifyContent: "flex-end" }}>
                  <Button onClick={this.handleSaveClick}>Save</Button>
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
