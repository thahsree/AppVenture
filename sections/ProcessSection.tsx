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
          {/* Connecting line - Dynamic hidden/shown on mobile vs desktop */}
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-primary/10 to-transparent md:-translate-x-1/2" />
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-center md:block">
                
                {/* Step Marker */}
                <div className="absolute left-0 md:left-1/2 w-12 h-12 bg-[#0a0a0a] border-2 border-primary rounded-full flex items-center justify-center -translate-x-[6px] md:-translate-x-1/2 z-20 text-white font-bold text-lg shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300 group-hover:scale-110">
                  {step.num}
                </div>

                <div className={`flex w-full ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className={`w-full md:w-[42%] ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                  >
                    <div className="group relative glass p-8 rounded-3xl hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-primary/30 shadow-xl overflow-hidden">
                      {/* Subtle accent glow inside card */}
                      <div className="absolute -top-10 -left-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                        {step.num}. {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed font-medium">
                        {step.description}
                      </p>
                      
                      {/* Number badge for mobile visibility if markers are hidden */}
                      <div className="md:hidden absolute top-4 right-4 text-primary font-black opacity-20 text-3xl italic">
                        {step.num}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
