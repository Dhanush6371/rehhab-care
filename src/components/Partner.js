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
            <div className="partner-container">
                <LazySection animation="fade-up">
                    <div className="partner-header">
                        <div className="partner-badge">● CAREERS</div>
                        <h2 className="partner-title">Partner With Rehabb Care</h2>
                        <p className="partner-subtitle">
                            Own your career and deliver world-class care on your schedule. Join our network of elite physical therapists.
                        </p>
                    </div>
                </LazySection>

                <LazySection animation="fade-up" delay={100}>
                    <div className="requirements-box">
                        <h3 className="requirements-title">To see patients with Rehabb Care, you'll need:</h3>
                        <div className="requirements-grid">
                            <div className="requirement-item">
                                <div className="requirement-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                </div>
                                <span className="requirement-text">PT license</span>
                            </div>
                            <div className="requirement-item">
                                <div className="requirement-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                </div>
                                <span className="requirement-text">1-3 years of experience working with patients</span>
                            </div>
                            <div className="requirement-item">
                                <div className="requirement-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                        <path d="M9 12l2 2 4-4"></path>
                                    </svg>
                                </div>
                                <span className="requirement-text">Background check</span>
                            </div>
                        </div>
                    </div>
                </LazySection>

                <LazySection animation="fade-up" delay={200}>
                    <div className="application-form-wrapper">
                        <div className="form-intro">
                            <h3 className="form-intro-title">Meet these requirements? Great!</h3>
                            <p className="form-intro-subtitle">How shall we reach you?</p>
                        </div>

                        <form className="partner-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">First Name*</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="form-input"
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
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">Email*</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-input"
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
                                        value={formData.zipCode}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Years of Experience as a Licensed PT*</label>
                                    <select
                                        name="experience"
                                        className="form-input form-select"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select...</option>
                                        <option value="less-than-1">Less than 1 year</option>
                                        <option value="1-3">1-3 years</option>
                                        <option value="3-5">3-5 years</option>
                                        <option value="5-10">5-10 years</option>
                                        <option value="10+">10+ years</option>
                                    </select>
                                </div>
                            </div>

                            <button type="submit" className="submit-application-btn">
                                Submit Application →
                            </button>

                            <p className="form-disclaimer">
                                I consent to receive communications regarding my application by email, text, or calls.
                            </p>
                        </form>
                    </div>
                </LazySection>
            </div>
        </section>
    );
};

export default Partner;
