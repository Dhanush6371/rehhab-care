import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: 'How long is each physiotherapy session?',
            answer: 'Each session typically lasts 45-60 minutes, allowing enough time for thorough assessment, treatment, and personalized exercise guidance.'
        },
        {
            question: 'Do I need a doctor\'s referral?',
            answer: 'No, you don\'t need a doctor\'s referral to start physiotherapy with us. However, some insurance plans may require one for coverage, so we recommend checking with your provider.'
        },
        {
            question: 'Are home visits available?',
            answer: 'Yes! We specialize in bringing physiotherapy directly to your home. Our therapists come equipped with all necessary tools and equipment for effective treatment in the comfort of your own space.'
        },
        {
            question: 'Can I book online consultations?',
            answer: 'Yes, we offer tele-physiotherapy for initial guidance, exercise reviews, and follow-ups when physical attendance isn\'t possible.'
        },
        {
            question: 'How qualified are your physiotherapists?',
            answer: 'All our physiotherapists are licensed, certified professionals with extensive experience. They undergo rigorous background checks and continuous training to ensure the highest standard of care.'
        },
        {
            question: 'What conditions do you treat?',
            answer: 'We treat a wide range of conditions including sports injuries, post-operative rehabilitation, chronic pain, mobility issues, neurological conditions, and geriatric care. Our specialists tailor treatment plans to your specific needs.'
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="faq-container">
                <div className="faq-header">
                    <h2 className="faq-title">
                        Frequently Asked <span className="italic">Questions</span>
                    </h2>
                    <p className="faq-subtitle">
                        Quick answers to common questions about our therapy process and services.
                    </p>
                </div>

                <div className="faq-content">
                    <div className="faq-image-wrapper">
                        <div className="faq-image-card">
                            <img
                                src="/images/female.png"
                                alt="Doctor with question"
                                className="faq-image"
                                onError={(e) => e.target.src = 'https://via.placeholder.com/400x350/d91e6e/ffffff?text=FAQ+Doctor'}
                            />
                            <p className="faq-tagline">"Restoring movement, enhancing life."</p>
                        </div>
                    </div>

                    <div className="faq-accordion">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span className="faq-question-text">{faq.question}</span>
                                    <span className="faq-icon">+</span>
                                </button>
                                <div className="faq-answer">
                                    <p className="faq-answer-text">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
