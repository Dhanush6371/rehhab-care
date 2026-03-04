import React, { useState } from 'react';
import './Appointment.css';

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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Appointment submitted:', formData);
        // Handle form submission
    };

    return (
        <section className="appointment-section">
            <div className="appointment-container">
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

                        <button type="submit" className="submit-appointment-btn">
                            Submit
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Appointment;
