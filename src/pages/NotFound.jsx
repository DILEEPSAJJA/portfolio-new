import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, Compass, ArrowLeft } from "lucide-react";
import PageTransition from "../components/PageTransition";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 — Page Not Found | Dileep Sajja";
  }, []);

  return (
    <PageTransition>
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center glass-card rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-violet-600/20 blur-3xl -z-10" />

          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
            <Compass className="w-8 h-8 animate-spin-slow" />
          </div>

          <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-semibold">
            Error 404
          </span>

          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Page Not Found
          </h1>

          <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
            The route you navigated to does not exist or has moved. Explore the available portfolio pages using the button below.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-600/25 transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
            >
              <span>Explore Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
