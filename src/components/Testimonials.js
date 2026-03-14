import { useState } from 'react';
import './Testimonials.css';
import LazySection from './LazySection';

const Testimonials = () => {
    const [playingVideo, setPlayingVideo] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: 'Emily Johnson',
            avatar: '/images/avatar1.jpg',
            text: 'Their service was outstanding. They ensured I was comfortable and informed every step of the way. The team was professional, caring, and went above and beyond to meet my needs. I highly recommend their services to anyone looking for quality care.',
            rating: 5,
            type: 'text'
        },
        {
            name: 'Michael Roberts',
            role: 'BUSINESS OWNER',
            image: '/images/avatar2.jpg',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            type: 'video'
        },
        {
            name: 'Olivia Harris',
            avatar: '/images/avatar3.jpg',
            text: 'They were attentive and thorough. Their professionalism and kindness made the entire process seamless. From the initial consultation to the follow-up care, everything was handled with expertise and compassion. I felt valued as a patient throughout my journey.',
            rating: 4,
            type: 'text'
        },
        {
            name: 'James Anderson',
            role: 'SOFTWARE ENGINEER',
            image: '/images/avatar1.jpg',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            type: 'video'
        },
        {
            name: 'Daniel Thompson',
            avatar: '/images/avatar2.jpg',
            text: 'Their team was exceptional. They listened to my concerns and made sure all my needs were addressed. The personalized approach and attention to detail really set them apart. I experienced significant improvement and couldn\'t be happier with the results.',
            rating: 5,
            type: 'text'
        },
        {
            name: 'Sarah Mitchell',
            avatar: '/images/avatar3.jpg',
            text: 'Outstanding experience from start to finish. The care and attention to detail were remarkable. Every staff member I encountered was knowledgeable, friendly, and dedicated to providing the best possible service. I would definitely return and recommend them to family and friends.',
            rating: 5,
            type: 'text'
        },
        {
            name: 'Robert Chen',
            avatar: '/images/avatar1.jpg',
            text: 'The level of care I received was truly exceptional. From my first appointment to my final session, the staff showed genuine concern for my wellbeing. Their modern approach combined with traditional care methods made all the difference in my recovery journey.',
            rating: 5,
            type: 'text'
        },
        {
            name: 'Jessica Williams',
            role: 'MARKETING DIRECTOR',
            image: '/images/avatar2.jpg',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            type: 'video'
        }
    ];

    const itemsPerPage = 6;

    const handlePlayVideo = (index) => {
        setPlayingVideo(index);
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) => Math.max(0, prev - itemsPerPage));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(testimonials.length - itemsPerPage, prev + itemsPerPage));
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`star ${i < rating ? 'filled' : 'empty'}`}>★</span>
        ));
    };

    const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <LazySection animation="fade-up">
                    <div className="testimonials-header">
                        <div className="testimonials-header-left">
                            <p className="testimonials-label">TESTIMONIALS</p>
                            <h2 className="testimonials-title">Stories of <span className="highlight">Recovery</span></h2>
                        </div>
                        <div className="testimonials-nav">
                            <button
                                className={`nav-arrow ${currentIndex === 0 ? 'disabled' : ''}`}
                                onClick={handlePrevious}
                                disabled={currentIndex === 0}
                                aria-label="Previous testimonial"
                            >
                                ←
                            </button>
                            <button
                                className={`nav-arrow ${currentIndex >= testimonials.length - itemsPerPage ? 'disabled' : ''}`}
                                onClick={handleNext}
                                disabled={currentIndex >= testimonials.length - itemsPerPage}
                                aria-label="Next testimonial"
                            >
                                →
                            </button>
                        </div>
                    </div>
                </LazySection>

                <div className="testimonials-grid">
                    {visibleTestimonials.map((testimonial, index) => {
                        const actualIndex = currentIndex + index;
                        return testimonial.type === 'video' ? (
                            <div key={actualIndex} className="testimonial-video-card">
                                <div className="testimonial-video-wrapper">
                                    {playingVideo === actualIndex ? (
                                        <iframe
                                            className="testimonial-video-iframe"
                                            src={testimonial.videoUrl}
                                            title={`${testimonial.name} testimonial`}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <div className="video-thumbnail-wrapper">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="testimonial-thumbnail"
                                                loading="lazy"
                                            />
                                            <div className="video-overlay"></div>
                                            <button
                                                className="video-play-button"
                                                onClick={() => handlePlayVideo(actualIndex)}
                                                aria-label={`Play ${testimonial.name} testimonial`}
                                            >
                                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                                                    <circle cx="32" cy="32" r="32" fill="white" fillOpacity="0.95" />
                                                    <path d="M26 20L42 32L26 44V20Z" fill="#1d1d1f" />
                                                </svg>
                                            </button>
                                            <div className="video-info">
                                                <div className="video-name">{testimonial.name}</div>
                                                <div className="video-role">{testimonial.role}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div key={actualIndex} className="testimonial-text-card">
                                <div className="testimonial-header">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="testimonial-avatar"
                                        loading="lazy"
                                    />
                                    <h3 className="testimonial-name">{testimonial.name}</h3>
                                </div>
                                <p className="testimonial-text">{testimonial.text}</p>
                                <div className="testimonial-stars">
                                    {renderStars(testimonial.rating)}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;