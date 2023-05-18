import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../../assets/images/thd_logo.jpg';
import hamburgerIcon from '../../assets/images/burger-bar.png';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import './Header.scss';

export default function Header(props) {
    return (
        <div class='topnav'>
            <img src={logo} className="header-logo" alt="logo" />
            <h1 className="title">Price Engine</h1>
            <HamburgerMenu />
        </div>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Header />);