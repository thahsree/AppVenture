"use client";

import { animate, motion, useInView } from "framer-motion";
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
    <section className="py-12 md:py-20 border-y border-white/5 relative bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-8 text-center will-change-transform will-change-opacity"
            >
              <div className="text-5xl font-bold text-white mb-2">
                <Counter to={stat.value} />
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
