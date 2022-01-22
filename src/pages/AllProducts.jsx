import { Container, Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { ClientContext } from "../context/ClientProvider";

const AllProducts = () => {
  const { getProducts, products } = useContext(ClientContext);

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);
  if (!products) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="main-page">
      <Container>
        <h2>ALL PRODUCTS</h2>
        <h2>MAIN PAGE</h2>
        <Grid container spacing={4}>
          {products.map((item) => (
            <Grid xs={12} sm={6} md={4} item key={item.id}>
              <ProductCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AllProducts;
