import React, { useState, useRef } from "react";
import { X, UploadCloud, Image, Award, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { usePortfolio } from "../../context/PortfolioContext";
import { certificatesCategories } from "../../data/certificates";

export default function AddCertificateModal({ isOpen, onClose }) {
  const { addCertificate } = usePortfolio();
  const fileInputRef = useRef(null);

  const [title, setTitle] = useState("");
  const [issuer, setIssuer] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Cloud & Infrastructure");
  const [verificationUrl, setVerificationUrl] = useState("");
  const [credentialId, setCredentialId] = useState("");
  const [skillsStr, setSkillsStr] = useState("");
  const [description, setDescription] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadError, setUploadError] = useState("");

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setUploadError("Please upload a valid image file (JPG, PNG, WebP).");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setUploadError("Image size exceeds 5MB. Please choose a smaller image.");
      return;
    }

    setUploadError("");
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !issuer.trim()) return;

    const skills = skillsStr
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    addCertificate({
      id: `cert-custom-${Date.now()}`,
      title: title.trim(),
      issuer: issuer.trim(),
      date: date.trim() || "Recently Earned",
      category,
      image: imagePreview,
      verificationUrl: verificationUrl.trim() || null,
      credentialId: credentialId.trim() || null,
      skills: skills.length > 0 ? skills : ["Technical Proficiency"],
      description:
        description.trim() ||
        `Verified credential issued by ${issuer.trim()} recognizing excellence in ${category}.`
    });

    // Reset fields
    setTitle("");
    setIssuer("");
    setDate("");
    setVerificationUrl("");
    setCredentialId("");
    setSkillsStr("");
    setDescription("");
    setImagePreview(null);
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
        className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-dark-900 shadow-2xl p-6 sm:p-8 z-10 max-h-[92vh] overflow-y-auto"
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
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white">
              Upload & Add Certificate
            </h3>
            <p className="text-xs text-slate-400">
              Upload certificate photo or document to display in live gallery
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* Certificate Photo Upload Field */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Certificate Photo / Image *
            </label>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />

            {imagePreview ? (
              <div className="relative rounded-xl border border-violet-500/40 bg-dark-950 p-2 overflow-hidden flex flex-col items-center">
                <img
                  src={imagePreview}
                  alt="Certificate Preview"
                  className="max-h-40 w-auto rounded-lg object-contain shadow"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-2 text-xs text-violet-400 hover:text-violet-300 underline font-medium"
                >
                  Change Image
                </button>
              </div>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="cursor-pointer border-2 border-dashed border-white/15 hover:border-violet-500/50 rounded-2xl p-6 text-center bg-dark-950/60 transition-colors"
              >
                <UploadCloud className="w-8 h-8 text-violet-400 mx-auto mb-2" />
                <p className="text-xs font-semibold text-slate-200">
                  Click to select certificate image from your computer
                </p>
                <p className="text-[11px] text-slate-500 mt-1">
                  Supports JPG, PNG, WebP (Max 5MB)
                </p>
              </div>
            )}

            {uploadError && (
              <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{uploadError}</span>
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Certificate Title *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. AWS Certified Developer – Associate"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Issuing Body *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Amazon Web Services, HackerRank"
                value={issuer}
                onChange={(e) => setIssuer(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Issue Date
              </label>
              <input
                type="text"
                placeholder="e.g. October 2024"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
              >
                {certificatesCategories
                  .filter((c) => c !== "All")
                  .map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Credential Verification URL
              </label>
              <input
                type="url"
                placeholder="https://..."
                value={verificationUrl}
                onChange={(e) => setVerificationUrl(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Skills Acquired (Comma-separated)
            </label>
            <input
              type="text"
              placeholder="e.g. Java, Microservices, Spring Boot, AWS"
              value={skillsStr}
              onChange={(e) => setSkillsStr(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Description / Notes
            </label>
            <textarea
              rows={2}
              placeholder="Brief details about the curriculum and examination..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              Publish Certificate
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
