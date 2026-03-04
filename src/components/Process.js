import React from 'react';
import './Process.css';

const Process = () => {
    const steps = [
        {
            number: '01',
            title: 'Comprehensive Assessment',
            description: 'We begin with a thorough evaluation of your condition, medical history, and physical capabilities. Our experts use advanced diagnostic techniques to identify the root cause of your pain or mobility issues, ensuring a precise starting point for your recovery.',
            image: '/images/step-01.jpg',
            badge: 'Step 01',
            align: 'left'
        },
        {
            number: '02',
            title: 'Personalized Recovery Plan',
            description: 'Based on your assessment, we design a customized treatment plan tailored to your specific needs and goals. This comprehensive roadmap outlines the therapies, exercises, and milestones that will guide your journey to full recovery.',
            image: '/images/step-02.jpg',
            badge: 'Step 02',
            align: 'right'
        },
        {
            number: '03',
            title: 'Expert Treatment & Therapy',
            description: 'Experience advanced manual therapy and evidence-based exercises delivered by our certified specialists. We utilize state-of-the-art techniques such as dry needling, joint mobilization, and specialized strengthening to accelerate your healing and restore function.',
            image: '/images/step-03.jpg',
            badge: 'Step 03',
            align: 'left'
        },
        {
            number: '04',
            title: 'Progress Monitoring & Education',
            description: 'Recovery is an ongoing journey. We provide continuous evaluation to adjust your plan as you improve. Additionally, we empower you with home exercise programs and ergonomic education to prevent re-injury and maintain long-term wellness.',
            image: '/images/step-04.jpg',
            badge: 'Step 04',
            align: 'right'
        }
    ];

    return (
        <section className="process-section">
            <div className="process-header">
                <div className="process-badge">● OUR METHODOLOGY</div>
                <h2 className="process-title">
                    Our Proven <span className="italic">Recovery Process</span>
                </h2>
                <p className="process-subtitle">
                    Walk through the four steps we take to ensure you regain your strength and confidence with the highest level of care.
                </p>
            </div>

            <div className="process-steps">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`process-step ${step.align === 'right' ? 'reverse' : ''}`}
                    >
                        <div className="step-content">
                            <div className="step-number-bg">{step.number}</div>
                            <div className="step-text">
                                <h3 className="step-number">{step.number}</h3>
                                <h4 className="step-title">{step.title}</h4>
                                <p className="step-description">{step.description}</p>
                            </div>
                        </div>
                        <div className="step-image-wrapper">
                            <div className="step-badge">{step.badge}</div>
                            <img
                                src={step.image}
                                alt={step.title}
                                className="step-image"
                                width="600"
                                height="400"
                                onError={(e) => e.target.src = `https://via.placeholder.com/600x400/1a5f5a/ffffff?text=${step.title.replace(/ /g, '+')}`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Process;
