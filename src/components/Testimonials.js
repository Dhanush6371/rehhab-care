import { useState } from 'react';
import './Testimonials.css';
import LazySection from './LazySection';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to get initials from name
    const getInitials = (name) => {
        const names = name.split(' ');
        if (names.length >= 2) {
            return names[0][0] + names[1][0];
        }
        return names[0][0];
    };

    // Function to get color based on index
    const getAvatarColor = (index) => {
        const colors = [
            '#103F5F', // Primary blue
            '#25D366', // WhatsApp green
            '#e91e63', // Pink
            '#9c27b0', // Purple
            '#ff9800', // Orange
            '#00bcd4', // Cyan
            '#4caf50', // Green
            '#f44336', // Red
            '#3f51b5', // Indigo
            '#009688', // Teal
            '#795548', // Brown
            '#607d8b'  // Blue grey
        ];
        return colors[index % colors.length];
    };

    const testimonials = [
        {
            name: 'Ratna Kalra',
            avatar: '/images/avatar1.jpg',
            text: 'I came walking from the hospital after suffering from transmylites. To gain strength I engaged physiotherapists but due to their carelessness I am on bed again. Then I came across Rehabb Care. They have sent very senior physiotherapist and we are on our way to progression in almost four weeks.',
            rating: 5,
            type: 'text'
        },
        {
            name: 'Koti Sunkula',
            avatar: '/images/avatar2.jpg',
            text: 'Rehabb Care helped me recover from a knee injury. The attention to detail and individualized care are unmatched. Highly recommend!',
            rating: 5,
            type: 'text'
        },
        {
            name: 'Narayan Rathi',
            avatar: '/images/avatar3.jpg',
            text: 'Very experienced and very cool minded Physiotherapist. He is very nice person and treatment is very good.',
            rating: 5,
            type: 'text'
        },
        {
            name: 'Najma Begum',
            avatar: '/images/avatar1.jpg',
            text: 'Good recovery for our father\'s Paralysis case.',
            rating: 5,
            type: 'text'
        },
        {
            name: 'Ravi Kumar',
            avatar: '/images/avatar2.jpg',
            text: 'We tried 2–3 physios before this but didn\'t see much improvement. With Rehabb Care, within 10–12 sessions itself we started noticing real change. The therapist was very consistent and explained everything clearly.',
            rating: 5,
            type: 'text'
        },
        {
            name: 'Shabana Khan',
            avatar: '/images/avatar3.jpg',
            text: 'My mother had a stroke and we were really worried about her recovery. The physio assigned by Rehabb Care was very patient and knew exactly what to do. She is now able to sit and walk with support.',
            rating: 5,
            type: 'text'
        },
        {
            name: 'Sandeep Reddy',
            avatar: '/images/avatar1.jpg',
            text: 'I had severe lower back pain due to long sitting hours. They didn\'t just treat the pain but also corrected my posture and habits. Feeling much better now.',
            rating: 5,
            type: 'text'
        },
        {
            name: 'Prakash Verma',
            avatar: '/images/avatar2.jpg',
            text: 'We took home physiotherapy for my father after knee surgery. Initially we were not sure, but the progress in 3 weeks gave us confidence. Good service overall.',
            rating: 4,
            type: 'text'
        },
        {
            name: 'Lakshmi Devi',
            avatar: '/images/avatar3.jpg',
            text: 'The physio was very calm and handled my grandmother very patiently. At this age, that matters more than anything.',
            rating: 5,
            type: 'text'
        },
        {
            name: 'Neha Agarwal',
            avatar: '/images/avatar1.jpg',
            text: 'I booked just for trial but continued because of the improvement I saw. The therapist also guided on what to do daily, which helped a lot.',
            rating: 5,
            type: 'text'
        },
        {
            name: 'Anitha Reddy, Nallagandla',
            avatar: '/images/avatar2.jpg',
            text: 'We stay in Nallagandla and took physiotherapy for my father who has age-related mobility issues. The physio was very gentle and didn\'t rush anything. Slowly, his walking and balance have improved. Happy with the support we are getting.',
            rating: 5,
            type: 'text'
        },
        {
            name: 'Sameer Ahmed, Old City',
            avatar: '/images/avatar3.jpg',
            text: 'We are from Old City and were struggling to find a good physio for my uncle\'s paralysis recovery. After starting sessions with Rehabb Care, we finally saw steady improvement. The therapist was very patient and knew how to handle such cases. We are hopeful now.',
            rating: 5,
            type: 'text'
        }
    ];

    const itemsPerPage = 6;

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
                        return (
                            <div key={actualIndex} className="testimonial-text-card">
                                <div className="testimonial-header">
                                    <div
                                        className="testimonial-avatar"
                                        style={{ backgroundColor: getAvatarColor(actualIndex) }}
                                    >
                                        {getInitials(testimonial.name)}
                                    </div>
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