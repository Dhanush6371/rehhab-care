import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DoctorProfile.css';
import LazySection from './LazySection';

const DoctorProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const doctors = {
        'mallikarjuna': {
            name: 'Dr. M. Mallikarjuna (PT)',
            role: 'Senior Orthopedic & Neuro Physiotherapist',
            experience: '5+ YEARS EXP.',
            image: '/images/team-1.jpg',
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
        'nanda-kumar': {
            name: 'Nanda Kumar Raju Dandu (PT)',
            role: 'Senior Physiotherapist',
            experience: '10+ YEARS EXP.',
            image: '/images/team-2.jpg',
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
        'durreshahewar': {
            name: 'Dr. Durreshahewar (PT)',
            role: 'Consultant Physiotherapist',
            experience: '5+ YEARS EXP.',
            image: '/images/team-3.jpg',
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
    };

    const doctor = doctors[id];

    if (!doctor) {
        return (
            <div className="doctor-not-found">
                <h2>Doctor not found</h2>
                <button onClick={() => navigate('/')}>Back to Home</button>
            </div>
        );
    }

    return (
        <div className="doctor-profile-page">
            <button className="back-btn" onClick={() => navigate('/')}>
                ← Back to Home
            </button>

            <div className="doctor-profile-container">
                <LazySection animation="fade-up">
                    <div className="doctor-hero">
                        <div className="doctor-hero-image">
                            <img src={doctor.image} alt={doctor.name} />
                            <div className="doctor-badge">{doctor.experience}</div>
                        </div>
                        <div className="doctor-hero-info">
                            <h1 className="doctor-name">{doctor.name}</h1>
                            <p className="doctor-role">{doctor.role}</p>
                            <p className="doctor-education">{doctor.education}</p>
                            <div className="doctor-meta">
                                <div className="meta-item">
                                    <span className="meta-icon">🕒</span>
                                    <span>{doctor.availability}</span>
                                </div>
                                <div className="meta-item">
                                    <span className="meta-icon">🌐</span>
                                    <span>{doctor.languages.join(', ')}</span>
                                </div>
                            </div>
                            <button className="appointment-btn">
                                Book Appointment
                                <span className="btn-arrow">→</span>
                            </button>
                        </div>
                    </div>
                </LazySection>

                <LazySection animation="fade-up" delay={100}>
                    <div className="doctor-section">
                        <h2 className="section-title">About</h2>
                        <p className="doctor-about">{doctor.about}</p>
                    </div>
                </LazySection>

                <LazySection animation="fade-up" delay={200}>
                    <div className="doctor-section">
                        <h2 className="section-title">Areas of Expertise</h2>
                        <div className="expertise-grid">
                            {doctor.expertise.map((item, index) => (
                                <div key={index} className="expertise-card">
                                    <span className="expertise-icon">✓</span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </LazySection>

                <LazySection animation="fade-up" delay={300}>
                    <div className="doctor-section">
                        <h2 className="section-title">Achievements & Recognition</h2>
                        <ul className="achievements-list">
                            {doctor.achievements.map((achievement, index) => (
                                <li key={index} className="achievement-item">
                                    <span className="achievement-bullet">●</span>
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </div>
                </LazySection>

                <LazySection animation="fade-up" delay={400}>
                    <div className="doctor-cta">
                        <h2>Ready to start your recovery journey?</h2>
                        <p>Book a consultation with {doctor.name.split(' ')[1]} today</p>
                        <button className="cta-btn">
                            Schedule Consultation
                            <span className="btn-arrow">→</span>
                        </button>
                    </div>
                </LazySection>
            </div>
        </div>
    );
};

export default DoctorProfile;
