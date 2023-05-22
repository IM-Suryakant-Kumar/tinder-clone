import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';

const Header = () => {
    return (
        <div className="header">
            <IconButton>
              <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>

            <img 
                className="header_logo"
                src="https://1000logos.net/wp-content/uploads/2019/06/tinder-logo.jpg"
                alt=""
            />

            <IconButton>
                <ForumIcon fontSize="large" className="header_icon" />
            </IconButton>
        </div>
    );
};

export default Header;
