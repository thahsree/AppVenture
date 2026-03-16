"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ from = 0, to, duration = 2 }: { from?: number; to: number; duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return <span ref={nodeRef}>{from}</span>;
}

export default function SocialProofSection() {
  const stats = [
    { label: "Projects Delivered", value: 50, suffix: "+" },
    { label: "Industries Served", value: 10, suffix: "+" },
    { label: "Custom Development", value: 100, suffix: "%" },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-8 text-center"
            >
              <div className="text-5xl font-bold text-white mb-2">
                <Counter to={stat.value} />
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Trusted by innovative teams worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Fake client logos just text or placeholder SVGs */}
            {[1, 2, 3, 4, 5].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="flex items-center space-x-2 grayscale transition-all duration-300 hover:grayscale-0 backdrop-blur-md"
              >
                <div className="w-8 h-8 rounded bg-gradient-to-tr from-white/20 relative" />
                <span className="text-xl font-bold tracking-tight text-white/80">Company {item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
