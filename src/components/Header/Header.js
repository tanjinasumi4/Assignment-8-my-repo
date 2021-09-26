import React from 'react';
import './Header.css';

const Header = () => {
    
    return (
        <div className="header">
           <h2>Make an Awesome Library</h2>
           <h4>It may not surprise you that we here at Book Riot are big fans of libraries, so a round-up of the best library Book was necessary.</h4>
           <h2>Total Budget: 100 Milion</h2>
           {/* <img src={logo} alt="" /> */}
        </div>
    );
};

export default Header;