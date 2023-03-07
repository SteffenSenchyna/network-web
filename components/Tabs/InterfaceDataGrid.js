import { DataGrid } from "@mui/x-data-grid";
import Grow from "@mui/material/Grow";
export default function InterfaceDatagrid(params) {
  var style = "";
  if (params.site == "HMC Coporate Headquaters") {
    style = "primary.main";
  } else {
    style = "secondary.main";
  }
  return (
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
        "& .MuiDataGrid-columnHeader:last-child .MuiDataGrid-columnSeparator": {
          display: "none",
        },
      }}
    />
  );
}
