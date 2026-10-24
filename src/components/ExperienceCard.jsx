import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Building2, Edit3, Trash2 } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

export default function ExperienceCard({ experience, onEdit }) {
  const isCurrent = experience.current;
  const { isEditMode, deleteExperience } = usePortfolio();

  return (
    <div className={`glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden border transition-all duration-300 ${
      isCurrent 
        ? "border-violet-500/40 bg-dark-850/90 shadow-xl shadow-violet-950/20" 
        : "border-white/10 bg-dark-850/60 hover:border-white/20"
    }`}>
      {/* Current Employment Glow Strip */}
      {isCurrent && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500" />
      )}

      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="font-heading font-bold text-lg sm:text-xl text-white">
              {experience.role}
            </span>
            {isCurrent && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Current Role
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm text-cyan-400 font-medium">
            <Building2 className="w-4 h-4 text-cyan-400/80" />
            <span>{experience.company}</span>
            <span className="text-slate-500">•</span>
            <span className="text-xs text-slate-400">{experience.employmentType}</span>
          </div>
        </div>

        <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs text-slate-400">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5">
            <Calendar className="w-3.5 h-3.5 text-violet-400" />
            <span>{experience.period}</span>
          </div>
          <div className="inline-flex items-center gap-1 text-slate-500">
            <MapPin className="w-3 h-3" />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
        {experience.summary}
      </p>

      {/* Responsibilities */}
      {experience.responsibilities && experience.responsibilities.length > 0 && (
        <div className="space-y-2 mb-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-heading">
            Key Contributions & Responsibilities
          </h4>
          <ul className="space-y-2">
            {experience.responsibilities.map((resp, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}
      {experience.technologies && experience.technologies.length > 0 && (
        <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-semibold text-slate-400 mr-1.5">Tech & Skills:</span>
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-white/5 text-slate-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* In-Card Edit & Delete Actions for Edit Mode */}
      {isEditMode && (
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => onEdit(experience)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border border-violet-500/30 transition-colors"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit Entry</span>
          </button>
          <button
            type="button"
            onClick={() => {
              if (window.confirm(`Delete experience entry for ${experience.company}?`)) {
                deleteExperience(experience.id);
              }
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/30 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Delete</span>
          </button>
        </div>
      )}
    </div>
  );
}
