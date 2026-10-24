import React, { useState, useEffect } from "react";
import { X, Briefcase, Plus, Trash2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { usePortfolio } from "../../context/PortfolioContext";

export default function EditExperienceModal({ isOpen, onClose, experienceToEdit }) {
  const { addExperience, updateExperience } = usePortfolio();

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [employmentType, setEmploymentType] = useState("Full-Time");
  const [category, setCategory] = useState("work");
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
      setCategory(experienceToEdit.category || (experienceToEdit.company?.toLowerCase().includes("virtusa") ? "work" : "leadership"));
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
      setCategory("work");
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
      category,
      categoryLabel: category === "work" ? "Work Experience" : "Roles & Responsibilities",
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
              {experienceToEdit ? "Edit Entry" : "Add New Entry"}
            </h3>
            <p className="text-xs text-slate-400">
              Categorize as Work Experience (e.g. Virtusa) or Roles & Responsibilities
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* Classification Option */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Section Classification *
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label
                className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer text-xs font-medium transition-all ${
                  category === "work"
                    ? "bg-violet-600/20 border-violet-500 text-white shadow-md shadow-violet-600/20"
                    : "bg-dark-950 border-white/10 text-slate-400 hover:border-white/20"
                }`}
              >
                <input
                  type="radio"
                  name="category"
                  value="work"
                  checked={category === "work"}
                  onChange={() => setCategory("work")}
                  className="hidden"
                />
                <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${category === "work" ? "border-violet-400 bg-violet-500" : "border-slate-500"}`}>
                  {category === "work" && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                </span>
                <span>Work Experience</span>
              </label>

              <label
                className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer text-xs font-medium transition-all ${
                  category === "leadership"
                    ? "bg-cyan-600/20 border-cyan-500 text-white shadow-md shadow-cyan-600/20"
                    : "bg-dark-950 border-white/10 text-slate-400 hover:border-white/20"
                }`}
              >
                <input
                  type="radio"
                  name="category"
                  value="leadership"
                  checked={category === "leadership"}
                  onChange={() => setCategory("leadership")}
                  className="hidden"
                />
                <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${category === "leadership" ? "border-cyan-400 bg-cyan-500" : "border-slate-500"}`}>
                  {category === "leadership" && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                </span>
                <span>Roles & Responsibilities</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Company / Organization *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Virtusa, Salesforce, IngenuITy"
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
                Employment / Role Type
              </label>
              <select
                value={employmentType}
                onChange={(e) => setEmploymentType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Internship">Internship / Virtual</option>
                <option value="Student Leadership">Student Leadership</option>
                <option value="Club Leadership">Club Leadership</option>
                <option value="Contract / Freelance">Contract / Freelance</option>
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
              Mark as my Current Active Role (displays pulsing badge)
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
              {experienceToEdit ? "Save Changes" : "Create Entry"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
