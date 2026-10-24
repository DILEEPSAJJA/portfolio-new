import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  FileText, 
  Sparkles, 
  FolderGit2, 
  User, 
  GraduationCap, 
  Briefcase, 
  Award, 
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  Lock,
  Unlock
} from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";
import PinModal from "./PinModal";

const navLinks = [
  { name: "Home", path: "/", icon: Sparkles },
  { name: "Profile", path: "/profile", icon: User },
  { name: "Projects", path: "/projects", icon: FolderGit2 },
  { name: "Certificates", path: "/certificates", icon: ShieldCheck },
  { name: "Education", path: "/education", icon: GraduationCap },
  { name: "Experience", path: "/experience", icon: Briefcase },
  { name: "Achievements", path: "/achievements", icon: Award }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pinModalOpen, setPinModalOpen] = useState(false);
  const location = useLocation();
  const { profile, isEditMode } = usePortfolio();

  // Close mobile menu whenever location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Track scroll state for enhanced glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "py-3 bg-dark-950/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30" 
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            {/* Brand Logo / Initials */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl"
              aria-label="Dileep Sajja Portfolio Home"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-500 p-[1.5px] shadow-md shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-shadow">
                <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center">
                  <span className="font-heading font-extrabold text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-cyan-300 group-hover:scale-105 transition-transform">
                    {profile.initials}
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-slate-100 text-sm tracking-tight group-hover:text-violet-300 transition-colors">
                  {profile.name}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                  Portfolio
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center p-1.5 rounded-full glass-panel border border-white/10 bg-dark-900/60 shadow-inner">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                      isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/80 to-indigo-600/80 shadow-md shadow-violet-500/30 border border-violet-400/30"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </NavLink>
                );
              })}
            </div>

            {/* Right Action CTAs */}
            <div className="hidden sm:flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setPinModalOpen(true)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  isEditMode
                    ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25"
                    : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:border-violet-500/40"
                }`}
                title="Edit portfolio content"
              >
                {isEditMode ? (
                  <>
                    <Unlock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Edit Active</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Edit</span>
                  </>
                )}
              </button>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-violet-600/10 hover:bg-violet-600/20 text-violet-300 border border-violet-500/30 hover:border-violet-500/60 transition-all duration-200"
              >
                <FileText className="w-3.5 h-3.5 text-violet-400" />
                <span>Resume</span>
                <ExternalLink className="w-3 h-3 text-violet-400/70" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="p-2.5 rounded-xl glass-panel border border-white/10 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Animated Dropdown / Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="lg:hidden fixed inset-x-4 top-20 z-50 p-5 rounded-2xl glass-panel bg-dark-900/95 border border-white/10 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  const Icon = link.icon;
                  return (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? "bg-violet-600/20 text-violet-300 border border-violet-500/30"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${isActive ? "text-violet-400" : "text-slate-400"}`} />
                        <span>{link.name}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${isActive ? "text-violet-400" : "text-slate-600"}`} />
                    </NavLink>
                  );
                })}

                <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setPinModalOpen(true);
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10"
                  >
                    <Lock className="w-4 h-4 text-violet-400" />
                    <span>{isEditMode ? "Portfolio Edit Active" : "Edit Portfolio"}</span>
                  </button>

                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Download Resume (PDF)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <PinModal
        isOpen={pinModalOpen}
        onClose={() => setPinModalOpen(false)}
      />
    </>
  );
}
