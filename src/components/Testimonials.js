import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: 'Sneha Kapoor',
            role: 'Verified Patient',
            image: '/images/image.png',
            text: 'Highly recommend Rehabb Care! They genuinely care about long-term wellness and provided me with the tools I needed to stay active.'
        },
        {
            name: 'Aditi Sharma',
            role: 'Corporate Professional',
            image: '/images/test1.png',
            text: 'The staff are professional and caring. My back pain improved drastically in just a few sessions! Truly elite-level physiotherapy.'
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <div className="testimonials-header">
                    <h2 className="testimonials-title">
                        What Our <span className="italic">Patients Say</span>
                    </h2>
                    <p className="testimonials-subtitle">
                        Read what our patients have to say about their journey to wellness with Rehabb Care.
                    </p>
                </div>

                <div className="testimonial-content">
                    <div className="testimonial-image-wrapper">
                        <div className="testimonial-image-card">
                            <img
                                src={currentTestimonial.image}
                                alt={currentTestimonial.name}
                                className="testimonial-image"
                                onError={(e) => e.target.src = `https://via.placeholder.com/400x450/9b8fc4/ffffff?text=${currentTestimonial.name.replace(/ /g, '+')}`}
                            />
                        </div>
                    </div>

                    <div className="testimonial-text-wrapper">
                        <div className="testimonial-info">
                            <h3 className="testimonial-name">{currentTestimonial.name}</h3>
                            <p className="testimonial-role">{currentTestimonial.role}</p>
                        </div>

                        <p className="testimonial-text">{currentTestimonial.text}</p>

                        <div className="testimonial-navigation">
                            <button
                                className="nav-btn prev-btn"
                                onClick={prevTestimonial}
                                aria-label="Previous testimonial"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>
                            <button
                                className="nav-btn next-btn"
                                onClick={nextTestimonial}
                                aria-label="Next testimonial"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </div>

                        <div className="testimonial-dots">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
