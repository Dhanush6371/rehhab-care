import React from 'react';
import './Services.css';
import LazySection from './LazySection';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Sports Rehabilitation',
            description: 'Comprehensive recovery programs for athletes, from injury to peak performance.',
            icon: '📈',
            iconBg: '#d4f4dd'
        },
        {
            id: 2,
            title: 'Neurological Rehab',
            description: 'Specialized therapy for stroke, Parkinson\'s, and other neurological conditions.',
            icon: '🧠',
            iconBg: '#2d3e50'
        },
        {
            id: 3,
            title: 'Orthopedic Care',
            description: 'Treatment for fractures, joint replacements, and musculoskeletal disorders.',
            icon: '🦴',
            iconBg: '#d4f4dd'
        },
        {
            id: 4,
            title: 'Cardiac Rehabilitation',
            description: 'Guided exercise and lifestyle programs for heart health recovery.',
            icon: '❤️',
            iconBg: '#2d3e50'
        },
        {
            id: 5,
            title: 'Post-Surgical Rehab',
            description: 'Structured recovery programs to restore function after surgery.',
            icon: '🔄',
            iconBg: '#d4f4dd'
        },
        {
            id: 6,
            title: 'Pediatric Physio',
            description: 'Child-friendly therapy for developmental and physical challenges.',
            icon: '⏱️',
            iconBg: '#2d3e50'
        }
    ];

    return (
        <section className="services-section">
            <div className="services-container">
                <LazySection animation="fade-up">
                    <div className="services-header">
                        <p className="services-label">OUR SERVICES</p>
                        <h2>Comprehensive <span className="highlight">Rehab</span> Programs</h2>
                        <p className="services-description">From sports injuries to post-surgical recovery, our expert team provides personalized care to help you regain mobility and live pain-free.</p>
                    </div>
                </LazySection>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <LazySection key={service.id} animation="fade-up" delay={index * 100}>
                            <div className="service-card">
                                <div className="service-icon" style={{ backgroundColor: service.iconBg }}>
                                    <span>{service.icon}</span>
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <button className="learn-more" onClick={() => console.log(`Learn more about ${service.title}`)}>
                                    Learn More <span className="arrow">→</span>
                                </button>
                            </div>
                        </LazySection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
