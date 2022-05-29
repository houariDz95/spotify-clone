import React from 'react';
import './header.css';
import punkLogo from '../assets/header/cryptopunk-logo.png';
import searchIicon from '../assets/header/search.png';
import themeSwitchIcon from "../assets/header/theme-switch.png";
function Header() {
  return (
    <div className="header">
        <div className="header_logoContainer">
            <img src={punkLogo} className="header_punkLogo" alt="" />
        </div>
        <div className="header_searchBar">
            <div className="header_searchIconContainer">
                <img src={searchIicon} alt="" />
            </div>
            <input 
                type="text" 
                className="header_searchInput" 
                placeholder="collection, item or user..."
            />
        </div>
        <div className="header_items">
            <p>Drops</p>
            <p>Marketplace</p>
            <p>Create</p>
        </div>
        <div className="header_headerActions">
            <div className="header_switchContainer">
                <img src={themeSwitchIcon} alt="" />
            </div>
           <div className="header_login">
            GET IN
           </div>
        </div>
    </div>
  )
}

export default Header