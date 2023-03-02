import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { useState, useEffect, cloneElement } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import SettingsInputHdmiIcon from "@mui/icons-material/SettingsInputHdmi";
import DescriptionIcon from "@mui/icons-material/Description";
import BackupIcon from "@mui/icons-material/Backup";
import InterfaceDatagrid from "../DataGrids/InterfaceDataGrid";
import BackupTab from "./DeviceBackUp";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function DeviceTab(props) {
  const [value, setValue] = useState(0);
  const [initialized, setInitialized] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    setInitialized(true);
  }, []);
  // console.log(props.data.rows[0]);
  return (
    <div>
      <Box
        sx={{ borderBottom: 0.5, p: 0, borderColor: "rgb(143 143 143 / 60%)" }}
      >
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab icon={<DescriptionIcon />} iconPosition="end" label="Device" />
          <Tab
            icon={<SettingsInputHdmiIcon />}
            iconPosition="end"
            label="Interfaces"
          />
          <Tab icon={<BackupIcon />} iconPosition="end" label="Backup" />
        </Tabs>
      </Box>
      <DialogTitle>{props.device}</DialogTitle>
      <TabPanel value={value} index={0} {...a11yProps(0)}></TabPanel>
      <TabPanel value={value} index={1} {...a11yProps(1)}>
        <Box sx={{ height: 500, width: "100%" }}>
          <InterfaceDatagrid {...props} />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2} {...a11yProps(2)}>
        <BackupTab {...props} />
      </TabPanel>
    </div>
  );
}
export default DeviceTab;
