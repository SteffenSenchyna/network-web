import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.severityLevels.error}</TableCell>
        <TableCell align="right">{row.severityLevels.alert}</TableCell>
        <TableCell align="right">{row.severityLevels.critical}</TableCell>
        <TableCell align="right">{row.severityLevels.error}</TableCell>
        <TableCell align="right">{row.severityLevels.warning}</TableCell>
        <TableCell align="right">{row.severityLevels.notice}</TableCell>
        <TableCell align="right">{row.severityLevels.informational}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Syslogs
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Level</TableCell>
                    <TableCell>Severity</TableCell>
                    <TableCell>Message</TableCell>
                    <TableCell>Timestamp</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.entries.map((logsRow) => {
                    console.log(logsRow); // log the current row object
                    return (
                      <TableRow key={logsRow["_id"]}>
                        <TableCell component="th" scope="row">
                          {logsRow.level}
                        </TableCell>
                        <TableCell>{logsRow.severity}</TableCell>
                        <TableCell>{logsRow.message}</TableCell>
                        <TableCell>{logsRow.created_at}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function SyslogTable(props) {
  console.log(props);
  return (
    <TableContainer>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Device </TableCell>
            <TableCell align="right">Emergency</TableCell>
            <TableCell align="right">Alert</TableCell>
            <TableCell align="right">Critical</TableCell>
            <TableCell align="right">Error</TableCell>
            <TableCell align="right">Warning</TableCell>
            <TableCell align="right">Notice</TableCell>
            <TableCell align="right">Informational</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(props).map((key) => (
            <Row key={key} row={props[key]} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
