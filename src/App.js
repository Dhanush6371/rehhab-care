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
import FAQPage from './components/FAQPage';
import BackNeckService from './services/BackNeckService';
import KneeAnkleService from './services/KneeAnkleService';
import ShoulderElbowService from './services/ShoulderElbowService';
import GeriatricService from './services/GeriatricService';
import PostSurgeryService from './services/PostSurgeryService';
import PostOperativeService from './services/PostOperativeService';
import ScrollToTop from './components/ScrollToTop';

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

function BackNeckServicePage() {
    return (
        <>
            <Header />
            <BackNeckService />
            <Footer />
            <WhatsAppFloat />
        </>
    );
}

function KneeAnkleServicePage() {
    return (
        <>
            <Header />
            <KneeAnkleService />
            <Footer />
            <WhatsAppFloat />
        </>
    );
}

function ShoulderElbowServicePage() {
    return (
        <>
            <Header />
            <ShoulderElbowService />
            <Footer />
            <WhatsAppFloat />
        </>
    );
}

function GeriatricServicePage() {
    return (
        <>
            <Header />
            <GeriatricService />
            <Footer />
            <WhatsAppFloat />
        </>
    );
}

function PostSurgeryServicePage() {
    return (
        <>
            <Header />
            <PostSurgeryService />
            <Footer />
            <WhatsAppFloat />
        </>
    );
}

function PostOperativeServicePage() {
    return (
        <>
            <Header />
            <PostOperativeService />
            <Footer />
            <WhatsAppFloat />
        </>
    );
}

function FAQPageRoute() {
    return (
        <>
            <Header />
            <FAQPage />
            <Footer />
            <WhatsAppFloat />
        </>
    );
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/partner" element={<PartnerPage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                    <Route path="/terms-of-use" element={<TermsOfUsePage />} />
                    <Route path="/privacy-practices" element={<PrivacyPracticesPage />} />
                    <Route path="/services/back-neck-pain" element={<BackNeckServicePage />} />
                    <Route path="/services/knee-ankle-pain" element={<KneeAnkleServicePage />} />
                    <Route path="/services/shoulder-elbow-pain" element={<ShoulderElbowServicePage />} />
                    <Route path="/services/geriatric-care" element={<GeriatricServicePage />} />
                    <Route path="/services/post-surgery" element={<PostSurgeryServicePage />} />
                    <Route path="/services/post-operative" element={<PostOperativeServicePage />} />
                    <Route path="/faq" element={<FAQPageRoute />} />
                    <Route path="/doctor/:id" element={<><DoctorProfile /><WhatsAppFloat /></>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
