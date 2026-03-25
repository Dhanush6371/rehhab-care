import React, { useState } from 'react';
import './Stats.css';
import LazySection from './LazySection';
import { submitConsultation } from '../config/api';

const Stats = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: ''
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
            await submitConsultation(formData);

            setSubmitStatus({ loading: false, success: true, error: null });

            // Reset form
            setFormData({
                name: '',
                phone: '',
                location: ''
            });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus({ loading: false, success: false, error: null });
            }, 5000);

        } catch (error) {
            setSubmitStatus({
                loading: false,
                success: false,
                error: 'Failed to submit. Please try again.'
            });
        }
    };
    return (
        <section className="stats-section">
            {/* Heading */}
            <LazySection animation="fade-up" delay={0}>
                <h2 className="stats-heading">You're not <span className="highlight">alone!</span></h2>
            </LazySection>

            {/* Combined Stats and Form Container */}
            <LazySection animation="fade-up" delay={100}>
                <div className="stats-combined-container">
                    {/* Stats Cards */}
                    <div className="stats-cards-row">
                        <div className="stat-card-item">
                            <h3>300+</h3>
                            <p>CERTIFIED PHYSIOTHERAPISTS</p>
                        </div>
                        <div className="stat-card-item">
                            <h3>7,000+</h3>
                            <p>FAMILIES SERVED</p>
                        </div>
                        <div className="stat-card-item">
                            <h3>10,000+</h3>
                            <p>APPOINTMENTS COMPLETED</p>
                        </div>
                        <div className="stat-card-item">
                            <h3>1,00,000+</h3>
                            <p>CUMULATIVE SESSIONS COMPLETED</p>
                        </div>
                    </div>

                    {/* Virtual Consultation Form */}
                    <div className="consultation-form-section">
                        <div className="form-header">
                            <h2>Get a Free Assessment</h2>
                            <div className="rating">
                                <span className="stars">⭐⭐⭐⭐⭐</span>
                                <span className="rating-text">4.9</span>
                                <span className="reviews">(1400+ Reviews)</span>
                            </div>
                        </div>

                        <form className="consultation-form" onSubmit={handleSubmit}>
                            {submitStatus.success && (
                                <div className="success-message">
                                    ✓ Consultation request submitted successfully!
                                </div>
                            )}

                            {submitStatus.error && (
                                <div className="error-message">
                                    ✗ {submitStatus.error}
                                </div>
                            )}

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Jane Smith"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+91 XXX XXX XXXX"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Location</label>
                                    <select
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Location</option>
                                        <option value="Mumbai">Mumbai</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Bangalore">Bangalore</option>
                                        <option value="Hyderabad">Hyderabad</option>
                                        <option value="Chennai">Chennai</option>
                                        <option value="Kolkata">Kolkata</option>
                                        <option value="Pune">Pune</option>
                                        <option value="Ahmedabad">Ahmedabad</option>
                                        <option value="Jaipur">Jaipur</option>
                                        <option value="Lucknow">Lucknow</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    className="submit-btn"
                                    disabled={submitStatus.loading}
                                >
                                    {submitStatus.loading ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </LazySection>
        </section>
    );
};

export default Stats;
