import React from "react";
import { Mail, ExternalLink } from "lucide-react";
import { 
  GithubIcon, 
  LinkedinIcon, 
  LeetCodeIcon, 
  HackerRankIcon, 
  CodeChefIcon 
} from "./BrandIcons";
import { usePortfolio } from "../context/PortfolioContext";

export default function SocialLinks({ variant = "simple", className = "" }) {
  const { profile } = usePortfolio();
  const { socialLinks = {} } = profile;

  // Clean raw email and guarantee genuine mailto URI
  const rawEmail = (profile.email || "dileep.sajja03@gmail.com")
    .replace(/^mailto:/, "")
    .trim();
  const emailMailtoUrl = `mailto:${rawEmail}?subject=Direct%20Inquiry%20from%20Portfolio`;

  const links = [
    {
      name: "GitHub",
      url: socialLinks.github || "https://github.com/DILEEPSAJJA",
      icon: GithubIcon,
      color: "hover:text-white hover:border-white/40 hover:bg-white/5",
      badge: "Projects & Repos",
      isEmail: false
    },
    {
      name: "LinkedIn",
      url: socialLinks.linkedin || "https://www.linkedin.com/in/dileep-sajja-317832255/",
      icon: LinkedinIcon,
      color: "hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10",
      badge: "Professional Profile",
      isEmail: false
    },
    {
      name: "LeetCode",
      url: socialLinks.leetcode || "https://leetcode.com/u/DILEEPSAJJA/",
      icon: LeetCodeIcon,
      color: "hover:text-amber-400 hover:border-amber-500/40 hover:bg-amber-500/10",
      badge: "Problem Solving",
      isEmail: false
    },
    {
      name: "HackerRank",
      url: socialLinks.hackerrank || "https://www.hackerrank.com/profile/sajjadileep2003",
      icon: HackerRankIcon,
      color: "hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10",
      badge: "Gold Certified SQL & Java",
      isEmail: false
    },
    {
      name: "CodeChef",
      url: socialLinks.codechef || "https://www.codechef.com/users/dileepsajja_02",
      icon: CodeChefIcon,
      color: "hover:text-orange-400 hover:border-orange-500/40 hover:bg-orange-500/10",
      badge: "Competitive Division",
      isEmail: false
    },
    {
      name: "Email",
      url: emailMailtoUrl,
      icon: Mail,
      color: "hover:text-violet-400 hover:border-violet-500/40 hover:bg-violet-500/10",
      badge: "Direct Contact",
      isEmail: true
    }
  ];

  const handleLinkClick = (e, link) => {
    if (link.isEmail) {
      // Prevent browser from opening blank tabs or navigating to current/previous URL
      e.preventDefault();
      window.location.href = emailMailtoUrl;
    }
  };

  if (variant === "cards") {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target={link.isEmail ? undefined : "_blank"}
              rel={link.isEmail ? undefined : "noopener noreferrer"}
              onClick={(e) => handleLinkClick(e, link)}
              className={`flex items-center justify-between p-4 rounded-xl border border-white/5 bg-dark-850/60 hover:bg-dark-800/80 transition-all duration-300 group cursor-pointer ${link.color}`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-white/5 text-slate-300 group-hover:text-inherit transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200 group-hover:text-white">
                    {link.name}
                  </h4>
                  <p className="text-xs text-slate-400">{link.badge}</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors" />
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 flex-wrap ${className}`}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target={link.isEmail ? undefined : "_blank"}
            rel={link.isEmail ? undefined : "noopener noreferrer"}
            onClick={(e) => handleLinkClick(e, link)}
            title={link.name}
            aria-label={link.name}
            className={`p-2.5 rounded-xl border border-white/10 bg-dark-850/80 text-slate-300 hover:text-white transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm cursor-pointer ${link.color}`}
          >
            <Icon className="w-4 h-4" />
          </a>
        );
      })}
    </div>
  );
}
