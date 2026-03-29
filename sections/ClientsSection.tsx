"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Nexus Systems", icon: "NX" },
  { name: "Aurora Global", icon: "AG" },
  { name: "Quantum Labs", icon: "QL" },
  { name: "Starlight Corp", icon: "SC" },
  { name: "Vertex Media", icon: "VM" },
  { name: "Evolve Digital", icon: "ED" },
];

export default function ClientsSection() {
  return (
    <section className="py-20 bg-background/50 border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-widest">Our Network</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Businesses We’ve Built For</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, opacity: 1 }}
              className="group flex flex-col items-center justify-center space-y-4 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
                <span className="text-xl font-bold text-gray-400 group-hover:text-white transition-colors">
                  {client.icon}
                </span>
              </div>
              <span className="text-sm font-medium text-gray-500 group-hover:text-gray-300 transition-colors uppercase tracking-tight">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none" />
    </section>
  );
}
