import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ClientContext } from "../context/ClientProvider";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const [counter, setCounter] = React.useState(0);
  const { addProductToCart, checkProductInCart, deleteProductFromCart } =
    React.useContext(ClientContext);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <Card sx={{ maxWidth: 310, borderRadius: "5px" }}>
      <CardMedia
        component="img"
        height="140"
        image={props.item.image}
        style={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography
          sx={{ height: 60, overflow: "hidden", maxHeight: 60 }}
          gutterBottom
          variant="h6"
          component="div"
        >
          {props.item.name}
        </Typography>
        <hr />

        <Typography variant="body2" color="text.secondary">
          Цена:{props.item.price} сом
          <br />
          Бренд: {props.item.brand}
        </Typography>
      </CardContent>

      <CardActions>
        {checkProductInCart(props.item.id) ? (
          <Button
            onClick={() => deleteProductFromCart(props.item.id)}
            style={{
              border: "1px solid #4138B0",
              backgroundColor: "rgb(235, 144, 235)",
              color: "white",
              fontWeight: "bolder",
            }}
            size="small"
          >
            В корзине
          </Button>
        ) : (
          <Button
            onClick={() => addProductToCart(props.item)}
            style={{
              border: "0.5px solid #4138B0",
              color: "mediumpurple",

              fontWeight: "bolder",
            }}
            size="small"
          >
            В корзину
          </Button>
        )}

        <Link
          style={{ marginLeft: 15 }}
          to={`/product-detail/${props.item.id}`}
        >
          <Button
            style={{
              border: "1px solid",
              color: "grey",
              backgroundColor: "thistle",
            }}
            size="small"
          >
            Подробнее
          </Button>
        </Link>
        <Button disabled={counter > 0} onClick={increment}>
          <img
            style={{ marginBottom: "5px" }}
            width={"35px"}
            src="https://cdn-icons-png.flaticon.com/512/6677/6677458.png"
            alt=""
          />
          <span
            style={{
              color: "lightskyblue",
              fontSize: "30px",
              fontWeight: "bold",
              marginLeft: "8px",
            }}
            className="like-button"
          >
            {counter}
          </span>
        </Button>
      </CardActions>
    </Card>
  );
}
