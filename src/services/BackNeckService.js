import React from 'react';
import './BackNeckService.css';
import LazySection from '../components/LazySection';

const BackNeckService = () => {
    const symptoms = [
        "Pain that returns every few days or weeks",
        "Difficulty sitting, standing, or sleeping comfortably",
        "Stiffness in the morning that takes hours to ease",
        "Dependence on painkillers to get through the day",
        "Fear that surgery may be the only option"
    ];

    const commonSigns = [
        { text: "Dull or sharp pain in the lower back or neck" },
        { text: "Pain radiating to the arms, shoulders, or legs (sciatica)" },
        { text: "Stiffness and reduced range of motion" },
        { text: "Muscle spasms or tightness" },
        { text: "Numbness or tingling in arms or legs" },
        { text: "Difficulty maintaining posture while sitting or standing" }
    ];

    const treatmentApproach = [
        {
            title: "Personalized treatment plan — not generic exercises",
            description: ""
        },
        {
            title: "Manual therapy + targeted strengthening exercises",
            description: ""
        },
        {
            title: "Posture correction and ergonomics guidance",
            description: ""
        },
        {
            title: "Progress tracking every week",
            description: ""
        },
        {
            title: "Home-based rehab — recover in comfort, recover faster",
            description: ""
        },
        {
            title: "Family guidance for long-term prevention",
            description: ""
        }
    ];

    const whyTrust = [
        "Only experienced physiotherapists (no freshers)",
        "Home visits — no travel, no stress",
        "Focus on outcomes, not number of sessions",
        "Honest guidance — we don't overpromise",
        "Special expertise in neuro & elderly care"
    ];

    const recoverySteps = [
        {
            number: 1,
            title: "Assessment",
            description: "Understand pain origin, posture, and mobility levels"
        },
        {
            number: 2,
            title: "Custom Plan",
            description: "Targeted exercises + manual therapy designed for you"
        },
        {
            number: 3,
            title: "Home Sessions",
            description: "30–60 min at-home physiotherapy sessions"
        },
        {
            number: 4,
            title: "Progress Tracking",
            description: "Weekly improvement check with goal adjustment"
        },
        {
            number: 5,
            title: "Pain-Free Living",
            description: "Focus on returning to daily activities without pain"
        }
    ];

    const testimonials = [
        {
            text: "I had severe lower back pain for 2 years. After just 6 sessions with Rehabb Care, I can sit and work comfortably again. I wish I had started earlier.",
            name: "Rajesh Kumar",
            location: "Bangara Hills"
        },
        {
            text: "The physiotherapist explained everything patiently. My neck pain from desk work has reduced significantly. Very professional service.",
            name: "Priya Sharma",
            location: "Kondapur"
        }
    ];

    return (
        <div className="back-neck-service">
            {/* Hero Section */}
            <section className="bn-hero">
                <div className="bn-hero-content">
                    <div className="bn-badge">Home Physiotherapy · Hyderabad</div>
                    <h1 className="bn-hero-title">
                        <span className="normal-text">Struggling with </span><span className="highlight-text">Back or Neck Pain?</span><br />
                        <span className="normal-text">Get Expert Physiotherapy at Home in Hyderabad</span>
                    </h1>
                    <p className="bn-hero-subtitle">
                        Recover faster with experienced physiotherapists who come to you — no<br />
                        hospital visits, no waiting.
                    </p>
                    <div className="bn-hero-stats">
                        <div className="bn-stat-item">
                            <span className="bn-stat-icon">✓</span>
                            <span>1,00,000+ sessions completed</span>
                        </div>
                        <div className="bn-stat-item">
                            <span className="bn-stat-icon">✓</span>
                            <span>Trusted by 2,000+ families</span>
                        </div>
                        <div className="bn-stat-item">
                            <span className="bn-stat-icon">✓</span>
                            <span>Senior physiotherapists only</span>
                        </div>
                    </div>
                    <div className="bn-hero-buttons">
                        <a
                            href="https://wa.me/919653148777?text=Hello!%20I%20would%20like%20to%20book%20a%20consultation%20for%20Back%20%26%20Neck%20Pain."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bn-btn-primary"
                        >
                            Book Free Consultation
                        </a>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bn-stats-bar">
                <div className="bn-stats-container">
                    <div className="bn-stat">
                        <h3>1,00,000+</h3>
                        <p>Sessions Completed</p>
                    </div>
                    <div className="bn-stat">
                        <h3>2,000+</h3>
                        <p>Families Served</p>
                    </div>
                    <div className="bn-stat">
                        <h3>4.8 / 5</h3>
                        <p>Average Rating</p>
                    </div>
                    <div className="bn-stat">
                        <h3>300+</h3>
                        <p>Back Pain Cases Treated</p>
                    </div>
                </div>
            </section>

            {/* Symptoms Section */}
            <section className="bn-symptoms">
                <div className="bn-container">
                    <LazySection animation="fade-up">
                        <div className="bn-symptoms-content">
                            <h2 className="bn-section-title">Is this what you're going through?</h2>
                            <ul className="bn-symptoms-list">
                                {symptoms.map((symptom, index) => (
                                    <li key={index}>
                                        <span className="bn-check-icon">✓</span>
                                        {symptom}
                                    </li>
                                ))}
                            </ul>
                            <p className="bn-reassurance">
                                <em>You're not alone. Most patients delay the right physiotherapy — and that makes recovery harder.</em>
                            </p>
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Info Box */}
            <section className="bn-info-box">
                <LazySection animation="fade-up">
                    <div className="bn-info-content">
                        <p>
                            <strong>Did you know?</strong> Back and neck pain are among the top 3 causes of disability worldwide. Yet over 70% of cases can be fully resolved with the right physiotherapy — without surgery or long-term medication.
                        </p>
                    </div>
                </LazySection>
            </section>

            {/* Understanding Section */}
            <section className="bn-understanding">
                <div className="bn-container">
                    <LazySection animation="fade-up">
                        <p className="bn-section-label">What is this condition</p>
                        <h2 className="bn-section-heading">Understanding Back & Neck Pain</h2>
                        <p className="bn-section-description">
                            Back and neck pain arise from muscle strain, poor posture, herniated discs, or nerve compression. Sitting at desks for long hours, lifting heavy loads incorrectly, or even sleeping in a bad position can trigger or worsen the condition. Left untreated, it can become chronic and affect your quality of life significantly.
                        </p>
                    </LazySection>
                </div>
            </section>

            {/* Common Signs */}
            <section className="bn-common-signs">
                <div className="bn-container">
                    <LazySection animation="fade-up">
                        <p className="bn-section-label">Symptoms</p>
                        <h2 className="bn-section-heading">Common Signs to Watch For</h2>
                        <div className="bn-signs-grid">
                            {commonSigns.map((sign, index) => (
                                <div key={index} className="bn-sign-card">
                                    <span className="bn-sign-icon">●</span>
                                    <p>{sign.text}</p>
                                </div>
                            ))}
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Treatment Approach */}
            <section className="bn-treatment">
                <div className="bn-container">
                    <LazySection animation="fade-up">
                        <p className="bn-section-label">How we help</p>
                        <h2 className="bn-section-heading">At Rehabb Care, we focus on real recovery — not just sessions</h2>
                        <div className="bn-treatment-grid">
                            {treatmentApproach.map((item, index) => (
                                <div key={index} className="bn-treatment-card">
                                    <p>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Why Trust */}
            <section className="bn-why-trust">
                <div className="bn-container">
                    <LazySection animation="fade-up">
                        <p className="bn-section-label">Why choose us</p>
                        <h2 className="bn-section-heading">Why families trust Rehabb Care</h2>
                        <div className="bn-trust-list">
                            {whyTrust.map((item, index) => (
                                <div key={index} className="bn-trust-item">
                                    <span className="bn-trust-icon">✓</span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Recovery Journey */}
            <section className="bn-recovery">
                <div className="bn-container">
                    <LazySection animation="fade-up">
                        <p className="bn-section-label">Treatment plan</p>
                        <h2 className="bn-section-heading">Your recovery journey — step by step</h2>
                        <div className="bn-recovery-steps">
                            {recoverySteps.map((step) => (
                                <div key={step.number} className="bn-recovery-step">
                                    <div className="bn-step-number">{step.number}</div>
                                    <div className="bn-step-content">
                                        <h3>{step.title}</h3>
                                        <p>{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bn-testimonials">
                <div className="bn-container">
                    <LazySection animation="fade-up">
                        <h2 className="bn-testimonials-heading">Real Patient Stories</h2>
                        <div className="bn-testimonials-grid">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="bn-testimonial-card">
                                    <p className="bn-testimonial-text">"{testimonial.text}"</p>
                                    <p className="bn-testimonial-author">
                                        <strong>{testimonial.name}</strong> · {testimonial.location}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Final Stats */}
            <section className="bn-final-stats">
                <div className="bn-final-stats-container">
                    <div className="bn-final-stat">
                        <h3>1,00,000+</h3>
                        <p>Sessions Completed</p>
                    </div>
                    <div className="bn-final-stat">
                        <h3>2,000+</h3>
                        <p>Happy Families</p>
                    </div>
                    <div className="bn-final-stat">
                        <h3>4.8 ★</h3>
                        <p>Average Rating</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bn-cta">
                <div className="bn-container">
                    <LazySection animation="fade-up">
                        <p className="bn-cta-text">
                            Don't let back or neck pain control your life. The sooner you start the right<br />
                            physiotherapy, the faster you recover.
                        </p>
                        <div className="bn-cta-buttons">
                            <a
                                href="https://wa.me/919653148777?text=Hello!%20I%20would%20like%20to%20book%20a%20consultation%20for%20Back%20%26%20Neck%20Pain."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bn-btn-primary"
                            >
                                Book Free Consultation
                            </a>
                        </div>
                    </LazySection>
                </div>
            </section>
        </div>
    );
};

export default BackNeckService;
