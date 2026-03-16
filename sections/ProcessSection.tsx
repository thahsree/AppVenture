"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery",
    description: "We dive deep into your business requirements, target audience, and market landscape to formulate a strategic approach.",
  },
  {
    num: "02",
    title: "Planning",
    description: "Creating comprehensive technical specifications, user flows, and a detailed roadmap for the entire project lifecycle.",
  },
  {
    num: "03",
    title: "Design",
    description: "Crafting wireframes and high-fidelity prototypes that ensure an intuitive and stunning user experience.",
  },
  {
    num: "04",
    title: "Development",
    description: "Writing clean, scalable code using the latest tech stack while maintaining rigorous quality assurance.",
  },
  {
    num: "05",
    title: "Testing",
    description: "Conducting rigorous automated and manual testing to ensure security, performance, and cross-device compatibility.",
  },
  {
    num: "06",
    title: "Launch",
    description: "Deploying the product to production, monitoring performance, and providing ongoing support for future growth.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            How We Build <span className="text-gradient">Success</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Our proven engineering methodology ensures high-quality results delivered on time.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                
                {/* Step Marker */}
                <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-background border-2 border-primary/30 rounded-full flex items-center justify-center -translate-x-1/2 z-10 text-primary font-bold shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                  {step.num}
                </div>

                {/* Content Box */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}
                >
                  <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors border border-white/5">
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
