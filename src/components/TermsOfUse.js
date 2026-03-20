import React, { useEffect } from 'react';
import './TermsOfUse.css';

const TermsOfUse = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-of-use">
            <div className="terms-container">
                <header className="terms-header">
                    <h1>Terms of Use</h1>
                    <p className="terms-subtitle">Please read these terms carefully before using our website or services.</p>
                    <p className="terms-meta">Effective Date: January 2026 | Website: www.rehabb.care</p>
                </header>

                <section className="terms-section">
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using the Rehabb Care website (www.rehabb.care) or any of our physiotherapy services,
                        you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our
                        website or services.
                    </p>
                    <p>
                        These Terms of Use apply to all visitors, users, and patients who access or use our website, book
                        appointments, or engage with our physiotherapy services.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>2. About Rehabb Care</h2>
                    <p>
                        Rehabb Care is a home physiotherapy service provider based in Hyderabad, Telangana, India. We provide
                        qualified physiotherapists who visit patients at their homes or preferred locations for assessment,
                        treatment, and rehabilitation services.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>3. Use of This Website</h2>

                    <h3>3.1 Permitted Use</h3>
                    <p>You may use this website for lawful purposes only, including:</p>
                    <ul>
                        <li>Browsing information about our physiotherapy services</li>
                        <li>Booking appointments or free consultations</li>
                        <li>Contacting us with queries or feedback</li>
                        <li>Accessing health and rehabilitation information we publish</li>
                    </ul>

                    <h3>3.2 Prohibited Use</h3>
                    <p>You must not use this website to:</p>
                    <ul>
                        <li>Violate any applicable law or regulation</li>
                        <li>Transmit spam, unsolicited communications, or harmful content</li>
                        <li>Attempt to gain unauthorised access to our systems or data</li>
                        <li>Copy, reproduce, or distribute our content without permission</li>
                        <li>Impersonate Rehabb Care, our staff, or any other person</li>
                        <li>Use automated tools (bots, scrapers) to access our website without consent</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>4. Medical Disclaimer</h2>
                    <p>
                        The information on this website is provided for general informational and educational purposes only.
                        It is not a substitute for professional medical advice, diagnosis, or treatment.
                    </p>
                    <p>
                        Always seek the advice of your physician, physiotherapist, or other qualified health provider before
                        beginning any new treatment or if you have questions about a medical condition.
                    </p>
                    <p>
                        Rehabb Care is not liable for any health decisions made based solely on information found on this website.
                        Please consult a qualified healthcare professional for personalised advice.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>5. Appointment Booking and Services</h2>

                    <h3>5.1 Booking</h3>
                    <p>
                        When you book an appointment through our website or via phone/WhatsApp, you agree to provide accurate
                        and complete information. Bookings are subject to availability of our physiotherapists.
                    </p>

                    <h3>5.2 Cancellations and Rescheduling</h3>
                    <p>
                        We request at least 24 hours' notice for cancellations or rescheduling. Repeated no-shows or last-minute
                        cancellations may result in a cancellation fee or refusal of future bookings at our discretion.
                    </p>

                    <h3>5.3 Service Area</h3>
                    <p>
                        Our home physiotherapy services are currently available in Hyderabad, Telangana. Please confirm service
                        availability in your specific area before booking.
                    </p>

                    <h3>5.4 Fees</h3>
                    <p>
                        Service fees will be communicated clearly before your appointment is confirmed. Fees are subject to change.
                        Any changes will be notified in advance.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>6. Intellectual Property</h2>
                    <p>
                        All content on this website - including text, graphics, logos, images, service descriptions, and layout -
                        is the intellectual property of Rehabb Care and is protected under applicable Indian copyright and
                        intellectual property laws.
                    </p>
                    <p>
                        You may not copy, reproduce, distribute, or create derivative works from our content without prior written
                        permission from Rehabb Care.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>7. Third-Party Links</h2>
                    <p>
                        Our website may contain links to third-party websites for your convenience. These links do not constitute
                        an endorsement by Rehabb Care of those websites or their content. We are not responsible for the content,
                        accuracy, or privacy practices of any third-party sites.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>8. Limitation of Liability</h2>
                    <p>To the fullest extent permitted by law, Rehabb Care, its directors, staff, and physiotherapists shall not be liable for:</p>
                    <ul>
                        <li>Any indirect, incidental, or consequential damages arising from your use of this website</li>
                        <li>Any errors or omissions in website content</li>
                        <li>Any interruption or unavailability of the website</li>
                        <li>Any unauthorised access to your personal data not caused by our negligence</li>
                    </ul>
                    <p>
                        Our liability in relation to physiotherapy services is governed by the service agreement provided at the
                        time of booking and applicable Indian consumer protection and healthcare laws.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>9. Indemnification</h2>
                    <p>
                        You agree to indemnify and hold harmless Rehabb Care and its staff against any claims, losses, damages,
                        or expenses (including legal fees) arising from your breach of these Terms of Use or your misuse of our
                        website or services.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>10. Privacy</h2>
                    <p>
                        Your use of this website is also governed by our Privacy Policy and Notice of Privacy Practices, both of
                        which are incorporated into these Terms of Use by reference. Please review these documents carefully.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>11. Changes to These Terms</h2>
                    <p>
                        We reserve the right to update or modify these Terms of Use at any time. Changes will be posted on this
                        page with an updated effective date. Your continued use of the website after any changes constitutes
                        acceptance of the revised terms.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>12. Governing Law</h2>
                    <p>
                        These Terms of Use are governed by and construed in accordance with the laws of India. Any disputes arising
                        under these terms shall be subject to the exclusive jurisdiction of the courts of Hyderabad, Telangana, India.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>13. Severability</h2>
                    <p>
                        If any provision of these Terms of Use is found to be invalid or unenforceable, the remaining provisions
                        shall continue in full force and effect.
                    </p>
                </section>

                <section className="terms-section terms-contact">
                    <h2>Contact Us</h2>
                    <p>If you have questions about this document, please contact us:</p>
                    <div className="contact-details">
                        <p><strong>Rehabb Care — Home Physiotherapy Services</strong></p>
                        <p>Address: Hyderabad, Telangana, India</p>
                        <p>Email: rehab.care@gmail.com</p>
                        <p>Phone: +91-965 2468 777</p>
                        <p>Website: www.rehabb.care</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TermsOfUse;
