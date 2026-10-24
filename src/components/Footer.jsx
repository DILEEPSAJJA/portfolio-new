import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Heart, Sparkles, Mail, MapPin } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { profile } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative border-t border-white/10 bg-dark-950/70 backdrop-blur-xl mt-20 pt-16 pb-12 overflow-hidden z-10">
      {/* Subtle top ambient glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Col 1: Bio & Monogram */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 p-[1.5px]">
                <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center">
                  <span className="font-heading font-extrabold text-xs text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-cyan-300">
                    {profile.initials}
                  </span>
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-white">
                {profile.name}
              </span>
            </Link>

            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              {profile.tagline || profile.shortIntro}
            </p>

            <div className="flex flex-col gap-2 pt-2 text-xs text-slate-400">
              <a 
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 hover:text-violet-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-violet-400" />
                <span>{profile.email}</span>
              </a>
              <div className="inline-flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{profile.location.city}, {profile.location.country}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4 font-heading">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-white transition-colors">Profile & Skills</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">Projects Gallery</Link>
              </li>
              <li>
                <Link to="/certificates" className="hover:text-white transition-colors">Certifications</Link>
              </li>
              <li>
                <Link to="/education" className="hover:text-white transition-colors">Education Journey</Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-white transition-colors">Experience Timeline</Link>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-white transition-colors">Achievements & Honors</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Connect & Socials */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4 font-heading">
              Connect Online
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Explore my code repositories, competitive coding profiles, and professional network.
            </p>
            <SocialLinks variant="simple" />

            <div className="mt-6">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-violet-400 hover:text-violet-300 transition-colors"
              >
                <span>View Full Curriculum Vitae</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <span>Crafted with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20" />
              <span>using React & Tailwind</span>
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-violet-300 transition-colors"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
