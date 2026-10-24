import React, { useState } from "react";
import { Edit3, Plus, Upload, Briefcase, Trophy, User, RotateCcw, LogOut, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolio } from "../../context/PortfolioContext";
import AddSkillModal from "./AddSkillModal";
import AddCertificateModal from "./AddCertificateModal";
import EditExperienceModal from "./EditExperienceModal";
import EditAchievementModal from "./EditAchievementModal";
import EditProfileModal from "./EditProfileModal";

export default function EditorToolbar() {
  const { isEditMode, exitEditMode, resetToDefaults } = usePortfolio();

  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [skillModalOpen, setSkillModalOpen] = useState(false);
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [expModalOpen, setExpModalOpen] = useState(false);
  const [achModalOpen, setAchModalOpen] = useState(false);

  if (!isEditMode) return null;

  return (
    <>
      {/* Floating Bottom Admin Editor Bar */}
      <aside aria-label="Portfolio Editor Controls" className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          className="pointer-events-auto p-2 sm:p-2.5 rounded-2xl glass-panel bg-dark-900/95 border border-violet-500/40 shadow-2xl backdrop-blur-2xl flex flex-wrap items-center justify-between gap-2"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-violet-600/15 border border-violet-500/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            <span className="text-xs font-bold text-violet-300 font-heading">
              Edit Mode Active
            </span>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setProfileModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-200 border border-emerald-500/30 transition-all hover:scale-102"
              title="Edit profile & coding handles"
            >
              <User className="w-3.5 h-3.5 text-emerald-400" />
              <span>Profile</span>
            </button>

            <button
              onClick={() => setSkillModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-violet-600/20 hover:bg-violet-600/30 text-violet-200 border border-violet-500/30 transition-all hover:scale-102"
              title="Add a technical skill"
            >
              <Plus className="w-3.5 h-3.5 text-violet-400" />
              <span>Skill</span>
            </button>

            <button
              onClick={() => setCertModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-200 border border-cyan-500/30 transition-all hover:scale-102"
              title="Upload certificate photo"
            >
              <Upload className="w-3.5 h-3.5 text-cyan-400" />
              <span>Certificate</span>
            </button>

            <button
              onClick={() => setExpModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-200 border border-indigo-500/30 transition-all hover:scale-102"
              title="Add experience entry"
            >
              <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
              <span>Experience</span>
            </button>

            <button
              onClick={() => setAchModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-600/20 hover:bg-amber-600/30 text-amber-200 border border-amber-500/30 transition-all hover:scale-102"
              title="Add achievement or award"
            >
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Achievement</span>
            </button>

            <button
              onClick={resetToDefaults}
              className="p-2 rounded-xl text-xs text-slate-400 hover:text-amber-400 hover:bg-white/5 transition-colors"
              title="Reset content to initial resume defaults"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={exitEditMode}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/30 transition-colors"
              title="Exit and lock edit mode"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Exit</span>
            </button>
          </div>
        </motion.div>
      </aside>

      {/* Editor Dialogs */}
      <EditProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
      />

      <AddSkillModal
        isOpen={skillModalOpen}
        onClose={() => setSkillModalOpen(false)}
      />

      <AddCertificateModal
        isOpen={certModalOpen}
        onClose={() => setCertModalOpen(false)}
      />

      <EditExperienceModal
        isOpen={expModalOpen}
        onClose={() => setExpModalOpen(false)}
      />

      <EditAchievementModal
        isOpen={achModalOpen}
        onClose={() => setAchModalOpen(false)}
      />
    </>
  );
}
