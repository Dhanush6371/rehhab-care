import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import WhyBetter from './components/WhyBetter';
import WhyChoose from './components/WhyChoose';
import Team from './components/Team';
import Partner from './components/Partner';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Appointment from './components/Appointment';
import Footer from './components/Footer';
import DoctorProfile from './components/DoctorProfile';
import WhatsAppFloat from './components/WhatsAppFloat';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import PrivacyPractices from './components/PrivacyPractices';

function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <Stats />
            <Services />
            <Team />
            <Testimonials />
            <WhyChoose />
            <WhyBetter />
            <FAQ />
            <Appointment />
            <Footer />
            <WhatsAppFloat />
        </>
    );
}

function PartnerPage() {
    return (
        <>
            <Header />
            <Partner />
            <Footer />
            <WhatsAppFloat />
        </>
    );
}

function PrivacyPolicyPage() {
    return (
        <>
            <Header />
            <PrivacyPolicy />
            <Footer />
            <WhatsAppFloat />
        </>
    );
}

function TermsOfUsePage() {
    return (
        <>
            <Header />
            <TermsOfUse />
            <Footer />
            <WhatsAppFloat />
        </>
    );
}

function PrivacyPracticesPage() {
    return (
        <>
            <Header />
            <PrivacyPractices />
            <Footer />
            <WhatsAppFloat />
        </>
    );
}

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/partner" element={<PartnerPage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                    <Route path="/terms-of-use" element={<TermsOfUsePage />} />
                    <Route path="/privacy-practices" element={<PrivacyPracticesPage />} />
                    <Route path="/doctor/:id" element={<><DoctorProfile /><WhatsAppFloat /></>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
