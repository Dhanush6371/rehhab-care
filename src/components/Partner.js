import React, { useState } from 'react';
import './Partner.css';
import LazySection from './LazySection';
import { submitPartner } from '../config/api';

const Partner = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        specialization: '',
        pincode: '',
        city: '',
        referralCode: ''
    });

    const [submitStatus, setSubmitStatus] = useState({
        loading: false,
        success: false,
        error: null
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus({ loading: true, success: false, error: null });

        try {
            await submitPartner(formData);

            setSubmitStatus({ loading: false, success: true, error: null });

            // Reset form
            setFormData({
                name: '',
                phone: '',
                email: '',
                specialization: '',
                pincode: '',
                city: '',
                referralCode: ''
            });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus({ loading: false, success: false, error: null });
            }, 5000);

        } catch (error) {
            setSubmitStatus({
                loading: false,
                success: false,
                error: 'Failed to submit application. Please try again.'
            });
        }
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
                    <div className="partner-form-wrapper">
                        <div className="partner-form-intro">
                            <h3 className="partner-form-intro-title">Meet these requirements? Great!</h3>
                            <p className="partner-form-intro-subtitle">How shall we reach you?</p>
                        </div>

                        <form className="partner-form" onSubmit={handleSubmit}>
                            {submitStatus.success && (
                                <div className="success-message">
                                    ✓ Application submitted successfully! We'll contact you soon.
                                </div>
                            )}

                            {submitStatus.error && (
                                <div className="error-message">
                                    ✗ {submitStatus.error}
                                </div>
                            )}

                            <div className="partner-form-row">
                                <div className="partner-form-group">
                                    <label className="partner-form-label">Name*</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="partner-form-input"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="partner-form-group">
                                    <label className="partner-form-label">Phone Number*</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="partner-form-input"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="partner-form-row">
                                <div className="partner-form-group">
                                    <label className="partner-form-label">Email*</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="partner-form-input"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="partner-form-group">
                                    <label className="partner-form-label">Specialization*</label>
                                    <select
                                        name="specialization"
                                        className="partner-form-input partner-form-select"
                                        value={formData.specialization}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select...</option>
                                        <option value="Orthopedic">Orthopedic</option>
                                        <option value="Sports">Sports</option>
                                        <option value="Neurological">Neurological</option>
                                        <option value="Pediatric">Pediatric</option>
                                        <option value="Geriatric">Geriatric</option>
                                        <option value="Cardiopulmonary">Cardiopulmonary</option>
                                        <option value="Women's Health">Women's Health</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="partner-form-row">
                                <div className="partner-form-group">
                                    <label className="partner-form-label">Pincode*</label>
                                    <input
                                        type="text"
                                        name="pincode"
                                        className="partner-form-input"
                                        value={formData.pincode}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="partner-form-group">
                                    <label className="partner-form-label">City*</label>
                                    <input
                                        type="text"
                                        name="city"
                                        className="partner-form-input"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="partner-form-row">
                                <div className="partner-form-group">
                                    <label className="partner-form-label">Referral Code (Optional)</label>
                                    <input
                                        type="text"
                                        name="referralCode"
                                        className="partner-form-input"
                                        value={formData.referralCode}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="partner-submit-btn"
                                disabled={submitStatus.loading}
                            >
                                {submitStatus.loading ? 'Submitting...' : 'Submit Application →'}
                            </button>

                            <p className="partner-form-disclaimer">
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
