import React from 'react';
import './Services.css';
import LazySection from './LazySection';

const Services = () => {
    const services = [
        {
            id: 1,
            category: 'Rehabilitation',
            title: 'Knee & Ankle Care',
            image: '/images/knee-care.jpg'
        },
        {
            id: 2,
            category: 'Sports',
            title: 'Shoulder & Elbow Rehab',
            image: '/images/shoulder-rehab.jpg'
        },
        {
            id: 3,
            category: 'Geriatric',
            title: 'Geriatric Physiotherapy',
            image: '/images/geriatric.jpg'
        },
        {
            id: 4,
            category: 'Sports',
            title: 'Post-Operative Rehabilitation',
            image: '/images/post-operative.jpg'
        },
        {
            id: 5,
            category: 'Specialist',
            title: 'Specialist Consultation',
            image: '/images/specialist.jpg'
        },
        {
            id: 6,
            category: 'FAQ',
            title: 'Expert Medical Guidance',
            image: '/images/faq-doctor.jpg'
        }
    ];

    return (
        <section className="services-section">
            <div className="services-container">
                <LazySection animation="fade-up">
                    <div className="services-header">
                        <h2>Specialized Treatments for <span className="italic">Your Recovery</span></h2>
                        <p>Evidence-based physiotherapy tailored to your unique needs, using state-of-the-art techniques.</p>
                    </div>
                </LazySection>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <LazySection key={service.id} animation="fade-up" delay={index * 100}>
                            <div className="service-card">
                                <div className="service-image">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        onError={(e) => e.target.src = `https://via.placeholder.com/400x500/1a5f5a/ffffff?text=${service.title.replace(/ /g, '+')}`}
                                    />
                                    <div className="service-overlay">
                                        <span className="service-category">{service.category}</span>
                                        <h3 className="service-title">{service.title}</h3>
                                    </div>
                                </div>
                            </div>
                        </LazySection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
