import React from 'react';
import {Button} from "@mui/material";

const Buttons = ({btn1, btn2, target}) => {
    return (
        <div className="header__buttons">
            <Button href={btn1.href} download variant="contained" target={target}>{btn1.title}</Button>
            <Button href={`${btn2.href}`} variant="outlined" target={target}>{btn2.title}</Button>
        </div>
    );
};

export default Buttons;