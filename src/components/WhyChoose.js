import React from 'react';
import './WhyChoose.css';
import LazySection from './LazySection';

const WhyChoose = () => {
    const features = [
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="M9 12l2 2 4-4"></path>
                </svg>
            ),
            title: 'Verified Experts You Can Trust',
            description: 'Each physiotherapist is certified, background-checked, and trained to deliver safe, expert-guided care.'
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M12 1v6m0 6v6"></path>
                    <path d="M1 12h6m6 0h6"></path>
                </svg>
            ),
            title: 'Personalized Plans Built for You',
            description: 'Every recovery plan is tailored to your lifestyle, goals, and comfort level.'
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            ),
            title: 'Continuity That Cares',
            description: 'We don\'t stop when the pain fades — we stay in touch to ensure lasting recovery.'
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            ),
            title: 'Pain-Free Guarantee',
            description: 'Feel the improvement or get your money back — that\'s our promise of trust and transparency.'
        }
    ];

    return (
        <section className="why-choose-section" id="why-choose">
            <div className="why-choose-container">
                <div className="why-choose-content">
                    <LazySection animation="fade-up">
                        <h2 className="why-choose-title">Why Choose <span className="highlight">Rehab</span> Care?</h2>
                    </LazySection>

                    <div className="why-choose-features">
                        {features.map((feature, index) => (
                            <LazySection key={index} animation="fade-right" delay={index * 100}>
                                <div className="feature-item">
                                    <div className="feature-icon">{feature.icon}</div>
                                    <div className="feature-text">
                                        <h3 className="feature-title">{feature.title}</h3>
                                        <p className="feature-description">{feature.description}</p>
                                    </div>
                                </div>
                            </LazySection>
                        ))}
                    </div>
                </div>

                <LazySection animation="fade-left">
                    <div className="why-choose-image-wrapper">
                        <img
                            src="/images/massage-gun.jpg"
                            alt="Therapy Equipment"
                            className="why-choose-image"
                            onError={(e) => e.target.src = 'https://via.placeholder.com/500x500/1a5f5a/ffffff?text=Therapy+Equipment'}
                        />
                        <div className="promise-badge">
                            <h4 className="promise-title">Promise of Care</h4>
                            <p className="promise-text">
                                We ensure every patient leaves stronger and more confident than they arrived.
                            </p>
                        </div>
                    </div>
                </LazySection>
            </div>
        </section>
    );
};

export default WhyChoose;
