import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-policy">
            <div className="privacy-container">
                <header className="privacy-header">
                    <h1>Privacy Policy</h1>
                    <p className="privacy-subtitle">How we collect, use, and protect your personal information.</p>
                    <p className="privacy-meta">Effective Date: January 2026 | Website: www.rehabb.care</p>
                </header>

                <section className="privacy-section">
                    <h2>1. Introduction</h2>
                    <p>
                        Rehabb Care ("we", "us", or "our") operates the website www.rehabb.care and provides home physiotherapy
                        services in Hyderabad, India. We are committed to protecting your personal information and your right to privacy.
                    </p>
                    <p>
                        This Privacy Policy explains what information we collect from you, why we collect it, how we use it, and
                        what rights you have in relation to it. Please read this policy carefully.
                    </p>
                    <p>
                        By using our website or booking our services, you agree to the collection and use of information as
                        described in this Privacy Policy.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>2. Information We Collect</h2>

                    <h3>2.1 Information You Provide to Us</h3>
                    <p>We collect information you voluntarily provide when you:</p>
                    <ul>
                        <li>Fill out a contact or consultation request form on our website</li>
                        <li>Book an appointment via phone, WhatsApp, or website</li>
                        <li>Communicate with us via email, phone, or social media</li>
                        <li>Share health or medical information for treatment purposes</li>
                    </ul>
                    <p>
                        This may include your name, phone number, email address, home address, age, health condition details,
                        and any other information you choose to share.
                    </p>

                    <h3>2.2 Information Collected Automatically</h3>
                    <p>When you visit our website, we may automatically collect certain technical data, including:</p>
                    <ul>
                        <li>IP address and browser type</li>
                        <li>Pages visited and time spent on our website</li>
                        <li>Device type and operating system</li>
                        <li>Referring website or search query</li>
                    </ul>
                    <p>
                        This data is collected through standard web analytics tools (such as Google Analytics) and is used in
                        aggregate form to improve our website.
                    </p>

                    <h3>2.3 Cookies</h3>
                    <p>
                        Our website may use cookies — small text files stored on your device — to enhance your browsing experience,
                        remember preferences, and analyse website traffic.
                    </p>
                    <p>
                        You can control cookie settings through your browser. Please note that disabling certain cookies may affect
                        the functionality of our website.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>3. How We Use Your Information</h2>
                    <p>We use the information we collect for the following purposes:</p>
                    <ul>
                        <li>To respond to your enquiries and consultation requests</li>
                        <li>To book, confirm, and manage your physiotherapy appointments</li>
                        <li>To deliver physiotherapy services and track your treatment progress</li>
                        <li>To send appointment reminders and service-related communications</li>
                        <li>To process payments and maintain billing records</li>
                        <li>To improve our website, services, and patient experience</li>
                        <li>To comply with legal and regulatory obligations under Indian law</li>
                        <li>To send you health tips or updates - only with your consent</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>4. Legal Basis for Processing</h2>
                    <p>We process your personal information on the following legal bases under applicable Indian data protection law:</p>
                    <ul>
                        <li><strong>Contract:</strong> To fulfil our service agreement with you when you book our services</li>
                        <li><strong>Consent:</strong> For marketing communications and non-essential cookies</li>
                        <li><strong>Legitimate Interest:</strong> To improve our services and website based on anonymised analytics</li>
                        <li><strong>Legal Obligation:</strong> Where required by Indian law, tax regulations, or court orders</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>5. Sharing Your Information</h2>
                    <p>
                        We do not sell or rent your personal information to any third party. We may share your information only
                        in the following circumstances:
                    </p>

                    <h3>5.1 Service Providers</h3>
                    <p>
                        We may share your information with trusted third-party providers who help us operate our business, such as
                        appointment scheduling platforms, payment gateways, and cloud storage providers. These parties are bound by
                        strict confidentiality obligations.
                    </p>

                    <h3>5.2 Healthcare Coordination</h3>
                    <p>
                        With your consent, we may share relevant treatment information with your referring doctor, specialist, or
                        hospital as part of your coordinated healthcare.
                    </p>

                    <h3>5.3 Legal Compliance</h3>
                    <p>
                        We may disclose your information to government authorities, law enforcement, or courts when required by law
                        or to protect the rights, safety, and property of Rehabb Care, our staff, or patients.
                    </p>

                    <h3>5.4 Business Transfers</h3>
                    <p>
                        In the event of a merger, acquisition, or sale of business assets, your personal information may be transferred
                        to the new entity. We will notify you of any such change and your options.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>6. Data Security</h2>
                    <p>We take the security of your personal information seriously. We implement the following measures to protect your data:</p>
                    <ul>
                        <li>Secure servers and encrypted data transmission (SSL/HTTPS) on our website</li>
                        <li>Access controls limiting staff access to personal data on a need-to-know basis</li>
                        <li>Regular review of our data storage and security practices</li>
                        <li>Staff training on data confidentiality and privacy obligations</li>
                    </ul>
                    <p>
                        Despite our best efforts, no method of transmission over the internet is 100% secure. If you have reason to
                        believe your interaction with us is no longer secure, please contact us immediately.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>7. Data Retention</h2>
                    <p>
                        We retain your personal information only for as long as necessary to fulfil the purposes outlined in this
                        policy, or as required by Indian law:
                    </p>
                    <ul>
                        <li>Patient health and treatment records: As required by applicable healthcare regulations</li>
                        <li>Billing and financial records: As required under Indian GST and tax laws</li>
                        <li>Website analytics data: Up to 6 months in anonymised form</li>
                        <li>Marketing consent records: Until you withdraw consent</li>
                    </ul>
                    <p>When data is no longer required, we securely delete or anonymise it.</p>
                </section>

                <section className="privacy-section">
                    <h2>8. Your Rights</h2>
                    <p>Under applicable Indian data protection law, you have the following rights:</p>

                    <h3>8.1 Right to Access</h3>
                    <p>You may request a copy of the personal information we hold about you. We will respond within 30 days.</p>

                    <h3>8.2 Right to Correction</h3>
                    <p>You may ask us to correct inaccurate or incomplete personal information at any time.</p>

                    <h3>8.3 Right to Deletion</h3>
                    <p>
                        You may request deletion of your personal information where it is no longer necessary for the purposes for
                        which it was collected, subject to our legal retention obligations.
                    </p>

                    <h3>8.4 Right to Withdraw Consent</h3>
                    <p>
                        Where processing is based on consent (e.g., marketing emails), you may withdraw it at any time. This will
                        not affect the lawfulness of processing before withdrawal.
                    </p>

                    <h3>8.5 Right to Complain</h3>
                    <p>
                        If you are unhappy with how we handle your personal information, you have the right to lodge a complaint
                        with the relevant Indian data protection authority or approach a consumer forum.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>9. Third-Party Websites</h2>
                    <p>
                        Our website may contain links to third-party websites. This Privacy Policy applies only to www.rehabb.care.
                        We are not responsible for the privacy practices of any external sites and encourage you to review their
                        privacy policies separately.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>10. Children's Privacy</h2>
                    <p>
                        We do not knowingly collect personal information from children under the age of 18 without the consent of
                        a parent or guardian. If you are a parent or guardian and believe your child has provided us with personal
                        information without your consent, please contact us and we will take steps to remove that information.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>11. Changes to This Privacy Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law.
                        The updated version will be posted on our website with a revised effective date. We encourage you to review
                        this policy periodically.
                    </p>
                    <p>
                        For significant changes, we will notify active patients via email or a prominent notice on our website.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>12. Governing Law</h2>
                    <p>
                        This Privacy Policy is governed by the laws of India, including the Information Technology Act, 2000 and
                        applicable rules thereunder, and any future data protection legislation enacted in India.
                    </p>
                </section>

                <section className="privacy-section privacy-contact">
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

export default PrivacyPolicy;
