import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DoctorProfile.css';
import LazySection from './LazySection';

const DoctorProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const doctors = {
        'mark-davis': {
            name: 'Dr. Mark Davis',
            role: 'Sports Medicine Specialist',
            experience: '15+ YEARS EXP.',
            image: '/images/team-1.jpg',
            education: 'MD, Sports Medicine',
            about: 'Dr. Mark Davis is a renowned sports medicine specialist with over 15 years of experience treating professional athletes and active individuals. His approach combines cutting-edge medical techniques with personalized rehabilitation programs.',
            expertise: ['Sports Injury Rehabilitation', 'Back Pain Management', 'Neck Pain Treatment', 'Athletic Performance', 'Post-Surgery Recovery'],
            achievements: [
                'Team physician for professional sports teams',
                'Published 20+ research papers in sports medicine',
                'Certified in Advanced Sports Rehabilitation',
                'Speaker at international medical conferences'
            ],
            availability: 'Mon - Fri: 9:00 AM - 6:00 PM',
            languages: ['English', 'Spanish']
        },
        'priya-sharma': {
            name: 'Dr. Priya Sharma',
            role: 'Lead Physiotherapist',
            experience: '10+ YEARS EXP.',
            image: '/images/team-2.jpg',
            education: 'MPTh, Orthopedics',
            about: 'Dr. Priya Sharma specializes in orthopedic physiotherapy with a focus on post-surgical rehabilitation and chronic pain management. She believes in holistic treatment approaches that address both physical and lifestyle factors.',
            expertise: ['Back Pain Treatment', 'Neck Pain Relief', 'Knee Surgery Rehabilitation', 'Manual Therapy', 'Chronic Pain Management', 'Postural Correction'],
            achievements: [
                'Lead physiotherapist at premier rehabilitation center',
                'Specialized training in manual therapy techniques',
                'Helped 500+ patients recover from chronic pain',
                'Expert in post-operative care protocols'
            ],
            availability: 'Mon - Sat: 10:00 AM - 7:00 PM',
            languages: ['English', 'Hindi']
        },
        'leo-vance': {
            name: 'Dr. Leo Vance',
            role: 'Orthopedic Surgeon',
            experience: '18+ YEARS EXP.',
            image: '/images/team-3.jpg',
            education: 'MS Orthopedics, FRCS',
            about: 'Dr. Leo Vance is an experienced orthopedic surgeon specializing in joint replacement and sports injury surgeries. With nearly two decades of surgical excellence, he has performed thousands of successful procedures.',
            expertise: ['Shoulder Pain Treatment', 'Back Pain Surgery', 'Knee Replacement', 'Joint Reconstruction', 'Arthroscopic Surgery'],
            achievements: [
                'Performed 2000+ successful joint surgeries',
                'Fellowship in Advanced Arthroscopic Surgery',
                'Pioneered minimally invasive techniques',
                'Recognized as top orthopedic surgeon'
            ],
            availability: 'Tue - Sat: 11:00 AM - 5:00 PM',
            languages: ['English', 'French']
        },
        'anya-sharma': {
            name: 'Dr. Anya Sharma',
            role: 'Neurologist',
            experience: '12+ YEARS EXP.',
            image: '/images/team-4.jpg',
            education: 'MD Neurology, DM',
            about: 'Dr. Anya Sharma is a skilled neurologist focusing on neurological pain management and rehabilitation. Her expertise in treating complex neurological conditions has helped countless patients regain quality of life.',
            expertise: ['Neck Pain Treatment', 'Back Pain Management', 'Headache & Migraine', 'Nerve Pain', 'Neurological Rehabilitation'],
            achievements: [
                'Specialist in chronic pain neurology',
                'Advanced certification in pain management',
                'Research contributor in neuroscience journals',
                'Expert in non-invasive treatment methods'
            ],
            availability: 'Mon - Fri: 9:00 AM - 5:00 PM',
            languages: ['English', 'Hindi', 'Marathi']
        },
        'james-wilson': {
            name: 'Dr. James Wilson',
            role: 'Senior Physical Therapist',
            experience: '20+ YEARS EXP.',
            image: '/images/team-5.jpg',
            education: 'DPT, CSCS',
            about: 'Dr. James Wilson brings two decades of experience in physical therapy, specializing in post-operative care and sports rehabilitation. His patient-centered approach has earned him recognition as one of the leading therapists in the field.',
            expertise: ['Post-Surgery Rehabilitation', 'Sports Injury Recovery', 'Back Pain Treatment', 'Strength Training', 'Mobility Enhancement', 'Geriatric Care', 'Balance Training'],
            achievements: [
                '20 years of clinical excellence',
                'Certified Strength & Conditioning Specialist',
                'Trained Olympic athletes',
                'Developed innovative rehabilitation protocols'
            ],
            availability: 'Mon - Sat: 8:00 AM - 6:00 PM',
            languages: ['English']
        },
        'sarah-miller': {
            name: 'Dr. Sarah Miller',
            role: 'Pediatric Physiotherapist',
            experience: '8+ YEARS EXP.',
            image: '/images/team-6.jpg',
            education: 'MPTh Pediatrics',
            about: 'Dr. Sarah Miller specializes in pediatric physiotherapy, helping children achieve optimal physical development and function. Her gentle approach and expertise make her a favorite among young patients and their families.',
            expertise: ['Pediatric Care', 'Postural Correction', 'Developmental Delays', 'Cerebral Palsy', 'Sports Injuries in Children'],
            achievements: [
                'Specialist in pediatric developmental therapy',
                'Helped 300+ children with special needs',
                'Certified in pediatric manual therapy',
                'Advocate for early intervention programs'
            ],
            availability: 'Mon - Fri: 10:00 AM - 6:00 PM',
            languages: ['English', 'German']
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
