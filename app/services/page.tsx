"use client";

import CTASection from "@/sections/CTASection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const detailedServices = [
  {
    id: "web-development",
    title: "Web Development",
    subtitle: "High-performance websites and platforms.",
    description: "We build blazing-fast, SEO-optimized, and highly responsive web applications using modern, enterprise-grade architectures. Whether it's a corporate site or a complex e-commerce platform, our web solutions are designed for conversion and scalability.",
    image: "/Web.png",
    features: ["Custom Web Applications", "E-Commerce Platforms", "CMS Development", "Performance Optimization"],
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-cyan-500/50",
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    subtitle: "Native and cross-platform iOS and Android apps.",
    description: "Engage your users on the go with beautifully designed mobile applications. We utilize powerful cross-platform frameworks and native development to deliver smooth, reliable, and feature-rich apps that stand out in the App Store and Google Play.",
    image: "/mobile.png",
    features: ["iOS Development", "Android Development", "Cross-Platform Frameworks", "Mobile App UI/UX"],
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/50",
  },
  {
    id: "saas",
    title: "SaaS Platforms",
    subtitle: "Dashboards, subscription systems, automation tools.",
    description: "Launch your SaaS product with confidence. We handle complex architectures, multi-tenant databases, secure payment integrations, and intuitive dashboards to ensure your SaaS platform operates flawlessly at scale.",
    image: "/SaaS.png",
    features: ["Multi-Tenant Architecture", "Subscription Management", "Analytics Dashboards", "API Development"],
    color: "from-indigo-500/20 to-blue-500/20",
    border: "border-indigo-500/50",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    subtitle: "Product design and user experience.",
    description: "Great engineering deserves great design. Our design team focuses on user research, wireframing, and interactive prototyping to create interfaces that are not only visually stunning but also highly usable and accessible.",
    image: "/UIUX.png",
    features: ["Wireframing & Prototyping", "User Interface Design", "User Experience Strategy", "Brand Identity"],
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-teal-500/50",
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    subtitle: "AI integrations and business automation.",
    description: "Leverage the power of artificial intelligence to optimize your operations. From custom LLM integrations to automated workflow systems, we help you stay ahead of the curve by integrating intelligent solutions into your digital products.",
    image: "/AI.png",
    features: ["Machine Learning Models", "NLP & Chatbots", "Workflow Automation", "Predictive Analytics"],
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-orange-500/50",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="py-20 relative overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full -z-10" />
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Engineering <span className="text-gradient">Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-10"
          >
            Comprehensive software development services designed to push boundaries and accelerate your business growth.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 bg-background relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="space-y-32 md:space-y-48">
            {detailedServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col md:flex-row gap-12 lg:gap-24 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Visual side */}
                <div className="w-full md:w-1/2">
                  <div className={`aspect-video rounded-[2.5rem] glass-card border bg-gradient-to-br transition-all duration-700 hover:scale-[1.02] ${service.color} ${service.border} relative overflow-hidden group shadow-2xl shadow-black/50`}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 pointer-events-none" />
                  </div>
                </div>
                
                {/* Content side */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="inline-flex items-center space-x-2 text-primary text-sm font-bold uppercase tracking-[0.2em] mb-6">
                      <span className="w-10 h-px bg-primary/40"></span>
                      <span>Service {index + 1}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{service.title}</h2>
                    <p className="text-xl text-primary font-bold mb-8 leading-relaxed opacity-90">{service.subtitle}</p>
                    <p className="text-lg text-gray-400 leading-relaxed mb-10">{service.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-3 group/feat">
                          <div className="w-2 h-2 rounded-full bg-primary group-hover/feat:scale-150 transition-transform shadow-[0_0_10px_rgba(99,102,241,0.6)]" />
                          <span className="text-sm font-bold text-gray-300 uppercase tracking-wider">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link href="/contact" className="group relative inline-flex items-center space-x-4 px-10 py-5 bg-primary text-white font-black text-xs uppercase tracking-[0.3em] rounded-2xl overflow-hidden active:scale-95 transition-all shadow-[0_10px_40px_rgba(99,102,241,0.3)]">
                      <span className="relative z-10">Start Project with AppVenture</span>
                      <ArrowRight className="w-4 h-4 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
