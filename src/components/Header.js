import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">
                    <img src="/logo.svg" alt="Rebuild Care" />
                    <span>Rebuild Care</span>
                </div>

                <ul className="nav-links">
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#services">SERVICES</a></li>
                    <li><a href="#team">TEAM</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>

                <div className="nav-buttons">
                    <button className="btn-secondary">Become A Partner</button>
                    <button className="btn-primary">Book Appointment</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
