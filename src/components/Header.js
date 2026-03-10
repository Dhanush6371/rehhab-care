import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">
                    <img src="/images/logo.png" alt="Rebuild Care" fetchpriority="high" />
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
                    <div className="hamburger-inner">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </nav>

            {/* Mobile menu backdrop */}
            {isMenuOpen && (
                <div
                    className="mobile-backdrop"
                    onClick={toggleMenu}
                    aria-hidden="true"
                />
            )}
        </header>
    );
};

export default Header;
