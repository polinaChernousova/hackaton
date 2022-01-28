import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { Badge, ThemeProvider, createTheme } from "@mui/material";
import { Logout, ShoppingCart } from "@mui/icons-material";
import { ClientContext } from "../context/ClientProvider";
import { AuthContext } from "../context/AuthProvider";

const pages = ["Home", "Shop All", "Cart"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const { cartCount } = React.useContext(ClientContext);
  const { authWithGoogle, user, logout } = React.useContext(AuthContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
    typography: {
      fontFamily: [
        "Montserrat",
        "Libre Baskerville",
        "Dosis",
        "sans-serif",
        "sans-serif",
        "Roboto",
        '"Helvetica Neue"',
      ].join(","),
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <AppBar sx={{ position: "fixed" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Link to="/">
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                >
                  <img
                    width={40}
                    src="https://cdn-icons-png.flaticon.com/512/3594/3594375.png"
                    alt=""
                  />{" "}
                  MOON BOOK
                </Typography>
              </Link>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>

                <Link to="/">
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Link>
              </Box>

              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                }}
              >
                Moon book
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Link to="/all-products">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Shop All
                  </Button>
                </Link>

                <Link to="/admin-panel/add">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    ADD PRODUCT
                  </Button>
                </Link>
                <Link to="/admin-panel">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    ADMIN PANEL
                  </Button>
                </Link>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Link to="/cart">
                  <IconButton size="large" color="inherit">
                    <Badge color="error" badgeContent={cartCount}>
                      <img
                        width={30}
                        src="https://cdn-icons-png.flaticon.com/512/2438/2438136.png"
                        alt=""
                      />
                    </Badge>
                  </IconButton>
                </Link>

                {user ? (
                  <>
                    <IconButton>{user.displayName}</IconButton>
                    <IconButton sx={{ p: 0 }}>
                      <Avatar alt={user.displayName} src={user.photoURL} />
                    </IconButton>
                    <IconButton onClick={logout} size="large" color="inherit">
                      <Logout />
                    </IconButton>
                  </>
                ) : (
                  <IconButton onClick={authWithGoogle} size="small">
                    Войти
                  </IconButton>
                )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
};
export default Navbar;
