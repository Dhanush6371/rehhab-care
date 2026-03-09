import React from 'react';
import './Stats.css';
import LazySection from './LazySection';

const Stats = () => {
    return (
        <section className="stats-section">
            {/* Top Stats Cards */}


            {/* Virtual Consultation Form */}
            <div className="consultation-container">
                <LazySection animation="fade-up" delay={0}>
                    <div className="consultation-form-wrapper">
                        <div className="form-header">
                            <h2>Virtual Consultation</h2>
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

                        <div className="consultation-stat-below">
                            <h3>200K+</h3>
                            <p>Cured satisfied patients<br />around the globe</p>
                        </div>
                    </div>
                </LazySection>
            </div>

            {/* Bottom Stats */}
            <div className="bottom-stats">
                <LazySection animation="fade-up" delay={0}>
                    <div className="bottom-stat-item">
                        <h3>100+</h3>
                        <p>TREATMENTS OFFERED</p>
                    </div>
                </LazySection>
                <LazySection animation="fade-up" delay={100}>
                    <div className="bottom-stat-item">
                        <h3>50+</h3>
                        <p>CERTIFIED THERAPISTS</p>
                    </div>
                </LazySection>
                <LazySection animation="fade-up" delay={200}>
                    <div className="bottom-stat-item">
                        <h3>2000+</h3>
                        <p>SATISFIED CLIENTS</p>
                    </div>
                </LazySection>
                <LazySection animation="fade-up" delay={300}>
                    <div className="bottom-stat-item">
                        <h3>300+</h3>
                        <p>UNIQUE WELLNESS</p>
                    </div>
                </LazySection>
            </div>
        </section>
    );
};

export default Stats;
