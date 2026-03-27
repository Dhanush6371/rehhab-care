import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

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

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const handleBookAppointment = () => {
        if (location.pathname !== '/') {
            // Navigate to home page with state
            navigate('/', { state: { scrollToAppointment: true } });
        } else {
            const appointmentSection = document.querySelector('.appointment-section');
            if (appointmentSection) {
                appointmentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        setIsMenuOpen(false);
    };

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        setIsMenuOpen(false);

        if (location.pathname !== '/') {
            // Navigate to home page first, then scroll
            navigate('/', { state: { scrollToSection: sectionId } });
        } else {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
        <header className="header">
            <nav className="navbar">
                <Link to="/" className="logo">
                    <img src="/images/logo.png" alt="Rebuild Care" fetchpriority="high" />
                    <span>Rehabb Care</span>
                </Link>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="/" onClick={(e) => handleNavClick(e, 'home')}>HOME</a></li>
                    <li><a href="/#services" onClick={(e) => handleNavClick(e, 'services')}>WHAT WE TREAT</a></li>
                    <li><a href="/#team" onClick={(e) => handleNavClick(e, 'team')}>TEAM</a></li>
                    <li><a href="/#contact" onClick={(e) => handleNavClick(e, 'contact')}>CONTACT</a></li>
                    <li><Link to="/faq">FAQ</Link></li>

                    <div className="mobile-menu-buttons">
                        <Link to="/partner" onClick={toggleMenu}>
                            <button className="mobile-btn-secondary">Become A Partner</button>
                        </Link>
                        <button className="mobile-btn-primary" onClick={handleBookAppointment}>Book Appointment</button>
                    </div>
                </ul>

                <div className="nav-buttons">
                    <Link to="/partner">
                        <button className="btn-secondary">Become A Partner</button>
                    </Link>
                    <button className="btn-primary" onClick={handleBookAppointment}>Book Appointment</button>
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
