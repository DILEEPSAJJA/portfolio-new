import React, { useState, useEffect, useRef } from "react";
import { Lock, X, KeyRound, AlertCircle, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolio } from "../context/PortfolioContext";

export default function PinModal({ isOpen, onClose }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const inputRef = useRef(null);
  const { verifyAndEnterEditMode } = usePortfolio();

  useEffect(() => {
    if (isOpen) {
      setPin("");
      setError(false);
      setSuccess(false);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pin) return;

    const isValid = verifyAndEnterEditMode(pin);
    if (isValid) {
      setSuccess(true);
      setError(false);
      setTimeout(() => {
        onClose();
      }, 700);
    } else {
      setError(true);
      setPin("");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pin-modal-title"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-dark-950/80 backdrop-blur-md"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-sm rounded-3xl border border-white/10 bg-dark-900 shadow-2xl p-6 sm:p-8 z-10 overflow-hidden text-center"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Close PIN prompt"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-violet-600/20 to-cyan-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 shadow-inner">
          <KeyRound className="w-7 h-7" />
        </div>

        <h3 id="pin-modal-title" className="font-heading text-xl font-bold text-white">
          Portfolio Editor Access
        </h3>
        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
          Enter your private administrator authorization PIN to unlock website customization and live content editing.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="relative">
            <input
              ref={inputRef}
              type="password"
              inputMode="numeric"
              maxLength={8}
              placeholder="••••"
              value={pin}
              onChange={(e) => {
                setPin(e.target.value);
                if (error) setError(false);
              }}
              className={`w-full text-center tracking-[0.5em] text-2xl font-mono py-3 px-4 rounded-xl bg-dark-950/90 border transition-all focus:outline-none ${
                error
                  ? "border-rose-500/80 text-rose-300 focus:ring-2 focus:ring-rose-500/30 animate-pulse"
                  : "border-white/15 text-white focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
              }`}
            />
          </div>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center gap-1.5 text-xs text-rose-400 font-medium"
              >
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Incorrect authorization PIN. Access denied.</span>
              </motion.div>
            )}

            {success && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-1.5 text-xs text-emerald-400 font-semibold"
              >
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                <span>PIN Verified! Enabling Edit Mode...</span>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!pin || success}
              className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 disabled:opacity-50 text-white shadow-md shadow-violet-600/30 transition-all"
            >
              Authorize
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
