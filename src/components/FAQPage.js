import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FAQPage.css';

const FAQPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeSection, setActiveSection] = useState('all');
    const [openCard, setOpenCard] = useState(null);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);

        // Scroll to top button visibility
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleCard = (cardId) => {
        setOpenCard(openCard === cardId ? null : cardId);
    };

    const showSection = (key) => {
        setActiveSection(key);
        setSearchQuery('');
        setOpenCard(null);
    };

    const filterCards = (value) => {
        setSearchQuery(value);
        setActiveSection('all');
    };

    const faqData = {
        general: {
            eyebrow: '01',
            heading: 'What is home physiotherapy',
            questions: [
                {
                    id: 'q1',
                    num: 'Q1',
                    question: 'What is home physiotherapy?',
                    answer: 'Home physiotherapy is a service where a certified physiotherapist visits your home to provide treatment, exercises, and rehabilitation — the same quality of care as a clinic, without any travel. Ideal for post-surgery, elderly, or mobility-limited patients.',
                    tags: 'general what is home physiotherapy'
                },
                {
                    id: 'q2',
                    num: 'Q2',
                    question: 'How is it different from clinic physiotherapy?',
                    answer: 'Same qualified treatment — no travel, no waiting room, no infection risk. The physiotherapist tailors exercises to your actual home setup, often leading to better real-world recovery outcomes.',
                    tags: 'general difference clinic vs home'
                },
                {
                    id: 'q3',
                    num: 'Q3',
                    question: 'What conditions does home physiotherapy treat?',
                    answer: 'Knee and hip replacement recovery, stroke and neurological rehabilitation, back and neck pain, elderly mobility and balance issues. WhatsApp us if unsure whether your condition qualifies.',
                    tags: 'general conditions treats what'
                },
                {
                    id: 'q4',
                    num: 'Q4',
                    question: 'Is home physiotherapy as effective as a clinic?',
                    answer: 'Yes. Research shows comparable outcomes — and for post-surgery and elderly patients it can be more effective, as patients are more relaxed and consistent at home.',
                    tags: 'general effective as clinic'
                }
            ]
        },
        howworks: {
            eyebrow: '02',
            heading: 'How it works',
            questions: [
                {
                    id: 'q5',
                    num: 'Q5',
                    question: 'How do I book a session in Hyderabad?',
                    answer: 'Call or WhatsApp us with your area, condition, and preferred time. We confirm a physiotherapist and visit time, usually within a few hours. We cover all of Hyderabad.',
                    tags: 'howworks book session hyderabad'
                },
                {
                    id: 'q6',
                    num: 'Q6',
                    question: 'How quickly can someone visit my home?',
                    answer: 'In most cases within 24 hours of booking. For hospital discharge patients we can schedule within 48 hours of discharge. Contact us early for urgent cases.',
                    tags: 'howworks how quickly visit'
                },
                {
                    id: 'q7',
                    num: 'Q7',
                    question: 'What happens during the first visit?',
                    answer: 'Assessment: medical history review, movement and pain evaluation, personalised treatment plan — and initial treatment begins in the same session. Typically 45–60 minutes.',
                    tags: 'howworks first visit what happens'
                },
                {
                    id: 'q8',
                    num: 'Q8',
                    question: 'How many sessions will I need?',
                    answer: 'Post-surgery: 12–20 sessions over 4–6 weeks. Back pain: significant improvement in 6–10 sessions. Stroke: longer ongoing care. Your physio estimates after the first visit.',
                    tags: 'howworks how many sessions need'
                },
                {
                    id: 'q9',
                    num: 'Q9',
                    question: 'What equipment does the physiotherapist bring?',
                    answer: 'TENS machines, therabands, resistance tools, hot/cold packs, ultrasound therapy when needed. You just need a comfortable space — no special equipment required from your side.',
                    tags: 'howworks equipment bring home'
                }
            ]
        },
        pricing: {
            eyebrow: '03',
            heading: 'Pricing and payment',
            questions: [
                {
                    id: 'q10',
                    num: 'Q10',
                    question: 'How much does a session cost in Hyderabad?',
                    answer: '₹500–₹1,000 per visit depending on treatment type. Package pricing available for regular sessions — ask when you book.',
                    tags: 'pricing cost how much hyderabad'
                },
                {
                    id: 'q11',
                    num: 'Q11',
                    question: 'Is it covered by health insurance?',
                    answer: 'Some policies cover home physiotherapy when prescribed post-surgery or after a neurological event. Check with your insurer. We provide receipts and documentation for claims.',
                    tags: 'pricing insurance covered health'
                },
                {
                    id: 'q12',
                    num: 'Q12',
                    question: 'What payment methods do you accept?',
                    answer: 'UPI (GPay, PhonePe, Paytm), cash, and bank transfer. Payment after each session, or upfront for packages — whichever works for you.',
                    tags: 'pricing payment methods upi cash'
                }
            ]
        },
        conditions: {
            eyebrow: '04',
            heading: 'Condition-specific questions',
            questions: [
                {
                    id: 'q13',
                    num: 'Q13',
                    question: 'When should physio start after knee replacement?',
                    answer: 'Within 24–48 hours of surgery, and continued at home after discharge. Early start reduces stiffness and accelerates recovery. We schedule within 48 hours of hospital discharge.',
                    tags: 'conditions knee replacement surgery after'
                },
                {
                    id: 'q14',
                    num: 'Q14',
                    question: 'Can physiotherapy help with stroke recovery at home?',
                    answer: 'Yes. We restore movement, improve balance, reduce stiffness, and help patients relearn daily activities. Early, consistent physiotherapy significantly improves stroke recovery outcomes.',
                    tags: 'conditions stroke recovery neurological'
                },
                {
                    id: 'q15',
                    num: 'Q15',
                    question: 'Is it suitable for elderly patients?',
                    answer: 'Particularly well-suited. We improve strength, balance, and mobility — reducing fall risk and helping elderly patients stay independent. We work gently with patients with multiple conditions.',
                    tags: 'conditions elderly old age mobility'
                },
                {
                    id: 'q16',
                    num: 'Q16',
                    question: 'Can you treat back pain and neck pain at home?',
                    answer: 'Yes. Manual therapy, targeted exercises, posture correction, pain relief. Many patients improve in 4–6 sessions. Home visits also let us assess your workspace and posture — often the root cause.',
                    tags: 'conditions back pain neck pain spine'
                }
            ]
        },
        trust: {
            eyebrow: '05',
            heading: 'Trust and credentials',
            questions: [
                {
                    id: 'q17',
                    num: 'Q17',
                    question: 'Are your physiotherapists qualified and certified?',
                    answer: 'All hold BPT or MPT degrees from recognised Indian universities, registered with the state physiotherapy council. Many have prior hospital experience. We verify credentials before onboarding.',
                    tags: 'trust qualified certified physiotherapists'
                },
                {
                    id: 'q18',
                    num: 'Q18',
                    question: 'Will I have the same physiotherapist every visit?',
                    answer: 'We aim for continuity throughout your treatment. If unavailable, we notify you in advance and send a fully briefed replacement with complete knowledge of your plan.',
                    tags: 'trust same physiotherapist every session'
                },
                {
                    id: 'q19',
                    num: 'Q19',
                    question: 'Which areas of Hyderabad do you cover?',
                    answer: 'All of Hyderabad and Secunderabad — Banjara Hills, Jubilee Hills, Kondapur, Gachibowli, Hitech City, Secunderabad, Kukatpally, Uppal, LB Nagar, Mehdipatnam, Kompally, and more. WhatsApp your pin code if unsure.',
                    tags: 'trust areas cover hyderabad which'
                }
            ]
        }
    };

    const shouldShowQuestion = (question) => {
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        return question.tags.includes(query) ||
            question.question.toLowerCase().includes(query) ||
            question.answer.toLowerCase().includes(query);
    };

    const shouldShowSection = (sectionKey) => {
        if (activeSection === 'all') return true;
        return activeSection === sectionKey;
    };

    const hasVisibleQuestions = () => {
        return Object.values(faqData).some(section =>
            shouldShowSection(section) &&
            section.questions.some(q => shouldShowQuestion(q))
        );
    };

    return (
        <div className="faq-page">
            <div className="topbar">
                <div className="topbar-logo">Rehabb<span>Care</span></div>
                <div className="topbar-wa">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.847L0 24l6.335-1.502A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.655-.5-5.188-1.373l-.372-.22-3.762.893.937-3.667-.242-.384A9.95 9.95 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                    +91 98765 43210
                </div>
            </div>

            <div className="hero-strip">
                <h1>How can we help you?</h1>
                <p>Home physiotherapy across all of Hyderabad — answers to the most common questions below.</p>
                <div className="search-wrap">
                    <svg viewBox="0 0 16 16" fill="none">
                        <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.3" />
                        <path d="M10.5 10.5L13 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                    <input
                        placeholder="Search e.g. 'knee replacement' or 'pricing'..."
                        value={searchQuery}
                        onChange={(e) => filterCards(e.target.value)}
                    />
                </div>
                <div className="pill-row">
                    <div className={`pill ${activeSection === 'all' ? 'active' : ''}`} onClick={() => showSection('all')}>All questions</div>
                    <div className={`pill ${activeSection === 'general' ? 'active' : ''}`} onClick={() => showSection('general')}>What is home physio</div>
                    <div className={`pill ${activeSection === 'howworks' ? 'active' : ''}`} onClick={() => showSection('howworks')}>How it works</div>
                    <div className={`pill ${activeSection === 'pricing' ? 'active' : ''}`} onClick={() => showSection('pricing')}>Pricing</div>
                    <div className={`pill ${activeSection === 'conditions' ? 'active' : ''}`} onClick={() => showSection('conditions')}>Conditions</div>
                    <div className={`pill ${activeSection === 'trust' ? 'active' : ''}`} onClick={() => showSection('trust')}>Trust & credentials</div>
                </div>
            </div>

            <div className="content">
                <div className="stats-row">
                    <div className="stat"><div className="stat-num">₹500–₹1k</div><div className="stat-label">per session</div></div>
                    <div className="stat"><div className="stat-num">24 hrs</div><div className="stat-label">first visit</div></div>
                    <div className="stat"><div className="stat-num">All Hyd</div><div className="stat-label">coverage</div></div>
                </div>

                {searchQuery && !hasVisibleQuestions() ? (
                    <div className="no-results">
                        <div className="no-results-icon">🔍</div>
                        <h3>No results found</h3>
                        <p>We couldn't find any questions matching "{searchQuery}"</p>
                        <p>Try different keywords or contact us directly on WhatsApp</p>
                    </div>
                ) : (
                    Object.entries(faqData).map(([key, section]) => (
                        shouldShowSection(key) && (
                            <div key={key} className="section visible">
                                <div className="section-eyebrow">{section.eyebrow}</div>
                                <div className="section-heading">{section.heading}</div>
                                <div className="card-grid">
                                    {section.questions.map((q) => (
                                        shouldShowQuestion(q) && (
                                            <div
                                                key={q.id}
                                                className={`q-card ${openCard === q.id ? 'open' : ''}`}
                                                onClick={() => toggleCard(q.id)}
                                            >
                                                <div className="q-card-top">
                                                    <span className="q-num">{q.num}</span>
                                                    <span className="q-text">{q.question}</span>
                                                    <span className={`q-arrow ${openCard === q.id ? 'open' : ''}`}>›</span>
                                                </div>
                                                <div className={`q-answer ${openCard === q.id ? 'open' : ''}`}>
                                                    {q.answer}
                                                </div>
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                        )
                    ))
                )}

                <div className="bottom-cta">
                    <div className="bottom-cta-left">
                        <p>Didn't find your answer?</p>
                        <p>WhatsApp us — we reply within a few hours, every day.</p>
                    </div>
                    <button
                        className="bottom-cta-btn"
                        onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                    >
                        WhatsApp us now
                    </button>
                </div>

                <div className="quick-links-section">
                    <h3>Quick Links</h3>
                    <div className="quick-links-grid">
                        <button onClick={() => navigate('/')} className="quick-link-card">
                            <span className="quick-link-icon">🏠</span>
                            <span className="quick-link-text">Home</span>
                        </button>
                        <button onClick={() => navigate('/#services')} className="quick-link-card">
                            <span className="quick-link-icon">💼</span>
                            <span className="quick-link-text">Our Services</span>
                        </button>
                        <button onClick={() => navigate('/#team')} className="quick-link-card">
                            <span className="quick-link-icon">👥</span>
                            <span className="quick-link-text">Our Team</span>
                        </button>
                        <button onClick={() => {
                            navigate('/');
                            setTimeout(() => {
                                const appointmentSection = document.querySelector('.appointment-section');
                                if (appointmentSection) {
                                    appointmentSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }, 100);
                        }} className="quick-link-card">
                            <span className="quick-link-icon">📅</span>
                            <span className="quick-link-text">Book Appointment</span>
                        </button>
                    </div>
                </div>
            </div>

            <button
                className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Scroll to top"
            >
                ↑
            </button>
        </div>
    );
};

export default FAQPage;
