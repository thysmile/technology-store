import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import logo from "../Images/mainlogo.png";
import Badge from '@material-ui/core/Badge'
const useStyles = makeStyles(() => ({
  paper: {
    background: "#000000",
    width: "100%",
  },
  closeBtn: {
    color: "#fff",
    fontSize: 35,
    "&:hover": {
      color: "red",
    },
  },
  linkRoot: {
    textDecoration: "none",
    color: "#fff",
    '&:hover':{
        color:"red",
    }
  },
  iconButton:{
      color:"#fff",
      fontSize:"20px",
      fontFamily:"Monsarat,san-serif",
      '&:hover':{
          color:"red"
      }
  }
}));
export default function Drawer({ buttons, toggleDrawer, anchor }) {
  const classes = useStyles();
  return (
    <div>
      <SwipeableDrawer
        classes={{ paper: classes.paper }}
        anchor="left"
        open={anchor}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)} 
        transitionDuration={{ enter: 500, exit: 500 }}
      >
        <div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Link to="/">
              <img
                src={logo}
                style={{ width: "155px" }}
                onClick={() => toggleDrawer(false)}
              />
            </Link>
            <IconButton>
              <CloseIcon
                className={classes.closeBtn}
                onClick={() => toggleDrawer(false)}
              />
            </IconButton>
          </div>
          <List className={classes.rootDrawer}>
            {buttons.map((button, index) => {
              const { text, url, icon } = button;
              return (
                <List>
                    <Link
                      to={url}
                      className={classes.linkRoot}
                      onClick={() => toggleDrawer(false)}
                    >
                  <ListItem button key={index}>
                    <ListItemIcon style={{ color: "#fff" }}  >
                      {icon}
                    </ListItemIcon>
                      <ListText style={{textTransform:"uppercase"}}>{text}</ListText>
                  </ListItem>
                    </Link>
                </List>
              );
            })}
          </List>
          <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"30px"}}>
              <IconButton className={classes.iconButton}  onClick={() => toggleDrawer(false)}>
                <Link to="/cart" style={{textDecoration:"none",color:"#fff"}}>
                <Badge  badgeContent={5} color="primary">

                  <AddShoppingCartIcon />
                  Cart
                </Badge>
                </Link>
              </IconButton>
              <IconButton className={classes.iconButton}  onClick={() => toggleDrawer(false)}>
                  <PersonAddIcon />
                  Login
              </IconButton>
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
