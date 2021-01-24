import React from 'react';
import Logo from '../img/LogoPNG.png'

const Header = () => {
    return (
        <div>
            <img className="header" src={Logo} alt="header"></img>
            <h2>Welcome to General Services!</h2>
        </div>
    )
}

export default Header;