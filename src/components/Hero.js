import React, { useState } from 'react';
import './Hero.css';
import LazySection from './LazySection';

const Hero = () => {
    const [activeHotspot, setActiveHotspot] = useState(null);

    const hotspots = [
        {
            id: 'shoulder',
            position: { top: '30%', left: '40.5%' },
            title: 'Shoulder',
            text: 'Shoulder pain affects 1 in 3 adults regularly'
        },
        {
            id: 'back',
            position: { top: '42%', left: '41%' },
            title: 'Lower Back',
            text: '80% of adults suffer from lower back pain'
        },
        {
            id: 'knee',
            position: { bottom: '30.45%', left: '53%' },
            title: 'Knee',
            text: 'Knee pain is the leading cause of 1 in 4 adults'
        }
    ];

    const handleHotspotClick = (hotspotId) => {
        setActiveHotspot(activeHotspot === hotspotId ? null : hotspotId);
    };

    return (
        <section className="hero">
            <div className="hero-container">
                {/* Left Side - Image */}
                <LazySection animation="fade-right">
                    <div className="hero-image">
                        <img
                            src="/images/runner2.png"
                            alt="Physiotherapy"
                            className="runner-image"
                            onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/500x600/1a5f5a/ffffff?text=Runner+Image';
                            }}
                        />

                        {/* Hotspots */}
                        {hotspots.map((hotspot) => (
                            <div
                                key={hotspot.id}
                                className="hotspot"
                                style={hotspot.position}
                                onClick={() => handleHotspotClick(hotspot.id)}
                            >
                                <div className="hotspot-dot"></div>
                                {activeHotspot === hotspot.id && (
                                    <div className="hotspot-tooltip">
                                        <h4>{hotspot.title}</h4>
                                        <p>{hotspot.text}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </LazySection>

                {/* Right Side - Content */}
                <div className="hero-content">
                    <LazySection animation="fade-left" delay={100}>
                        {/* Social Proof */}
                        <div className="social-proof">
                            <div className="avatars">
                                <img
                                    src="/images/avatar1.jpg"
                                    alt="User"
                                    onError={(e) => e.target.src = 'https://via.placeholder.com/28/4CAF50/ffffff?text=1'}
                                />
                                <img
                                    src="/images/avatar2.jpg"
                                    alt="User"
                                    onError={(e) => e.target.src = 'https://via.placeholder.com/28/2196F3/ffffff?text=2'}
                                />
                                <img
                                    src="/images/avatar3.jpg"
                                    alt="User"
                                    onError={(e) => e.target.src = 'https://via.placeholder.com/28/FF9800/ffffff?text=3'}
                                />
                            </div>
                            <div className="rating">
                                <span className="users">TRUSTED WORLDWIDE</span>
                            </div>
                            <div className="rating">
                                <span className="users">2.4M Users</span>
                                <span className="stars">⭐ 4.8</span>
                            </div>
                        </div>
                    </LazySection>

                    <LazySection animation="fade-left" delay={200}>
                        {/* Service Tags */}
                        <div className="service-tags">
                            <span className="tag tag-orange">Gain Clarity</span>
                            <span className="tag tag-red">Manage Stress</span>
                            <span className="tag tag-blue">Self-Awareness</span>
                        </div>
                    </LazySection>

                    <LazySection animation="fade-left" delay={300}>
                        {/* Main Heading */}
                        <h1 className="hero-title">
                            Your First Physiotherapy Consultation - <span className="italic">Absolutely Free</span>
                        </h1>

                        {/* Badge */}
                        <div className="badge">
                            <span className="badge-dot">●</span>
                            FOR LOWER BACK CARE
                        </div>

                        {/* Description */}
                        <p className="hero-description">
                            80% of adults suffer from lower back pain. <strong>Spinal decompression and core stabilization programs.</strong> At Rehab Care, we provide world-class clinical expertise.
                        </p>
                    </LazySection>

                    <LazySection animation="fade-left" delay={400}>
                        {/* CTA Buttons */}
                        <div className="hero-buttons">
                            <button className="btn-cta">
                                Book a call <span className="arrow">→</span>
                            </button>
                            <button className="btn-video">
                                <span className="play-icon">▶</span>
                                <div className="video-text">
                                    <span className="video-label">Watch Video</span>
                                    <span className="video-sublabel">LEARN OUR PROCESS</span>
                                </div>
                            </button>
                        </div>
                    </LazySection>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="hero-bg-decoration"></div>
        </section>
    );
};

export default Hero;
