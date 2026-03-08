import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ContentLicenseTerms = () => {
    return (
        <div className="min-h-screen bg-black text-white px-6 py-12 md:px-12 lg:px-24">
            <div className="max-w-3xl mx-auto">
                <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Content License Terms</h1>

                <p className="text-lg text-muted-foreground mb-12">
                    This is the essential agreement detailing the licensing rights for brands and agencies purchasing custom AI-generated media from Epic Visuals.
                </p>

                <div className="space-y-8 text-white/80 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">1. How Purchased Content Can Be Used</h2>
                        <p>
                            Once a brand purchases or accepts delivery of an AI-generated asset, they are granted a perpetual, royalty-free, worldwide license to use that content across digital and physical mediums.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">2. Commercial & Advertising Use</h2>
                        <p>
                            Brand clients are entirely permitted to use the acquired AI assets in paid advertising, marketing campaigns, social media, and commercial promotions. There are no limitations on advertising spend or audience reach.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">3. Exclusivity</h2>
                        <p>
                            Custom-requested content delivered directly through your private brand dashboard is offered exclusively to your brand. The creator will not redistribute or license the exact generated asset to competing brands unless specified otherwise during the contract phase.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">4. Resale & Sub-Licensing</h2>
                        <p>
                            While you may use the content in campaigns for your clients (if you are an agency), directly reselling the raw generated files on stock photo websites, alternative marketplaces, or asset packs as an individual seller is strictly prohibited.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ContentLicenseTerms;
