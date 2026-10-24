import React from "react";
import { Trophy, Award, Star, Flame, Sparkles, Users, ShieldCheck, ExternalLink, Calendar } from "lucide-react";

const iconMap = {
  Trophy: Trophy,
  Award: Award,
  Star: Star,
  Flame: Flame,
  Sparkles: Sparkles,
  Users: Users,
  ShieldCheck: ShieldCheck
};

export default function AchievementCard({ achievement }) {
  const IconComponent = iconMap[achievement.icon] || Trophy;

  return (
    <div className={`glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between border transition-all duration-300 ${
      achievement.featured
        ? "border-amber-500/30 bg-dark-850/90 shadow-xl shadow-amber-950/20"
        : "border-white/10 bg-dark-850/60 hover:border-violet-500/30"
    }`}>
      {/* Top Featured Ribbon */}
      {achievement.featured && (
        <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-violet-500" />
      )}

      <div>
        {/* Category & Badge */}
        <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
          <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-violet-500/15 text-violet-300 border border-violet-500/30">
            {achievement.category}
          </span>

          {achievement.badge && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400/20" />
              <span>{achievement.badge}</span>
            </span>
          )}
        </div>

        {/* Title with Icon */}
        <div className="flex items-start gap-3 mt-2">
          <div className="p-2.5 rounded-xl bg-violet-600/10 border border-violet-500/20 text-violet-400 flex-shrink-0 mt-0.5">
            <IconComponent className="w-5 h-5" />
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg text-white leading-snug">
              {achievement.title}
            </h3>
            <p className="text-xs font-medium text-cyan-400 mt-1">
              {achievement.organization}
            </p>
          </div>
        </div>

        {/* Date */}
        <div className="inline-flex items-center gap-1 text-xs text-slate-500 mt-3 mb-3">
          <Calendar className="w-3.5 h-3.5" />
          <span>{achievement.date}</span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
          {achievement.description}
        </p>

        {/* Highlights */}
        {achievement.highlights && achievement.highlights.length > 0 && (
          <ul className="space-y-1.5 pt-3 border-t border-white/5 mb-4">
            {achievement.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 flex-shrink-0"></span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Proof or Project Link if available */}
      {achievement.proofUrl && (
        <div className="pt-3 border-t border-white/5 flex justify-end">
          <a
            href={achievement.proofUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-violet-400 hover:text-violet-300 transition-colors"
          >
            <span>View Project / Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </div>
  );
}
