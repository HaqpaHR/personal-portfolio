import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarsIcon from "@mui/icons-material/Stars";
import CollectionsIcon from "@mui/icons-material/Collections";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { Link } from "@mui/material";
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar__container">
      <Link href="#home">
        <HomeIcon sx={{ color: 'white' }}/>
      </Link>
      <Link href="#about">
        <AccountCircleIcon sx={{ color: 'white' }}/>
      </Link>
      <Link href="#skills">
        <StarsIcon sx={{ color: 'white' }}/>
      </Link>
      <Link href="#portfolio">
        <CollectionsIcon sx={{ color: 'white' }}/>
      </Link>
      <Link href="#contacts">
        <ContactPhoneIcon sx={{ color: 'white' }}/>
      </Link>
    </div>
  );
};

export default Navbar;
