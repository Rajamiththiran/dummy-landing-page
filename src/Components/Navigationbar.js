import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { Component } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Logo from "../Assets/Logo.svg";

class Navigationbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
    };
  }

  menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Services",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  setOpenMenu = (open) => {
    this.setState({ openMenu: open });
  };

  render() {
    return (
      <nav>
        <div className="nav-logo-container">
          <img src={Logo} alt="" />
        </div>

        <div className="navbar-links-container">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <a href="#">
            <BsCart2 className="navbar-cart-icon" />
          </a>
          <button className="primary-button">Sign up</button>
        </div>

        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => this.setOpenMenu(true)} />
        </div>

        <Drawer
          open={this.state.openMenu}
          onClose={() => this.setOpenMenu(false)}
          anchor="right"
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => this.setOpenMenu(false)}
            onKeyDown={() => this.setOpenMenu(false)}
          >
            <List>
              {this.menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
    );
  }
}

export default Navigationbar;
