import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Team.css';
import LazySection from './LazySection';

const Team = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const carouselRef = useRef(null);
    const navigate = useNavigate();

    const teamMembers = [
        {
            name: 'Dr. Mark Davis',
            role: 'Sports Medicine Specialist',
            experience: '15+ YEARS EXP.',
            image: '/images/team-1.jpg',
            specializations: ['Sports Injury', 'Back Pain', 'Neck Pain', '+2'],
            id: 'mark-davis',
            education: 'MD, Sports Medicine',
            about: 'Dr. Mark Davis is a renowned sports medicine specialist with over 15 years of experience treating professional athletes and active individuals.',
            expertise: ['Sports Injury Rehabilitation', 'Back Pain Management', 'Neck Pain Treatment', 'Athletic Performance', 'Post-Surgery Recovery']
        },
        {
            name: 'Dr. Priya Sharma',
            role: 'Lead Physiotherapist',
            experience: '10+ YEARS EXP.',
            image: '/images/team-2.jpg',
            specializations: ['Back Pain', 'Neck Pain', 'Knee Pain/Surgery', '+3'],
            id: 'priya-sharma',
            education: 'MPTh, Orthopedics',
            about: 'Dr. Priya Sharma specializes in orthopedic physiotherapy with a focus on post-surgical rehabilitation and chronic pain management.',
            expertise: ['Back Pain Treatment', 'Neck Pain Relief', 'Knee Surgery Rehabilitation', 'Manual Therapy', 'Chronic Pain Management', 'Postural Correction']
        },
        {
            name: 'Dr. Leo Vance',
            role: 'Orthopedic Surgeon',
            experience: '18+ YEARS EXP.',
            image: '/images/team-3.jpg',
            specializations: ['Shoulder Pain', 'Back Pain', 'Knee Pain', '+1'],
            id: 'leo-vance',
            education: 'MS Orthopedics, FRCS',
            about: 'Dr. Leo Vance is an experienced orthopedic surgeon specializing in joint replacement and sports injury surgeries.',
            expertise: ['Shoulder Pain Treatment', 'Back Pain Surgery', 'Knee Replacement', 'Joint Reconstruction', 'Arthroscopic Surgery']
        },
        {
            name: 'Dr. Anya Sharma',
            role: 'Neurologist',
            experience: '12+ YEARS EXP.',
            image: '/images/team-4.jpg',
            specializations: ['Neck Pain', 'Back Pain', 'Headaches', '+2'],
            id: 'anya-sharma',
            education: 'MD Neurology, DM',
            about: 'Dr. Anya Sharma is a skilled neurologist focusing on neurological pain management and rehabilitation.',
            expertise: ['Neck Pain Treatment', 'Back Pain Management', 'Headache & Migraine', 'Nerve Pain', 'Neurological Rehabilitation']
        },
        {
            name: 'Dr. James Wilson',
            role: 'Senior Physical Therapist',
            experience: '20+ YEARS EXP.',
            image: '/images/team-5.jpg',
            specializations: ['Post-Surgery', 'Sports Injury', 'Back Pain', '+4'],
            id: 'james-wilson',
            education: 'DPT, CSCS',
            about: 'Dr. James Wilson brings two decades of experience in physical therapy, specializing in post-operative care and sports rehabilitation.',
            expertise: ['Post-Surgery Rehabilitation', 'Sports Injury Recovery', 'Back Pain Treatment', 'Strength Training', 'Mobility Enhancement', 'Geriatric Care', 'Balance Training']
        },
        {
            name: 'Dr. Sarah Miller',
            role: 'Pediatric Physiotherapist',
            experience: '8+ YEARS EXP.',
            image: '/images/team-6.jpg',
            specializations: ['Pediatric Care', 'Posture', 'Development', '+1'],
            id: 'sarah-miller',
            education: 'MPTh Pediatrics',
            about: 'Dr. Sarah Miller specializes in pediatric physiotherapy, helping children achieve optimal physical development and function.',
            expertise: ['Pediatric Care', 'Postural Correction', 'Developmental Delays', 'Cerebral Palsy', 'Sports Injuries in Children']
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

    const isAtStart = scrollPosition <= 0;
    const isAtEnd = carouselRef.current
        ? scrollPosition >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 10
        : false;

    return (
        <section className="team-section">
            <div className="team-container">
                <LazySection animation="fade-up">
                    <div className="team-header">
                        <div className="team-badge">● OUR SPECIALISTS</div>
                        <h2 className="team-title">Meet our dedicated and experienced team</h2>
                        <p className="team-subtitle">
                            Helping you regain strength, mobility, and confidence with personalized care from world-class experts.
                        </p>
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
            </div>
        </section>
    );
};

export default Team;
