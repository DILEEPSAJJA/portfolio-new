import React, { useState } from "react";
import { 
  X, 
  Mail, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  Send, 
  Compass, 
  Globe 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolio } from "../context/PortfolioContext";

export default function EmailModal() {
  const { isEmailModalOpen, closeEmailModal, profile } = usePortfolio();
  const [copied, setCopied] = useState(false);

  if (!isEmailModalOpen) return null;

  const email = (profile?.email || "dileep.sajja03@gmail.com")
    .replace(/^mailto:/, "")
    .trim();
  const subject = "Direct Inquiry from Portfolio";
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;
  const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodeURIComponent(subject)}`;
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeEmailModal}
        className="fixed inset-0 bg-dark-950/80 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-lg rounded-3xl border border-violet-500/30 bg-dark-900 shadow-2xl p-6 sm:p-8 z-10 overflow-hidden"
      >
        {/* Glow Strip Header */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500" />

        <button
          onClick={closeEmailModal}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-5">
          <div className="p-3 rounded-2xl bg-violet-600/15 border border-violet-500/30 text-violet-400">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white">
              Send Direct Email
            </h3>
            <p className="text-xs text-slate-400">
              Get in touch directly with <strong className="text-slate-200">{profile?.name || "SAJJA DILEEP"}</strong>
            </p>
          </div>
        </div>

        {/* Email Address & Copy Box */}
        <div className="mb-6 p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <span className="text-sm font-semibold text-white truncate font-mono">
              {email}
            </span>
          </div>

          <button
            onClick={handleCopy}
            type="button"
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              copied
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                : "bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border border-violet-500/30"
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Contact Options */}
        <div className="space-y-3 mb-6">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-heading block">
            Choose Your Email Provider
          </span>

          {/* Option 1: Gmail (Web) */}
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeEmailModal}
            className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-dark-850 hover:bg-dark-800 border border-red-500/20 hover:border-red-500/40 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center font-bold text-sm border border-red-500/20 group-hover:scale-105 transition-transform">
                M
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-slate-200 group-hover:text-white">
                  Compose in Gmail (Web)
                </h4>
                <p className="text-[11px] text-slate-400">
                  Opens directly in your browser without mail client setup
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-red-400 transition-colors" />
          </a>

          {/* Option 2: Outlook (Web) */}
          <a
            href={outlookUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeEmailModal}
            className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-dark-850 hover:bg-dark-800 border border-sky-500/20 hover:border-sky-500/40 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold text-sm border border-sky-500/20 group-hover:scale-105 transition-transform">
                O
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-slate-200 group-hover:text-white">
                  Compose in Outlook / Hotmail (Web)
                </h4>
                <p className="text-[11px] text-slate-400">
                  Opens Outlook webmail composer in a new tab
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
          </a>

          {/* Option 3: Default System Mail Client */}
          <a
            href={mailtoUrl}
            onClick={closeEmailModal}
            className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-dark-850 hover:bg-dark-800 border border-white/5 hover:border-white/20 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/5 text-slate-300 flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4 text-violet-400" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-slate-200 group-hover:text-white">
                  Default Mail App (Apple Mail / Thunderbird)
                </h4>
                <p className="text-[11px] text-slate-400">
                  Triggers your operating system's configured mail client
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-violet-400 transition-colors" />
          </a>
        </div>

        <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
          <span>Expected response time: within 24 hours</span>
          <button
            type="button"
            onClick={closeEmailModal}
            className="text-slate-400 hover:text-white transition-colors"
          >
            Dismiss
          </button>
        </div>
      </motion.div>
    </div>
  );
}
