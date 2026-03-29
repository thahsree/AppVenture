"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Cloud, PenTool, Bot, ArrowRight } from "lucide-react";
import Link from "next/link";
import CTASection from "@/sections/CTASection";

const detailedServices = [
  {
    id: "web-development",
    title: "Web Development",
    subtitle: "High-performance websites and platforms.",
    description: "We build blazing-fast, SEO-optimized, and highly responsive web applications using modern, enterprise-grade architectures. Whether it's a corporate site or a complex e-commerce platform, our web solutions are designed for conversion and scalability.",
    icon: Monitor,
    features: ["Custom Web Applications", "E-Commerce Platforms", "CMS Development", "Performance Optimization"],
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-cyan-500/30",
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    subtitle: "Native and cross-platform iOS and Android apps.",
    description: "Engage your users on the go with beautifully designed mobile applications. We utilize powerful cross-platform frameworks and native development to deliver smooth, reliable, and feature-rich apps that stand out in the App Store and Google Play.",
    icon: Smartphone,
    features: ["iOS Development", "Android Development", "Cross-Platform Frameworks", "Mobile App UI/UX"],
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
  },
  {
    id: "saas",
    title: "SaaS Platforms",
    subtitle: "Dashboards, subscription systems, automation tools.",
    description: "Launch your SaaS product with confidence. We handle complex architectures, multi-tenant databases, secure payment integrations, and intuitive dashboards to ensure your SaaS platform operates flawlessly at scale.",
    icon: Cloud,
    features: ["Multi-Tenant Architecture", "Subscription Management", "Analytics Dashboards", "API Development"],
    color: "from-indigo-500/20 to-blue-500/20",
    border: "border-indigo-500/30",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    subtitle: "Product design and user experience.",
    description: "Great engineering deserves great design. Our design team focuses on user research, wireframing, and interactive prototyping to create interfaces that are not only visually stunning but also highly usable and accessible.",
    icon: PenTool,
    features: ["Wireframing & Prototyping", "User Interface Design", "User Experience Strategy", "Brand Identity"],
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-teal-500/30",
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    subtitle: "AI integrations and business automation.",
    description: "Leverage the power of artificial intelligence to optimize your operations. From custom LLM integrations to automated workflow systems, we help you stay ahead of the curve by integrating intelligent solutions into your digital products.",
    icon: Bot,
    features: ["Machine Learning Models", "NLP & Chatbots", "Workflow Automation", "Predictive Analytics"],
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-orange-500/30",
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
          <div className="space-y-24">
            {detailedServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col md:flex-row gap-12 items-center will-change-transform will-change-opacity ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Visual side */}
                <div className="w-full md:w-1/2">
                  <div className={`aspect-square md:aspect-video rounded-3xl glass-card border bg-gradient-to-br ${service.color} ${service.border} flex items-center justify-center relative overflow-hidden group`}>
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />
                    <service.icon className="w-24 h-24 text-white z-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] transform group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
                
                {/* Content side */}
                <div className="w-full md:w-1/2">
                  <div className="inline-flex items-center space-x-2 text-accent text-sm font-bold uppercase tracking-wider mb-4">
                    <span className="w-8 h-px bg-accent"></span>
                    <span>Service {index + 1}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{service.title}</h2>
                  <p className="text-lg text-gray-300 font-medium mb-6">{service.subtitle}</p>
                  <p className="text-gray-400 leading-relaxed mb-8">{service.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm font-medium text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href="/contact" className="inline-flex items-center space-x-2 text-primary hover:text-white font-medium transition-colors group">
                    <span>Discuss this service</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
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
