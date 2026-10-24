import React, { useState, useEffect } from "react";
import { X, User, CheckCircle2, Globe, Sparkles, MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { usePortfolio } from "../../context/PortfolioContext";

export default function EditProfileModal({ isOpen, onClose, initialTab = "basic" }) {
  const { profile, updateProfile } = usePortfolio();

  const [activeTab, setActiveTab] = useState(initialTab);

  // Form states
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const [title, setTitle] = useState("");
  const [statusLabel, setStatusLabel] = useState("");
  const [statusSubtext, setStatusSubtext] = useState("");
  
  const [shortIntro, setShortIntro] = useState("");
  const [summary, setSummary] = useState("");
  const [careerGoals, setCareerGoals] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [collegeCampus, setCollegeCampus] = useState("");

  const [codechef, setCodechef] = useState("");
  const [leetcode, setLeetcode] = useState("");
  const [hackerrank, setHackerrank] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");

  useEffect(() => {
    if (profile && isOpen) {
      setName(profile.name || "");
      setFullName(profile.fullName || "");
      setTitle(profile.title || "");
      setStatusLabel(profile.status?.label || "");
      setStatusSubtext(profile.status?.subtext || "");

      setShortIntro(profile.shortIntro || "");
      setSummary(profile.summary || "");
      setCareerGoals(profile.careerGoals || "");

      setEmail(profile.email || "");
      setPhone(profile.phone || "");
      setCity(profile.location?.city || "");
      setState(profile.location?.state || "");
      country && setCountry(profile.location?.country || "India");
      setCollegeCampus(profile.location?.collegeCampus || "");

      setCodechef(profile.socialLinks?.codechef || "");
      setLeetcode(profile.socialLinks?.leetcode || "");
      setHackerrank(profile.socialLinks?.hackerrank || "");
      setGithub(profile.socialLinks?.github || "");
      setLinkedin(profile.socialLinks?.linkedin || "");
      setActiveTab(initialTab);
    }
  }, [profile, isOpen, initialTab]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    updateProfile({
      name: name.trim() || "SAJJA DILEEP",
      fullName: fullName.trim() || name.trim() || "SAJJA DILEEP",
      title: title.trim(),
      status: {
        label: statusLabel.trim(),
        subtext: statusSubtext.trim()
      },
      shortIntro: shortIntro.trim(),
      summary: summary.trim(),
      careerGoals: careerGoals.trim(),
      email: email.trim(),
      phone: phone.trim(),
      location: {
        city: city.trim(),
        state: state.trim(),
        country: country.trim() || "India",
        collegeCampus: collegeCampus.trim()
      },
      socialLinks: {
        codechef: codechef.trim(),
        leetcode: leetcode.trim(),
        hackerrank: hackerrank.trim(),
        github: github.trim(),
        linkedin: linkedin.trim(),
        email: `mailto:${email.trim()}`
      }
    });

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
        className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-dark-900 shadow-2xl p-6 sm:p-8 z-10 max-h-[92vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-violet-600/10 border border-violet-500/20 text-violet-400">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white">
              Edit Engineering Profile
            </h3>
            <p className="text-xs text-slate-400">
              Update your name, designation, bio summary, contact details, and coding handles in real-time.
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-dark-800/80 border border-white/5 mb-6 overflow-x-auto scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab("basic")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === "basic"
                ? "bg-violet-600 text-white shadow-md shadow-violet-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Basic Identity
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("bio")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === "bio"
                ? "bg-violet-600 text-white shadow-md shadow-violet-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Bio & Goals
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("contact")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === "contact"
                ? "bg-violet-600 text-white shadow-md shadow-violet-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Contact & Location
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("socials")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === "socials"
                ? "bg-violet-600 text-white shadow-md shadow-violet-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Coding & Social Profiles
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* TAB 1: BASIC IDENTITY */}
          {activeTab === "basic" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Display Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. SAJJA DILEEP"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-violet-500/60"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. SAJJA DILEEP"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-violet-500/60"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Professional Title / Role *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Software Engineer & Java Full Stack Developer"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-violet-500/60"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Current Company / Status
                  </label>
                  <input
                    type="text"
                    value={statusLabel}
                    onChange={(e) => setStatusLabel(e.target.value)}
                    placeholder="e.g. Associate Engineer @ Virtusa"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-violet-500/60"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Experience Badge Caption
                  </label>
                  <input
                    type="text"
                    value={statusSubtext}
                    onChange={(e) => setStatusSubtext(e.target.value)}
                    placeholder="e.g. 1 Year Professional Experience in Java & React"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-violet-500/60"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: BIO & GOALS */}
          {activeTab === "bio" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Short Hero Introduction *
                </label>
                <textarea
                  rows={2}
                  value={shortIntro}
                  onChange={(e) => setShortIntro(e.target.value)}
                  placeholder="Concise 1-2 sentence intro for hero section..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-violet-500/60 leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Professional Summary / Bio *
                </label>
                <textarea
                  rows={4}
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  placeholder="Comprehensive engineering background, specializations, frameworks, and architecture experience..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-violet-500/60 leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Career Goals & Technical Vision
                </label>
                <textarea
                  rows={3}
                  value={careerGoals}
                  onChange={(e) => setCareerGoals(e.target.value)}
                  placeholder="Future technical directions, scalable systems, and aspirations..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-violet-500/60 leading-relaxed"
                />
              </div>
            </div>
          )}

          {/* TAB 3: CONTACT & LOCATION */}
          {activeTab === "contact" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="dileep.sajja03@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-violet-500/60"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 7981305975"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-violet-500/60"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    City / Town
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Peddapuram, Kakinada"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-violet-500/60"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="Andhra Pradesh & Telangana"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-violet-500/60"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="India"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-violet-500/60"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  College / Academic Campus Base
                </label>
                <input
                  type="text"
                  value={collegeCampus}
                  onChange={(e) => setCollegeCampus(e.target.value)}
                  placeholder="CVR College of Engineering, Ibrahimpatnam, Hyderabad 501510"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-violet-500/60"
                />
              </div>
            </div>
          )}

          {/* TAB 4: CODING & SOCIAL HANDLES */}
          {activeTab === "socials" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-orange-300 mb-1">
                  CodeChef Profile URL
                </label>
                <input
                  type="url"
                  value={codechef}
                  onChange={(e) => setCodechef(e.target.value)}
                  placeholder="https://www.codechef.com/users/dileepsajja_02"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-orange-500/30 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-orange-500/60"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1">
                  LeetCode Profile URL
                </label>
                <input
                  type="url"
                  value={leetcode}
                  onChange={(e) => setLeetcode(e.target.value)}
                  placeholder="https://leetcode.com/u/DILEEPSAJJA/"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-500/60"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-300 mb-1">
                  HackerRank Profile URL
                </label>
                <input
                  type="url"
                  value={hackerrank}
                  onChange={(e) => setHackerrank(e.target.value)}
                  placeholder="https://www.hackerrank.com/profile/sajjadileep2003"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/60"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  GitHub Profile URL
                </label>
                <input
                  type="url"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                  placeholder="https://github.com/DILEEPSAJJA"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-violet-500/60"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-sky-300 mb-1">
                  LinkedIn Profile URL
                </label>
                <input
                  type="url"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  placeholder="https://www.linkedin.com/in/dileep-sajja-317832255/"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-sky-500/60"
                />
              </div>
            </div>
          )}

          {/* Form Actions */}
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
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-600/25 transition-all font-bold"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Save Profile Changes</span>
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
