import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-main">
                    {/* Brand Column */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src="/logo.svg" alt="Rehab Care" onError={(e) => e.target.style.display = 'none'} />
                            <span>Rehabb Care</span>
                        </div>
                        <p className="footer-description">
                            A 100% home physiotherapy company in Hyderabad, offering expert care through verified, experienced male & female physiotherapists - all in the comfort of your home.
                        </p>
                        <div className="footer-social">
                            <a href="https://www.instagram.com/rehabbcare/" className="social-link" target="_blank" rel="noopener noreferrer">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href=" https://www.facebook.com/rehabbcare" className="social-link" target="_blank" rel="noopener noreferrer">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/rehabbcare/" className="social-link" target="_blank" rel="noopener noreferrer">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-column">
                        <h3 className="footer-column-title">Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
                            <li><a href="#services">What We Treat</a></li>
                            <li><a href="#why-better">Our Process</a></li>
                            <li><a href="#why-choose">Why Choose Us?</a></li>
                            <li><Link to="/faq" onClick={scrollToTop}>FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div className="footer-column">
                        <h3 className="footer-column-title">Our Services</h3>
                        <ul className="footer-links">
                            <li><Link to="/services/back-neck-pain" onClick={scrollToTop}>Back & Neck Pain</Link></li>
                            <li><Link to="/services/knee-ankle-pain" onClick={scrollToTop}>Knee & Ankle Pain</Link></li>
                            <li><Link to="/services/shoulder-elbow-pain" onClick={scrollToTop}>Shoulder & Elbow Rehab</Link></li>
                            <li><Link to="/services/post-surgery" onClick={scrollToTop}>Post-Surgery Rehab</Link></li>
                            <li><Link to="/services/post-operative" onClick={scrollToTop}>Paralysis / Stroke Rehab</Link></li>
                            <li><Link to="/services/geriatric-care" onClick={scrollToTop}>Geriatric Physiotherapy</Link></li>
                            <li><a href="#services">Sports Injury Rehab</a></li>
                        </ul>
                    </div>

                    {/* Get in Touch */}
                    <div className="footer-column">
                        <h3 className="footer-column-title">Get in Touch</h3>
                        <div className="footer-contact">
                            <div className="contact-item">
                                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <span>Hyderabad, Telangana, India</span>
                            </div>
                            <div className="contact-item">
                                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                <span>+91 96531 48777</span>
                            </div>
                            <div className="contact-item">
                                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                <span>care@rehabb.care</span>
                            </div>
                        </div>
                    </div>

                    {/* Legal & Practices */}
                    <div className="footer-column">
                        <h3 className="footer-column-title">Legal & Practices</h3>
                        <ul className="footer-links">
                            <li><a href="#accessibility">Accessibility Options</a></li>
                            <li><Link to="/terms-of-use">Terms of Use</Link></li>
                            <li><Link to="/privacy-practices">Notice of Privacy Practices</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="footer-copyright">© 2025 Rehab Care. All rights reserved.</p>
                    <div className="footer-legal">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <Link to="/terms-of-use">Terms of Service</Link>
                    </div>
                    <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
