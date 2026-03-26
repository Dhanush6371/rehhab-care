import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
            <Helmet>
                <title>Home Physiotherapy in Hyderabad | Rehabb Care</title>
                <meta name="description" content="Expert home physiotherapy in Hyderabad for back pain, knee pain, post-surgery recovery & more. Trusted by 2000+ families. Book a free consultation today." />
            </Helmet>
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
            <Helmet>
                <title>Partner With Us | Join Rehabb Care as a Physiotherapist</title>
                <meta name="description" content="Are you a licensed physiotherapist in Hyderabad? Partner with Rehabb Care to deliver home physiotherapy sessions on your own schedule. Apply now." />
            </Helmet>
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
            <Helmet>
                <title>Privacy Policy | Rehabb Care</title>
                <meta name="description" content="Read Rehabb Care's Privacy Policy to understand how we collect, use, and protect your personal information when you use our home physiotherapy services." />
            </Helmet>
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
            <Helmet>
                <title>Terms of Use | Rehabb Care</title>
                <meta name="description" content="Review the Terms of Use for Rehabb Care's website and home physiotherapy services in Hyderabad, including booking, cancellation, and liability policies." />
            </Helmet>
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
            <Helmet>
                <title>Notice of Privacy Practices | Rehabb Care</title>
                <meta name="description" content="Rehabb Care's Notice of Privacy Practices explains how your health information is collected, used, and protected in line with Indian healthcare regulations." />
            </Helmet>
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
            <Helmet>
                <title>Back & Neck Pain Physiotherapy at Home in Hyderabad | Rehabb Care</title>
                <meta name="description" content="Struggling with back or neck pain? Get expert home physiotherapy in Hyderabad for sciatica, herniated discs, posture issues & more. Book a free consultation." />
            </Helmet>
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
            <Helmet>
                <title>Knee & Ankle Pain Physiotherapy at Home in Hyderabad | Rehabb Care</title>
                <meta name="description" content="Knee or ankle pain slowing you down? Rehabb Care's home physiotherapy in Hyderabad treats arthritis, ACL injuries, sprains & more. Avoid surgery — book now." />
            </Helmet>
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
            <Helmet>
                <title>Shoulder & Elbow Pain Physiotherapy at Home in Hyderabad | Rehabb Care</title>
                <meta name="description" content="Frozen shoulder, rotator cuff pain, or tennis elbow? Get targeted home physiotherapy in Hyderabad from Rehabb Care. Regain full movement — book a free consultation." />
            </Helmet>
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
            <Helmet>
                <title>Geriatric Physiotherapy at Home in Hyderabad | Rehabb Care</title>
                <meta name="description" content="Gentle, safe home physiotherapy for elderly patients in Hyderabad. Rehabb Care helps seniors improve mobility, reduce fall risk, and regain independence." />
            </Helmet>
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
            <Helmet>
                <title>Post-Surgery Physiotherapy at Home in Hyderabad | Rehabb Care</title>
                <meta name="description" content="Recover faster after surgery with expert home physiotherapy in Hyderabad. Rehabb Care provides post-surgery rehab for knee replacement, spine surgery & more." />
            </Helmet>
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
            <Helmet>
                <title>Post-Operative Care Physiotherapy at Home in Hyderabad | Rehabb Care</title>
                <meta name="description" content="Structured post-operative physiotherapy at home in Hyderabad. Rehabb Care's surgeon-aligned rehab programs help you recover safely after any operation." />
            </Helmet>
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
            <Helmet>
                <title>Frequently Asked Questions | Rehabb Care Home Physiotherapy Hyderabad</title>
                <meta name="description" content="Got questions about home physiotherapy in Hyderabad? Find answers about pricing, booking, session details, conditions treated, and more — Rehabb Care FAQ." />
            </Helmet>
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
