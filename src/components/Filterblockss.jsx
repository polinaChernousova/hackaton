import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  Select,
  Slider,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClientContext } from "../context/ClientProvider";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const search = new URLSearchParams(window.location.search);

  const navigate = useNavigate();
  const { getProducts } = useContext(ClientContext);
  const [searchValue, setSearchValue] = useState(search.get("q") || "");
  const [colorValue, setColorValue] = useState(search.get("color") || "");
  const [priceValue, setPriceValue] = useState(search.get("price_lte") || "");

  const filterProducts = (key, value) => {
    search.set(key, value);
    let newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    setSearchValue(search.get("q") || "");
    setColorValue(search.get("color") || "");
    setPriceValue(search.get("price_lte") || "");
    getProducts();
  };
  const resetFilter = () => {
    navigate("/all-products");
    setSearchValue("");
    setColorValue("");
    setPriceValue("");
    getProducts();
  };

  return (
    <>
      <Box className="filters-block" sx={{ flexGrow: 1 }}>
        {/* <Box className="filter-input"> */}
        <TextField
          style={{ color: "white" }}
          placeholder="Поиск..."
          inputProps={{ "aria-label": "search" }}
          value={searchValue}
          onChange={(e) => filterProducts("q", e.target.value)}
        ></TextField>

        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel
            sx={{
              color: "white",
            }}
            id="color-select"
            color="warning"
          >
            Цвет
          </InputLabel>
          <Select
            value={colorValue}
            onChange={(e) => filterProducts("color", e.target.value)}
            labelId="color-select"
            label="Выберите цвет"
          >
            <MenuItem value="black">Черный</MenuItem>
            <MenuItem value="white">Белый</MenuItem>
            <MenuItem value="gray">Серый</MenuItem>
            <MenuItem value="green">Зеленый</MenuItem>
            <MenuItem value="pink">Розовый</MenuItem>
            <MenuItem value="red">Красный</MenuItem>
          </Select>
        </FormControl>
        <Slider
          sx={{
            width: "200px",
            color: "white",
          }}
          onChange={(e) => filterProducts("price_lte", e.target.value)}
          valueLabelDisplay="auto"
          max={40000}
          step={100}
        />
        <Button
          onClick={resetFilter}
          style={{ backgroundColor: "gray", color: "white" }}
        >
          Сбросить
        </Button>
      </Box>
    </>
  );
}
