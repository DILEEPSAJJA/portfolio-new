import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  FileText, 
  Sparkles, 
  Terminal, 
  Compass, 
  FolderGit2, 
  UserCheck, 
  Award,
  ChevronDown,
  Layers,
  Code2
} from "lucide-react";
import { profileData } from "../data/profile";
import SocialLinks from "../components/SocialLinks";
import PageTransition from "../components/PageTransition";

export default function Home() {
  useEffect(() => {
    document.title = `${profileData.name} | Software Engineer & Creative Developer`;
  }, []);

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section: Two-Column Desktop Layout */}
        <section className="pt-6 sm:pt-12 pb-16 lg:pb-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column: Introduction & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              <span>Full-Stack Web & Software Engineer</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.15]">
              Hi, I’m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400">
                {profileData.name}
              </span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-300 mt-2 block">
                {profileData.title}
              </span>
            </h1>

            {/* Short Impactful Intro */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {profileData.shortIntro}
            </p>

            {/* Background & Interests Summary */}
            <p className="text-sm text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Graduate from <span className="text-slate-200 font-medium">CVR College of Engineering</span> (B.Tech IT, 8.56 CGPA). Passionate about crafting resilient full-stack systems, real-time web applications, and intuitive UI/UX with modern React, Node.js, and Java.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white shadow-xl shadow-violet-600/30 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/profile"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm bg-dark-850 hover:bg-dark-800 text-slate-200 hover:text-white border border-white/10 hover:border-violet-500/40 transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm"
              >
                <span>View Full Profile</span>
                <UserCheck className="w-4 h-4 text-violet-400" />
              </Link>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-heading font-semibold text-sm text-slate-400 hover:text-white transition-colors"
                title="Download Resume PDF"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Connect:
              </span>
              <SocialLinks variant="simple" />
            </div>
          </motion.div>

          {/* Right Column: Profile Photograph Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex-1 flex justify-center items-center relative"
          >
            {/* Ambient Background Aura behind photo */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-violet-600/30 via-indigo-600/20 to-cyan-500/30 blur-3xl -z-10 animate-pulse-subtle" />

            {/* Outer Geometric Frame */}
            <div className="relative p-2 rounded-3xl bg-gradient-to-tr from-violet-600/60 via-indigo-500/30 to-cyan-400/60 shadow-2xl shadow-violet-950/40">
              <div className="relative rounded-[22px] overflow-hidden bg-dark-900 border border-white/10 w-64 sm:w-80 md:w-88 aspect-[4/5] shadow-inner">
                <img
                  src={profileData.heroImage}
                  alt={profileData.name}
                  loading="eager"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle bottom gradient shade over photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Info Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-panel border border-white/10 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-heading font-bold text-white">
                        {profileData.name}
                      </p>
                      <p className="text-[11px] text-cyan-300">
                        {profileData.title}
                      </p>
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-md shadow-emerald-400/50 animate-ping" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Compact Highlights Area */}
        <section className="py-8 border-y border-white/10 my-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {profileData.highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-4 rounded-2xl glass-card border border-white/5"
              >
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-indigo-200 to-cyan-300">
                  {h.value}
                </div>
                <div className="text-xs font-semibold text-slate-300 mt-1">
                  {h.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {h.caption}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Quick Navigation Teaser Cards to Explore Dedicated Pages */}
        <section className="py-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Explore Portfolio Sections
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Each dedicated section showcases thorough details, links, and official credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              to="/projects"
              className="p-6 rounded-2xl glass-card border border-white/10 hover:border-violet-500/40 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-500/20 text-violet-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white group-hover:text-violet-300 transition-colors">
                  Featured Projects
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  FLEW dessert shop, HelpEZ disaster crowdsourcing, TicketDesk, and real-time platforms with live demos and repositories.
                </p>
              </div>
              <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-violet-400 group-hover:translate-x-1 transition-transform">
                <span>View Projects Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <Link
              to="/profile"
              className="p-6 rounded-2xl glass-card border border-white/10 hover:border-cyan-500/40 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-600/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                  Skills & Profiles
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Categorized technical stack (Java, React, SQL, Cloud), coding handles (LeetCode, HackerRank, CodeChef), and contact details.
                </p>
              </div>
              <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                <span>Explore Full Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <Link
              to="/achievements"
              className="p-6 rounded-2xl glass-card border border-white/10 hover:border-amber-500/40 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-600/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white group-hover:text-amber-300 transition-colors">
                  Achievements & Honors
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  National Hackathon Winner (CSI HackFusion 1st of 100 teams), SAP TechFest Finalist, CIG & OFC recognitions.
                </p>
              </div>
              <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
                <span>View All Achievements</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
