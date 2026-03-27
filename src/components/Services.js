import './Services.css';
import LazySection from './LazySection';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            id: 1,
            category: 'Pain Management',
            title: 'Back & Neck Pain Physiotherapy',
            image: '/images/service-1.png',
            link: '/services/back-neck-pain'
        },
        {
            id: 2,
            category: 'Joint Care',
            title: 'Knee & Ankle Pain Physiotherapy',
            image: '/images/service-2.png',
            link: '/services/knee-ankle-pain'
        },
        {
            id: 3,
            category: 'Rehabilitation',
            title: 'Shoulder & Elbow Rehabilitation',
            image: '/images/service-3.png',
            link: '/services/shoulder-elbow-pain'
        },
        {
            id: 4,
            category: 'Geriatric Care',
            title: 'Geriatric Physiotherapy',
            image: '/images/service-4.png',
            link: '/services/geriatric-care'
        },
        {
            id: 5,
            category: 'Post-Surgery',
            title: 'Post-Surgery Rehabilitation',
            image: '/images/service-5.png',
            link: '/services/post-surgery'
        },
        {
            id: 6,
            category: 'Neuro Rehabilitation',
            title: 'Stroke, Paralysis & Neuro Recovery',
            image: '/images/service-6.png',
            link: '/services/post-operative'
        }
    ];

    return (
        <section className="services-section" id="services">
            <div className="services-container">
                <LazySection animation="fade-up">
                    <div className="services-header">
                        <p className="services-label">OUR SERVICES</p>
                        <h2>Comprehensive<br /><span className="highlight">Rehab</span> Programs</h2>
                        <p className="services-description">From sports injuries to post-surgical recovery, our expert team provides personalized care to help you regain mobility and live pain-free.</p>
                    </div>
                </LazySection>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <LazySection key={service.id} animation="fade-up" delay={index * 100}>
                            {service.link ? (
                                <Link to={service.link} className="service-card-link">
                                    <div className="service-card">
                                        <div className="service-image">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                loading="lazy"
                                                onError={(e) => e.target.src = `https://via.placeholder.com/400x500/1a5f5a/ffffff?text=${service.title.replace(/ /g, '+')}`}
                                            />
                                            <div className="service-overlay">
                                                <span className="service-category">{service.category}</span>
                                                <h3 className="service-title">{service.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ) : (
                                <div className="service-card">
                                    <div className="service-image">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            loading="lazy"
                                            onError={(e) => e.target.src = `https://via.placeholder.com/400x500/1a5f5a/ffffff?text=${service.title.replace(/ /g, '+')}`}
                                        />
                                        <div className="service-overlay">
                                            <span className="service-category">{service.category}</span>
                                            <h3 className="service-title">{service.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </LazySection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;