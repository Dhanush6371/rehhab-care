import React, { useEffect } from 'react';
import './PrivacyPractices.css';

const PrivacyPractices = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-practices">
            <div className="practices-container">
                <header className="practices-header">
                    <h1>Notice of Privacy Practices</h1>
                    <p className="practices-subtitle">
                        This notice describes how health information about you may be used and disclosed.
                    </p>
                    <p className="practices-meta">Effective Date: Jan 2026 | Website: www.rehabb.care</p>
                    <div className="practices-notice">
                        <p>PLEASE REVIEW THIS NOTICE CAREFULLY.</p>
                    </div>
                </header>

                <div className="practices-commitment">
                    <h2>Our Commitment to Your Privacy</h2>
                    <p>
                        Rehabb Care is committed to protecting the privacy and confidentiality of your personal health
                        information. We understand that health information is sensitive, and we take our responsibility
                        to safeguard it seriously.
                    </p>
                    <p>
                        This Notice of Privacy Practices describes the types of health information we collect, how we
                        use and share it, your rights regarding your information, and our legal obligations.
                    </p>
                </div>

                <section className="practices-section">
                    <h2>1. Health Information We Collect</h2>
                    <p>When you use our services, we may collect the following types of information:</p>

                    <h3>1.1 Personal Information</h3>
                    <ul>
                        <li>Full name, age, date of birth, and gender</li>
                        <li>Contact details: phone number, address, email</li>
                        <li>Emergency contact information</li>
                    </ul>

                    <h3>1.2 Medical and Health Information</h3>
                    <ul>
                        <li>Medical history, current conditions, and medications</li>
                        <li>Details of your injury, pain, or rehabilitation needs</li>
                        <li>Physiotherapy assessment findings and treatment notes</li>
                        <li>Session progress records and outcome measurements</li>
                        <li>Doctor referrals, reports or discharge summaries (if provided by you)</li>
                    </ul>

                    <h3>1.3 Payment Information</h3>
                    <ul>
                        <li>Billing address and payment method details</li>
                        <li>Invoice and transaction records</li>
                    </ul>
                </section>

                <section className="practices-section">
                    <h2>2. How We Use Your Health Information</h2>
                    <p>We use your health information only for the following purposes:</p>

                    <h3>2.1 Treatment</h3>
                    <p>
                        Your information is used by our physiotherapists to assess your condition, plan your treatment,
                        deliver physiotherapy sessions, and track your recovery progress. This is the primary reason we
                        collect health data.
                    </p>

                    <h3>2.2 Operations</h3>
                    <p>
                        We may use your information for internal operational purposes such as scheduling appointments,
                        managing our patient records, and improving the quality of our services.
                    </p>

                    <h3>2.3 Billing and Payment</h3>
                    <p>
                        We use your information to process payments, generate invoices, and maintain financial records
                        as required by Indian tax and business regulations.
                    </p>

                    <h3>2.4 Communication</h3>
                    <p>
                        We may use your contact information to send appointment reminders, follow-up messages, or
                        important updates about your treatment. We will not send promotional messages without your consent.
                    </p>
                </section>

                <section className="practices-section">
                    <h2>3. How We Share Your Information</h2>
                    <p>
                        Rehabb Care does not sell, rent, or trade your personal health information. We share your
                        information only in the following limited circumstances:
                    </p>

                    <h3>3.1 With Your Consent</h3>
                    <p>
                        We will share your health information with other healthcare providers (doctors, specialists,
                        hospitals) only with your explicit consent, unless required in an emergency.
                    </p>

                    <h3>3.2 Referring Practitioners</h3>
                    <p>
                        If you were referred to us by a doctor or hospital, we may share treatment updates and progress
                        reports with them as part of your coordinated care.
                    </p>

                    <h3>3.3 Legal Requirements</h3>
                    <p>
                        We may disclose your information if required to do so by law, court order, or government authority,
                        including for public health reporting obligations under Indian law.
                    </p>

                    <h3>3.4 Emergency Situations</h3>
                    <p>
                        In a medical emergency, we may disclose relevant health information to emergency services or
                        healthcare providers to protect your health and safety.
                    </p>

                    <h3>3.5 Service Providers</h3>
                    <p>
                        We may share limited information with trusted third-party service providers (e.g., appointment
                        management software, payment processors) who assist us in operating our services. These providers
                        are contractually obligated to keep your information confidential.
                    </p>
                </section>

                <section className="practices-section">
                    <h2>4. Your Rights Regarding Your Health Information</h2>
                    <p>You have the following rights regarding the health information we hold about you:</p>

                    <h3>4.1 Right to Access</h3>
                    <p>
                        You have the right to request a copy of your health and treatment records held by Rehabb Care.
                        We will provide this within a reasonable timeframe.
                    </p>

                    <h3>4.2 Right to Correction</h3>
                    <p>
                        If you believe any information we hold about you is inaccurate or incomplete, you may request
                        a correction. We will review and update records as appropriate.
                    </p>

                    <h3>4.3 Right to Restrict Use</h3>
                    <p>
                        You may request that we limit how we use or share your information in certain circumstances.
                        We will honour such requests where legally and operationally feasible.
                    </p>

                    <h3>4.4 Right to Withdraw Consent</h3>
                    <p>
                        Where your information is used on the basis of your consent (e.g., promotional messages), you
                        may withdraw that consent at any time by contacting us.
                    </p>

                    <h3>4.5 Right to Complain</h3>
                    <p>
                        If you believe your privacy rights have been violated, you have the right to file a complaint
                        with us directly or with the relevant Indian data protection authority.
                    </p>
                </section>

                <section className="practices-section">
                    <h2>5. How We Protect Your Information</h2>
                    <p>
                        We implement appropriate technical and organisational measures to protect your health information,
                        including:
                    </p>
                    <ul>
                        <li>Secure storage of physical and digital records</li>
                        <li>Access controls - only authorised staff can access patient records</li>
                        <li>Confidentiality training for all physiotherapists and staff</li>
                        <li>Secure transmission of data where applicable</li>
                    </ul>
                    <p>
                        While we take all reasonable precautions, no system is completely secure. In the event of a data
                        breach that affects your rights or freedoms, we will notify you as required by applicable law.
                    </p>
                </section>

                <section className="practices-section">
                    <h2>6. Retention of Records</h2>
                    <p>
                        We retain patient records for a minimum period as required under applicable Indian healthcare and
                        tax regulations. Records are securely disposed of after the retention period expires.
                    </p>
                </section>

                <section className="practices-section">
                    <h2>7. Changes to This Notice</h2>
                    <p>
                        We may update this Notice of Privacy Practices from time to time. The most current version will
                        always be available on our website. Material changes will be communicated to active patients directly.
                    </p>
                </section>

                <section className="practices-section practices-contact">
                    <h2>Contact Us</h2>
                    <p>If you have questions about this document, please contact us:</p>
                    <div className="contact-details">
                        <p><strong>Rehabb Care — Home & Online Physiotherapy Services</strong></p>
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

export default PrivacyPractices;
