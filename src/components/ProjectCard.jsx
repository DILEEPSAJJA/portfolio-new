import React, { useState } from "react";
import { ExternalLink, Sparkles, Layers, Info, CheckCircle2, X } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectCard({ project }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="group relative rounded-2xl border border-white/10 bg-dark-850/70 hover:bg-dark-800/80 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-violet-950/20 hover:border-violet-500/30">
        {/* Project Thumbnail Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-dark-900 border-b border-white/5">
          <img
            src={project.image}
            alt={`${project.title} Preview Screenshot`}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80" />

          {/* Category Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-dark-950/80 backdrop-blur-md text-violet-300 border border-violet-500/30 shadow-sm">
              {project.category}
            </span>
          </div>

          {/* Quick Info Button */}
          <button
            onClick={() => setShowModal(true)}
            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-dark-950/80 backdrop-blur-md text-slate-300 hover:text-white border border-white/10 hover:border-violet-400 transition-colors"
            title="View Details"
            aria-label={`View details of ${project.title}`}
          >
            <Info className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card Content Body */}
        <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
          <div>
            <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-violet-300 transition-colors leading-snug">
              {project.title}
            </h3>

            <p className="mt-2.5 text-slate-400 text-sm leading-relaxed line-clamp-3">
              {project.shortDescription}
            </p>

            {project.metrics && (
              <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                <span>{project.metrics}</span>
              </div>
            )}
          </div>

          <div>
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1 pb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white/5 text-slate-300 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons: Live Demo & GitHub */}
            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/5">
              {/* Live Demo Button */}
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-md shadow-violet-600/20 transition-all transform hover:-translate-y-0.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <span 
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-white/5 text-slate-500 border border-white/5 cursor-not-allowed"
                  title="Staging / Enterprise Access"
                >
                  <span>Demo Internal</span>
                </span>
              )}

              {/* View on GitHub Button */}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 hover:border-white/20 transition-all transform hover:-translate-y-0.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              ) : (
                <span className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-white/5 text-slate-500 border border-white/5 cursor-not-allowed">
                  <span>Repo Private</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="fixed inset-0 bg-dark-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-dark-900 shadow-2xl p-6 sm:p-8 z-10 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Featured
                  </span>
                )}
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                {project.title}
              </h2>

              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.fullDescription || project.shortDescription}
              </p>

              {project.highlights && project.highlights.length > 0 && (
                <div className="mt-5 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-heading">
                    Key Architectural Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-slate-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white shadow-md shadow-violet-600/30 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open Live App</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
