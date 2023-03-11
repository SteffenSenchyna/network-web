import { DataGrid } from "@mui/x-data-grid";
import Grow from "@mui/material/Grow";
export default function InterfaceDatagrid(params) {
  console.log(params);
  var style = "";
  if (params.site == "HMC Coporate Headquaters") {
    style = "primary.main";
  } else {
    style = "secondary.main";
  }
  const columnsInterfaces = [
    {
      field: "name",
      headerName: "Interface",
      width: 110,
    },
    {
      field: "enabled",
      headerName: "Status",
      width: 110,
      renderCell(params) {
        return params.row.enabled === true ? (
          <Chip
            icon={<CheckCircleOutlineIcon />}
            label="Active"
            variant="outlined"
            color="success"
          />
        ) : (
          <Chip
            icon={<CancelOutlinedIcon />}
            label="Offline"
            variant="outlined"
            color="error"
          />
        );
      },
    },
    {
      field: "ipv4",
      headerName: "IPv4",
      width: 140,
      valueGetter: (params) => {
        return params.row && params.row.ip4 && params.row.ip4.display
          ? params.row.ip4.display
          : "-";
      },
    },
    {
      field: "ipv6",
      headerName: "IPv6",
      width: 180,
      valueGetter: (params) => {
        return params.row && params.row.ip6 && params.row.ip6.display
          ? params.row.ip6.display
          : "-";
      },
    },
    {
      field: "connection",
      headerName: "Connection",
      width: 180,
      valueGetter: (params) => {
        return params.row && params.row.link_peers && params.row.link_peers[0]
          ? `${params.row.link_peers[0].display} on ${params.row.link_peers[0].device.display}`
          : "-";
      },
    },
    {
      field: "mode",
      headerName: "Mode",
      width: 180,
      valueGetter: (params) => {
        return params.row && params.row.mode ? `${params.row.mode.label}` : "-";
      },
    },
    {
      field: "routing",
      headerName: "Routing",
      width: 180,
      valueGetter: (params) => {
        return params.row && params.row.custom_fields.routing_information
          ? `${params.row.custom_fields.routing_information}`
          : "-";
      },
    },
    {
      field: "type",
      headerName: "Type",
      width: 130,
      valueGetter: (params) => {
        return params.row.type.label;
      },
    },
    {
      field: "last_updated",
      headerName: "Last Updated",
      width: 230,
    },
    {
      field: "created",
      headerName: "Created",
      width: 230,
    },
  ];

  const columnsDevices = [
    {
      field: "name",
      headerName: "Device",
      width: 110,
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
      renderCell(params) {
        return params.value.value === "active" ? (
          <Chip
            icon={<CheckCircleOutlineIcon />}
            label="Active"
            variant="outlined"
            color="success"
          />
        ) : (
          <Chip
            icon={<CancelOutlinedIcon />}
            label="Offline"
            variant="outlined"
            color="error"
          />
        );
      },
    },
    {
      field: "primary_ip",
      headerName: "Primary IP",
      width: 130,
      valueGetter: (params) => {
        return params.row.primary_ip.display;
      },
    },
    {
      field: "device_type",
      headerName: "Device Type",
      width: 160,
      valueGetter: (params) => {
        return params.row.device_type.display;
      },
    },
    {
      field: "device_role",
      headerName: "Device Role",
      width: 190,
      valueGetter: (params) => {
        return params.row.device_role.display;
      },
    },
    {
      field: "site",
      headerName: "Site",
      width: 160,
      valueGetter: (params) => {
        return params.row.site.display;
      },
    },
    {
      field: "last_updated",
      headerName: "Last Updated",
      width: 230,
    },
    {
      field: "created",
      headerName: "Created",
      width: 230,
    },
  ];
  return (
    <>
      <DataGrid
        hideFooter
        disableSelectionOnClick
        rows={params.rows}
        columns={params.columns}
        sx={{
          border: 1,
          "& .MuiDataGrid-cell:hover": {
            color: style,
          },
          ".MuiDataGrid-menuIconButton": {
            color: style,
          },
          ".MuiDataGrid-sortIcon": {
            color: style,
          },
          ".MuiDataGrid-cell:focus": {
            outline: "none",
          },
          "& .MuiDataGrid-columnHeader--sortable:focus": {
            outline: "none",
          },
          ".MuiDataGrid-columnHeader:focus-within": {
            outline: "none",
          },
          "& > .MuiDataGrid-columnSeparator": {
            visibility: "hidden",
          },
          "& .MuiDataGrid-columnHeader:last-child .MuiDataGrid-columnSeparator":
            {
              display: "none",
            },
        }}
      />
    </>
  );
}
