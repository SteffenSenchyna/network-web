import * as React from "react";
import { useState, useEffect } from "react";
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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";
function Row(props) {
  const { row, intBandwidth } = props;
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
          {row.display}
        </TableCell>
        <TableCell>{row.ip4?.address || "-"}</TableCell>
        <TableCell>{row.ip6?.address || "-"}</TableCell>
        <TableCell>{row.customfields?.routing_information || "-"}</TableCell>
        <TableCell>{row.link_pears?.display || "-"}</TableCell>
        <TableCell>{row.type?.label || "-"}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
          <Collapse in={open} timeout="auto">
            <Box sx={{ margin: 1, maxHeight: "400px" }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell> Bandwidth Utilization</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <ResponsiveContainer width="99%" height={100}>
                    <AreaChart width={540} height={100} data={intBandwidth}>
                      <Area
                        type="monotone"
                        dataKey="utilization"
                        stroke="#03DAc5"
                        strokeWidth={2}
                        fill="#006b60"
                      />
                      <Tooltip
                        formatter={(value) => `${value.toFixed(2)}%`}
                        content={({ active, payload }) => {
                          if (active) {
                            return (
                              <div>
                                <p>
                                  {payload && payload[0] && payload[0].value
                                    ? `${payload[0].value.toFixed(2)}%`
                                    : "0%"}
                                </p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function InterfaceTable(props) {
  const { rows, intBandwidth } = props;
  return (
    <TableContainer>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Interface </TableCell>
            <TableCell>IPv4</TableCell>
            <TableCell>IPv6</TableCell>
            <TableCell>Routing</TableCell>
            <TableCell>Connection</TableCell>
            <TableCell>Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(rows).map((key) => (
            <Row key={key} row={rows[key]} intBandwidth={intBandwidth[key]} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
