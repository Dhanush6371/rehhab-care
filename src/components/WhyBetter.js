import React, { useState } from 'react';
import './WhyBetter.css';

const WhyBetter = () => {
    const [showComparison, setShowComparison] = useState(false);

    const benefits = [
        {
            icon: '🏠',
            title: 'Comfort of Home',
            description: 'Receive treatment in familiar surroundings, promoting faster recovery.'
        },
        {
            icon: '🕐',
            title: 'Flexible Scheduling',
            description: 'Sessions that fit your busy lifestyle, including evenings and weekends.'
        },
        {
            icon: '👥',
            title: 'One-on-One Care',
            description: 'Undivided attention from your therapist for personalised treatment.'
        },
        {
            icon: '🛡️',
            title: 'Safety First',
            description: 'All therapists are verified, trained, and follow strict hygiene protocols.'
        },
        {
            icon: '📍',
            title: 'Pan-City Coverage',
            description: 'Our network spans across the city, ensuring we reach you wherever you are.'
        },
        {
            icon: '✨',
            title: 'Pro Equipment',
            description: 'Therapists bring all necessary equipment for effective treatment.'
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
                <div className="why-better-content">
                    <div className="content-left">
                        <p className="section-label">AT-HOME SERVICE</p>
                        <h2 className="section-title">
                            <span className="title-normal">Professional <span className="highlight-box">Physiotherapy</span>, Delivered Home</span>
                        </h2>
                        <p className="section-description">
                            Skip the commute and waiting rooms. Our certified physiotherapists come to you with all the necessary equipment for a complete rehabilitation experience.
                        </p>

                        <div className="action-buttons">
                            <button className="book-visit-btn">
                                <span className="home-icon">🏠</span>
                                Book Home Visit
                            </button>
                            <button
                                className="comparison-btn"
                                onClick={() => setShowComparison(true)}
                            >
                                SEE OUR CLINIC COMPARISON CHART →
                            </button>
                        </div>

                        <div className="stats-badge">
                            <div className="stats-icons">
                                <span className="stat-icon">🏠</span>
                                <span className="stat-icon">🏠</span>
                                <span className="stat-icon">🏠</span>
                                <span className="stat-icon">🏠</span>
                            </div>
                            <div className="stats-text">
                                <strong>5000+ Home Sessions</strong>
                                <p>Completed this year</p>
                            </div>
                        </div>
                    </div>

                    <div className="content-right">
                        <div className="benefits-grid">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon">{benefit.icon}</div>
                                    <h3 className="benefit-title">{benefit.title}</h3>
                                    <p className="benefit-description">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
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
