import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Building2, CheckCircle2, Award, Sparkles, Plus, Star } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";
import SectionHeading from "../components/SectionHeading";
import ExperienceCard from "../components/ExperienceCard";
import PageTransition from "../components/PageTransition";
import EditExperienceModal from "../components/editor/EditExperienceModal";

export default function Experience() {
  const { experience, isEditMode } = usePortfolio();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [activeTab, setActiveTab] = useState("all"); // "all", "work", "leadership"

  useEffect(() => {
    document.title = "Experience & Roles | Dileep Sajja";
  }, []);

  const handleOpenAdd = () => {
    setEditingItem(null);
    setModalOpen(true);
  };

  const handleOpenEdit = (item) => {
    setEditingItem(item);
    setModalOpen(true);
  };

  // Segregate work experiences (Virtusa, corporate) from roles & responsibilities (Salesforce, IngenuITy, Theatre Club)
  const workExperiences = experience.filter(
    (item) => item.category === "work" || item.company?.toLowerCase().includes("virtusa")
  );

  const rolesAndResponsibilities = experience.filter(
    (item) => item.category === "leadership" || !item.company?.toLowerCase().includes("virtusa")
  );

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career Journey & Engagements"
          title="Experience &"
          highlight="Responsibilities"
          subtitle="A structured overview distinguishing professional work experience at Virtusa from leadership roles, internships, and organizational responsibilities."
        />

        {/* Edit Mode Bar */}
        {isEditMode && (
          <div className="mb-8 p-4 rounded-2xl glass-panel border border-indigo-500/30 bg-dark-900/80 max-w-4xl mx-auto flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-indigo-300 font-heading">
                Experience Management Active
              </h4>
              <p className="text-xs text-slate-400">
                You can add new roles, modify bullet points, or recategorize entries.
              </p>
            </div>
            <button
              onClick={handleOpenAdd}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-md shadow-indigo-600/30 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Add Experience / Role</span>
            </button>
          </div>
        )}

        {/* View Switcher Pills */}
        <div className="mb-12 flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveTab("all")}
            type="button"
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
              activeTab === "all"
                ? "bg-violet-600 text-white shadow-md shadow-violet-600/30 border border-violet-400/30"
                : "bg-dark-850/80 text-slate-400 hover:text-white hover:bg-dark-800 border border-white/5"
            }`}
          >
            All Experiences & Roles
          </button>
          <button
            onClick={() => setActiveTab("work")}
            type="button"
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
              activeTab === "work"
                ? "bg-violet-600 text-white shadow-md shadow-violet-600/30 border border-violet-400/30"
                : "bg-dark-850/80 text-slate-400 hover:text-white hover:bg-dark-800 border border-white/5"
            }`}
          >
            <Briefcase className="w-3.5 h-3.5 text-violet-300" />
            <span>Work Experience ({workExperiences.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("leadership")}
            type="button"
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
              activeTab === "leadership"
                ? "bg-violet-600 text-white shadow-md shadow-violet-600/30 border border-violet-400/30"
                : "bg-dark-850/80 text-slate-400 hover:text-white hover:bg-dark-800 border border-white/5"
            }`}
          >
            <Users className="w-3.5 h-3.5 text-cyan-300" />
            <span>Roles & Responsibilities ({rolesAndResponsibilities.length})</span>
          </button>
        </div>

        {/* SECTION 1: WORK EXPERIENCE (VIRTUSA) */}
        {(activeTab === "all" || activeTab === "work") && (
          <section className="mb-14 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
              <div className="p-2.5 rounded-xl bg-violet-600/10 border border-violet-500/20 text-violet-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                  Professional Work Experience
                </h2>
                <p className="text-xs text-slate-400">
                  Full-time corporate software engineering roles & enterprise application delivery
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {workExperiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <ExperienceCard experience={exp} onEdit={handleOpenEdit} />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 2: ROLES & RESPONSIBILITIES */}
        {(activeTab === "all" || activeTab === "leadership") && (
          <section className="mb-14 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
              <div className="p-2.5 rounded-xl bg-cyan-600/10 border border-cyan-500/20 text-cyan-400">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                  Roles & Responsibilities
                </h2>
                <p className="text-xs text-slate-400">
                  Internships, departmental leadership, and organizational stewardship
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {rolesAndResponsibilities.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <ExperienceCard experience={exp} onEdit={handleOpenEdit} />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Value Proposition Callout */}
        <div className="mt-16 max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl glass-panel border border-violet-500/20 bg-dark-900/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-violet-600/10 border border-violet-500/30 text-violet-400 flex-shrink-0">
              <Sparkles className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-white">
                Engineering Leadership & Delivery
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Combining full-stack software expertise at Virtusa with active departmental leadership. Always open to discussing distributed architecture and high-impact engineering projects.
              </p>
            </div>
          </div>

          <a
            href="mailto:dileep.sajja03@gmail.com?subject=Engineering%20Role%20Inquiry"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-600/25 transition-all whitespace-nowrap"
          >
            <span>Get in Touch</span>
          </a>
        </div>
      </div>

      <EditExperienceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        experienceToEdit={editingItem}
      />
    </PageTransition>
  );
}
