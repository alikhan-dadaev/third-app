import React from 'react';
import footerLogo from "./assets/footerLogo.svg"

function FooterLogo(props) {
    return (
        <div className="footerLogo">
            <img src={footerLogo} />
        </div>
    );
}

export default FooterLogo;