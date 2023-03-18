import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import SettingsInputHdmiIcon from "@mui/icons-material/SettingsInputHdmi";
import DescriptionIcon from "@mui/icons-material/Description";
import BackupIcon from "@mui/icons-material/Backup";
import InterfaceDatagrid from "./InterfaceDataGrid";
import BackupTab from "./DeviceBackUp";
import InfoTab from "./Infotab";
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

function DeviceTabs(props) {
  const [value, setValue] = useState(0);
  var style = "";
  if (props.site == "HMC Coporate Headquaters") {
    style = "#03DAc5";
  } else {
    style = "#B388FC";
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box
        sx={{ borderBottom: 0.5, p: 0, borderColor: "rgb(143 143 143 / 60%)" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: style,
            },
          }}
          variant="fullWidth"
        >
          <Tab
            sx={{
              "&.Mui-selected": {
                color: style,
              },
            }}
            icon={<DescriptionIcon />}
            iconPosition="end"
            label="Device"
          />
          <Tab
            sx={{
              "&.Mui-selected": {
                color: style,
              },
            }}
            icon={<SettingsInputHdmiIcon />}
            iconPosition="end"
            label="Interfaces"
          />
          <Tab
            sx={{
              "&.Mui-selected": {
                color: style,
              },
            }}
            icon={<BackupIcon />}
            iconPosition="end"
            label="Backup"
          />
        </Tabs>
      </Box>
      <DialogTitle>{props.device}</DialogTitle>
      <TabPanel value={value} index={0} {...a11yProps(0)}>
        <InfoTab {...props} />
      </TabPanel>
      <TabPanel value={value} index={1} {...a11yProps(1)}>
        <Box sx={{ height: "70vh", width: "100%" }}>
          <InterfaceDatagrid {...props} />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2} {...a11yProps(2)}>
        <BackupTab {...props} />
      </TabPanel>
    </div>
  );
}

// class DeviceTabs extends Component {
//   constructor(props) {
//     super(props);
//     console.log(props);
//     this.state = {
//       value: 0,
//       deviceDCIM: {},
//     };
//   }

//   handleChange = (event, newValue) => {
//     this.setState({ value: newValue });
//   };

//   componentDidMount() {
//     this.setState({ deviceDCIM: this.props.deviceDCIM });
//   }

//   render() {
//     const { style } = this.props;
//     const { value, deviceDCIM } = this.state;

//     return (
//       <div>
//         <Box
//           sx={{
//             borderBottom: 0.5,
//             p: 0,
//             borderColor: "rgb(143 143 143 / 60%)",
//           }}
//         >
//           <Tabs
//             value={value}
//             onChange={this.handleChange}
//             TabIndicatorProps={{
//               style: {
//                 backgroundColor: style,
//               },
//             }}
//             variant="fullWidth"
//           >
//             <Tab
//               sx={{
//                 "&.Mui-selected": {
//                   color: style,
//                 },
//               }}
//               icon={<DescriptionIcon />}
//               iconPosition="end"
//               label="Device"
//             />
//             <Tab
//               sx={{
//                 "&.Mui-selected": {
//                   color: style,
//                 },
//               }}
//               icon={<SettingsInputHdmiIcon />}
//               iconPosition="end"
//               label="Interfaces"
//             />
//             <Tab
//               sx={{
//                 "&.Mui-selected": {
//                   color: style,
//                 },
//               }}
//               icon={<BackupIcon />}
//               iconPosition="end"
//               label="Backup"
//             />
//           </Tabs>
//         </Box>
//         <DialogTitle>{deviceDCIM.name}</DialogTitle>
//         <TabPanel value={value} index={0} {...a11yProps(0)}>
//           <InfoTab deviceDCIM={deviceDCIM} {...this.props} />
//         </TabPanel>

//         <TabPanel
//           sx={{
//             color: "red",
//           }}
//           value={value}
//           index={1}
//           {...a11yProps(1)}
//         >
//           <Box sx={{ height: 500, width: "100%" }}>
//             <InterfaceDatagrid {...this.props} />
//           </Box>
//         </TabPanel>
//         <TabPanel value={value} index={2} {...a11yProps(2)}>
//           <BackupTab {...this.props} />
//         </TabPanel>
//       </div>
//     );
//   }
// }
export default DeviceTabs;
