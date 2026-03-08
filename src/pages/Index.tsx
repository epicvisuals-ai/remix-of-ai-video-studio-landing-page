import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Bot, Sparkles, Wand2, Users, MousePointerClick, PenTool, CloudDownload, ChevronDown } from "lucide-react";
import { useState } from "react";

const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="p-8 rounded-2xl glass-effect border border-white/10 hover:border-accent-blue/50 transition-colors gentle-animation group relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="w-12 h-12 rounded-xl bg-accent-blue/20 flex items-center justify-center mb-6 text-accent-blue group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent-blue transition-colors">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const Index = () => {
  const faqs = [
    {
      question: "What is EpicVisuals?",
      answer: "EpicVisuals is an AI-powered visual content marketplace that connects elite generative AI creators with brands and marketers. We provide a platform for on-demand, custom AI-generated images and videos at scale."
    },
    {
      question: "How does the content generation process work?",
      answer: "Brands submit their visual requirements or creative briefs. Our platform then matches these requests with top-tier AI creators who use advanced generative models to produce high-quality, custom assets. You review the results, request revisions if needed, and download the final files."
    },
    {
      question: "Can brands own the AI-generated content?",
      answer: "Yes, brands receive full commercial rights to the final approved content delivered through the EpicVisuals platform, allowing for unrestricted use in marketing, advertising, and other commercial applications."
    },
    {
      question: "What kind of visual content can be created?",
      answer: "Our creators can generate a wide range of content including photorealistic lifestyle imagery, product mockups, conceptual art, short-form video animations, and specialized visual assets tailored to your brand's unique aesthetic."
    },
    {
      question: "How does EpicVisuals ensure quality?",
      answer: "We curate our creator community, accepting only those with proven expertise in advanced prompt engineering and AI model workflows. Additionally, our platform includes unlimited revisions to ensure the final output perfectly matches your creative vision."
    }
  ];

  const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="border-b border-white/10 last:border-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
          aria-expanded={isOpen}
        >
          <span className="text-xl font-medium text-white group-hover:text-accent-blue transition-colors pr-8">
            {question}
          </span>
          <ChevronDown
            className={`w-6 h-6 text-white/50 transition-transform duration-300 ${isOpen ? "rotate-180 text-accent-blue" : ""}`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}`}
        >
          <p className="text-muted-foreground text-lg leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    );
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-black text-foreground overflow-x-hidden selection:bg-accent-blue/30">
      {/* Inject FAQPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* 1. HERO SECTION (Kept exact same component as requested) */}
      <section id="hero" aria-label="Hero section">
        <Hero />
      </section>

      {/* 1.5. HOW IT WORKS SECTION */}
      <section className="relative py-24 px-4 sm:px-8 lg:px-12 bg-black overflow-hidden border-t border-white/5">
        {/* Floating abstract blobs */}
        <div className="absolute top-[10%] left-[-10%] w-[30%] h-[40%] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[40%] bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
            >
              Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue italic pr-2 font-serif">future</span> of design
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-28 h-28 mb-8 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-accent-blue/20 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-black/80 border border-white/10 rounded-3xl -rotate-3 group-hover:rotate-0 transition-transform duration-500 flex items-center justify-center glass-effect backdrop-blur-xl">
                  <MousePointerClick className="w-12 h-12 text-accent-blue" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Create projects</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tell us what you need — design, video, ads, animations, you name it. No complicated proposals or back-and-forths.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-28 h-28 mb-8 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-accent-purple/20 rounded-3xl -rotate-6 group-hover:-rotate-12 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-black/80 border border-white/10 rounded-3xl rotate-3 group-hover:rotate-0 transition-transform duration-500 flex items-center justify-center glass-effect backdrop-blur-xl">
                  <PenTool className="w-12 h-12 text-accent-purple" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Get matched & create</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your dedicated team gets to work immediately. Expect fast turnarounds and jaw-dropping results.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-28 h-28 mb-8 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-accent-emerald/20 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-black/80 border border-white/10 rounded-3xl -rotate-3 group-hover:rotate-0 transition-transform duration-500 flex items-center justify-center glass-effect backdrop-blur-xl">
                  <CloudDownload className="w-12 h-12 text-accent-emerald" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Review, revise, approve</h3>
              <p className="text-muted-foreground leading-relaxed">
                Love it? Download and go. Need tweaks? Unlimited revisions until it's perfect. Simple.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="relative py-32 px-4 sm:px-8 lg:px-12 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_100%)] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-accent-emerald mr-2" />
            <span className="text-sm font-medium tracking-wide uppercase text-white/80">Next-Generation Content</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight"
          >
            An AI-powered <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-accent-emerald">visual content marketplace</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Focused on next-generation digital creators. EpicVisuals.ai bridges the gap between groundbreaking artificial intelligence and commercial brand needs.
          </motion.p>
        </div>
      </section>

      {/* 3. DUAL VALUE PROPOSITION SECTION */}
      <section id="services" className="py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
        {/* Abstract background blobs */}
        <div className="absolute top-0 left-[-10%] w-[40%] h-[40%] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-[-10%] w-[40%] h-[40%] bg-accent-emerald/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 relative z-10">

            {/* Value Prop 1: Creators */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-accent-blue/30 transition-all duration-700"
            >
              <div className="bg-black/80 backdrop-blur-xl h-full rounded-[23px] p-10 md:p-14 border border-white/5 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Bot className="w-32 h-32 text-accent-blue" />
                </div>

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center mb-8 relative z-10">
                  <Wand2 className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
                  For AI Creators
                </h3>

                <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed relative z-10">
                  Generate high-quality images and videos at scale. Monetize your unique AI workflows and creative capabilities on a global platform.
                </p>

                <ul className="space-y-4 mb-10 relative z-10">
                  {["Monetize generative models", "Direct brand collaborations", "Global reach & distribution"].map((item, i) => (
                    <li key={i} className="flex items-center text-white/80">
                      <Sparkles className="w-5 h-5 text-accent-blue mr-3 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button onClick={() => window.location.href = 'https://app.epicvisuals.ai/auth?utm_source=creators&utm_campaign=join_now'} className="w-full sm:w-auto relative z-10 bg-white text-black hover:bg-white/90 font-semibold px-8 py-6 rounded-xl text-lg transition-transform hover:scale-105">
                  Join as Creator
                </Button>
              </div>
            </motion.div>

            {/* Value Prop 2: Brands */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-accent-emerald/30 transition-all duration-700 mt-12 lg:mt-0 lg:translate-y-16"
            >
              <div className="bg-black/80 backdrop-blur-xl h-full rounded-[23px] p-10 md:p-14 border border-white/5 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Users className="w-32 h-32 text-accent-emerald" />
                </div>

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-emerald to-accent-blue flex items-center justify-center mb-8 relative z-10">
                  <Bot className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
                  For Brands,<br />
                  <span className="text-muted-foreground">& Marketers</span>
                </h3>

                <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed relative z-10">
                  Request custom AI-generated UGC on demand. Scale your content production infinitely without the traditional overhead of physical shoots.
                </p>

                <ul className="space-y-4 mb-10 relative z-10">
                  {["On-demand custom assets", "Infinite scalability", "Cost-effective production"].map((item, i) => (
                    <li key={i} className="flex items-center text-white/80">
                      <Sparkles className="w-5 h-5 text-accent-emerald mr-3 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => window.location.href = 'https://app.epicvisuals.ai/auth?utm_source=brands&utm_campaign=request_content'}
                  className="w-full sm:w-auto relative z-10 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-6 rounded-xl text-lg transition-all hover:scale-105"
                >
                  Request Content
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION for AEO/GEO */}
      <section className="py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden border-t border-white/5">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple italic pr-2 font-serif">Questions</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about EpicVisuals and how our AI creator marketplace works.
            </p>
          </div>

          <div className="glass-effect rounded-3xl p-6 md:p-10 border border-white/10">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <Footer />

    </div>
  );
};

export default Index;