import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-black text-white px-6 py-12 md:px-12 lg:px-24">
            <div className="max-w-3xl mx-auto">
                <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>

                <div className="space-y-8 text-white/80 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">1. How We Store Data</h2>
                        <p>
                            At Epic Visuals, your privacy is a top priority. We securely store your personal data, project briefs, and generated content on encrypted servers. We do not sell your personal data to third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">2. Email and Billing Info</h2>
                        <p>
                            Your email address is used purely for account notifications and communication regarding your active orders.
                            We do not store full credit card details on our servers; all billing and payment processing is handled securely by our certified third-party payment gateways (e.g., Stripe) in compliance with PCI-DSS standards.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">3. Cookies</h2>
                        <p>
                            We use essential cookies to maintain user sessions, remember your preferences, and track generalized website analytics. You may configure your browser to decline non-essential cookies, though this may impact certain platform features.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">4. GDPR Compliance</h2>
                        <p>
                            If you reside in the European Economic Area (EEA), you have the right to access, rectify, or erase your personal data under the General Data Protection Regulation (GDPR).
                            To exercise your right to be forgotten or to request a data export, please contact our support team.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
