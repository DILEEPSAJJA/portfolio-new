import React, { useState, useEffect } from "react";
import { X, Briefcase, Plus, Trash2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { usePortfolio } from "../../context/PortfolioContext";

export default function EditExperienceModal({ isOpen, onClose, experienceToEdit }) {
  const { addExperience, updateExperience } = usePortfolio();

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [employmentType, setEmploymentType] = useState("Full-Time");
  const [period, setPeriod] = useState("");
  const [current, setCurrent] = useState(false);
  const [location, setLocation] = useState("");
  const [summary, setSummary] = useState("");
  const [responsibilities, setResponsibilities] = useState([""]);
  const [techStr, setTechStr] = useState("");

  useEffect(() => {
    if (experienceToEdit) {
      setCompany(experienceToEdit.company || "");
      setRole(experienceToEdit.role || "");
      setEmploymentType(experienceToEdit.employmentType || "Full-Time");
      setPeriod(experienceToEdit.period || "");
      setCurrent(experienceToEdit.current || false);
      setLocation(experienceToEdit.location || "");
      setSummary(experienceToEdit.summary || "");
      setResponsibilities(
        experienceToEdit.responsibilities && experienceToEdit.responsibilities.length > 0
          ? [...experienceToEdit.responsibilities]
          : [""]
      );
      setTechStr((experienceToEdit.technologies || []).join(", "));
    } else {
      setCompany("");
      setRole("");
      setEmploymentType("Full-Time");
      setPeriod("");
      setCurrent(false);
      setLocation("");
      setSummary("");
      setResponsibilities([""]);
      setTechStr("");
    }
  }, [experienceToEdit, isOpen]);

  if (!isOpen) return null;

  const handleAddResponsibility = () => {
    setResponsibilities([...responsibilities, ""]);
  };

  const handleRemoveResponsibility = (index) => {
    setResponsibilities(responsibilities.filter((_, i) => i !== index));
  };

  const handleResponsibilityChange = (index, value) => {
    const updated = [...responsibilities];
    updated[index] = value;
    setResponsibilities(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!company.trim() || !role.trim()) return;

    const cleanedResponsibilities = responsibilities.map((r) => r.trim()).filter(Boolean);
    const cleanedTech = techStr
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const payload = {
      company: company.trim(),
      role: role.trim(),
      employmentType,
      period: period.trim() || "Present",
      current,
      location: location.trim() || "Remote / Hybrid",
      summary: summary.trim(),
      responsibilities: cleanedResponsibilities,
      technologies: cleanedTech
    };

    if (experienceToEdit?.id) {
      updateExperience(experienceToEdit.id, payload);
    } else {
      addExperience({
        id: `exp-${Date.now()}`,
        ...payload
      });
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
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
        className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-dark-900 shadow-2xl p-6 sm:p-8 z-10 max-h-[92vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 rounded-xl bg-violet-600/10 border border-violet-500/20 text-violet-400">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white">
              {experienceToEdit ? "Edit Experience Entry" : "Add Experience Entry"}
            </h3>
            <p className="text-xs text-slate-400">
              Update organization roles, dates, responsibilities, and technologies
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Company / Organization *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Virtusa, Salesforce"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Role / Job Title *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Associate Engineer (Java Full Stack Developer)"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Employment Type
              </label>
              <select
                value={employmentType}
                onChange={(e) => setEmploymentType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Internship">Internship</option>
                <option value="Contract / Freelance">Contract / Freelance</option>
                <option value="Student Leadership">Student Leadership</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Period / Duration
              </label>
              <input
                type="text"
                placeholder="e.g. 2025 – Present"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Location
              </label>
              <input
                type="text"
                placeholder="e.g. Hyderabad, India"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="current-role-checkbox"
              checked={current}
              onChange={(e) => setCurrent(e.target.checked)}
              className="w-4 h-4 rounded text-violet-600 bg-dark-950 border-white/20 focus:ring-violet-500"
            />
            <label htmlFor="current-role-checkbox" className="text-xs font-semibold text-emerald-400 cursor-pointer">
              Mark as my Current Role (displays active indicator badge)
            </label>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Summary Description
            </label>
            <textarea
              rows={2}
              placeholder="High level overview of your scope and impact..."
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
            />
          </div>

          {/* Responsibilities list */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-semibold text-slate-300">
                Key Responsibilities & Bullet Points
              </label>
              <button
                type="button"
                onClick={handleAddResponsibility}
                className="inline-flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 font-medium"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Bullet</span>
              </button>
            </div>

            <div className="space-y-2">
              {responsibilities.map((resp, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder={`Responsibility #${index + 1}`}
                    value={resp}
                    onChange={(e) => handleResponsibilityChange(index, e.target.value)}
                    className="flex-1 px-3 py-2 rounded-xl bg-dark-950 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
                  />
                  {responsibilities.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveResponsibility(index)}
                      className="p-2 text-slate-500 hover:text-rose-400 rounded-lg hover:bg-white/5 transition-colors"
                      title="Remove bullet"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Technologies Used (Comma-separated)
            </label>
            <input
              type="text"
              placeholder="e.g. Java, Spring Boot, Spring Cloud, Kafka, Docker, React"
              value={techStr}
              onChange={(e) => setTechStr(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
            />
          </div>

          <div className="pt-3 flex items-center gap-3">
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
              {experienceToEdit ? "Save Changes" : "Create Experience"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
