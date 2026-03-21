import React from 'react';
import './KneeAnkleService.css';
import LazySection from '../components/LazySection';

const KneeAnkleService = () => {
    const symptoms = [
        "Pain while climbing stairs or walking",
        "Swelling or stiffness around the knee or ankle",
        "Giving way or buckling of the knee",
        "Ankle pain after a sprain that never fully healed",
        "Fear of falling or losing balance"
    ];

    const commonSigns = [
        { text: "Pain during or after walking, running, or climbing stairs" },
        { text: "Swelling, warmth, or redness around the joint" },
        { text: "Stiffness after sitting for long periods" },
        { text: "Clicking or popping sounds in the joint" },
        { text: "Reduced ability to bear weight on the leg" },
        { text: "Chronic ankle instability after repeated sprains" }
    ];

    const treatmentApproach = [
        {
            title: "Joint mobilization to restore movement",
            description: ""
        },
        {
            title: "Strength training to support and protect the joint",
            description: ""
        },
        {
            title: "Balance and coordination exercises",
            description: ""
        },
        {
            title: "Gait correction for proper walking posture",
            description: ""
        },
        {
            title: "Swelling management and pain relief techniques",
            description: ""
        },
        {
            title: "Gradual return to daily activities and sports",
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
            description: "Evaluate joint stability, strength, and range of motion"
        },
        {
            number: 2,
            title: "Custom Plan",
            description: "Targeted strengthening + mobility exercises"
        },
        {
            number: 3,
            title: "Home Sessions",
            description: "Hands-on therapy at your home, 30–60 mins"
        },
        {
            number: 4,
            title: "Progress Tracking",
            description: "Monitor pain levels and strength improvement weekly"
        },
        {
            number: 5,
            title: "Full Recovery",
            description: "Return to walking, climbing stairs, and daily activities pain-free"
        }
    ];

    const testimonials = [
        {
            text: "I had knee pain for months and was told surgery might be needed. After physiotherapy with Rehabb Care, I avoided surgery completely. My knee feels strong now.",
            name: "Venkat Rao",
            location: "Jubilee Hills"
        }
    ];

    return (
        <div className="knee-ankle-service">
            {/* Hero Section */}
            <section className="ka-hero">
                <div className="ka-hero-content">
                    <div className="ka-badge">Home Physiotherapy · Hyderabad</div>
                    <h1 className="ka-hero-title">
                        <span className="normal-text">Knee or Ankle Pain Slowing You Down?</span><br />
                        <span className="normal-text">Expert Home Physiotherapy in Hyderabad</span>
                    </h1>
                    <p className="ka-hero-subtitle">
                        Walk freely again — with physiotherapists who come to your doorstep.
                    </p>
                    <div className="ka-hero-stats">
                        <div className="ka-stat-item">
                            <span className="ka-stat-icon">✓</span>
                            <span>1,00,000+ sessions completed</span>
                        </div>
                        <div className="ka-stat-item">
                            <span className="ka-stat-icon">✓</span>
                            <span>Trusted by 2000+ families</span>
                        </div>
                        <div className="ka-stat-item">
                            <span className="ka-stat-icon">✓</span>
                            <span>Senior physiotherapists only</span>
                        </div>
                    </div>
                    <div className="ka-hero-buttons">
                        <a
                            href="https://wa.me/919653148777?text=Hello!%20I%20would%20like%20to%20book%20a%20consultation%20for%20Knee%20%26%20Ankle%20Pain."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ka-btn-primary"
                        >
                            Book Free Consultation
                        </a>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="ka-stats-bar">
                <div className="ka-stats-container">
                    <div className="ka-stat">
                        <h3>1,00,000+</h3>
                        <p>Sessions Completed</p>
                    </div>
                    <div className="ka-stat">
                        <h3>2000+</h3>
                        <p>Families Served</p>
                    </div>
                    <div className="ka-stat">
                        <h3>4.8 / 5</h3>
                        <p>Average Rating</p>
                    </div>
                    <div className="ka-stat">
                        <h3>200+</h3>
                        <p>Patients Back on Their Feet</p>
                    </div>
                </div>
            </section>

            {/* Symptoms Section */}
            <section className="ka-symptoms">
                <div className="ka-container">
                    <LazySection animation="fade-up">
                        <div className="ka-symptoms-content">
                            <h2 className="ka-section-title">Is this what you're going through?</h2>
                            <ul className="ka-symptoms-list">
                                {symptoms.map((symptom, index) => (
                                    <li key={index}>
                                        <span className="ka-check-icon">✓</span>
                                        {symptom}
                                    </li>
                                ))}
                            </ul>
                            <p className="ka-reassurance">
                                <em>You're not alone. Most patients delay the right physiotherapy — and that makes recovery harder.</em>
                            </p>
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Info Box */}
            <section className="ka-info-box">
                <LazySection animation="fade-up">
                    <div className="ka-info-content">
                        <p>
                            <strong>8 out of 10 knee pain patients who start physiotherapy on time avoid surgery.</strong> Early intervention is the single biggest factor in full recovery.
                        </p>
                    </div>
                </LazySection>
            </section>

            {/* Understanding Section */}
            <section className="ka-understanding">
                <div className="ka-container">
                    <LazySection animation="fade-up">
                        <p className="ka-section-label">What is this condition</p>
                        <h2 className="ka-section-heading">Understanding Knee & Ankle Pain</h2>
                        <p className="ka-section-description">
                            Knee and ankle pain can result from sports injuries, arthritis, ligament damage, or wear and tear over time. Conditions like ACL tears, meniscus injuries, osteoarthritis, and plantar fasciitis are extremely common — but highly treatable with the right physiotherapy approach.
                        </p>
                    </LazySection>
                </div>
            </section>

            {/* Common Signs */}
            <section className="ka-common-signs">
                <div className="ka-container">
                    <LazySection animation="fade-up">
                        <p className="ka-section-label">Symptoms</p>
                        <h2 className="ka-section-heading">Common Signs to Watch For</h2>
                        <div className="ka-signs-grid">
                            {commonSigns.map((sign, index) => (
                                <div key={index} className="ka-sign-card">
                                    <span className="ka-sign-icon">●</span>
                                    <p>{sign.text}</p>
                                </div>
                            ))}
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Treatment Approach */}
            <section className="ka-treatment">
                <div className="ka-container">
                    <LazySection animation="fade-up">
                        <p className="ka-section-label">How we help</p>
                        <h2 className="ka-section-heading">At Rehabb Care, we focus on real recovery — not just sessions</h2>
                        <div className="ka-treatment-grid">
                            {treatmentApproach.map((item, index) => (
                                <div key={index} className="ka-treatment-card">
                                    <p>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Why Trust */}
            <section className="ka-why-trust">
                <div className="ka-container">
                    <LazySection animation="fade-up">
                        <p className="ka-section-label">Why choose us</p>
                        <h2 className="ka-section-heading">Why families trust Rehabb Care</h2>
                        <div className="ka-trust-list">
                            {whyTrust.map((item, index) => (
                                <div key={index} className="ka-trust-item">
                                    <span className="ka-trust-icon">✓</span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Recovery Journey */}
            <section className="ka-recovery">
                <div className="ka-container">
                    <LazySection animation="fade-up">
                        <p className="ka-section-label">Treatment plan</p>
                        <h2 className="ka-section-heading">Your recovery journey — step by step</h2>
                        <div className="ka-recovery-steps">
                            {recoverySteps.map((step) => (
                                <div key={step.number} className="ka-recovery-step">
                                    <div className="ka-step-number">{step.number}</div>
                                    <div className="ka-step-content">
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
            <section className="ka-testimonials">
                <div className="ka-container">
                    <LazySection animation="fade-up">
                        <h2 className="ka-testimonials-heading">Real Patient Stories</h2>
                        <div className="ka-testimonials-grid">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="ka-testimonial-card">
                                    <p className="ka-testimonial-text">"{testimonial.text}"</p>
                                    <p className="ka-testimonial-author">
                                        <strong>{testimonial.name}</strong> · {testimonial.location}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Final Stats */}
            <section className="ka-final-stats">
                <div className="ka-final-stats-container">
                    <div className="ka-final-stat">
                        <h3>1,00,000+</h3>
                        <p>Sessions Completed</p>
                    </div>
                    <div className="ka-final-stat">
                        <h3>2000+</h3>
                        <p>Happy Families</p>
                    </div>
                    <div className="ka-final-stat">
                        <h3>4.8 ★</h3>
                        <p>Average Rating</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="ka-cta">
                <div className="ka-container">
                    <LazySection animation="fade-up">
                        <p className="ka-cta-text">
                            Don't wait for the pain to get worse. The right physio at the right time can save your knee — and your quality of life.
                        </p>
                        <div className="ka-cta-buttons">
                            <a
                                href="https://wa.me/919653148777?text=Hello!%20I%20would%20like%20to%20book%20a%20consultation%20for%20Knee%20%26%20Ankle%20Pain."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ka-btn-primary"
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

export default KneeAnkleService;
