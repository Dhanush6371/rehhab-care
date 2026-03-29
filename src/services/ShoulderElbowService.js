import React from 'react';
import './ShoulderElbowService.css';
import LazySection from '../components/LazySection';

const ShoulderElbowService = () => {
    const symptoms = [
        "Difficulty lifting your arm above shoulder level",
        "Pain while reaching, throwing, or carrying",
        "Elbow pain from repetitive movements (typing, sports)",
        "Shoulder stiffness that worsens at night",
        "Reduced grip strength in the hand"
    ];

    const commonSigns = [
        { text: "Pain when raising the arm or reaching behind" },
        { text: "Shoulder stiffness — especially worse in the morning" },
        { text: "Sharp pain on the outer or inner side of the elbow" },
        { text: "Weakness while gripping or lifting objects" },
        { text: "Pain radiating from shoulder to arm or neck" },
        { text: "Tenderness around the joint on touch" }
    ];

    const treatmentApproach = [
        {
            title: "Manual joint mobilization to restore movement",
            description: ""
        },
        {
            title: "Rotator cuff and shoulder blade strengthening",
            description: ""
        },
        {
            title: "Elbow tendon rehab for tennis and golfer's elbow",
            description: ""
        },
        {
            title: "Postural correction to reduce joint stress",
            description: ""
        },
        {
            title: "Progressive resistance exercises for long-term recovery",
            description: ""
        },
        {
            title: "Ergonomics advice to prevent recurrence",
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
            description: "Range of motion testing, pain mapping, strength check"
        },
        {
            number: 2,
            title: "Custom Plan",
            description: "Targeted exercises for your specific shoulder or elbow condition"
        },
        {
            number: 3,
            title: "Home Sessions",
            description: "Hands-on physiotherapy at home, 30–60 mins per session"
        },
        {
            number: 4,
            title: "Progress Tracking",
            description: "Weekly range of motion and pain improvement check"
        },
        {
            number: 5,
            title: "Full Function",
            description: "Return to work, sports, and daily activities pain-free"
        }
    ];

    const testimonials = [
        {
            text: "I had frozen shoulder for almost a year. Couldn't lift my arm. After 8 sessions with Rehabb Care at home, I have nearly full movement back.",
            name: "Sunita Mehta",
            location: "Madhapur"
        },
        {
            text: "Tennis elbow had been troubling me for months. The physio knew exactly what to do — 4 sessions and I was back to work.",
            name: "Arun Krishnan",
            location: "Gachibowli"
        }
    ];

    return (
        <div className="shoulder-elbow-service">
            {/* Hero Section */}
            <section className="se-hero">
                <div className="se-hero-content">
                    <div className="se-badge">Home Physiotherapy · Hyderabad</div>
                    <h1 className="se-hero-title">
                        <span className="normal-text">Shoulder or Elbow Pain Limiting Your Movement?</span><br />
                        <span className="normal-text">Home Physiotherapy in Hyderabad</span>
                    </h1>
                    <p className="se-hero-subtitle">
                        Regain full movement with experienced physiotherapists — right at home.
                    </p>
                    <div className="se-hero-stats">
                        <div className="se-stat-item">
                            <span className="se-stat-icon">✓</span>
                            <span>1,00,000+ sessions completed</span>
                        </div>
                        <div className="se-stat-item">
                            <span className="se-stat-icon">✓</span>
                            <span>Trusted by 2,000+ families</span>
                        </div>
                        <div className="se-stat-item">
                            <span className="se-stat-icon">✓</span>
                            <span>Senior physiotherapists only</span>
                        </div>
                    </div>
                    <div className="se-hero-buttons">
                        <a
                            href="https://wa.me/919653148777?text=Hello!%20I%20would%20like%20to%20book%20a%20consultation%20for%20Shoulder%20%26%20Elbow%20Pain."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="se-btn-primary"
                        >
                            Book Free Consultation
                        </a>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="se-stats-bar">
                <div className="se-stats-container">
                    <div className="se-stat">
                        <h3>1,00,000+</h3>
                        <p>Sessions Completed</p>
                    </div>
                    <div className="se-stat">
                        <h3>2,000+</h3>
                        <p>Families Served</p>
                    </div>
                    <div className="se-stat">
                        <h3>4.8 / 5</h3>
                        <p>Average Rating</p>
                    </div>
                    <div className="se-stat">
                        <h3>8/10</h3>
                        <p>Regain Full Movement</p>
                    </div>
                </div>
            </section>

            {/* Symptoms Section */}
            <section className="se-symptoms">
                <div className="se-container">
                    <LazySection animation="fade-up">
                        <div className="se-symptoms-content">
                            <h2 className="se-section-title">Is this what you're going through?</h2>
                            <ul className="se-symptoms-list">
                                {symptoms.map((symptom, index) => (
                                    <li key={index}>
                                        <span className="se-check-icon">✓</span>
                                        {symptom}
                                    </li>
                                ))}
                            </ul>
                            <p className="se-reassurance">
                                <em>You're not alone. Most patients delay the right physiotherapy — and that makes recovery harder.</em>
                            </p>
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Info Box */}
            <section className="se-info-box">
                <LazySection animation="fade-up">
                    <div className="se-info-content">
                        <p>
                            <strong>With us, 8 out of 10 shoulder pain patients regain full movement within 2 weeks.</strong> Most elbow pain cases show significant improvement in just 4 sessions.
                        </p>
                    </div>
                </LazySection>
            </section>

            {/* Understanding Section */}
            <section className="se-understanding">
                <div className="se-container">
                    <LazySection animation="fade-up">
                        <p className="se-section-label">What is this condition</p>
                        <h2 className="se-section-heading">Understanding Shoulder & Elbow Pain</h2>
                        <p className="se-section-description">
                            Shoulder and elbow pain are increasingly common — especially among desk workers, athletes, and people above 40. Conditions like frozen shoulder, rotator cuff tears, tennis elbow, and golfer's elbow can severely restrict daily activities. The good news: most of these conditions respond very well to physiotherapy.
                        </p>
                    </LazySection>
                </div>
            </section>

            {/* Common Signs */}
            <section className="se-common-signs">
                <div className="se-container">
                    <LazySection animation="fade-up">
                        <p className="se-section-label">Symptoms</p>
                        <h2 className="se-section-heading">Common Signs to Watch For</h2>
                        <div className="se-signs-grid">
                            {commonSigns.map((sign, index) => (
                                <div key={index} className="se-sign-card">
                                    <span className="se-sign-icon">●</span>
                                    <p>{sign.text}</p>
                                </div>
                            ))}
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Treatment Approach */}
            <section className="se-treatment">
                <div className="se-container">
                    <LazySection animation="fade-up">
                        <p className="se-section-label">How we help</p>
                        <h2 className="se-section-heading">At Rehabb Care, we focus on real recovery — not just sessions</h2>
                        <div className="se-treatment-grid">
                            {treatmentApproach.map((item, index) => (
                                <div key={index} className="se-treatment-card">
                                    <p>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Why Trust */}
            <section className="se-why-trust">
                <div className="se-container">
                    <LazySection animation="fade-up">
                        <p className="se-section-label">Why choose us</p>
                        <h2 className="se-section-heading">Why families trust Rehabb Care</h2>
                        <div className="se-trust-list">
                            {whyTrust.map((item, index) => (
                                <div key={index} className="se-trust-item">
                                    <span className="se-trust-icon">✓</span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Recovery Journey */}
            <section className="se-recovery">
                <div className="se-container">
                    <LazySection animation="fade-up">
                        <p className="se-section-label">Treatment plan</p>
                        <h2 className="se-section-heading">Your recovery journey — step by step</h2>
                        <div className="se-recovery-steps">
                            {recoverySteps.map((step) => (
                                <div key={step.number} className="se-recovery-step">
                                    <div className="se-step-number">{step.number}</div>
                                    <div className="se-step-content">
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
            <section className="se-testimonials">
                <div className="se-container">
                    <LazySection animation="fade-up">
                        <h2 className="se-testimonials-heading">Real Patient Stories</h2>
                        <div className="se-testimonials-grid">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="se-testimonial-card">
                                    <p className="se-testimonial-text">"{testimonial.text}"</p>
                                    <p className="se-testimonial-author">
                                        <strong>{testimonial.name}</strong> · {testimonial.location}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Final Stats */}
            <section className="se-final-stats">
                <div className="se-final-stats-container">
                    <div className="se-final-stat">
                        <h3>1,00,000+</h3>
                        <p>Sessions Completed</p>
                    </div>
                    <div className="se-final-stat">
                        <h3>2,000+</h3>
                        <p>Happy Families</p>
                    </div>
                    <div className="se-final-stat">
                        <h3>4.8 ★</h3>
                        <p>Average Rating</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="se-cta">
                <div className="se-container">
                    <LazySection animation="fade-up">
                        <p className="se-cta-text">
                            Shoulder and elbow problems get worse when ignored. Start physiotherapy early — and recover fully, at home.
                        </p>
                        <div className="se-cta-buttons">
                            <a
                                href="https://wa.me/919653148777?text=Hello!%20I%20would%20like%20to%20book%20a%20consultation%20for%20Shoulder%20%26%20Elbow%20Pain."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="se-btn-primary"
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

export default ShoulderElbowService;
