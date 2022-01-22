import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { AdminContext } from "../context/AdminProvider";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import * as React from "react";
// import { AdminContext } from "../context/AdminProvider";

const AdminTable = () => {
  const { getProducts, products, deleteProduct } =
    React.useContext(AdminContext);

  React.useEffect(() => {
    getProducts();
  }, []);

  if (!products) {
    return <h2>Loading...</h2>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} area-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>#</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Brand</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Button
                  onClick={() => deleteProduct(item.id)}
                  color="error"
                  variant="contained"
                >
                  delete
                </Button>
              </TableCell>
              <TableCell>
                <Link to={`/admin-panel/edit/${item.id}`}>
                  <Button color="warning" variant="contained">
                    Edit
                  </Button>
                </Link>
              </TableCell>

              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">
                <img width={100} src={item.image} alt="product_image" />
              </TableCell>
              <TableCell align="right">{item.brand}</TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">{item.color}</TableCell>
              <TableCell align="right">{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminTable;
