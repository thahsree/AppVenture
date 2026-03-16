"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

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

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-6">
              Get in Touch
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Let&apos;s craft your <br />
              <span className="text-gradient">next big idea.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-md">
              Fill out the form and our team will get back to you within 24 hours to schedule a discovery call.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Email Us</p>
                  <p className="text-lg text-white font-bold">hello@appventure.dev</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">HQ Office</p>
                  <p className="text-lg text-white font-bold">120 Innovation Dr, Tech City</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Call Us</p>
                  <p className="text-lg text-white font-bold">+1 (800) 123-4567</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 md:p-10 border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -z-10" />
              
              {isSuccess ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Request Sent Successfully!</h3>
                  <p className="text-gray-400">Our team will be in touch shortly.</p>
                  <button onClick={() => setIsSuccess(false)} className="mt-8 text-primary hover:text-white transition-colors">
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Full Name *</label>
                      <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Email Address *</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="john@company.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Company Name</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Acme Inc" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Project Type *</label>
                      <select required name="projectType" value={formData.projectType} onChange={handleChange} className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer">
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile App</option>
                        <option value="saas">SaaS Platform</option>
                        <option value="ai">AI Integration</option>
                        <option value="design">UI/UX Design</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Budget Range</label>
                      <select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer">
                        <option value="<10k">Under $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value=">100k">$100,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Project Description *</label>
                    <textarea required name="description" value={formData.description} onChange={handleChange} rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="Tell us about your goals, timeline, and any specific requirements..." />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl py-4 transition-all duration-300 shadow-[0_4px_20px_rgba(99,102,241,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Project Request"}
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
