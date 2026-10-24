import React from "react";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { usePortfolio } from "../context/PortfolioContext";

export default function EducationTimeline() {
  const { education } = usePortfolio();
  return (
    <div className="relative">
      {/* Central Timeline Vertical Guide Line (Desktop) */}
      <div 
        className="hidden md:block absolute left-1/2 top-6 bottom-6 -translate-x-1/2 w-0.5 bg-gradient-to-b from-violet-500/40 via-cyan-500/30 to-slate-800" 
      />

      {/* Left Timeline Line (Mobile) */}
      <div 
        className="md:hidden absolute left-5 top-6 bottom-6 w-0.5 bg-gradient-to-b from-violet-500/40 via-cyan-500/30 to-slate-800" 
      />

      <div className="space-y-12">
        {education.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row items-start ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Node Center Indicator */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-dark-950 border-2 border-violet-500 shadow-lg shadow-violet-500/30 z-20">
                <GraduationCap className="w-5 h-5 text-violet-400" />
              </div>

              {/* Empty Spacer Column for Desktop Alternate Grid */}
              <div className="hidden md:block md:w-1/2" />

              {/* Education Content Card */}
              <div 
                className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                  isEven ? "md:pr-12 text-left" : "md:pl-12 text-left"
                }`}
              >
                <div className="glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden border border-white/10">
                  {/* Subtle Top Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500" />

                  {/* Level Badge & Duration */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-violet-500/15 text-violet-300 border border-violet-500/30">
                      {item.level}
                    </span>
                    <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-violet-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Degree & Institution */}
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                    {item.degree}
                  </h3>
                  <h4 className="text-sm font-semibold text-cyan-400 mt-1">
                    {item.institution}
                  </h4>

                  {/* Location & Board */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-slate-400">
                    <div className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span>{item.location}</span>
                    </div>
                    {item.affiliation && (
                      <span className="text-slate-500">• {item.affiliation}</span>
                    )}
                  </div>

                  {/* Score / CGPA Highlight */}
                  {item.grade && (
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold">
                      <Award className="w-4 h-4 text-emerald-400" />
                      <span>{item.grade}</span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Coursework Tags */}
                  {item.coursework && item.coursework.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 mb-2">
                        <BookOpen className="w-3.5 h-3.5 text-violet-400" />
                        <span>Key Coursework & Competencies</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-2 py-0.5 rounded text-[11px] font-medium bg-white/5 text-slate-300 border border-white/5"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Highlights List */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 mt-0.5 flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
