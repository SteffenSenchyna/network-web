import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
export default function InterfaceDatagrid({ rows, columns }) {
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    setInitialized(true);
  }, []);
  return (
    <DataGrid
      hideFooter
      disableSelectionOnClick
      rows={rows}
      columns={columns}
      sx={{
        border: 1,
        // borderColor: "rgba(255,255,255,0)",
        "& .MuiDataGrid-cell:hover": {
          color: "primary.main",
        },
        ".MuiDataGrid-menuIconButton": {
          color: "primary.main",
        },
        ".MuiDataGrid-sortIcon": {
          color: "primary.main",
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
