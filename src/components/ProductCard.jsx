import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ClientContext } from "../context/ClientProvider";

export default function ProductCard(props) {
  console.log(props, "djihifi");
  const {} = React.useContext(ClientContext);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.item.image}
        style={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography
          atyle={{ height: 60, overflow: "hidden" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {props.item.name}
        </Typography>
        <hr />

        <Typography variant="body2" color="text.secondary">
          Цена:{props.item.price}
          <br />
          Бренд: {props.item.brand}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
