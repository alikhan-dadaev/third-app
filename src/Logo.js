import React from 'react';
import logo from "./assets/logo.svg";

function Logo(props) {
    return (
        <div className="logo">
           <a href="#"> <img src={logo}/> </a>
        </div>
    );
}

export default Logo;