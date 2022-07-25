import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import JavascriptIcon from "@mui/icons-material/Javascript";
import {Link} from "@mui/material";

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <Link href='https://www.facebook.com/profile.php?id=100001834615036' target="_blank" >
        <FacebookIcon color={"primary"} target="_blank" />
      </Link>
      <Link href='https://www.linkedin.com/in/viacheslav-pereverzev-853430225/' target="_blank">
        <LinkedInIcon color={"primary"} />
      </Link>
      <Link href='https://t.me/HaqpaHR' target="_blank">
        <TelegramIcon color={"primary"} />
      </Link>
      <Link href='https://github.com/HaqpaHR' target="_blank" >
        <GitHubIcon color={"primary"} />
      </Link>
      <Link href='https://www.codewars.com/users/HaqpaHR' target="_blank" >
        <JavascriptIcon color={"primary"} />
      </Link>
    </div>
  );
};

export default HeaderSocial;
