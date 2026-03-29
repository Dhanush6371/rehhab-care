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

    const [locationDetecting, setLocationDetecting] = useState(false);

    // Remove auto-detect on mount - only detect when user clicks

    const detectLocation = async () => {
        setLocationDetecting(true);

        if ('geolocation' in navigator) {
            try {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject, {
                        timeout: 10000,
                        enableHighAccuracy: true
                    });
                });

                const { latitude, longitude } = position.coords;

                // Use reverse geocoding to get city name
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
                    {
                        headers: {
                            'User-Agent': 'RebuildCare/1.0'
                        }
                    }
                );
                const data = await response.json();

                // Extract all possible location identifiers
                const detectedLocations = [
                    data.address?.city,
                    data.address?.town,
                    data.address?.village,
                    data.address?.state_district,
                    data.address?.county,
                    data.address?.state
                ].filter(Boolean).map(loc => loc.toLowerCase());

                console.log('Detected locations:', detectedLocations);
                console.log('Full address data:', data.address);

                // Build location string with town/village and nearby city/district
                const primaryLocation = data.address?.village || data.address?.town || data.address?.city || '';
                const secondaryLocation = data.address?.state_district || data.address?.county || data.address?.city || '';

                let detectedLocation = '';

                // If we have both and they're different, combine them
                if (primaryLocation && secondaryLocation &&
                    primaryLocation.toLowerCase() !== secondaryLocation.toLowerCase()) {
                    detectedLocation = `${primaryLocation}, ${secondaryLocation}`;
                } else if (primaryLocation) {
                    detectedLocation = primaryLocation;
                } else if (secondaryLocation) {
                    detectedLocation = secondaryLocation;
                }

                console.log('Selected location:', detectedLocation);

                if (detectedLocation) {
                    setFormData(prev => ({ ...prev, location: detectedLocation }));
                }
            } catch (error) {
                console.log('Location detection failed:', error);
            }
        }

        setLocationDetecting(false);
    };

    const handleLocationClick = () => {
        // Only detect location when user clicks on the input
        if (!formData.location && !locationDetecting) {
            detectLocation();
        }
    };

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
            // Send "-" if locality is empty
            const submissionData = {
                ...formData,
                location: formData.location.trim() || '-'
            };

            await submitConsultation(submissionData);

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
                                    <label>Locality</label>
                                    <input
                                        type="text"
                                        name="location"
                                        placeholder={locationDetecting ? 'Detecting locality...' : 'Click to detect locality'}
                                        value={formData.location}
                                        onChange={handleChange}
                                        onClick={handleLocationClick}
                                        disabled={locationDetecting}
                                    />
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
