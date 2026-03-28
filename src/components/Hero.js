import { useState } from 'react';
import './Hero.css';
import LazySection from './LazySection';

const Hero = () => {
    const [activePainPoint, setActivePainPoint] = useState('neck');

    const painPointData = {
        neck: {
            title: 'Neck',
            stat: "We've treated 1,000+ neck pain cases - right at home.",
            description: "Neck pain can result from poor posture, muscle strain, or underlying conditions. It often leads to headaches and reduced mobility.",
            image: '/images/neck_pain.webp'
        },
        shoulder: {
            title: 'Shoulder',
            stat: '1,500+ patients have been put back on their feet with our care.',
            description: 'Shoulder pain can stem from rotator cuff injuries, frozen shoulder, or repetitive strain. It significantly impacts daily activities.',
            image: '/images/Shoulder_pain.webp'
        },
        elbow: {
            title: 'Elbow',
            stat: 'Most elbow pain cases improve in under 5 sessions. We can do it for you too.',
            description: 'Most elbow pain cases improve in under 5 sessions with targeted physiotherapy. We can help you recover faster.',
            image: '/images/elbow.webp'
        },
        wrist: {
            title: 'Wrist',
            stat: 'Our patients are back to daily tasks in 2 weeks. You can too.',
            description: 'Wrist pain from carpal tunnel, sprains, or repetitive strain can affect typing, writing, and daily hand movements.',
            image: '/images/wrist.webp'
        },
        lowerBack: {
            title: 'Lower Back',
            stat: '2,000+ families trust us for back pain recovery at home.',
            description: 'Lower back pain is the leading cause of disability worldwide. It can result from muscle strain, disc issues, or poor biomechanics.',
            image: '/images/lowerback.webp'
        },
        hip: {
            title: 'Hip',
            stat: '600+ have regained walking confidence with our structured rehab.',
            description: 'Hip pain can be caused by arthritis, bursitis, or muscle strains. It affects walking, sitting, and overall quality of life.',
            image: '/images/hip_pain.webp'
        },
        knee: {
            title: 'Knee',
            stat: '8 out of 10 knee pain patients improve without needing surgery.',
            description: 'Knee pain is often related to injuries, arthritis, or overuse. It can severely limit mobility and athletic performance.',
            image: '/images/knee.webp'
        },
        ankle: {
            title: 'Ankle',
            stat: '500+ patients have been put back on their feet with our care.',
            description: 'Ankle pain from sprains, strains, or instability can lead to chronic issues if not properly rehabilitated.',
            image: '/images/ankle.webp'
        }
    };

    const currentPainPoint = painPointData[activePainPoint];

    const handleBookCall = () => {
        const appointmentSection = document.querySelector('.appointment-section');
        if (appointmentSection) {
            appointmentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="hero" id="home">
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
                            <h2 className="hero-heading">Where Does It Hurt?</h2>
                            <div className="body-diagram-wrapper">
                                <img
                                    src="/images/stamp-2.png"
                                    alt="Body Diagram"
                                    className="body-diagram-image"
                                    fetchpriority="high"
                                />

                                {/* Pain Point Hotspots - Front view (Left figure) */}
                                <div className="body-part head-front" onMouseEnter={() => setActivePainPoint('neck')} onTouchStart={() => setActivePainPoint('neck')} onClick={() => setActivePainPoint('neck')}>
                                    <div className={`pain-indicator ${activePainPoint === 'neck' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part shoulder-left-front" onMouseEnter={() => setActivePainPoint('shoulder')} onTouchStart={() => setActivePainPoint('shoulder')} onClick={() => setActivePainPoint('shoulder')}>
                                    <div className={`pain-indicator ${activePainPoint === 'shoulder' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part shoulder-right-front" onMouseEnter={() => setActivePainPoint('shoulder')} onTouchStart={() => setActivePainPoint('shoulder')} onClick={() => setActivePainPoint('shoulder')}>
                                    <div className={`pain-indicator ${activePainPoint === 'shoulder' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part elbow-left-front" onMouseEnter={() => setActivePainPoint('elbow')} onTouchStart={() => setActivePainPoint('elbow')} onClick={() => setActivePainPoint('elbow')}>
                                    <div className={`pain-indicator ${activePainPoint === 'elbow' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part elbow-right-front" onMouseEnter={() => setActivePainPoint('elbow')} onTouchStart={() => setActivePainPoint('elbow')} onClick={() => setActivePainPoint('elbow')}>
                                    <div className={`pain-indicator ${activePainPoint === 'elbow' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part wrist-left-front" onMouseEnter={() => setActivePainPoint('wrist')} onTouchStart={() => setActivePainPoint('wrist')} onClick={() => setActivePainPoint('wrist')}>
                                    <div className={`pain-indicator ${activePainPoint === 'wrist' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part wrist-right-front" onMouseEnter={() => setActivePainPoint('wrist')} onTouchStart={() => setActivePainPoint('wrist')} onClick={() => setActivePainPoint('wrist')}>
                                    <div className={`pain-indicator ${activePainPoint === 'wrist' ? 'active' : ''}`}></div>
                                </div>


                                <div className="body-part knee-left-front" onMouseEnter={() => setActivePainPoint('knee')} onTouchStart={() => setActivePainPoint('knee')} onClick={() => setActivePainPoint('knee')}>
                                    <div className={`pain-indicator ${activePainPoint === 'knee' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part knee-right-front" onMouseEnter={() => setActivePainPoint('knee')} onTouchStart={() => setActivePainPoint('knee')} onClick={() => setActivePainPoint('knee')}>
                                    <div className={`pain-indicator ${activePainPoint === 'knee' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part ankle-left-front" onMouseEnter={() => setActivePainPoint('ankle')} onTouchStart={() => setActivePainPoint('ankle')} onClick={() => setActivePainPoint('ankle')}>
                                    <div className={`pain-indicator ${activePainPoint === 'ankle' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part ankle-right-front" onMouseEnter={() => setActivePainPoint('ankle')} onTouchStart={() => setActivePainPoint('ankle')} onClick={() => setActivePainPoint('ankle')}>
                                    <div className={`pain-indicator ${activePainPoint === 'ankle' ? 'active' : ''}`}></div>
                                </div>

                                {/* Pain Point Hotspots - Back view (Right figure) */}
                                <div className="body-part head-back" onMouseEnter={() => setActivePainPoint('neck')} onTouchStart={() => setActivePainPoint('neck')} onClick={() => setActivePainPoint('neck')}>
                                    <div className={`pain-indicator ${activePainPoint === 'neck' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part shoulder-left-back" onMouseEnter={() => setActivePainPoint('shoulder')} onTouchStart={() => setActivePainPoint('shoulder')} onClick={() => setActivePainPoint('shoulder')}>
                                    <div className={`pain-indicator ${activePainPoint === 'shoulder' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part shoulder-right-back" onMouseEnter={() => setActivePainPoint('shoulder')} onTouchStart={() => setActivePainPoint('shoulder')} onClick={() => setActivePainPoint('shoulder')}>
                                    <div className={`pain-indicator ${activePainPoint === 'shoulder' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part lower-back-back" onMouseEnter={() => setActivePainPoint('lowerBack')} onTouchStart={() => setActivePainPoint('lowerBack')} onClick={() => setActivePainPoint('lowerBack')}>
                                    <div className={`pain-indicator ${activePainPoint === 'lowerBack' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part hip-left-back" onMouseEnter={() => setActivePainPoint('hip')} onTouchStart={() => setActivePainPoint('hip')} onClick={() => setActivePainPoint('hip')}>
                                    <div className={`pain-indicator ${activePainPoint === 'hip' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part hip-right-back" onMouseEnter={() => setActivePainPoint('hip')} onTouchStart={() => setActivePainPoint('hip')} onClick={() => setActivePainPoint('hip')}>
                                    <div className={`pain-indicator ${activePainPoint === 'hip' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part elbow-left-back" onMouseEnter={() => setActivePainPoint('elbow')} onTouchStart={() => setActivePainPoint('elbow')} onClick={() => setActivePainPoint('elbow')}>
                                    <div className={`pain-indicator ${activePainPoint === 'elbow' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part elbow-right-back" onMouseEnter={() => setActivePainPoint('elbow')} onTouchStart={() => setActivePainPoint('elbow')} onClick={() => setActivePainPoint('elbow')}>
                                    <div className={`pain-indicator ${activePainPoint === 'elbow' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part knee-left-back" onMouseEnter={() => setActivePainPoint('knee')} onTouchStart={() => setActivePainPoint('knee')} onClick={() => setActivePainPoint('knee')}>
                                    <div className={`pain-indicator ${activePainPoint === 'knee' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part knee-right-back" onMouseEnter={() => setActivePainPoint('knee')} onTouchStart={() => setActivePainPoint('knee')} onClick={() => setActivePainPoint('knee')}>
                                    <div className={`pain-indicator ${activePainPoint === 'knee' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part ankle-left-back" onMouseEnter={() => setActivePainPoint('ankle')} onTouchStart={() => setActivePainPoint('ankle')} onClick={() => setActivePainPoint('ankle')}>
                                    <div className={`pain-indicator ${activePainPoint === 'ankle' ? 'active' : ''}`}></div>
                                </div>
                                <div className="body-part ankle-right-back" onMouseEnter={() => setActivePainPoint('ankle')} onTouchStart={() => setActivePainPoint('ankle')} onClick={() => setActivePainPoint('ankle')}>
                                    <div className={`pain-indicator ${activePainPoint === 'ankle' ? 'active' : ''}`}></div>
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
                                    <h2>{currentPainPoint.title} Pain</h2>

                                    {/* Statistic Callout */}
                                    <div className="pain-stat-box">
                                        {currentPainPoint.stat}
                                    </div>

                                    <p>{currentPainPoint.description}</p>

                                    {/* CTA Button */}
                                    <button className="btn-book" onClick={handleBookCall}>
                                        Book Free Consultation
                                        <span className="arrow-icon">→</span>
                                    </button>
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
                                    <img src="/images/app1.png" alt="Patient" loading="eager" />
                                    <img src="/images/app2.png" alt="Patient" loading="eager" />
                                    <img src="/images/app3.png" alt="Patient" loading="eager" />
                                </div>
                                <div className="stats-text">
                                    <h4>10,000+ Appointments Completed</h4>
                                    <p>Trusted by patients across Hyderabad</p>
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