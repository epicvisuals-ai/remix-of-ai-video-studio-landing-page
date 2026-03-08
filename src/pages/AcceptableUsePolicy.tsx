import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AcceptableUsePolicy = () => {
    return (
        <div className="min-h-screen bg-black text-white px-6 py-12 md:px-12 lg:px-24">
            <div className="max-w-3xl mx-auto">
                <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Acceptable Use Policy</h1>

                <p className="text-lg text-muted-foreground mb-12">
                    This policy is designed to protect the Epic Visuals community, creators, and platform infrastructure from abuse, ensuring a safe and productive environment for everyone.
                </p>

                <div className="space-y-8 text-white/80 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">1. Illegal Use of Content</h2>
                        <p>
                            Under no circumstances may the Epic Visuals platform be used to create, distribute, or request content that violates international laws, promotes terrorism, facilitates human trafficking, or violates the intellectual property of a third party without proper legal clearance.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">2. Deepfake & Synthetic Identity Abuse</h2>
                        <p>
                            Generating non-consensual deepfakes of private individuals, politicians, or public figures is strictly prohibited. While AI generation is our core service, intentionally generating misleading, defamatory, or politically manipulative synthetic media is a bannable offense.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">3. Harassment and Hate Speech</h2>
                        <p>
                            We maintain a zero-tolerance policy against using AI generated content to harass, bully, or attack any individual or marginalized group based on race, gender, religion, sexual orientation, or disability.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">4. Fraud & Misleading Practices</h2>
                        <p>
                            Brands cannot use content from the Epic Visuals platform to engage in financial fraud, phishing scams, deceptive marketing containing false medical claims, or any context intended to deliberately mislead consumers.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AcceptableUsePolicy;
