import React from 'react';
import './PostSurgeryService.css';
import LazySection from '../components/LazySection';

const PostSurgeryService = () => {
    const symptoms = [
        "Stiffness and swelling after surgery",
        "Fear of moving the operated area",
        "Scar tissue build-up limiting movement",
        "Muscle weakness from inactivity post-surgery",
        "Uncertainty about when and how to start moving"
    ];

    const commonSigns = [
        { text: "Pain, swelling, or bruising around the surgical area" },
        { text: "Limited range of motion in the affected joint or limb" },
        { text: "Muscle weakness and fatigue" },
        { text: "Scar tissue tightness" },
        { text: "Difficulty walking or bearing weight" },
        { text: "Anxiety about overexerting the operated area" }
    ];

    const treatmentApproach = [
        {
            title: "Early mobilization exercises to prevent stiffness",
            description: ""
        },
        {
            title: "Swelling and pain management techniques",
            description: ""
        },
        {
            title: "Gradual strength rebuilding of surrounding muscles",
            description: ""
        },
        {
            title: "Scar tissue management and soft tissue work",
            description: ""
        },
        {
            title: "Coordination with your surgeon's protocol",
            description: ""
        },
        {
            title: "Progressive return to full activity and independence",
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
            description: "Review surgery details, current pain levels, and mobility status"
        },
        {
            number: 2,
            title: "Protocol-Aligned Plan",
            description: "Rehab plan aligned with your surgeon's guidelines"
        },
        {
            number: 3,
            title: "Home Sessions",
            description: "Safe, guided exercises at home — 30–60 mins/session"
        },
        {
            number: 4,
            title: "Progress Tracking",
            description: "Weekly strength and mobility milestone tracking"
        },
        {
            number: 5,
            title: "Full Recovery",
            description: "Return to normal daily activities, work, and independence"
        }
    ];

    const testimonials = [
        {
            text: "After my knee replacement, I was worried about rehab. Rehabb Care's physiotherapist came home from day 3. My recovery has been much faster than expected.",
            name: "Suresh Babu",
            location: "Kukatpally"
        },
        {
            text: "Post-spine surgery recovery was scary. But the physio was very knowledgeable, explained everything, and my back has recovered well.",
            name: "Fatima Begum",
            location: "Tolichowki"
        }
    ];

    return (
        <div className="post-surgery-service">
            {/* Hero Section */}
            <section className="ps-hero">
                <div className="ps-hero-content">
                    <div className="ps-badge">Home Physiotherapy · Hyderabad</div>
                    <h1 className="ps-hero-title">
                        <span className="normal-text">Recovering from Surgery?</span><br />
                        <span className="normal-text">Get Expert Post-Surgery Physiotherapy at Home in Hyderabad</span>
                    </h1>
                    <p className="ps-hero-subtitle">
                        Faster recovery. Fewer complications. All from the comfort of your home.
                    </p>
                    <div className="ps-hero-stats">
                        <div className="ps-stat-item">
                            <span className="ps-stat-icon">✓</span>
                            <span>1,00,000+ sessions completed</span>
                        </div>
                        <div className="ps-stat-item">
                            <span className="ps-stat-icon">✓</span>
                            <span>Trusted by 2000+ families</span>
                        </div>
                        <div className="ps-stat-item">
                            <span className="ps-stat-icon">✓</span>
                            <span>Senior physiotherapists only</span>
                        </div>
                    </div>
                    <div className="ps-hero-buttons">
                        <button className="ps-btn-primary">Book Free Consultation</button>
                        <button className="ps-btn-secondary">Talk to a Physiotherapist</button>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="ps-stats-bar">
                <div className="ps-stats-container">
                    <div className="ps-stat">
                        <h3>1,00,000+</h3>
                        <p>Sessions Completed</p>
                    </div>
                    <div className="ps-stat">
                        <h3>2000+</h3>
                        <p>Families Served</p>
                    </div>
                    <div className="ps-stat">
                        <h3>4.8 / 5</h3>
                        <p>Average Rating</p>
                    </div>
                    <div className="ps-stat">
                        <h3>40%</h3>
                        <p>Faster Recovery</p>
                    </div>
                </div>
            </section>

            {/* Symptoms Section */}
            <section className="ps-symptoms">
                <div className="ps-container">
                    <LazySection animation="fade-up">
                        <div className="ps-symptoms-content">
                            <h2 className="ps-section-title">Is this what you're going through?</h2>
                            <ul className="ps-symptoms-list">
                                {symptoms.map((symptom, index) => (
                                    <li key={index}>
                                        <span className="ps-check-icon">✓</span>
                                        {symptom}
                                    </li>
                                ))}
                            </ul>
                            <p className="ps-reassurance">
                                <em>You're not alone. Most patients delay the right physiotherapy — and that makes recovery harder.</em>
                            </p>
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Info Box */}
            <section className="ps-info-box">
                <LazySection animation="fade-up">
                    <div className="ps-info-content">
                        <p>
                            <strong>Studies show that patients who begin physiotherapy within 48–72 hours of surgery recover up to 40% faster</strong> and experience significantly fewer post-operative complications than those who delay rehabilitation.
                        </p>
                    </div>
                </LazySection>
            </section>

            {/* Understanding Section */}
            <section className="ps-understanding">
                <div className="ps-container">
                    <LazySection animation="fade-up">
                        <p className="ps-section-label">What is this condition</p>
                        <h2 className="ps-section-heading">Understanding Post-Surgery Rehabilitation</h2>
                        <p className="ps-section-description">
                            Post-surgery rehabilitation is a structured physiotherapy program designed to help patients regain strength, mobility, and function after an operation. Whether it's a knee replacement, hip surgery, spinal surgery, or abdominal procedure — the right rehab plan dramatically speeds up recovery and reduces the risk of complications like stiffness, blood clots, and muscle wasting.
                        </p>
                    </LazySection>
                </div>
            </section>

            {/* Common Signs */}
            <section className="ps-common-signs">
                <div className="ps-container">
                    <LazySection animation="fade-up">
                        <p className="ps-section-label">Symptoms</p>
                        <h2 className="ps-section-heading">Common Signs to Watch For</h2>
                        <div className="ps-signs-grid">
                            {commonSigns.map((sign, index) => (
                                <div key={index} className="ps-sign-card">
                                    <span className="ps-sign-icon">●</span>
                                    <p>{sign.text}</p>
                                </div>
                            ))}
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Treatment Approach */}
            <section className="ps-treatment">
                <div className="ps-container">
                    <LazySection animation="fade-up">
                        <p className="ps-section-label">How we help</p>
                        <h2 className="ps-section-heading">At Rehabb Care, we focus on real recovery — not just sessions</h2>
                        <div className="ps-treatment-grid">
                            {treatmentApproach.map((item, index) => (
                                <div key={index} className="ps-treatment-card">
                                    <p>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Why Trust */}
            <section className="ps-why-trust">
                <div className="ps-container">
                    <LazySection animation="fade-up">
                        <p className="ps-section-label">Why choose us</p>
                        <h2 className="ps-section-heading">Why families trust Rehabb Care</h2>
                        <div className="ps-trust-list">
                            {whyTrust.map((item, index) => (
                                <div key={index} className="ps-trust-item">
                                    <span className="ps-trust-icon">✓</span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Recovery Journey */}
            <section className="ps-recovery">
                <div className="ps-container">
                    <LazySection animation="fade-up">
                        <p className="ps-section-label">Treatment plan</p>
                        <h2 className="ps-section-heading">Your recovery journey — step by step</h2>
                        <div className="ps-recovery-steps">
                            {recoverySteps.map((step) => (
                                <div key={step.number} className="ps-recovery-step">
                                    <div className="ps-step-number">{step.number}</div>
                                    <div className="ps-step-content">
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
            <section className="ps-testimonials">
                <div className="ps-container">
                    <LazySection animation="fade-up">
                        <h2 className="ps-testimonials-heading">Real Patient Stories</h2>
                        <div className="ps-testimonials-grid">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="ps-testimonial-card">
                                    <p className="ps-testimonial-text">"{testimonial.text}"</p>
                                    <p className="ps-testimonial-author">
                                        <strong>{testimonial.name}</strong> · {testimonial.location}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Final Stats */}
            <section className="ps-final-stats">
                <div className="ps-final-stats-container">
                    <div className="ps-final-stat">
                        <h3>1,00,000+</h3>
                        <p>Sessions Completed</p>
                    </div>
                    <div className="ps-final-stat">
                        <h3>2000+</h3>
                        <p>Happy Families</p>
                    </div>
                    <div className="ps-final-stat">
                        <h3>4.8 ★</h3>
                        <p>Average Rating</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="ps-cta">
                <div className="ps-container">
                    <LazySection animation="fade-up">
                        <p className="ps-cta-text">
                            Surgery is just the first step. The right rehabilitation determines how well — and how fast — you truly recover. Start early. Recover better.
                        </p>
                        <div className="ps-cta-buttons">
                            <button className="ps-btn-primary">Book Free Consultation</button>
                            <button className="ps-btn-secondary">Talk to a Physiotherapist</button>
                        </div>
                    </LazySection>
                </div>
            </section>
        </div>
    );
};

export default PostSurgeryService;
