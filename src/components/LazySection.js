import React from 'react';
import { useLazyLoad } from '../hooks/useLazyLoad';
import './LazySection.css';

const LazySection = ({ children, animation = 'fade-up', delay = 0, className = '' }) => {
    const [ref, isVisible] = useLazyLoad({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`lazy-section ${isVisible ? 'visible' : ''} ${animation} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default LazySection;
