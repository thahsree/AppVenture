"use client";

import { motion } from "framer-motion";
import { Bot, Cloud, Cpu, Monitor, PenTool, Smartphone } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "High-performance, beautifully designed websites built with modern frameworks to convert visitors into customers.",
    icon: Monitor,
    delay: 0.1,
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile experiences for iOS and Android that users love engaging with.",
    icon: Smartphone,
    delay: 0.2,
  },
  {
    title: "SaaS Platforms",
    description: "Scalable, secure, and intuitive cloud applications and dashboards tailored to your business operations.",
    icon: Cloud,
    delay: 0.3,
  },
  {
    title: "UI/UX Design",
    description: "User-centric product design and wireframes ensuring seamless experiences from start to finish.",
    icon: PenTool,
    delay: 0.4,
  },
  {
    title: "Automation Systems",
    description: "Streamlined business workflows using advanced tools and custom API integrations.",
    icon: Cpu,
    delay: 0.5,
  },
  {
    title: "AI Integrations",
    description: "Future-proof your product with intelligent AI models, NLP, and machine learning capabilities.",
    icon: Bot,
    delay: 0.6,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#050505] relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Services We Provide
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            From concept to deployment, we build end-to-end digital solutions that scale with your ambitions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative h-full glass-card p-8 flex flex-col z-10 neon-border">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
