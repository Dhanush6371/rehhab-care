import { useState, useRef, useEffect } from 'react';
import './Testimonials.css';
import LazySection from './LazySection';

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [playingVideo, setPlayingVideo] = useState(null);
    const carouselRef = useRef(null);

    const testimonials = [
        {
            name: 'Sarah Thompson',
            role: 'Marketing Director',
            image: '/images/team-1.jpg',
            avatar: '/images/team-1.jpg',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            text: 'This product has made my life so much easier. I can\'t imagine going back to the way things were before!',
            author: 'Sarah Thompson',
            type: 'video'
        },
        {
            name: 'Emily R.',
            role: 'Business Owner',
            image: '/images/team-2.jpg',
            avatar: '/images/team-2.jpg',
            text: 'This product has made my life so much easier. I can\'t imagine going back to the way things were before!',
            author: 'Emily R.',
            type: 'image'
        },
        {
            name: 'Michael T.',
            role: 'Software Engineer',
            image: '/images/team-3.jpg',
            avatar: '/images/team-3.jpg',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            text: 'I\'ve seen remarkable results since using this service. Highly recommended!',
            author: 'Michael T.',
            type: 'video'
        },
        {
            name: 'Sneha Kapoor',
            role: 'Verified Patient',
            image: '/images/team-4.jpg',
            avatar: '/images/team-4.jpg',
            text: 'Highly recommend Rehabb Care! They genuinely care about long-term wellness and provided me with the tools I needed to stay active.',
            author: 'Sneha Kapoor',
            type: 'image'
        },
        {
            name: 'Aditi Sharma',
            role: 'Corporate Professional',
            image: '/images/team-5.jpg',
            avatar: '/images/team-5.jpg',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            text: 'The staff are professional and caring. My back pain improved drastically in just a few sessions!',
            author: 'Aditi Sharma',
            type: 'video'
        },
        {
            name: 'Rajesh Kumar',
            role: 'Athlete',
            image: '/images/team-6.jpg',
            avatar: '/images/team-6.jpg',
            text: 'Amazing recovery program! Got back to my sport faster than expected.',
            author: 'Rajesh Kumar',
            type: 'image'
        }
    ];

    const itemsPerSlide = 3;
    const maxSlides = Math.ceil(testimonials.length / itemsPerSlide);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % maxSlides);
        setPlayingVideo(null);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
        setPlayingVideo(null);
    };

    const handlePlayVideo = (index) => {
        setPlayingVideo(index);
    };

    useEffect(() => {
        if (carouselRef.current) {
            const offset = currentSlide * 100;
            carouselRef.current.style.transform = `translateX(-${offset}%)`;
        }
    }, [currentSlide]);

    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <LazySection animation="fade-up">
                    <div className="testimonials-header">
                        <h2 className="testimonials-title">Testimonials</h2>
                        <span className="testimonials-badge">CLIENT REVIEWS</span>
                    </div>
                </LazySection>

                <div className="carousel-wrapper">
                    <button
                        className="carousel-nav carousel-nav-left"
                        onClick={prevSlide}
                        aria-label="Previous testimonials"
                    >
                        &#8249;
                    </button>

                    <div className="carousel-container">
                        <div className="carousel-track" ref={carouselRef}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="testimonial-card">
                                    <div className="testimonial-video-wrapper">
                                        {playingVideo === index && testimonial.type === 'video' ? (
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
                                                    onError={(e) => e.target.src = `https://via.placeholder.com/600x400/e8e8e8/666666?text=${testimonial.name.replace(/ /g, '+')}`}
                                                />
                                                <div className="video-overlay"></div>
                                                {testimonial.type === 'video' && (
                                                    <button
                                                        className="video-play-button"
                                                        onClick={() => handlePlayVideo(index)}
                                                        aria-label={`Play ${testimonial.name} testimonial`}
                                                    >
                                                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                                                            <circle cx="32" cy="32" r="32" fill="white" />
                                                            <path d="M24 20L44 32L24 44V20Z" fill="#1d1d1f" />
                                                        </svg>
                                                    </button>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    <div className="testimonial-content">
                                        <div className="testimonial-avatar-wrapper">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="testimonial-avatar"
                                                loading="lazy"
                                                onError={(e) => e.target.src = `https://via.placeholder.com/80x80/cccccc/666666?text=${testimonial.name.charAt(0)}`}
                                            />
                                            <div className="testimonial-author-info">
                                                <h3 className="testimonial-author-name">{testimonial.name}</h3>
                                                <p className="testimonial-author-role">{testimonial.role}</p>
                                            </div>
                                        </div>
                                        <blockquote className="testimonial-quote">
                                            &ldquo;{testimonial.text}&rdquo;
                                        </blockquote>
                                        <p className="testimonial-attribution">— {testimonial.author}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="carousel-nav carousel-nav-right"
                        onClick={nextSlide}
                        aria-label="Next testimonials"
                    >
                        &#8250;
                    </button>
                </div>

                <div className="carousel-dots">
                    {Array.from({ length: maxSlides }).map((_, idx) => (
                        <button
                            key={idx}
                            className={`carousel-dot ${idx === currentSlide ? 'active' : ''}`}
                            onClick={() => {
                                setCurrentSlide(idx);
                                setPlayingVideo(null);
                            }}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;