import React from 'react';
import './Stats.css';
import LazySection from './LazySection';

const Stats = () => {
    return (
        <section className="stats-section">
            {/* Heading */}
            <LazySection animation="fade-up" delay={0}>
                <h2 className="stats-heading">You're not alone!</h2>
            </LazySection>

            {/* Combined Stats and Form Container */}
            <LazySection animation="fade-up" delay={100}>
                <div className="stats-combined-container">
                    {/* Stats Cards */}
                    <div className="stats-cards-row">
                        <div className="stat-card-item">
                            <h3>100+</h3>
                            <p>TREATMENTS OFFERED</p>
                        </div>
                        <div className="stat-card-item">
                            <h3>50+</h3>
                            <p>CERTIFIED THERAPISTS</p>
                        </div>
                        <div className="stat-card-item">
                            <h3>2000+</h3>
                            <p>SATISFIED CLIENTS</p>
                        </div>
                        <div className="stat-card-item">
                            <h3>300+</h3>
                            <p>UNIQUE WELLNESS</p>
                        </div>
                    </div>

                    {/* Virtual Consultation Form */}
                    <div className="consultation-form-section">
                        <div className="form-header">
                            <h2>Get a Free Assessment</h2>
                            <div className="rating">
                                <span className="stars">⭐⭐⭐⭐⭐</span>
                                <span className="rating-text">5.0</span>
                                <span className="reviews">(980 Reviews)</span>
                            </div>
                        </div>

                        <form className="consultation-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" placeholder="Jane Smith" />
                                </div>
                                <div className="form-group">
                                    <label>Doctor</label>
                                    <input type="text" placeholder="Dr Maria Cleven" />
                                </div>
                                <div className="form-group">
                                    <label>Location</label>
                                    <input type="text" placeholder="Amsterdam" />
                                </div>
                                <button type="submit" className="submit-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </LazySection>
        </section>
    );
};

export default Stats;
