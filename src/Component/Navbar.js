import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import logo from "../Images/mainlogo.png";
import HomeIcon from "@material-ui/icons/Home";
import DevicesIcon from '@material-ui/icons/Devices';
import InfoIcon from '@material-ui/icons/Info';
import Drawer from "./Drawer";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    color: "#fff",
    "&:hover": {
      color: "red",
    },
    [theme.breakpoints.up(900)]: {
      display: "none",
    },
  },
  searchButton: {
    color: "#fff",
    marginLeft: 250,
    "&:hover": {
      color: "red",
    },
    [theme.breakpoints.up(900)]: {
      display: "none",
    },
  },
  appbarRoot: {
    width: "100%",
    flexGrow: 1,
    backgroundColor: "#000000",
    overflow:"hidden"
  },
  logo: {
    width: 145,
    heigh: 80,
    marginLeft: 40,
    flexGrow: 1,
    cursor: "pointer",
  },
  buttonStyle: {
    [theme.breakpoints.down(900)]: {
      display: "none",
    },
  },
  iconButton: {
    color: "#fff",
    "&:hover": {
      color: "red",
    },
    [theme.breakpoints.down(900)]: {
      display: "none",
    },
  },
  toolbarRoot: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  iconContainer: {
    marginRight: 40,
  },
  buttonContainer: {
    marginRight: 50,
    width: 350,
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down(900)]: {
      display: "none",
    },
  },
  logoContainer: {
    [theme.breakpoints.down(900)]: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  buttonStyle: {
    textDecoration: "none",
    color: "#fff",
    "&:hover": {
      color: "red",
    },
  },
}));

const buttons = [
  {
    id: 1,
    text: "Home",
    url: "/",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    text: "Product",
    url: "/product",
    icon:<DevicesIcon />
  },
  {
    id: 3,
    text: "About",
    url: "/about",
    icon:<InfoIcon />
  },
];

export default function Navbar() {
  const classes = useStyles();
  const [anchor, setAnchor] = useState(false);
  const toggleDrawer = (value) => {
    setAnchor(value);
  };
  return (

      <AppBar position="sticky" className={classes.appbarRoot}>
        <Toolbar className={classes.toolbarRoot}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
          >
            <MenuIcon onClick={() => toggleDrawer(true)} />
          </IconButton>
          <div className={classes.logoContainer}>
            <Link to="/">
              <img src={logo} className={classes.logo} />
            </Link>
          </div>
          <div className={classes.buttonContainer}>
            {buttons.map((button) => {
              const { text, url } = button;
              return (
                <Link to={url} style={{ textDecoration: "none" }}>
                  <Button edge="center" classes={{ root: classes.buttonStyle }}>
                    {text}
                  </Button>
                </Link>
              );
            })}
          </div>
          <div className={classes.iconContainer}>
            <IconButton className={classes.iconButton}>
              <AddShoppingCartIcon />
              Cart
            </IconButton>
            <IconButton className={classes.iconButton}>
              <PersonAddIcon />
              Login
            </IconButton>
          </div>
        </Toolbar>
        <Drawer buttons={buttons} toggleDrawer={toggleDrawer} anchor={anchor} />
      </AppBar>
  );
}
