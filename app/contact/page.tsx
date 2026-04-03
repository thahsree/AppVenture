"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function CustomSelect({ 
  label, 
  name, 
  value, 
  options, 
  onChange 
}: { 
  label: string; 
  name: string; 
  value: string; 
  options: { label: string; value: string }[]; 
  onChange: (name: string, value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="space-y-3" ref={containerRef}>
      <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-500 ml-1">
        {label}
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full bg-white/5 border ${isOpen ? "border-primary/50 ring-1 ring-primary/20 bg-white/10" : "border-white/10"} rounded-2xl px-5 py-4 text-left flex items-center justify-between transition-all duration-300 text-base group`}
        >
          <span className={value ? "text-white" : "text-gray-500"}>
            {selectedOption ? selectedOption.label : "Select..."}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="text-gray-500 group-hover:text-primary transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 2, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute z-50 w-full mt-2 bg-[#0d0d0d]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 shadow-3xl overflow-hidden"
            >
              <div className="max-h-60 overflow-y-auto custom-scrollbar">
                {options.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      onChange(name, opt.value);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between group/opt ${
                      value === opt.value ? "bg-primary/20 text-white font-bold" : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className="text-sm">{opt.label}</span>
                    {value === opt.value && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-primary w-4 h-4">
                        <svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      </motion.div>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "web",
    budget: "10k-25k",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "", email: "", phone: "", company: "", 
        projectType: "web", budget: "10k-25k", description: ""
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const setCustomValue = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const projectOptions = [
    { label: "Web Development", value: "web" },
    { label: "Mobile App", value: "mobile" },
    { label: "SaaS Platform", value: "saas" },
    { label: "AI Integration", value: "ai" },
    { label: "UI/UX Design", value: "design" },
  ];

  const budgetOptions = [
    { label: "Under $10,000", value: "<10k" },
    { label: "$10,000 - $25,000", value: "10k-25k" },
    { label: "$25,000 - $50,000", value: "25k-50k" },
    { label: "$50,000 - $100,000", value: "50k-100k" },
    { label: "$100,000+", value: ">100k" },
  ];

  return (
    <div className="pt-32 md:pt-48 pb-20 min-h-screen bg-background relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Contact Content - Standard Left Placement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-8">
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-white">
              Let&apos;s craft your <br />
              <span className="text-gradient">next big idea.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-md leading-relaxed">
              Fill out the form and our team will get back to you within 24 hours to schedule a discovery call.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 md:gap-10">
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.15em] mb-1">Email Us</p>
                  <p className="text-base md:text-lg text-white font-bold group-hover:text-primary transition-colors">hello@appventure.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.15em] mb-1">HQ Office</p>
                  <p className="text-base md:text-lg text-white font-bold group-hover:text-primary transition-colors">120 Innovation Dr, Tech City</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.15em] mb-1">Call Us</p>
                  <p className="text-base md:text-lg text-white font-bold group-hover:text-primary transition-colors">7795031638</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form - Standard Right Placement */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full relative"
          >
            <div className="glass p-8 md:p-12 border-white/10 relative bg-[#0a0a0a]/60 backdrop-blur-3xl shadow-2xl rounded-[2.5rem] overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
              
              {isSuccess ? (
                <div className="text-center py-16 md:py-24">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-24 h-24 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/10"
                  >
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-gray-400 text-lg mb-10">Our engineering team will reach out <br className="hidden md:block" /> within 24 business hours.</p>
                  <button 
                    onClick={() => setIsSuccess(false)} 
                    className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all font-bold"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Full Name</label>
                        <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all text-base" placeholder="John Doe" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Email</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all text-base" placeholder="john@company.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Company</label>
                        <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all text-base" placeholder="Acme Inc" />
                      </div>
                      <CustomSelect 
                        label="Project Type"
                        name="projectType"
                        value={formData.projectType}
                        options={projectOptions}
                        onChange={setCustomValue}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <CustomSelect 
                        label="Budget Range"
                        name="budget"
                        value={formData.budget}
                        options={budgetOptions}
                        onChange={setCustomValue}
                      />
                      <div className="space-y-3 invisible md:visible">
                        {/* Placeholder for grid alignment */}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Project Details</label>
                      <textarea required name="description" value={formData.description} onChange={handleChange} rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all resize-none text-base" placeholder="What are we building today?" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full bg-primary hover:shadow-[0_0_50px_rgba(99,102,241,0.5)] text-white font-black text-xs md:text-sm uppercase tracking-[0.4em] rounded-2xl py-6 transition-all duration-500 disabled:opacity-70 overflow-hidden"
                  >
                    <span className="relative z-10">{isSubmitting ? "Initiating..." : "Submit"}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
