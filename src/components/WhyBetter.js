import React, { useState } from 'react';
import './WhyBetter.css';
import LazySection from './LazySection';

const WhyBetter = () => {
    const [showComparison, setShowComparison] = useState(false);

    const benefits = [
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            ),
            title: '1:1 personalized treatments',
            description: '45-55 minutes of 1:1 person care means faster recovery in fewer treatments.'
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="9" y1="3" x2="9" y2="21"></line>
                </svg>
            ),
            title: 'Equipment comes to you',
            description: 'Your PT will bring a treatment table and a mobile kit. 90% of cases don\'t need heavy machines.'
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
            ),
            title: 'Convenient care',
            description: 'Skip the clinic. Get care that\'s covered by insurance. Safely delivered to you, on your schedule.'
        }
    ];

    const comparisonData = [
        {
            criteria: 'Convenience',
            rehabb: 'PT comes to you',
            traditional: 'You drive to the clinic'
        },
        {
            criteria: 'Scheduling flexibility',
            rehabb: '7 days a week, 6:30am-9:30pm',
            traditional: 'Regular business hours'
        },
        {
            criteria: 'Appointment availability',
            rehabb: 'Less than 48 hours',
            traditional: 'Up to 2 week waitlists'
        },
        {
            criteria: 'Exclusive, dedicated care',
            rehabb: '1:1 attention from PT',
            traditional: 'PT seeing many patients at once'
        },
        {
            criteria: 'Safety & comfort',
            rehabb: 'Private setting of your choice',
            traditional: 'Public treatment area'
        },
        {
            criteria: 'Access to Equipment',
            rehabb: 'All equipment comes to you',
            traditional: 'Equipment stays at clinic'
        }
    ];

    return (
        <section className="why-better-section">
            <div className="why-better-container">
                <LazySection animation="fade-up">
                    <div className="section-badge">● AT HOME CARE</div>
                    <h2 className="section-title">Why in-home physical therapy is better</h2>
                    <p className="section-subtitle">
                        More convenience means our patients <strong>actually</strong> complete their care plans and recover faster.
                    </p>

                    <button
                        className="comparison-btn"
                        onClick={() => setShowComparison(true)}
                    >
                        SEE OUR CLINIC COMPARISON CHART →
                    </button>
                </LazySection>

                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <LazySection key={index} animation="fade-up" delay={index * 100}>
                            <div className="benefit-card">
                                <div className="benefit-icon">{benefit.icon}</div>
                                <h3 className="benefit-title">{benefit.title}</h3>
                                <p className="benefit-description">{benefit.description}</p>
                            </div>
                        </LazySection>
                    ))}
                </div>

                <LazySection animation="fade-up" delay={300}>
                    <button className="check-availability-btn">Check Availability</button>
                </LazySection>
            </div>

            {/* Comparison Chart Popup */}
            {showComparison && (
                <div className="popup-overlay" onClick={() => setShowComparison(false)}>
                    <div className="comparison-popup" onClick={(e) => e.stopPropagation()}>
                        <button className="popup-close" onClick={() => setShowComparison(false)}>×</button>

                        <div className="comparison-header">
                            <h2>Rehabb Care vs. Traditional Clinic</h2>
                            <p>Same price, better value! Recover faster, and more conveniently</p>
                        </div>

                        <div className="comparison-table">
                            <div className="table-header">
                                <div className="header-cell criteria-header">CRITERIA</div>
                                <div className="header-cell rehabb-header">REHABB CARE</div>
                                <div className="header-cell traditional-header">TRADITIONAL</div>
                            </div>

                            {comparisonData.map((row, index) => (
                                <div key={index} className="table-row">
                                    <div className="table-cell criteria-cell">{row.criteria}</div>
                                    <div className="table-cell rehabb-cell">
                                        <span className="check-icon">✓</span>
                                        <span className="cell-text">{row.rehabb}</span>
                                    </div>
                                    <div className="table-cell traditional-cell">
                                        <span className="cross-icon">✗</span>
                                        <span className="cell-text">{row.traditional}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="popup-check-btn">Check Availability</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default WhyBetter;
