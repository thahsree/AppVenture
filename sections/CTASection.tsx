"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl p-10 md:p-20 text-center glass-card neon-border border-primary/30"
        >
          {/* Inner glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-[100px] z-0" />
          
          <div className="relative z-10">
            <h2 className="text-6xl max-sm:text-3xl font-bold text-white mb-6">
              Let&apos;s Build Something <br className="hidden md:block"/>
              <span className="text-gradient">Powerful</span> Together
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto max-sm:text-base">
              Ready to scale your business with custom software? Connect with our engineering team today to discuss your next big project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-10 py-5 md:py-3 md:px-5 rounded-full bg-primary hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] text-white font-bold text-lg transition-all duration-300"
            >
              <span className="max-sm:text-base">Start&nbsp;Your&nbsp;Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
