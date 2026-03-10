import { useState } from 'react';
import './Hero.css';
import LazySection from './LazySection';

const Hero = () => {
    const [activePainPoint, setActivePainPoint] = useState('neck');

    const painPointData = {
        neck: {
            title: 'Neck',
            description: 'Neck pain can result from muscle strain, poor posture, or underlying medical conditions, causing discomfort and restricted mobility.',
            image: '/images/neck_pain.webp'
        },
        shoulder: {
            title: 'Shoulder',
            description: 'Shoulder pain affects mobility and can result from rotator cuff injuries, arthritis, or overuse, limiting daily activities.',
            image: '/images/Shoulder_pain.webp'
        },
        elbow: {
            title: 'Elbow',
            description: 'Elbow pain often stems from repetitive strain, tendinitis, or nerve compression, affecting grip strength and arm movement.',
            image: '/images/elbow.webp'
        },
        wrist: {
            title: 'Wrist',
            description: 'Wrist pain can be caused by carpal tunnel syndrome, arthritis, or repetitive stress injuries, affecting hand function.',
            image: '/images/wrist.webp'
        },
        lowerBack: {
            title: 'Lower Back',
            description: 'Lower back pain is one of the most common complaints, often caused by muscle strain, disc problems, or poor posture.',
            image: '/images/lowerback.webp'
        },
        knee: {
            title: 'Knee',
            description: 'Knee pain is common among athletes and older adults, often resulting from ligament injuries, arthritis, or meniscus tears.',
            image: '/images/knee.webp'
        },
        ankle: {
            title: 'Ankle',
            description: 'Ankle pain typically results from sprains, strains, or arthritis, affecting balance and walking ability.',
            image: '/images/ankle.webp'
        }
    };

    const currentPainPoint = painPointData[activePainPoint];

    const handleBookCall = () => {
        const phoneNumber = '919653148777';
        const message = 'Hello! I would like to book an appointment.';
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <section className="hero">
            {/* Animated Bubble Background */}
            <div className="bubble-background">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
            </div>

            <div className="hero-container">
                <div className="hero-card">
                    {/* Left Side - Body Diagram */}
                    <div className="hero-left">
                        <LazySection animation="fade-right">
                            <div className="body-diagram-wrapper">
                                <img
                                    src="/images/stamp-2.png"
                                    alt="Body Diagram"
                                    className="body-diagram-image"
                                    fetchpriority="high"
                                />

                                {/* Pain Point Hotspots - Front view (Left figure) */}
                                <div className="body-part head-front" onMouseEnter={() => setActivePainPoint('neck')}>
                                    <div className={`pain-indicator ${activePainPoint === 'neck' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part shoulder-left-front" onMouseEnter={() => setActivePainPoint('shoulder')}>
                                    <div className={`pain-indicator ${activePainPoint === 'shoulder' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part shoulder-right-front" onMouseEnter={() => setActivePainPoint('shoulder')}>
                                    <div className={`pain-indicator ${activePainPoint === 'shoulder' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part elbow-left-front" onMouseEnter={() => setActivePainPoint('elbow')}>
                                    <div className={`pain-indicator ${activePainPoint === 'elbow' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part elbow-right-front" onMouseEnter={() => setActivePainPoint('elbow')}>
                                    <div className={`pain-indicator ${activePainPoint === 'elbow' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part wrist-left-front" onMouseEnter={() => setActivePainPoint('wrist')}>
                                    <div className={`pain-indicator ${activePainPoint === 'wrist' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part wrist-right-front" onMouseEnter={() => setActivePainPoint('wrist')}>
                                    <div className={`pain-indicator ${activePainPoint === 'wrist' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part knee-left-front" onMouseEnter={() => setActivePainPoint('knee')}>
                                    <div className={`pain-indicator ${activePainPoint === 'knee' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part knee-right-front" onMouseEnter={() => setActivePainPoint('knee')}>
                                    <div className={`pain-indicator ${activePainPoint === 'knee' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part ankle-left-front" onMouseEnter={() => setActivePainPoint('ankle')}>
                                    <div className={`pain-indicator ${activePainPoint === 'ankle' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part ankle-right-front" onMouseEnter={() => setActivePainPoint('ankle')}>
                                    <div className={`pain-indicator ${activePainPoint === 'ankle' ? 'active' : ''}`}></div>
                                </div>

                                {/* Pain Point Hotspots - Back view (Right figure) */}
                                <div className="body-part head-back" onMouseEnter={() => setActivePainPoint('neck')}>
                                    <div className={`pain-indicator ${activePainPoint === 'neck' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part shoulder-left-back" onMouseEnter={() => setActivePainPoint('shoulder')}>
                                    <div className={`pain-indicator ${activePainPoint === 'shoulder' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part shoulder-right-back" onMouseEnter={() => setActivePainPoint('shoulder')}>
                                    <div className={`pain-indicator ${activePainPoint === 'shoulder' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part lower-back-back" onMouseEnter={() => setActivePainPoint('lowerBack')}>
                                    <div className={`pain-indicator ${activePainPoint === 'lowerBack' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part elbow-left-back" onMouseEnter={() => setActivePainPoint('elbow')}>
                                    <div className={`pain-indicator ${activePainPoint === 'elbow' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part elbow-right-back" onMouseEnter={() => setActivePainPoint('elbow')}>
                                    <div className={`pain-indicator ${activePainPoint === 'elbow' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part knee-left-back" onMouseEnter={() => setActivePainPoint('knee')}>
                                    <div className={`pain-indicator ${activePainPoint === 'knee' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part knee-right-back" onMouseEnter={() => setActivePainPoint('knee')}>
                                    <div className={`pain-indicator ${activePainPoint === 'knee' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part ankle-left-back" onMouseEnter={() => setActivePainPoint('ankle')}>
                                    <div className={`pain-indicator ${activePainPoint === 'ankle' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part ankle-right-back" onMouseEnter={() => setActivePainPoint('ankle')}>
                                    <div className={`pain-indicator ${activePainPoint === 'ankle' ? 'active' : ''}`}></div>
                                </div>
                            </div>
                        </LazySection>

                        <LazySection animation="fade-up" delay={100}>
                            {/* Whole-Person Health Section */}
                            <div className="health-section">
                                <h3>Whole-Person Health for a Balanced Life</h3>
                                <div className="health-tags">
                                    <span className="health-tag tag-yellow">Gain Clarity</span>
                                    <span className="health-tag tag-pink">Manage Stress</span>
                                    <span className="health-tag tag-blue">Self-Awareness</span>
                                </div>
                            </div>
                        </LazySection>
                    </div>

                    {/* Right Side - Content */}
                    <div className="hero-right">
                        <LazySection animation="fade-left" delay={100}>
                            <div className="pain-content-wrapper">
                                {/* Pain Description */}
                                <div className="pain-text" key={activePainPoint}>
                                    <h2>{currentPainPoint.title}</h2>
                                    <p>{currentPainPoint.description}</p>

                                    {/* CTA Buttons */}
                                    <div className="cta-buttons">
                                        <button className="btn-book" onClick={handleBookCall}>Book a Call</button>
                                        <button className="btn-watch">
                                            <span className="play-icon">▶</span>
                                            Watch Video
                                        </button>
                                    </div>
                                </div>

                                {/* Person Image */}
                                <div className="pain-image" key={`${activePainPoint}-image`}>
                                    <img
                                        src={currentPainPoint.image}
                                        alt={`Person with ${currentPainPoint.title.toLowerCase()} pain`}
                                        loading={activePainPoint === 'neck' ? 'eager' : 'lazy'}
                                        fetchpriority={activePainPoint === 'neck' ? 'high' : 'low'}
                                    />
                                </div>
                            </div>
                        </LazySection>

                        <LazySection animation="fade-up" delay={200}>
                            {/* Appointment Stats */}
                            <div className="appointment-stats">
                                <div className="stats-avatars">
                                    <img src="/images/avatar1.jpg" alt="Patient" loading="eager" />
                                    <img src="/images/avatar2.jpg" alt="Patient" loading="eager" />
                                    <img src="/images/avatar3.jpg" alt="Patient" loading="eager" />
                                </div>
                                <div className="stats-text">
                                    <h4>5000+ Appointments</h4>
                                    <p>Patients booked already</p>
                                </div>
                            </div>
                        </LazySection>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;