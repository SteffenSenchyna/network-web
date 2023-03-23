import * as React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import {
  PieChart,
  Pie,
  Legend,
  Label,
  Sector,
  Cell,
  ResponsiveContainer,
  LabelList,
  Tooltip,
} from "recharts";

const useStyles = makeStyles({
  customOutline: {
    borderColor: "#dcdada",
  },
  input: {
    backgroundColor: "#1F1F1F" /* 12% white */,
    border: `#1F1F1F`,
  },
  label: {
    color: "#dcdada",
  },
});
const COLORS = ["#03DAc5", "#006b60"];

const data = [
  { name: "Online", value: 25 },
  { name: "Total", value: 100 },
];
const total = data.reduce((acc, curr) => acc + curr.value, 0);

function Scan() {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h4" align="center">
              Scan
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
export default Scan;
