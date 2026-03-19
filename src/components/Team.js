import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Team.css';
import LazySection from './LazySection';

const Team = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const carouselRef = useRef(null);
    const navigate = useNavigate();

    const teamMembers = [
        {
            name: 'Dr. M. Mallikarjuna (PT)',
            role: 'Senior Orthopedic & Neuro Physiotherapist',
            experience: '5+ YEARS EXP.',
            image: '/images/team-1.jpg',
            specializations: ['Post-Surgery Rehab', 'Neuro Rehab', 'Back & Neck Pain', '+3'],
            id: 'mallikarjuna',
            education: 'MPT (Orthopedics) – Manipal University',
            about: 'Dr. M. Mallikarjuna is a skilled orthopedic and neuro physiotherapist with over 5 years of clinical experience in rehabilitation. He specializes in post-operative recovery, neurological rehabilitation, and pain management using a structured, evidence-based approach. With experience at Apollo Hospitals and advanced rehabilitation centers, he combines manual therapy with modern techniques to deliver effective, measurable recovery outcomes for patients.',
            expertise: ['Post-Surgery Rehabilitation', 'Stroke & Neuro Rehabilitation', 'Back & Neck Pain Management', 'Knee & Joint Pain', 'Paralysis & Mobility Recovery', 'Balance & Functional Training'],
            achievements: [
                'Successfully treated 3000+ patients across orthopedic and neuro conditions',
                'Former Consultant at UR Life (Apollo Hospitals initiative)',
                'Recognized as Employee of the Month – Wellness Co (March 2024)',
                'Awarded "Rehabilitation Excellence" – Wellness Co Annual Summit',
                'Experience in robotic-assisted and AI-supported rehabilitation'
            ],
            availability: 'Mon – Sat',
            languages: ['English', 'Telugu', 'Hindi']
        },
        {
            name: 'Nanda Kumar Raju Dandu (PT)',
            role: 'Senior Physiotherapist',
            experience: '10+ YEARS EXP.',
            image: '/images/team-2.jpg',
            specializations: ['Back & Neck Pain', 'Neuro Rehab', 'Joint Pain', '+3'],
            id: 'nanda-kumar',
            education: 'BPT – Mother Theresa Institute of Health Sciences',
            about: 'Nanda Kumar is an experienced physiotherapist with over a decade of clinical practice in hospital and rehabilitation settings. He specializes in managing musculoskeletal, neurological, and cardiopulmonary conditions through personalized treatment plans and hands-on therapy. He focuses on improving mobility, reducing pain, and guiding patients and families with structured home-based rehabilitation programs for long-term recovery.',
            expertise: ['Back & Neck Pain Management', 'Stroke & Neuro Rehabilitation', 'Joint Pain & Mobility Issues', 'Post-Surgery Recovery', 'Elderly Physiotherapy Care', 'Manual Therapy & Pain Relief'],
            achievements: [
                '10+ years of experience in hospital-based physiotherapy practice',
                'Senior Physiotherapist at Naveen Hospitals (2014–2025)',
                'Extensive experience in orthopedic, neurological, and cardiopulmonary conditions',
                'Expertise in manual therapy, therapeutic exercises, and rehabilitation planning',
                'Strong focus on patient education and home care programs'
            ],
            availability: 'Mon – Sat | 8:00 AM – 7:00 PM',
            languages: ['English', 'Telugu', 'Tamil', 'Hindi']
        },
        {
            name: 'Dr. Durreshahewar (PT)',
            role: 'Consultant Physiotherapist',
            experience: '5+ YEARS EXP.',
            image: '/images/team-3.jpg',
            specializations: ['ICU & Critical Care', 'Neuro Rehab', 'Cardiac Rehab', '+3'],
            id: 'durreshahewar',
            education: 'BPT – Navodaya College of Physiotherapy, Raichur',
            about: 'Dr. Durreshahewar is a consultant physiotherapist with strong experience across ICU care, neurological rehabilitation, and cardiopulmonary recovery. She has worked extensively with critical care patients, including stroke, spinal cord injury, and post-surgical recovery cases. Her approach combines advanced clinical techniques with structured rehabilitation plans to help patients regain mobility, strength, and independence safely.',
            expertise: ['Stroke & Neuro Rehabilitation', 'ICU & Critical Care Physiotherapy', 'Cardiac & Pulmonary Rehabilitation', 'Post-Surgery Recovery', 'Spinal Cord Injury Rehabilitation', 'Elderly & Home-Based Physiotherapy'],
            achievements: [
                'Consultant Physiotherapist under NCD Program at Gulbarga Institute of Medical Sciences',
                'Extensive ICU exposure including Respiratory ICU & Medical ICU',
                'Experience across neurology, neurosurgery, cardiology, and post-operative rehabilitation',
                'Certified in BLS (American Heart Association)',
                'Trained in Myofascial Release, Dry Needling, and Cupping Therapy'
            ],
            availability: 'Mon – Sat | 9:00 AM – 6:00 PM',
            languages: ['English', 'Hindi', 'Kannada', 'Urdu']
        }
    ];

    const scroll = (direction) => {
        const container = carouselRef.current;
        if (!container) return;

        const scrollAmount = 400;
        const newPosition = direction === 'left'
            ? container.scrollLeft - scrollAmount
            : container.scrollLeft + scrollAmount;

        container.scrollTo({
            left: newPosition,
            behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        if (carouselRef.current) {
            setScrollPosition(carouselRef.current.scrollLeft);
        }
    };

    // Prevent carousel from trapping vertical page scroll
    React.useEffect(() => {
        const container = carouselRef.current;
        if (!container) return;

        const onWheel = (e) => {
            // If the scroll is mostly vertical, let the page scroll instead
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault();
                // Manually scroll the page
                window.scrollBy(0, e.deltaY);
            }
        };

        container.addEventListener('wheel', onWheel, { passive: false });
        return () => container.removeEventListener('wheel', onWheel);
    }, []);

    const isAtStart = scrollPosition <= 0;
    const isAtEnd = carouselRef.current
        ? scrollPosition >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 10
        : false;

    return (
        <section className="team-section">
            <div className="team-container">
                <LazySection animation="fade-up">
                    <div className="team-header">
                        <div className="team-header-left">
                            <p className="team-label">OUR TEAM</p>
                            <h2 className="team-title">Meet Your <span className="highlight">Recovery</span> Partners</h2>
                        </div>
                        <div className="team-header-right">
                            <p className="team-subtitle">
                                Our team of certified physiotherapists brings decades of combined experience to help you achieve your recovery goals.
                            </p>
                        </div>
                    </div>
                </LazySection>

                <div className="team-carousel-wrapper">
                    <button
                        className={`carousel-arrow carousel-arrow-left ${isAtStart ? 'disabled' : ''}`}
                        onClick={() => scroll('left')}
                        disabled={isAtStart}
                        aria-label="Previous team members"
                    >
                        ‹
                    </button>

                    <div
                        className="team-carousel"
                        ref={carouselRef}
                        onScroll={handleScroll}
                    >
                        {teamMembers.map((member, index) => (
                            <LazySection key={index} animation="fade-up" delay={index * 100}>
                                <div className="team-card">
                                    <div className="team-image-wrapper">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="team-image"
                                            loading="lazy"
                                            onError={(e) => e.target.src = `https://via.placeholder.com/350x400/1a5f5a/ffffff?text=${member.name.replace(/ /g, '+')}`}
                                        />
                                    </div>
                                    <div className="team-info">
                                        <h3 className="team-name">{member.name}</h3>
                                        <p className="team-role">{member.role}</p>
                                        <p className="team-experience">{member.experience}</p>
                                        {member.specializations && (
                                            <div className="team-specializations">
                                                {member.specializations.map((spec, idx) => (
                                                    <span key={idx} className="specialization-tag">
                                                        {spec}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        <button
                                            className="know-more-btn"
                                            onClick={() => navigate(`/doctor/${member.id}`)}
                                        >
                                            Know More
                                            <span className="btn-arrow">→</span>
                                        </button>
                                    </div>
                                </div>
                            </LazySection>
                        ))}
                    </div>

                    <button
                        className={`carousel-arrow carousel-arrow-right ${isAtEnd ? 'disabled' : ''}`}
                        onClick={() => scroll('right')}
                        disabled={isAtEnd}
                        aria-label="Next team members"
                    >
                        ›
                    </button>
                </div>

                {/* Join Team Section */}
                <LazySection animation="fade-up" delay={200}>
                    <div className="join-team-section">
                        <div className="join-team-content">
                            <h3 className="join-team-title">Join Our Growing Team</h3>
                            <p className="join-team-text">Are you a passionate physiotherapist? We're always looking for talented professionals.</p>
                        </div>
                        <Link to="/partner">

                            <button className="apply-now-btn">Apply Now</button>
                        </Link>
                    </div>
                </LazySection>
            </div>
        </section>
    );
};

export default Team;
