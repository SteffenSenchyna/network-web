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
            <Typography sx={{ fontSize: 16 }} align="center">
              Scan
            </Typography>
            <Typography variant="body2">
              Morbi orci ipsum, tempus vitae sem placerat, feugiat cursus velit.
              Nam ipsum lorem, dignissim at diam ut, pellentesque pharetra eros.
              Duis tellus ligula, malesuada ut elementum sed, feugiat sodales
              metus. Nunc sed pellentesque risus. Suspendisse tincidunt enim ac
              nisl euismod, at molestie ante aliquet. Curabitur ultricies ut
              arcu sed venenatis. In hac habitasse platea dictumst. Pellentesque
              eros velit, ornare mollis sapien a, tincidunt faucibus tellus.
              Nunc eu condimentum erat. Mauris suscipit enim metus, non volutpat
              dui tristique placerat. In porttitor lacinia justo, sed pretium
              lectus elementum non. Suspendisse leo tellus, ullamcorper nec
              interdum in, vehicula ac lorem. Etiam eu pellentesque quam.
              Aliquam urna urna, scelerisque eget luctus vitae, rhoncus eu
              lorem. Phasellus dictum consectetur libero, at maximus purus
              luctus eu.{" "}
            </Typography>
            <input></input>
            <TextField
              label="Outlined"
              InputLabelProps={{
                classes: {
                  root: classes.label,
                },
              }}
              InputProps={{
                classes: {
                  notchedOutline: classes.customOutline,
                  input: classes.input,
                },
              }}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
export default Scan;
