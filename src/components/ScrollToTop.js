import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        // Don't scroll to top if we're navigating to home with special scroll flags
        if (location.pathname === '/' && (location.state?.scrollToAppointment || location.state?.scrollToSection)) {
            return;
        }
        window.scrollTo(0, 0);
    }, [location.pathname, location.state]);

    return null;
}

export default ScrollToTop;
