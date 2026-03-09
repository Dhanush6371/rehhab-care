import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">
                    <img src="/images/logo.png" alt="Rebuild Care" />
                    <span>Rebuild Care</span>
                </div>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="#home" onClick={toggleMenu}>HOME</a></li>
                    <li><a href="#services" onClick={toggleMenu}>SERVICES</a></li>
                    <li><a href="#team" onClick={toggleMenu}>TEAM</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>CONTACT</a></li>
                    <li><a href="#blog" onClick={toggleMenu}>BLOG</a></li>
                </ul>

                <div className="nav-buttons">
                    <button className="btn-secondary">Become A Partner</button>
                    <button className="btn-primary">Book Appointment</button>
                </div>

                <button
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
        </header>
    );
};

export default Header;
