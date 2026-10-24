import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Calendar, Award, CheckCircle2, ShieldCheck } from "lucide-react";

export default function CertificateModal({ certificate, isOpen, onClose }) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-dark-950/85 backdrop-blur-md"
      />

      {/* Modal Dialog Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl rounded-2xl border border-white/10 bg-dark-900 shadow-2xl p-5 sm:p-8 z-10 max-h-[90vh] flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-dark-950/80 text-slate-300 hover:text-white border border-white/10 hover:border-violet-500/50 transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-12 mb-4">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30">
              {certificate.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>{certificate.date}</span>
            </span>
          </div>

          <h2 id="certificate-modal-title" className="font-heading text-xl sm:text-2xl font-bold text-white">
            {certificate.title}
          </h2>
          <p className="text-sm text-cyan-400 font-medium mt-0.5">
            Issued by {certificate.issuer}
          </p>
        </div>

        {/* Certificate Image or Fallback Visual (Scrollable viewport) */}
        <div className="flex-1 overflow-y-auto rounded-xl bg-dark-950/60 border border-white/5 p-2 sm:p-4 flex items-center justify-center">
          {certificate.image ? (
            <img
              src={certificate.image}
              alt={`${certificate.title} issued by ${certificate.issuer}`}
              className="max-h-[55vh] w-auto max-w-full rounded-lg object-contain shadow-lg"
            />
          ) : (
            <div className="py-16 px-6 text-center max-w-md">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="font-heading font-semibold text-lg text-white mb-2">
                Digital Credential Record
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                This verification record confirms completion of curriculum competencies issued directly by {certificate.issuer}.
              </p>
            </div>
          )}
        </div>

        {/* Description & Verification Footer */}
        <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs text-slate-300 max-w-xl">
            <p className="line-clamp-2">{certificate.description}</p>
            {certificate.skills && (
              <div className="flex flex-wrap gap-1 mt-2">
                {certificate.skills.map((s) => (
                  <span key={s} className="px-2 py-0.5 rounded bg-white/5 text-[11px] text-slate-300">
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>

          {certificate.verificationUrl && (
            <a
              href={certificate.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white shadow-md shadow-violet-600/30 transition-all flex-shrink-0"
            >
              <span>Verify Credential</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
