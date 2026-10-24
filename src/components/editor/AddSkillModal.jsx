import React, { useState } from "react";
import { X, Plus, Code2, Check } from "lucide-react";
import { motion } from "framer-motion";
import { usePortfolio } from "../../context/PortfolioContext";

export default function AddSkillModal({ isOpen, onClose }) {
  const { profile, addSkill } = usePortfolio();

  const [category, setCategory] = useState(profile.skillCategories[0]?.name || "Backend & Microservices");
  const [customCategory, setCustomCategory] = useState("");
  const [skillName, setSkillName] = useState("");
  const [level, setLevel] = useState("Proficient");
  const [experience, setExperience] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!skillName.trim()) return;

    const targetCategory = category === "NEW_CATEGORY" ? (customCategory.trim() || "Specialized Competencies") : category;

    addSkill(targetCategory, {
      name: skillName.trim(),
      level,
      experience: experience.trim() || "Practical Experience"
    });

    setSkillName("");
    setExperience("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-dark-950/80 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-md rounded-3xl border border-white/10 bg-dark-900 shadow-2xl p-6 sm:p-8 z-10"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-violet-600/10 border border-violet-500/20 text-violet-400">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white">
              Add New Skill
            </h3>
            <p className="text-xs text-slate-400">
              Inject a new technical competency into your live profile
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
            >
              {profile.skillCategories.map((cat) => (
                <option key={cat.name} value={cat.name}>
                  {cat.name}
                </option>
              ))}
              <option value="NEW_CATEGORY">+ Create New Category</option>
            </select>
          </div>

          {category === "NEW_CATEGORY" && (
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                New Category Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Cloud & Serverless"
                value={customCategory}
                onChange={(e) => setCustomCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Skill Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Apache Kafka, Docker, Spring Security"
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Proficiency Level
              </label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
              >
                <option value="Advanced">Advanced</option>
                <option value="Proficient">Proficient</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Certified">Certified</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Experience Note
              </label>
              <input
                type="text"
                placeholder="e.g. Production Experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
              />
            </div>
          </div>

          <div className="pt-4 flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-md shadow-violet-600/30 transition-all"
            >
              Add Skill
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
