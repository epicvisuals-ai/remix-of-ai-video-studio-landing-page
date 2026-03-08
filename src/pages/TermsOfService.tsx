import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-black text-white px-6 py-12 md:px-12 lg:px-24">
            <div className="max-w-3xl mx-auto">
                <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>

                <div className="space-y-8 text-white/80 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
                        <p>
                            This Terms of Service is the primary agreement between Epic Visuals ("the Platform") and brands or creators.
                            By accessing or using our platform, you agree to be bound by these rules.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">2. Platform Usage Rules</h2>
                        <p>
                            Users must comply with all applicable laws and regulations when using Epic Visuals.
                            Any misuse, reverse engineering, scraping, or unauthorized access to platform features is strictly prohibited.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">3. Account Rules</h2>
                        <p>
                            You are responsible for maintaining the confidentiality of your account credentials.
                            You must provide accurate and up-to-date information when creating an account. Multi-accounting to circumvent platform limitations or bans is forbidden.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">4. Limitation of Liability</h2>
                        <p>
                            Epic Visuals is not liable for indirect, incidental, or consequential damages arising
                            from your use of the platform. The platform and its AI-generated services are provided "as is", and our maximum liability is limited to the fees paid by you in the preceding 12 months.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">5. Dispute Resolution</h2>
                        <p>
                            Any disputes arising out of or related to these Terms will be resolved through binding confidential arbitration.
                            You waive the right to participate in any class-action lawsuit against Epic Visuals.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
