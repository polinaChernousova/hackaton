import { ThemeProvider } from "@emotion/react";
import { createTheme, Pagination } from "@mui/material";
import { blue, purple } from "@mui/material/colors";
import React, { useContext } from "react";
import { ClientContext } from "../context/ClientProvider";

const ProductsPagination = () => {
  const { productsPerPage, totalProductsCount, setCurrentPage } =
    useContext(ClientContext);
  const count = Math.ceil(totalProductsCount / productsPerPage);
  const theme = createTheme({
    palette: {
      //   primary: blue,
      //   secondary: purple,
    },
  });
  return (
    <div className="products-pagination">
      <ThemeProvider theme={theme}>
        <Pagination
          onChange={(_, value) => setCurrentPage(value)}
          count={count}
          color="secondary"
        />
      </ThemeProvider>
    </div>
  );
};

export default ProductsPagination;
