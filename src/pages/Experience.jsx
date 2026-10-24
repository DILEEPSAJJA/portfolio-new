import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, CheckCircle2, Award, Sparkles, Plus } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";
import SectionHeading from "../components/SectionHeading";
import ExperienceCard from "../components/ExperienceCard";
import PageTransition from "../components/PageTransition";
import EditExperienceModal from "../components/editor/EditExperienceModal";

export default function Experience() {
  const { experience, isEditMode } = usePortfolio();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    document.title = "Experience & Work History | Dileep Sajja";
  }, []);

  const handleOpenAdd = () => {
    setEditingItem(null);
    setModalOpen(true);
  };

  const handleOpenEdit = (item) => {
    setEditingItem(item);
    setModalOpen(true);
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Professional Background"
          title="Work Experience"
          highlight="& Engineering Roles"
          subtitle="A track record of engineering scalable Java microservices, cloud platforms, and impactful organizational leadership."
        />

        {/* Action Header in Edit Mode */}
        {isEditMode && (
          <div className="mb-8 p-4 rounded-2xl glass-panel border border-indigo-500/30 bg-dark-900/80 max-w-4xl mx-auto flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-indigo-300 font-heading">
                Experience Management Active
              </h4>
              <p className="text-xs text-slate-400">
                You can add new career experiences or edit existing roles in real-time.
              </p>
            </div>
            <button
              onClick={handleOpenAdd}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-md shadow-indigo-600/30 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Add Experience</span>
            </button>
          </div>
        )}

        {/* Experience List */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <ExperienceCard experience={exp} onEdit={handleOpenEdit} />
            </motion.div>
          ))}
        </div>

        {/* Value Proposition Callout */}
        <div className="mt-16 max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl glass-panel border border-violet-500/20 bg-dark-900/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-violet-600/10 border border-violet-500/30 text-violet-400 flex-shrink-0">
              <Sparkles className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-white">
                Ready for Engineering Impact
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Combining 1 year of hands-on Java Full Stack & Microservice engineering at Virtusa with proven problem-solving rigor. Open to discussing engineering challenges.
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
