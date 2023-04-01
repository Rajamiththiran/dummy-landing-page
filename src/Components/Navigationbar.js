import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from 'react';
import { BsCart2 } from "react-icons/bs";
import { HighOutlineBars3 } from "react-icons/hi2";
// import Logo from './Assets/VRM PHARM.svg';

function Navigationbar() {

  const [openMenu,setOpenMenu] = useState(false)
  const menuOptions = [
    {
      text:"Home",
      icon:<HomeIcon/>,
    },
    {
      text:"About",
      icon:<InfoIcon/>,
    },
    {
      text:"Services",
      icon:<CommentRoundedIcon/>,
    },
    {
      text:"Contact",
      icon:<PhoneRoundedIcon/>,
    },
    {
      text:"Cart",
      icon:<ShoppingCartRoundedIcon/>,
    },
  ]


  return (
    <div>Navigationbar</div>
  )
}

export default Navigationbar 
