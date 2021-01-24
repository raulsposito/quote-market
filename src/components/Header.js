import React from 'react';
import Logo from '../img/LogoPNG.png'

const Header = () => {
    return (
        <div>
            <img className="header" src={Logo} alt="header"></img>
            <h1>Welcome to General Services!</h1>
        </div>
    )
}

export default Header;