import React, { useState } from 'react';
import './Appointment.css';
import LazySection from './LazySection';
import { submitAppointment } from '../config/api';

const Appointment = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        service: '',
        dateTime: '',
        pincode: '',
        message: ''
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
            await submitAppointment(formData);

            setSubmitStatus({ loading: false, success: true, error: null });

            // Reset form after successful submission
            setFormData({
                fullName: '',
                phone: '',
                email: '',
                service: '',
                dateTime: '',
                pincode: '',
                message: ''
            });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus({ loading: false, success: false, error: null });
            }, 5000);

        } catch (error) {
            setSubmitStatus({
                loading: false,
                success: false,
                error: 'Failed to submit appointment. Please try again.'
            });
        }
    };

    return (
        <section className="appointment-section">
            <div className="appointment-container">
                <LazySection animation="fade-right">
                    <div className="appointment-content">
                        <h2 className="appointment-title">
                            Ready to Start Your <span className="italic">Recovery?</span>
                        </h2>
                        <p className="appointment-description">
                            Fill out the form below to schedule your physiotherapy consultation. Our elite clinical team will confirm your booking within 2 business hours.
                        </p>

                        <div className="appointment-steps">
                            <div className="step-item">
                                <div className="step-circle">1</div>
                                <span className="step-label">FILL DETAILS</span>
                            </div>
                            <div className="step-line"></div>
                            <div className="step-item">
                                <div className="step-circle">2</div>
                                <span className="step-label">PICK SERVICE</span>
                            </div>
                            <div className="step-line"></div>
                            <div className="step-item">
                                <div className="step-circle">3</div>
                                <span className="step-label">GET CALL</span>
                            </div>
                        </div>
                    </div>
                </LazySection>

                <LazySection animation="fade-left" delay={100}>
                    <div className="appointment-form-card">
                        <h3 className="form-card-title">Request an Appointment</h3>

                        <form className="appointment-form" onSubmit={handleSubmit}>
                            <div className="form-row-two">
                                <div className="form-group">
                                    <label className="form-label">FULL NAME</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        className="form-input"
                                        placeholder="John Doe"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">PHONE</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="form-input"
                                        placeholder="+91 XXX..."
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row-two">
                                <div className="form-group">
                                    <label className="form-label">EMAIL</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-input"
                                        placeholder="john@..."
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">SERVICE</label>
                                    <select
                                        name="service"
                                        className="form-input form-select"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Service</option>
                                        <option value="knee-ankle">Knee & Ankle Care</option>
                                        <option value="shoulder-elbow">Shoulder & Elbow Rehab</option>
                                        <option value="geriatric">Geriatric Physiotherapy</option>
                                        <option value="post-operative">Post-Operative Rehabilitation</option>
                                        <option value="sports-medicine">Sports Medicine</option>
                                        <option value="neurological">Neurological Therapy</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-row-two">
                                <div className="form-group">
                                    <label className="form-label">DATE & TIME</label>
                                    <input
                                        type="datetime-local"
                                        name="dateTime"
                                        className="form-input"
                                        value={formData.dateTime}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">PINCODE</label>
                                    <input
                                        type="text"
                                        name="pincode"
                                        className="form-input"
                                        placeholder="110001"
                                        value={formData.pincode}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">ADDRESS & MESSAGE</label>
                                <textarea
                                    name="message"
                                    className="form-textarea"
                                    placeholder="Detailed address or symptoms..."
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            {submitStatus.success && (
                                <div className="success-message">
                                    ✓ Appointment submitted successfully! We'll contact you soon.
                                </div>
                            )}

                            {submitStatus.error && (
                                <div className="error-message">
                                    ✗ {submitStatus.error}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="submit-appointment-btn"
                                disabled={submitStatus.loading}
                            >
                                {submitStatus.loading ? 'Submitting...' : 'Submit'}
                                {!submitStatus.loading && (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="22" y1="2" x2="11" y2="13"></line>
                                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                    </svg>
                                )}
                            </button>
                        </form>
                    </div>
                </LazySection>
            </div>
        </section>
    );
};

export default Appointment;
