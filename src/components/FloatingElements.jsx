import React, { useState, useEffect } from "react";
import { ArrowUp, Sparkles, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolio } from "../context/PortfolioContext";

export default function FloatingElements() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { profile } = usePortfolio();
  const { status, email } = profile;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 320) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* 1. Ambient Background Glows (Hardware accelerated, pointer-events-none) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top-left Violet Glow */}
        <div 
          className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full opacity-20 blur-[130px]"
          style={{ background: "radial-gradient(circle, #8B5CF6 0%, rgba(139, 92, 246, 0) 70%)" }}
        />
        {/* Bottom-right Cyan/Blue Glow */}
        <div 
          className="absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full opacity-15 blur-[140px]"
          style={{ background: "radial-gradient(circle, #06B6D4 0%, rgba(6, 182, 212, 0) 70%)" }}
        />
        {/* Center ambient subtle wash */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-10 blur-[160px]"
          style={{ background: "radial-gradient(circle, #6366F1 0%, rgba(99, 102, 241, 0) 70%)" }}
        />
      </div>

      {/* 2. Floating Availability Pill (Bottom-left desktop, accessible) */}
      {status.available && (
        <aside
          aria-label="Availability Status"
          className="fixed bottom-6 left-6 z-40 hidden md:block"
        >
          <a
            href={`mailto:${email}?subject=Opportunity%20Inquiry%20via%20Portfolio`}
            className="group flex items-center gap-2.5 px-3.5 py-2 rounded-full glass-panel border border-emerald-500/20 hover:border-emerald-500/40 bg-dark-900/90 shadow-lg shadow-black/40 text-xs font-medium text-slate-300 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5"
            title="Click to send an email inquiry"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300 group-hover:text-emerald-300 transition-colors">
              {status.label}
            </span>
            <Send className="w-3 h-3 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
          </a>
        </aside>
      )}

      {/* 3. Floating Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full glass-panel border border-violet-500/30 hover:border-violet-500/60 bg-dark-900/90 text-slate-300 hover:text-white shadow-xl shadow-black/50 hover:shadow-violet-500/20 transition-all duration-300 group hover:-translate-y-1"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400 group-hover:text-violet-300 transition-colors" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
