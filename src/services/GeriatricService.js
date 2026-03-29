import React from 'react';
import './GeriatricService.css';
import LazySection from '../components/LazySection';

const GeriatricService = () => {
    const symptoms = [
        "Difficulty walking, getting up, or climbing stairs",
        "Fear of falling — which itself restricts movement further",
        "Joint pain from arthritis or age-related wear",
        "Muscle weakness causing dependence on others",
        "Recovery from a fall, fracture, or hospitalization"
    ];

    const commonSigns = [
        { text: "Difficulty rising from a chair or bed without support" },
        { text: "Unsteady gait or frequent stumbling" },
        { text: "Joint pain in knees, hips, or back" },
        { text: "Muscle stiffness or reduced flexibility" },
        { text: "Breathlessness with mild activity" },
        { text: "Reduced independence in daily activities" }
    ];

    const treatmentApproach = [
        {
            title: "Gentle, age-appropriate exercise programs",
            description: ""
        },
        {
            title: "Balance and fall prevention training",
            description: ""
        },
        {
            title: "Joint mobility and flexibility exercises",
            description: ""
        },
        {
            title: "Strength building for safer daily movement",
            description: ""
        },
        {
            title: "Post-hospitalization and post-fracture recovery",
            description: ""
        },
        {
            title: "Family education on supporting safe movement at home",
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
            description: "Evaluate strength, balance, gait, and daily activity limitations"
        },
        {
            number: 2,
            title: "Safe Plan",
            description: "Gentle exercises designed specifically for elderly needs"
        },
        {
            number: 3,
            title: "Home Sessions",
            description: "Regular at-home sessions — no travel stress for seniors"
        },
        {
            number: 4,
            title: "Progress Tracking",
            description: "Weekly monitoring of mobility and balance improvements"
        },
        {
            number: 5,
            title: "Independence",
            description: "Help seniors regain confidence and independence in daily life"
        }
    ];

    const testimonials = [
        {
            text: "My mother is 78 and had stopped walking confidently after a fall. Rehabb Care's physiotherapist was so patient and gentle. She is walking on her own again now.",
            name: "Ramya Nair",
            location: "Secunderabad"
        },
        {
            text: "We are from Old City and were struggling to find a good physio for my uncle. After starting sessions with Rehabb Care, we finally saw steady improvement. We are hopeful now.",
            name: "Sameer Ahmed",
            location: "Old City"
        }
    ];

    return (
        <div className="geriatric-service">
            {/* Hero Section */}
            <section className="gs-hero">
                <div className="gs-hero-content">
                    <div className="gs-badge">Home Physiotherapy · Hyderabad</div>
                    <h1 className="gs-hero-title">
                        <span className="normal-text">Expert Physiotherapy for Elderly Patients</span><br />
                        <span className="normal-text">Right at Home in Hyderabad</span>
                    </h1>
                    <p className="gs-hero-subtitle">
                        Gentle, safe, and effective home physiotherapy for seniors — by experienced physiotherapists.
                    </p>
                    <div className="gs-hero-stats">
                        <div className="gs-stat-item">
                            <span className="gs-stat-icon">✓</span>
                            <span>1,00,000+ sessions completed</span>
                        </div>
                        <div className="gs-stat-item">
                            <span className="gs-stat-icon">✓</span>
                            <span>Trusted by 2,000+ families</span>
                        </div>
                        <div className="gs-stat-item">
                            <span className="gs-stat-icon">✓</span>
                            <span>Senior physiotherapists only</span>
                        </div>
                    </div>
                    <div className="gs-hero-buttons">
                        <a
                            href="https://wa.me/919653148777?text=Hello!%20I%20would%20like%20to%20book%20a%20consultation%20for%20Geriatric%20Care."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gs-btn-primary"
                        >
                            Book Free Consultation
                        </a>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="gs-stats-bar">
                <div className="gs-stats-container">
                    <div className="gs-stat">
                        <h3>1,00,000+</h3>
                        <p>Sessions Completed</p>
                    </div>
                    <div className="gs-stat">
                        <h3>2,000+</h3>
                        <p>Families Served</p>
                    </div>
                    <div className="gs-stat">
                        <h3>4.8 / 5</h3>
                        <p>Average Rating</p>
                    </div>
                    <div className="gs-stat">
                        <h3>35%</h3>
                        <p>Fall Risk Reduction</p>
                    </div>
                </div>
            </section>

            {/* Symptoms Section */}
            <section className="gs-symptoms">
                <div className="gs-container">
                    <LazySection animation="fade-up">
                        <div className="gs-symptoms-content">
                            <h2 className="gs-section-title">Is this what you're going through?</h2>
                            <ul className="gs-symptoms-list">
                                {symptoms.map((symptom, index) => (
                                    <li key={index}>
                                        <span className="gs-check-icon">✓</span>
                                        {symptom}
                                    </li>
                                ))}
                            </ul>
                            <p className="gs-reassurance">
                                <em>You're not alone. Most patients delay the right physiotherapy — and that makes recovery harder.</em>
                            </p>
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Info Box */}
            <section className="gs-info-box">
                <LazySection animation="fade-up">
                    <div className="gs-info-content">
                        <p>
                            <strong>Falls are the #1 cause of injury-related hospitalisation in adults above 65.</strong> Regular physiotherapy reduces fall risk by up to 35% and significantly improves independence in daily activities.
                        </p>
                    </div>
                </LazySection>
            </section>

            {/* Understanding Section */}
            <section className="gs-understanding">
                <div className="gs-container">
                    <LazySection animation="fade-up">
                        <p className="gs-section-label">What is this condition</p>
                        <h2 className="gs-section-heading">Understanding Geriatric Care Needs</h2>
                        <p className="gs-section-description">
                            As we age, muscles weaken, joints stiffen, and balance deteriorates — making everyday tasks harder and fall risk higher. Geriatric physiotherapy is specifically designed for elderly patients, focusing on safe, gentle exercises to restore mobility, build strength, and improve independence. It is particularly effective after hospitalization, surgeries, or prolonged bed rest.
                        </p>
                    </LazySection>
                </div>
            </section>

            {/* Common Signs */}
            <section className="gs-common-signs">
                <div className="gs-container">
                    <LazySection animation="fade-up">
                        <p className="gs-section-label">Symptoms</p>
                        <h2 className="gs-section-heading">Common Signs to Watch For</h2>
                        <div className="gs-signs-grid">
                            {commonSigns.map((sign, index) => (
                                <div key={index} className="gs-sign-card">
                                    <span className="gs-sign-icon">●</span>
                                    <p>{sign.text}</p>
                                </div>
                            ))}
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Treatment Approach */}
            <section className="gs-treatment">
                <div className="gs-container">
                    <LazySection animation="fade-up">
                        <p className="gs-section-label">How we help</p>
                        <h2 className="gs-section-heading">At Rehabb Care, we focus on real recovery — not just sessions</h2>
                        <div className="gs-treatment-grid">
                            {treatmentApproach.map((item, index) => (
                                <div key={index} className="gs-treatment-card">
                                    <p>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Why Trust */}
            <section className="gs-why-trust">
                <div className="gs-container">
                    <LazySection animation="fade-up">
                        <p className="gs-section-label">Why choose us</p>
                        <h2 className="gs-section-heading">Why families trust Rehabb Care</h2>
                        <div className="gs-trust-list">
                            {whyTrust.map((item, index) => (
                                <div key={index} className="gs-trust-item">
                                    <span className="gs-trust-icon">✓</span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Recovery Journey */}
            <section className="gs-recovery">
                <div className="gs-container">
                    <LazySection animation="fade-up">
                        <p className="gs-section-label">Treatment plan</p>
                        <h2 className="gs-section-heading">Your recovery journey — step by step</h2>
                        <div className="gs-recovery-steps">
                            {recoverySteps.map((step) => (
                                <div key={step.number} className="gs-recovery-step">
                                    <div className="gs-step-number">{step.number}</div>
                                    <div className="gs-step-content">
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
            <section className="gs-testimonials">
                <div className="gs-container">
                    <LazySection animation="fade-up">
                        <h2 className="gs-testimonials-heading">Real Patient Stories</h2>
                        <div className="gs-testimonials-grid">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="gs-testimonial-card">
                                    <p className="gs-testimonial-text">"{testimonial.text}"</p>
                                    <p className="gs-testimonial-author">
                                        <strong>{testimonial.name}</strong> · {testimonial.location}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Final Stats */}
            <section className="gs-final-stats">
                <div className="gs-final-stats-container">
                    <div className="gs-final-stat">
                        <h3>1,00,000+</h3>
                        <p>Sessions Completed</p>
                    </div>
                    <div className="gs-final-stat">
                        <h3>2,000+</h3>
                        <p>Happy Families</p>
                    </div>
                    <div className="gs-final-stat">
                        <h3>4.8 ★</h3>
                        <p>Average Rating</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="gs-cta">
                <div className="gs-container">
                    <LazySection animation="fade-up">
                        <p className="gs-cta-text">
                            Your parents deserve to age with dignity and independence. Our geriatric physiotherapy brings expert care to their doorstep — gently and safely.
                        </p>
                        <div className="gs-cta-buttons">
                            <a
                                href="https://wa.me/919653148777?text=Hello!%20I%20would%20like%20to%20book%20a%20consultation%20for%20Geriatric%20Care."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="gs-btn-primary"
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

export default GeriatricService;
