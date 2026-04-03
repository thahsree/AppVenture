"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, CheckCircle2, MessagesSquare, Send, Smartphone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type LeadStep = "NAME" | "EMAIL" | "PROJECT" | "BUDGET" | "TIMELINE" | "COMPLETE";

export default function GlobalChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMode, setChatMode] = useState<"menu" | "flow">("menu");
  
  // Lead Capture State
  const [currentStep, setCurrentStep] = useState<LeadStep>("NAME");
  const [leadData, setLeadData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
  });

  // AI Chat State
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm AppVenture's Lead Strategist. We build high-performance, futuristic digital products. I'd love to learn about your vision—what are you dreaming of building today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const phoneNumber = "7795031638";
  const whatsappUrl = `https://wa.me/91${phoneNumber}`;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, chatMode]);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setChatMode("menu");
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const saveLead = async (finalData: typeof leadData) => {
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });
      return res.ok;
    } catch (err) {
      console.error("Failed to save lead:", err);
      return false;
    }
  };

  // ===== SMART INTENT DETECTION =====
  const detectQuickIntent = (text: string) => {
    const t = text.toLowerCase();
    return {
      project:
        t.includes("website") || t.includes("web") || t.includes("app") ||
        t.includes("saas") || t.includes("ecommerce") || t.includes("shop") ||
        t.includes("dashboard") || t.includes("portal") || t.includes("platform") ||
        t.includes("mobile") || t.includes("landing")
          ? text
          : null,
      budget:
        t.includes("₹") || t.includes("rs") || t.includes("lakh") ||
        t.includes("k") || /\d{4,}/.test(t) || t.includes("budget") ||
        t.includes("price") || t.includes("cost")
          ? text
          : null,
      timeline:
        t.includes("week") || t.includes("month") || t.includes("day") ||
        t.includes("asap") || t.includes("urgent") || t.includes("soon") ||
        /\d+\s*(weeks?|months?|days?)/.test(t)
          ? text
          : null,
    };
  };

  // ===== LEAD QUALITY SCORER =====
  const getLeadQuality = (data: typeof leadData): "high" | "medium" | "low" => {
    const b = (data.budget || "").toLowerCase();

    // Normalize: extract numeric value allowing for "k" = *1000, "L"/"lakh" = *100000
    let budgetAmount = 0;
    const numMatch = b.match(/(\d+(?:\.\d+)?)\s*(k|l|lakh)?/);
    if (numMatch) {
      const num = parseFloat(numMatch[1]);
      const unit = numMatch[2] || "";
      if (unit === "k") budgetAmount = num * 1000;
      else if (unit === "l" || unit === "lakh") budgetAmount = num * 100000;
      else budgetAmount = num;
    }

    const hasTimeline = !!data.timeline;
    const hasProject = !!data.projectType;

    // High: ₹1L+ with complete brief
    if (budgetAmount >= 100000 && hasProject && hasTimeline) return "high";
    // Medium: ₹30k–₹99k with project known
    if (budgetAmount >= 30000 && hasProject) return "medium";
    // Low: anything under ₹30k or incomplete brief
    return "low";
  };

  // ===== SMART AI ENGINE =====
  const handleFlow = async (userMsg: string) => {
    setIsLoading(true);
    try {
      // We send the current message history (excluding system prompt which is added on server)
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          messages: messages.map(m => ({ role: m.role, content: m.content })),
          inputText: userMsg 
        }),
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      let aiContent = data.result;
      
      // Extract Lead Data if present in [LEAD_UPDATE: {...}] tags
      const leadMatch = aiContent.match(/\[LEAD_UPDATE: ({.*?})\]/);
      let updatedLeadData = { ...leadData };
      if (leadMatch) {
        try {
          const extracted = JSON.parse(leadMatch[1]);
          // Merge new data, ignoring placeholders like "..."
          const cleanedData = Object.fromEntries(
            Object.entries(extracted).filter(([_, v]) => v && v !== "..." && v !== "")
          );
          updatedLeadData = { ...updatedLeadData, ...cleanedData };
          // Strip the tag from the UI message
          aiContent = aiContent.replace(/\[LEAD_UPDATE: {.*?}\]/, "").trim();
        } catch (e) {
          console.error("Failed to parse lead data:", e);
        }
      }

      setLeadData(updatedLeadData);
      setMessages(prev => [...prev, { role: "assistant", content: aiContent }]);

      // Dynamically determine if we have enough to consider it "Complete"
      // Or if the AI suggested a WhatsApp move (we can look for "WhatsApp" in the text too)
      const isQualified = updatedLeadData.email && updatedLeadData.projectType;
      const isFullyCaptured = updatedLeadData.name && updatedLeadData.email && updatedLeadData.projectType && updatedLeadData.budget && updatedLeadData.timeline;

      if (isFullyCaptured && currentStep !== "COMPLETE") {
        setCurrentStep("COMPLETE");
        await saveLead(updatedLeadData);
      } else if (aiContent.toLowerCase().includes("whatsapp") && isQualified) {
        // AI explicitly driving to WhatsApp and we have at least Email + Project
        setCurrentStep("COMPLETE");
        await saveLead(updatedLeadData);
      }

    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: "assistant", content: "I'm having a bit of trouble connecting to our strategy core. Let's finish this on WhatsApp!" }]);
      setCurrentStep("COMPLETE");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || currentStep === "COMPLETE") return;

    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setIsLoading(true);

    if (chatMode === "flow") {
      await handleFlow(userMsg);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && chatMode === "flow" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 sm:hidden"
            onClick={toggleWidget}
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4 font-sans">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="origin-bottom-right"
            >
              {chatMode === "menu" && (
                <div className="flex flex-col space-y-3 mb-4 mr-2">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <button
                      onClick={() => setChatMode("flow")}
                      className="flex items-center space-x-4 bg-[#0d0d0d]/95 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl hover:bg-white/5 hover:border-primary/50 transition-all group w-[280px]"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-inner">
                        <MessagesSquare className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-white font-bold text-sm tracking-tight">Project Inquiry</h4>
                        <p className="text-gray-400 text-[11px] mt-0.5 leading-tight">Get a quote in 2 minutes</p>
                      </div>
                    </button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 bg-[#0d0d0d]/95 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl hover:bg-[#25D366]/10 hover:border-[#25D366]/50 transition-all group w-[280px]"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform shadow-inner">
                        <Smartphone className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-white font-bold text-sm tracking-tight">WhatsApp Us</h4>
                        <p className="text-gray-400 text-[11px] mt-0.5 leading-tight">Direct chat with engineers</p>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              )}

              {chatMode === "flow" && (
                <div className="w-[calc(100vw-3rem)] sm:w-[400px] h-[550px] max-h-[calc(100vh-8rem)] bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(99,102,241,0.15)] flex flex-col overflow-hidden mb-4 sm:mr-2">
                  <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white shadow-lg overflow-hidden relative">
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        <Bot className="w-5 h-5 relative z-10" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm tracking-wide">Appventure AI</h3>
                        <div className="flex items-center space-x-1.5 mt-0.5">
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Active</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button onClick={() => setChatMode("menu")} className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full" title="Back to menu">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                      </button>
                      <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full" title="Close">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div ref={scrollRef} data-lenis-prevent className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar overscroll-contain bg-gradient-to-b from-transparent to-primary/5">
                    {messages.map((msg, i) => (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        key={i}
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                            msg.role === "user" 
                              ? "bg-primary text-white rounded-tr-sm shadow-md" 
                              : "bg-white/10 text-gray-200 rounded-tl-sm border border-white/5 drop-shadow-md"
                          }`}
                        >
                          {msg.content}
                        </div>
                      </motion.div>
                    ))}
                    
                    {currentStep === "COMPLETE" && !isLoading && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center space-y-4 py-6"
                      >
                        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <Link
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02] shadow-xl"
                        >
                          <Smartphone className="w-5 h-5" />
                          <span>Talk on WhatsApp</span>
                        </Link>
                      </motion.div>
                    )}

                    {isLoading && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                        <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-4 border border-white/5 flex items-center space-x-2 drop-shadow-md">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {currentStep !== "COMPLETE" && (
                    <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10 bg-white/5 backdrop-blur-md">
                      <div className="relative flex items-center">
                        <input
                          type="text"
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder="Type your answer..."
                          disabled={isLoading}
                          className="w-full bg-black/50 border border-white/10 rounded-full pl-5 pr-12 py-3.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 transition-colors shadow-inner"
                        />
                        <button
                          type="submit"
                          disabled={!input.trim() || isLoading}
                          className="absolute right-2 w-9 h-9 flex items-center justify-center bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:hover:bg-primary text-white rounded-full transition-all active:scale-95"
                        >
                          <Send className="w-4 h-4 ml-0.5" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={toggleWidget}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-primary to-accent text-white rounded-full shadow-[0_10px_40px_rgba(99,102,241,0.5)] z-50 group transition-all duration-300"
        >
          <div className="absolute inset-0 bg-primary/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                className="relative z-10"
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                className="relative z-10"
              >
                <MessagesSquare className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
}
