import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import WhyBetter from './components/WhyBetter';
import Process from './components/Process';
import WhyChoose from './components/WhyChoose';
import Team from './components/Team';
import Partner from './components/Partner';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Appointment from './components/Appointment';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Stats />
            <Services />
            <WhyBetter />
            <Process />
            <WhyChoose />
            <Team />
            <Partner />
            <FAQ />
            <Testimonials />
            <Appointment />
            <CTA />
            <Footer />
        </div>
    );
}

export default App;
