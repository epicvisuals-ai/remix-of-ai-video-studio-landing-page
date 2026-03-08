import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AiContentPolicy = () => {
    return (
        <div className="min-h-screen bg-black text-white px-6 py-12 md:px-12 lg:px-24">
            <div className="max-w-3xl mx-auto">
                <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold mb-8">AI Content Policy</h1>

                <p className="text-lg text-muted-foreground mb-12">
                    As a premier AI marketplace, transparency regarding synthetic media and generative processes is central to our values.
                </p>

                <div className="space-y-8 text-white/80 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">1. AI-Generated Disclosure</h2>
                        <p>
                            Buyers and Brands acknowledge that all assets retrieved and purchased through Epic Visuals are the product of generative AI. While creators maintain a high quality standard, minute imperfections or synthetic artifacts may occasionally be present.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">2. Synthetic Models & Actors</h2>
                        <p>
                            Human subjects featured in content bought from this platform are generally synthetic creations. Unless specifically negotiated or marked otherwise, physical actors were not utilized. Therefore, standard model release forms are not required.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">3. Publishing & Transparency Requirements</h2>
                        <p>
                            Depending on regional laws governing deep media (e.g., the EU AI Act), you may be legally required to disclose that advertisements or media containing synthetic humans are AI-generated. Epic Visuals is not responsible for legal friction resulting from a Brand's failure to disclose synthetics where mandated.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">4. Prohibited AI Use Cases</h2>
                        <p>
                            Brands must not train new underlying foundational models on the outputs purchased from the Epic Visuals marketplace. The content is for visual and marketing use, not for creating derivative AI weighting networks or dataset scraping.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AiContentPolicy;
