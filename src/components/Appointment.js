import React, { useState } from 'react';
import './Appointment.css';
import LazySection from './LazySection';
import { submitAppointment } from '../config/api';

const Appointment = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        serviceArea: '',
        city: '',
        locality: '',
        notes: ''
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
                name: '',
                phone: '',
                serviceArea: '',
                city: '',
                locality: '',
                notes: ''
            });

            // Redirect to WhatsApp after showing success message
            setTimeout(() => {
                const phoneNumber = '919045678345';
                const message = "I'm looking for expert Physiotherapy Services.";
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');

                setSubmitStatus({ loading: false, success: false, error: null });
            }, 1500);

        } catch (error) {
            setSubmitStatus({
                loading: false,
                success: false,
                error: 'Failed to submit appointment. Please try again.'
            });
        }
    };

    return (
        <section className="appointment-section" id="appointment">
            <div className="appointment-container">
                <LazySection animation="fade-right">
                    <div className="appointment-content">
                        <h2 className="appointment-title">
                            Ready to Start Your <span className="highlight">Recovery?</span>
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
                                <span className="step-label">SELECT YOUR CONCERN</span>
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
                                    <label className="form-label">NAME</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-input"
                                        placeholder="John Doe"
                                        value={formData.name}
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
                                    <label className="form-label">SELECT YOUR CONCERN</label>
                                    <select
                                        name="serviceArea"
                                        className="form-input form-select"
                                        value={formData.serviceArea}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Service</option>
                                        <option value="Back & Neck Pain">Back & Neck Pain</option>
                                        <option value="Knee & Ankle Pain">Knee & Ankle Pain</option>
                                        <option value="Shoulder & Elbow Rehab">Shoulder & Elbow Rehab</option>
                                        <option value="Post-Surgery Rehab">Post-Surgery Rehab</option>
                                        <option value="Paralysis / Stroke Rehab">Paralysis / Stroke Rehab</option>
                                        <option value="Geriatric Physiotherapy">Geriatric Physiotherapy</option>
                                        <option value="Sports Injury Rehab">Sports Injury Rehab</option>
                                        <option value="Other">Other (Not sure / Need guidance)</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">CITY</label>
                                    <input
                                        type="text"
                                        name="city"
                                        className="form-input"
                                        placeholder="Hyderabad"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">LOCALITY</label>
                                <input
                                    type="text"
                                    name="locality"
                                    className="form-input"
                                    placeholder="Gachibowli"
                                    value={formData.locality}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">NOTES (OPTIONAL)</label>
                                <textarea
                                    name="notes"
                                    className="form-textarea"
                                    placeholder="Any additional information or symptoms..."
                                    rows="4"
                                    value={formData.notes}
                                    onChange={handleChange}
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
