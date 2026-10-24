import React, { useState, useEffect } from "react";
import { X, Trophy, Award, Star, Flame, Sparkles, Users, ShieldCheck, Plus, Trash2, CheckCircle2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { usePortfolio } from "../../context/PortfolioContext";
import { achievementCategories } from "../../data/achievements";

const availableIcons = [
  { name: "Trophy", icon: Trophy, label: "Trophy (Winner)" },
  { name: "Award", icon: Award, label: "Award (Honor)" },
  { name: "Star", icon: Star, label: "Star (Excellence)" },
  { name: "Flame", icon: Flame, label: "Flame (Special)" },
  { name: "Sparkles", icon: Sparkles, label: "Sparkles (Innovation)" },
  { name: "Users", icon: Users, label: "Users (Leadership)" },
  { name: "ShieldCheck", icon: ShieldCheck, label: "Shield (Stewardship)" }
];

export default function EditAchievementModal({ isOpen, onClose, achievementToEdit }) {
  const { addAchievement, updateAchievement } = usePortfolio();

  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [category, setCategory] = useState("Hackathons & Competitions");
  const [date, setDate] = useState("");
  const [badge, setBadge] = useState("");
  const [icon, setIcon] = useState("Trophy");
  const [featured, setFeatured] = useState(false);
  const [description, setDescription] = useState("");
  const [highlights, setHighlights] = useState([""]);
  const [proofUrl, setProofUrl] = useState("");

  const categories = achievementCategories.filter((c) => c !== "All");

  useEffect(() => {
    if (achievementToEdit) {
      setTitle(achievementToEdit.title || "");
      setOrganization(achievementToEdit.organization || "");
      setCategory(achievementToEdit.category || "Hackathons & Competitions");
      setDate(achievementToEdit.date || "");
      setBadge(achievementToEdit.badge || "");
      setIcon(achievementToEdit.icon || "Trophy");
      setFeatured(Boolean(achievementToEdit.featured));
      setDescription(achievementToEdit.description || "");
      setHighlights(
        achievementToEdit.highlights && achievementToEdit.highlights.length > 0
          ? [...achievementToEdit.highlights]
          : [""]
      );
      setProofUrl(achievementToEdit.proofUrl || "");
    } else {
      setTitle("");
      setOrganization("");
      setCategory("Hackathons & Competitions");
      setDate(new Date().getFullYear().toString());
      setBadge("");
      setIcon("Trophy");
      setFeatured(false);
      setDescription("");
      setHighlights([""]);
      setProofUrl("");
    }
  }, [achievementToEdit, isOpen]);

  if (!isOpen) return null;

  const handleAddHighlight = () => {
    setHighlights([...highlights, ""]);
  };

  const handleRemoveHighlight = (index) => {
    setHighlights(highlights.filter((_, i) => i !== index));
  };

  const handleHighlightChange = (index, value) => {
    const updated = [...highlights];
    updated[index] = value;
    setHighlights(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !organization.trim()) return;

    const cleanedHighlights = highlights.map((h) => h.trim()).filter(Boolean);

    const payload = {
      title: title.trim(),
      organization: organization.trim(),
      category,
      date: date.trim() || new Date().getFullYear().toString(),
      badge: badge.trim() || null,
      icon,
      featured,
      description: description.trim(),
      highlights: cleanedHighlights,
      proofUrl: proofUrl.trim() || null
    };

    if (achievementToEdit?.id) {
      updateAchievement(achievementToEdit.id, payload);
    } else {
      addAchievement({
        id: `ach-${Date.now()}`,
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
          <div className="p-2.5 rounded-xl bg-amber-600/10 border border-amber-500/20 text-amber-400">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white">
              {achievementToEdit ? "Edit Achievement" : "Add Achievement / Award"}
            </h3>
            <p className="text-xs text-slate-400">
              Showcase hackathon wins, leadership citations, and institutional recognition.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* Title */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Title / Honor Name *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. 1st Place Winner — HackFusion 2024"
              className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-500/60"
            />
          </div>

          {/* Organization & Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Organization / Event *
              </label>
              <input
                type="text"
                required
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="e.g. CSI Hyderabad / SAP Labs"
                className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-500/60"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Year / Period
              </label>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="e.g. 2024 or 2023 – 2024"
                className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-500/60"
              />
            </div>
          </div>

          {/* Category & Badge */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-500/60"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Honor Badge (Optional)
              </label>
              <input
                type="text"
                value={badge}
                onChange={(e) => setBadge(e.target.value)}
                placeholder="e.g. 1st Place (100+ Teams)"
                className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-500/60"
              />
            </div>
          </div>

          {/* Icon Selector & Featured Checkbox */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Card Icon
              </label>
              <select
                value={icon}
                onChange={(e) => setIcon(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-500/60"
              >
                {availableIcons.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-4 sm:pt-6">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="w-4 h-4 rounded text-amber-500 focus:ring-amber-500 border-white/20 bg-dark-800"
                />
                <span className="text-xs font-medium text-amber-300">
                  Highlight as Featured Achievement (Glow header)
                </span>
              </label>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Description / Overview
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief summary of the achievement, competition scope, or impact..."
              className="w-full px-3.5 py-2 rounded-xl bg-dark-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-500/60 leading-relaxed"
            />
          </div>

          {/* Highlights */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-semibold text-slate-300">
                Key Highlights / Milestones
              </label>
              <button
                type="button"
                onClick={handleAddHighlight}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400 hover:text-amber-300"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Bullet</span>
              </button>
            </div>

            <div className="space-y-2">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={highlight}
                    onChange={(e) => handleHighlightChange(index, e.target.value)}
                    placeholder={`Highlight #${index + 1}...`}
                    className="flex-1 px-3 py-1.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-500/60"
                  />
                  {highlights.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveHighlight(index)}
                      className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Proof / Project URL */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Proof / Demo / Project URL (Optional)
            </label>
            <input
              type="url"
              value={proofUrl}
              onChange={(e) => setProofUrl(e.target.value)}
              placeholder="https://..."
              className="w-full px-3.5 py-2 rounded-xl bg-dark-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-500/60"
            />
          </div>

          {/* Actions */}
          <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold shadow-lg shadow-amber-500/25 transition-all"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{achievementToEdit ? "Save Changes" : "Create Achievement"}</span>
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
