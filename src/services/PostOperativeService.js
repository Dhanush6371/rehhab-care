import React from 'react';
import './PostOperativeService.css';
import LazySection from '../components/LazySection';

const PostOperativeService = () => {
    const symptoms = [
        "Weakness or loss of movement in arms, legs or one side of the body",
        "Difficulty walking, balancing, or performing daily tasks",
        "Slurred speech or difficulty swallowing after a stroke",
        "Muscle stiffness, spasms, or abnormal tone due to neurological damage",
        "Fear of falling or loss of confidence in movement"
    ];

    const commonSigns = [
        { text: "Weakness or paralysis on one side of the body (hemiplegia)" },
        { text: "Loss of balance and difficulty walking independently" },
        { text: "Muscle spasticity — stiffness or involuntary tightening" },
        { text: "Difficulty with speech, swallowing, or coordination" },
        { text: "Drop foot or abnormal gait patterns after stroke" },
        { text: "Cognitive fatigue and reduced stamina during movement" }
    ];

    const treatmentApproach = [
        {
            title: "Neuroplasticity-based exercises to rewire brain-muscle connections",
            description: ""
        },
        {
            title: "Gait training and balance rehabilitation to restore safe walking",
            description: ""
        },
        {
            title: "Upper limb recovery — hand, arm and shoulder movement restoration",
            description: ""
        },
        {
            title: "Spasticity and muscle tone management",
            description: ""
        },
        {
            title: "Functional task training — dressing, bathing, cooking, and daily activities",
            description: ""
        },
        {
            title: "Speech and swallowing exercises in coordination with speech therapists",
            description: ""
        }
    ];

    const whyTrust = [
        "Only experienced physiotherapists (no freshers)",
        "Home visits — no travel, no stress",
        "Focus on outcomes, not number of sessions",
        "Honest guidance — we don't overpromise",
        "Deep specialisation in neuro and stroke rehabilitation"
    ];

    const recoverySteps = [
        {
            number: 1,
            title: "Neurological assessment",
            description: "Evaluate motor function, balance, speech, and cognition at home"
        },
        {
            number: 2,
            title: "Personalised neuro plan",
            description: "Programme built around your specific neurological condition and goals"
        },
        {
            number: 3,
            title: "Home sessions",
            description: "45–60 min neuro rehab sessions — in a familiar, comfortable environment"
        },
        {
            number: 4,
            title: "Progress tracking",
            description: "Weekly milestone reviews — movement, strength, balance, and function"
        },
        {
            number: 5,
            title: "Return to independence",
            description: "Gradual restoration of walking, daily tasks, and confident living"
        }
    ];

    const testimonials = [
        {
            text: "My father had a stroke and lost movement on his right side. Rehabb Care's physiotherapist visited us in Manikonda within 24 hours. After 3 months of sessions, he is walking with support and feeding himself again.",
            name: "Surekha Rao",
            location: "Manikonda"
        },
        {
            text: "My mother had a brain haemorrhage and we were told recovery would be very slow. Rehabb Care designed a proper plan and the consistency of home sessions made a real difference. Her speech has also improved.",
            name: "Ramesh Gupta",
            location: "Kondapur"
        }
    ];

    return (
        <div className="post-operative-service">
            {/* Hero Section */}
            <section className="po-hero">
                <div className="po-hero-content">
                    <div className="po-badge">Home Physiotherapy · Hyderabad</div>
                    <h1 className="po-hero-title">
                        <span className="highlight-text">NEURO REHABILITATION</span><br />
                        <span className="normal-text">Stroke, Paralysis & Neuro Recovery That Comes to You</span>
                    </h1>
                    <p className="po-hero-subtitle">
                        Personalised neuro rehabilitation for stroke, paralysis, and neurological conditions — at home, at your pace.
                    </p>
                    <div className="po-hero-stats">
                        <div className="po-stat-item">
                            <span className="po-stat-icon">✓</span>
                            <span>1,00,000+ sessions completed</span>
                        </div>
                        <div className="po-stat-item">
                            <span className="po-stat-icon">✓</span>
                            <span>Trusted by 2000+ families</span>
                        </div>
                        <div className="po-stat-item">
                            <span className="po-stat-icon">✓</span>
                            <span>Senior physiotherapists only</span>
                        </div>
                    </div>
                    <div className="po-hero-buttons">
                        <a
                            href="https://wa.me/919653148777?text=Hello!%20I%20would%20like%20to%20book%20a%20consultation%20for%20Neuro%20Rehabilitation."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="po-btn-primary"
                        >
                            Book Free Consultation
                        </a>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="po-stats-bar">
                <div className="po-stats-container">
                    <div className="po-stat">
                        <h3>1,00,000+</h3>
                        <p>Sessions Completed</p>
                    </div>
                    <div className="po-stat">
                        <h3>2000+</h3>
                        <p>Families Served</p>
                    </div>
                    <div className="po-stat">
                        <h3>4.8 / 5</h3>
                        <p>Average Rating</p>
                    </div>
                    <div className="po-stat">
                        <h3>85%</h3>
                        <p>Patients Regain Independence</p>
                    </div>
                </div>
            </section>

            {/* Symptoms Section */}
            <section className="po-symptoms">
                <div className="po-container">
                    <LazySection animation="fade-up">
                        <div className="po-symptoms-content">
                            <h2 className="po-section-title">Is this what you're going through?</h2>
                            <ul className="po-symptoms-list">
                                {symptoms.map((symptom, index) => (
                                    <li key={index}>
                                        <span className="po-check-icon">✓</span>
                                        {symptom}
                                    </li>
                                ))}
                            </ul>
                            <p className="po-reassurance">
                                <em>You're not alone. Most families don't know where to start after a stroke or neurological diagnosis — and early, expert rehabilitation makes the biggest difference.</em>
                            </p>
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Info Box */}
            <section className="po-info-box">
                <LazySection animation="fade-up">
                    <div className="po-info-content">
                        <p>
                            <strong>Early neuro rehabilitation after stroke can improve recovery outcomes by up to 40%</strong> — the brain's ability to rewire itself (neuroplasticity) is strongest in the first weeks after a neurological event.
                        </p>
                    </div>
                </LazySection>
            </section>

            {/* Understanding Section */}
            <section className="po-understanding">
                <div className="po-container">
                    <LazySection animation="fade-up">
                        <p className="po-section-label">What is this condition</p>
                        <h2 className="po-section-heading">Understanding Stroke, Paralysis & Neuro Rehabilitation</h2>
                        <p className="po-section-description">
                            Neuro rehabilitation is the specialised process of helping the brain and nervous system recover after a stroke, paralysis, or other neurological event. It works on the principle of neuroplasticity — the brain's remarkable ability to rewire and rebuild connections when consistently stimulated through targeted movement and activity. Our physiotherapists are trained in neuro-specific techniques and design programmes that progressively restore movement, function, and independence in familiar home surroundings.
                        </p>
                    </LazySection>
                </div>
            </section>

            {/* Common Signs */}
            <section className="po-common-signs">
                <div className="po-container">
                    <LazySection animation="fade-up">
                        <p className="po-section-label">Symptoms</p>
                        <h2 className="po-section-heading">Common Signs to Watch For</h2>
                        <div className="po-signs-grid">
                            {commonSigns.map((sign, index) => (
                                <div key={index} className="po-sign-card">
                                    <span className="po-sign-icon">●</span>
                                    <p>{sign.text}</p>
                                </div>
                            ))}
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Treatment Approach */}
            <section className="po-treatment">
                <div className="po-container">
                    <LazySection animation="fade-up">
                        <p className="po-section-label">How we help</p>
                        <h2 className="po-section-heading">At Rehabb Care, we focus on real neurological recovery — not just sessions</h2>
                        <div className="po-treatment-grid">
                            {treatmentApproach.map((item, index) => (
                                <div key={index} className="po-treatment-card">
                                    <p>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Why Trust */}
            <section className="po-why-trust">
                <div className="po-container">
                    <LazySection animation="fade-up">
                        <p className="po-section-label">Why choose us</p>
                        <h2 className="po-section-heading">Why families trust Rehabb Care</h2>
                        <div className="po-trust-list">
                            {whyTrust.map((item, index) => (
                                <div key={index} className="po-trust-item">
                                    <span className="po-trust-icon">✓</span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Recovery Journey */}
            <section className="po-recovery">
                <div className="po-container">
                    <LazySection animation="fade-up">
                        <p className="po-section-label">Treatment plan</p>
                        <h2 className="po-section-heading">Your neuro recovery journey — step by step</h2>
                        <div className="po-recovery-steps">
                            {recoverySteps.map((step) => (
                                <div key={step.number} className="po-recovery-step">
                                    <div className="po-step-number">{step.number}</div>
                                    <div className="po-step-content">
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
            <section className="po-testimonials">
                <div className="po-container">
                    <LazySection animation="fade-up">
                        <h2 className="po-testimonials-heading">Real Patient Stories</h2>
                        <div className="po-testimonials-grid">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="po-testimonial-card">
                                    <p className="po-testimonial-text">"{testimonial.text}"</p>
                                    <p className="po-testimonial-author">
                                        <strong>{testimonial.name}</strong> · {testimonial.location}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </LazySection>
                </div>
            </section>

            {/* Final Stats */}
            <section className="po-final-stats">
                <div className="po-final-stats-container">
                    <div className="po-final-stat">
                        <h3>1,00,000+</h3>
                        <p>Sessions Completed</p>
                    </div>
                    <div className="po-final-stat">
                        <h3>2000+</h3>
                        <p>Happy Families</p>
                    </div>
                    <div className="po-final-stat">
                        <h3>4.8 ★</h3>
                        <p>Average Rating</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="po-cta">
                <div className="po-container">
                    <LazySection animation="fade-up">
                        <p className="po-cta-text">
                            Stroke and neurological recovery is not the time to figure things out on your own. The first few months are critical — let our experienced neuro physiotherapists guide your loved one safely, at home.
                        </p>
                        <div className="po-cta-buttons">
                            <a
                                href="https://wa.me/919653148777?text=Hello!%20I%20would%20like%20to%20book%20a%20consultation%20for%20Neuro%20Rehabilitation."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="po-btn-primary"
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

export default PostOperativeService;
