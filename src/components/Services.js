import './Services.css';
import LazySection from './LazySection';

const Services = () => {
    const services = [
        {
            id: 1,
            category: 'Pain Management',
            title: 'Back & Neck Pain Physiotherapy',
            image: '/images/neck_pain.webp'
        },
        {
            id: 2,
            category: 'Joint Care',
            title: 'Knee & Ankle Pain Physiotherapy',
            image: '/images/knee.webp'
        },
        {
            id: 3,
            category: 'Rehabilitation',
            title: 'Shoulder & Elbow Rehabilitation',
            image: '/images/Shoulder_pain.webp'
        },
        {
            id: 4,
            category: 'Geriatric Care',
            title: 'Geriatric Physiotherapy',
            image: '/images/geriatric.jpg'
        },
        {
            id: 5,
            category: 'Post-Surgery',
            title: 'Post-Surgery Rehabilitation',
            image: '/images/post-operative.jpg'
        },
        {
            id: 6,
            category: 'Recovery',
            title: 'Post-Operative Rehabilitation',
            image: '/images/post-operative.jpg'
        }
    ];

    return (
        <section className="services-section">
            <div className="services-container">
                <LazySection animation="fade-up">
                    <div className="services-header">
                        <p className="services-label">OUR SERVICES</p>
                        <h2>Comprehensive <span className="highlight">Rehab</span><br />Programs</h2>
                        <p className="services-description">From sports injuries to post-surgical recovery, our expert team provides personalized care to help you regain mobility and live pain-free.</p>
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
                                        loading="lazy"
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