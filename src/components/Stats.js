import React from 'react';
import './Stats.css';
import LazySection from './LazySection';

const Stats = () => {
    return (
        <section className="stats-section">
            {/* Top Stats Cards */}
            <div className="stats-cards">
                <LazySection animation="fade-up" delay={0}>
                    <div className="stat-card">
                        <h3 className="stat-number">190K+</h3>
                        <p className="stat-label">CLIENTS WORLDWIDE</p>
                        <p className="stat-description">
                            Providing clinical excellence through advanced recovery protocols and personalized care plans.
                        </p>
                        <div className="stat-avatars">
                            <img
                                src="/images/avatar1.jpg"
                                alt="User"
                                onError={(e) => e.target.src = 'https://via.placeholder.com/32/4CAF50/ffffff?text=1'}
                            />
                            <img
                                src="/images/avatar2.jpg"
                                alt="User"
                                onError={(e) => e.target.src = 'https://via.placeholder.com/32/2196F3/ffffff?text=2'}
                            />
                            <img
                                src="/images/avatar3.jpg"
                                alt="User"
                                onError={(e) => e.target.src = 'https://via.placeholder.com/32/FF9800/ffffff?text=3'}
                            />
                            <span className="more-count">+10k</span>
                        </div>
                        <div className="stat-footer">
                            <div className="stat-item">
                                <span className="stat-label-small">GLOBAL REACH</span>
                                <span className="stat-value-small">12+ Countries Targeted</span>
                            </div>
                        </div>
                    </div>
                </LazySection>

                <LazySection animation="fade-up" delay={100}>
                    <div className="stat-card highlight">
                        <div className="badge-insights">
                            <span className="emoji">📊</span>
                            <span>REAL INSIGHTS</span>
                        </div>
                        <h3 className="stat-number">78% Match</h3>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: '78%' }}></div>
                        </div>
                        <p className="stat-description">
                            High success diagnostic match for musculoskeletal assessment.
                        </p>
                        <div className="stat-footer">
                            <div className="stat-item">
                                <span className="stat-label-small">ACCURACY RATE</span>
                                <span className="stat-value-small">98.2%</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label-small">CASES</span>
                                <span className="stat-value-small">12K+ Case</span>
                            </div>
                        </div>
                    </div>
                </LazySection>

                <LazySection animation="fade-up" delay={200}>
                    <div className="stat-card">
                        <h3 className="stat-number">150+</h3>
                        <p className="stat-label">SPECIALISTS</p>
                        <div className="specialist-image">
                            <img
                                src="/images/specialist.jpg"
                                alt="Specialist"
                                onError={(e) => e.target.src = 'https://via.placeholder.com/300x200/1a5f5a/ffffff?text=Specialist'}
                            />
                        </div>
                    </div>
                </LazySection>
            </div>

            {/* Virtual Consultation Form */}
            <div className="consultation-container">
                <LazySection animation="fade-right" delay={0}>
                    <div className="consultation-form-wrapper">
                        <div className="form-header">
                            <h2>Virtual Consultation</h2>
                            <div className="rating">
                                <span className="stars">⭐⭐⭐⭐⭐</span>
                                <span className="rating-text">5.0</span>
                                <span className="reviews">(900 Reviews)</span>
                            </div>
                        </div>

                        <form className="consultation-form">
                            <div className="form-group">
                                <label>NAME</label>
                                <input type="text" placeholder="Ex: John" />
                            </div>
                            <div className="form-group">
                                <label>DOCTOR</label>
                                <input type="text" placeholder="Ex: Maria Gomez" />
                            </div>
                            <div className="form-group">
                                <label>LOCATION</label>
                                <input type="text" placeholder="Amsterdam" />
                            </div>
                            <button type="submit" className="submit-btn">Submit Request</button>
                        </form>
                    </div>
                </LazySection>

                <LazySection animation="fade-left" delay={100}>
                    <div className="consultation-stats">
                        <div className="big-stat">
                            <h3>200K+</h3>
                            <p>CURED SATISFIED PATIENTS<br />AROUND THE GLOBE</p>
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
