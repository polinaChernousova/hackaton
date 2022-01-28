import { Container } from "@mui/material";
import React from "react";
import CartTable from "../components/CartTable";

const CartPage = () => {
  return (
    <div className="cart-page">
      <Container>
        <h1>Отследить заказ</h1>
        <CartTable />
      </Container>
    </div>
  );
};

export default CartPage;
