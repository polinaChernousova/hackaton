import { useRef, useState } from "react";
import React, { useContext, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";
import { Box, Button, Container, Grid } from "@mui/material";
import FiltersBlock from "../components/FiltersBlock";
import ProductCard from "../components/ProductCard";
import ProductsPagination from "../components/ProductsPagination";
import { ClientContext } from "../context/ClientProvider";
import Filterblockss from "../components/Filterblockss";

const AllProducts = () => {
  const { getProducts, products } = useContext(ClientContext);

  useEffect(() => {
    getProducts();
  }, []);

  if (!products) {
    return <h2>Loading...</h2>;
  }

  SwiperCore.use([Navigation]);

  return (
    <div className="main-page">
      <Swiper navigation={true} className="mySwiper">
        <SwiperSlide
          style={{
            position: "relative",
            zIndex: -2,
            height: "500px",
          }}
        >
          <video src="/videos/bg-video.mp4" autoPlay loop muted></video>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slider4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slider8.png" alt="" />
        </SwiperSlide>
      </Swiper>
      <Container>
        {/* <FiltersBlock /> */}
        <Filterblockss />
        <Grid container spacing={4}>
          {products.map((item) => (
            <Grid xs={12} sm={6} md={4} item key={item.id}>
              <ProductCard item={item} />
            </Grid>
          ))}
        </Grid>
        <ProductsPagination />
      </Container>
    </div>
  );
};

export default AllProducts;
