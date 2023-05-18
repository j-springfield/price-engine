import React, { useState } from 'react';
import hamburgerIcon from '../../assets/images/burger-bar.png';
import './HamburgerMenu.scss';

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prevState) => !prevState);
        console.log('CLICKED')
    };

    return (
        <div className={`app ${isOpen ? 'open' : ''}`}>
            <img src={hamburgerIcon} className="menu-toggle" onClick={toggleMenu}/>
            {/* <div className="menu-toggle" onClick={toggleMenu}>
                <img alt="Hamburger Menu" className="hamburger" />
            </div> */}
            <div className="menu">
                {/* Menu conent*/}
                Menu
                <ul>
                    <li>Scanner</li>
                    <li>New Pricing Rule</li>
                    <li>Logout</li>
                </ul>
            </div>
            
        </div>
    )
}