import React from "react";
import { Mail, ExternalLink } from "lucide-react";
import { 
  GithubIcon, 
  LinkedinIcon, 
  LeetCodeIcon, 
  HackerRankIcon, 
  CodeChefIcon 
} from "./BrandIcons";
import { profileData } from "../data/profile";

export default function SocialLinks({ variant = "simple", className = "" }) {
  const { socialLinks } = profileData;

  const links = [
    {
      name: "GitHub",
      url: socialLinks.github,
      icon: GithubIcon,
      color: "hover:text-white hover:border-white/40 hover:bg-white/5",
      badge: "Projects & Repos"
    },
    {
      name: "LinkedIn",
      url: socialLinks.linkedin,
      icon: LinkedinIcon,
      color: "hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10",
      badge: "Professional Profile"
    },
    {
      name: "LeetCode",
      url: socialLinks.leetcode,
      icon: LeetCodeIcon,
      color: "hover:text-amber-400 hover:border-amber-500/40 hover:bg-amber-500/10",
      badge: "Problem Solving"
    },
    {
      name: "HackerRank",
      url: socialLinks.hackerrank,
      icon: HackerRankIcon,
      color: "hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10",
      badge: "Gold Certified SQL & Java"
    },
    {
      name: "CodeChef",
      url: socialLinks.codechef,
      icon: CodeChefIcon,
      color: "hover:text-orange-400 hover:border-orange-500/40 hover:bg-orange-500/10",
      badge: "Competitive Division"
    },
    {
      name: "Email",
      url: socialLinks.email,
      icon: Mail,
      color: "hover:text-violet-400 hover:border-violet-500/40 hover:bg-violet-500/10",
      badge: "Direct Contact"
    }
  ];

  if (variant === "cards") {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between p-4 rounded-xl border border-white/5 bg-dark-850/60 hover:bg-dark-800/80 transition-all duration-300 group ${link.color}`}
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
            target="_blank"
            rel="noopener noreferrer"
            title={link.name}
            aria-label={link.name}
            className={`p-2.5 rounded-xl border border-white/10 bg-dark-850/80 text-slate-300 hover:text-white transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm ${link.color}`}
          >
            <Icon className="w-4 h-4" />
          </a>
        );
      })}
    </div>
  );
}
