import React from 'react';
import './PostOperativeService.css';
import LazySection from '../components/LazySection';

const PostOperativeService = () => {
    const symptoms = [
        "Pain and restricted movement after the operation",
        "Confusion about what exercises are safe to do",
        "Muscle atrophy from extended bed rest",
        "Post-operative swelling that isn't reducing",
        "Lack of professional guidance after discharge"
    ];

    const commonSigns = [
        { text: "Persistent pain or discomfort around the operated site" },
        { text: "Reduced joint or muscle function" },
        { text: "Swelling that worsens with activity" },
        { text: "Difficulty with basic tasks like walking, dressing, or bathing" },
        { text: "Scar tightness or numbness around the incision" },
        { text: "Low energy and poor stamina after surgery" }
    ];

    const treatmentApproach = [
        {
            title: "Surgeon-protocol aligned rehab from day one post-discharge",
            description: ""
        },
        {
            title: "Pain and swelling control techniques",
            description: ""
        },
        {
            title: "Safe early mobilization to prevent complications",
            description: ""
        },
        {
            title: "Muscle activation and progressive strength training",
            description: ""
        },
        {
            title: "Wound-site monitoring and scar management",
            description: ""
        },
        {
            title: "Nutrition and lifestyle guidance for faster healing",
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
            description: "Review discharge summary, surgery type, and current status"
        },
        {
            number: 2,
            title: "Surgeon-Aligned Plan",
            description: "Rehab plan built around your surgical protocol"
        },
        {
            number: 3,
            title: "Home Sessions",
            description: "30–60 min sessions at home — no strain of travel"
        },
        {
            number: 4,
            title: "Progress Tracking",
            description: "Weekly milestone reviews tied to recovery targets"
        },
        {
            number: 5,
            title: "Return to Life",
            description: "Gradual, safe return to work, activities, and independence"
        }
    ];

    const testimonials = [
        {
            text: "After my hip replacement, I was nervous about moving. Rehabb Care's physiotherapist made me feel safe, started small, and I've recovered much better than expected.",
            name: "Lakshmi Devi",
            location: "LB Nagar"
        },
        {
            text: "We stay in Nallagandla and took physiotherapy for my father after his surgery. The physio was very patient and gentle. His walking has improved slowly and steadily.",
            name: "Anitha Reddy",
            location: "Nallagandla"
        }
    ];

    return (
        <div className="post-operative-service">
            {/* Hero Section */}
            <section className="po-hero">
                <div className="po-hero-content">
                    <div className="po-badge">Home Physiotherapy · Hyderabad</div>
                    <h1 className="po-hero-title">
                        <span className="normal-text">Post-Operative Care That Comes to You</span><br />
                        <span className="normal-text">Expert Physiotherapy in Hyderabad</span>
                    </h1>
                    <p className="po-hero-subtitle">
                        Structured recovery programs designed around your surgery — at home, at your pace.
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
                            href="https://wa.me/919653148777?text=Hello!%20I%20would%20like%20to%20book%20a%20consultation%20for%20Post-Operative%20Care."
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
                        <h3>30%</h3>
                        <p>Reduced Readmission</p>
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
                                <em>You're not alone. Most patients delay the right physiotherapy — and that makes recovery harder.</em>
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
                            <strong>Early post-operative physiotherapy reduces hospital readmission rates by up to 30%</strong> and helps patients return to full function significantly faster than rest alone.
                        </p>
                    </div>
                </LazySection>
            </section>

            {/* Understanding Section */}
            <section className="po-understanding">
                <div className="po-container">
                    <LazySection animation="fade-up">
                        <p className="po-section-label">What is this condition</p>
                        <h2 className="po-section-heading">Understanding Post-Operative Rehabilitation</h2>
                        <p className="po-section-description">
                            Post-operative rehabilitation focuses on the critical recovery window immediately after surgery. Unlike general physiotherapy, it requires deep knowledge of surgical procedures, wound healing timelines, and weight-bearing protocols. Our physiotherapists work in alignment with your surgeon's discharge instructions to ensure a safe, structured, and effective recovery.
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
                        <h2 className="po-section-heading">At Rehabb Care, we focus on real recovery — not just sessions</h2>
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
                        <h2 className="po-section-heading">Your recovery journey — step by step</h2>
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
                            Post-operative recovery is not the time to figure things out on your own. Let our experienced physiotherapists guide you — safely, effectively, at home.
                        </p>
                        <div className="po-cta-buttons">
                            <a
                                href="https://wa.me/919653148777?text=Hello!%20I%20would%20like%20to%20book%20a%20consultation%20for%20Post-Operative%20Care."
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
