import React, { useState } from 'react';
import './Partner.css';
import LazySection from './LazySection';

const Partner = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        zipCode: '',
        experience: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission
    };

    return (
        <section className="partner-section">
            {/* Hero Section */}
            <div className="partner-hero">
                <LazySection animation="fade-up">
                    <div className="partner-hero-content">
                        <div className="partner-badge">
                            <span className="badge-dot">●</span> JOIN OUR TEAM
                        </div>
                        <h1 className="partner-hero-title">
                            Transform Lives as a<br />
                            <span className="gradient-text">Rehabb Care Partner</span>
                        </h1>
                        <p className="partner-hero-subtitle">
                            Join our elite network of physical therapists and deliver world-class care on your terms.
                            Flexible scheduling, competitive compensation, and the freedom to focus on what you do best.
                        </p>
                        <div className="hero-stats">
                            <div className="hero-stat-item">
                                <h3>500+</h3>
                                <p>Active Therapists</p>
                            </div>
                            <div className="hero-stat-item">
                                <h3>50K+</h3>
                                <p>Patients Treated</p>
                            </div>
                            <div className="hero-stat-item">
                                <h3>4.9★</h3>
                                <p>Average Rating</p>
                            </div>
                        </div>
                    </div>
                </LazySection>
            </div>

            <div className="partner-container">
                {/* Benefits Section */}
                <LazySection animation="fade-up">
                    <div className="benefits-section">
                        <h2 className="section-title">Why Partner With Us?</h2>
                        <div className="benefits-grid">
                            <div className="benefit-card">
                                <div className="benefit-icon">💰</div>
                                <h3>Competitive Pay</h3>
                                <p>Earn top rates in the industry with transparent pricing and weekly payouts</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">📅</div>
                                <h3>Flexible Schedule</h3>
                                <p>Choose your own hours and work when it suits your lifestyle</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">🎯</div>
                                <h3>Focus on Care</h3>
                                <p>We handle admin, billing, and scheduling so you can focus on patients</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">📈</div>
                                <h3>Career Growth</h3>
                                <p>Access to continuing education and professional development resources</p>
                            </div>
                        </div>
                    </div>
                </LazySection>

                {/* Requirements Section */}
                <LazySection animation="fade-up" delay={100}>
                    <div className="requirements-section">
                        <h2 className="section-title">What You'll Need</h2>
                        <div className="requirements-grid">
                            <div className="requirement-card">
                                <div className="requirement-icon">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                    </svg>
                                </div>
                                <h4>Valid PT License</h4>
                                <p>Active physical therapy license in your state</p>
                            </div>
                            <div className="requirement-card">
                                <div className="requirement-icon">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                </div>
                                <h4>1-3 Years Experience</h4>
                                <p>Proven track record working with patients</p>
                            </div>
                            <div className="requirement-card">
                                <div className="requirement-icon">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                        <path d="M9 12l2 2 4-4"></path>
                                    </svg>
                                </div>
                                <h4>Background Check</h4>
                                <p>Clean background verification required</p>
                            </div>
                        </div>
                    </div>
                </LazySection>

                {/* Application Form */}
                <LazySection animation="fade-up" delay={200}>
                    <div className="application-section">
                        <div className="form-header">
                            <h2 className="section-title">Ready to Join?</h2>
                            <p className="form-subtitle">Fill out the form below and we'll get back to you within 24 hours</p>
                        </div>

                        <form className="partner-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">First Name*</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="form-input"
                                        placeholder="John"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Last Name*</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className="form-input"
                                        placeholder="Doe"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">Email Address*</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-input"
                                        placeholder="john.doe@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Phone Number*</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="form-input"
                                        placeholder="(555) 123-4567"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">ZIP Code*</label>
                                    <input
                                        type="text"
                                        name="zipCode"
                                        className="form-input"
                                        placeholder="12345"
                                        value={formData.zipCode}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Years of Experience*</label>
                                    <select
                                        name="experience"
                                        className="form-input form-select"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select experience level</option>
                                        <option value="less-than-1">Less than 1 year</option>
                                        <option value="1-3">1-3 years</option>
                                        <option value="3-5">3-5 years</option>
                                        <option value="5-10">5-10 years</option>
                                        <option value="10+">10+ years</option>
                                    </select>
                                </div>
                            </div>

                            <button type="submit" className="submit-btn">
                                Submit Application
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>

                            <p className="form-disclaimer">
                                By submitting this form, you consent to receive communications regarding your application via email, text, or phone.
                            </p>
                        </form>
                    </div>
                </LazySection>
            </div>
        </section>
    );
};

export default Partner;
