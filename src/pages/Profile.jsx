import React, { useState, useEffect } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  ExternalLink, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  Sparkles, 
  Globe, 
  Code2, 
  Layers, 
  Server, 
  Wrench,
  Target,
  Plus,
  Trash2,
  Edit3
} from "lucide-react";
import { motion } from "framer-motion";
import { usePortfolio } from "../context/PortfolioContext";
import SectionHeading from "../components/SectionHeading";
import SocialLinks from "../components/SocialLinks";
import PageTransition from "../components/PageTransition";
import AddSkillModal from "../components/editor/AddSkillModal";

const skillCategoryIcons = {
  Code2: Code2,
  Layout: Layers,
  Server: Server,
  Wrench: Wrench
};

export default function Profile() {
  const { profile, isEditMode, deleteSkill } = usePortfolio();
  const [showAddress, setShowAddress] = useState(profile.location.showSensitiveAddress);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [addSkillOpen, setAddSkillOpen] = useState(false);

  useEffect(() => {
    document.title = `Profile & Skills | ${profile.name}`;
  }, [profile.name]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Curriculum & Technical Identity"
          title="Engineering Profile"
          highlight="& Skillset"
          subtitle="A comprehensive overview of my technical specializations, professional background, coding profiles, and contact channels."
        />

        {/* Top Profile Summary Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500" />

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
            {/* Portrait Photo */}
            <div className="relative flex-shrink-0">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-violet-500/40 p-1 bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 shadow-xl shadow-violet-950/30">
                <img
                  src={profile.heroImage}
                  alt={profile.fullName}
                  className="w-full h-full object-cover object-top rounded-xl"
                />
              </div>

              {/* Status Indicator */}
              <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-dark-950 border border-emerald-500/40 text-[11px] font-semibold text-emerald-300 flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Virtusa</span>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center lg:text-left space-y-4">
              <div>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  {profile.fullName}
                </h2>
                <p className="text-sm sm:text-base font-semibold text-cyan-400 mt-1">
                  {profile.title}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Known professionally as <span className="text-slate-200">{profile.name}</span>
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                {profile.summary}
              </p>

              {/* Contact Information & Privacy-Toggled Address Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-xs text-slate-300">
                {/* Email with copy button */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-violet-400 flex-shrink-0" />
                    <span className="truncate">{profile.email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="ml-2 px-2 py-1 rounded bg-violet-600/20 hover:bg-violet-600/40 text-violet-300 text-[10px] font-medium transition-colors"
                  >
                    {copiedEmail ? "Copied!" : "Copy"}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                  <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{profile.phone}</span>
                </div>

                {/* Location with toggle for sensitive address */}
                <div className="sm:col-span-2 p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-start sm:items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <div>
                      <span className="font-medium text-white">
                        {profile.location.city}, {profile.location.state}, {profile.location.country}
                      </span>
                      {showAddress && (
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Academic Base: {profile.location.collegeCampus}
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => setShowAddress(!showAddress)}
                    type="button"
                    className="inline-flex items-center gap-1.5 text-[11px] text-violet-400 hover:text-violet-300 transition-colors self-start sm:self-auto"
                  >
                    {showAddress ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Hide Campus Details</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Show Campus Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-md shadow-violet-600/30 transition-all transform hover:-translate-y-0.5"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Curriculum Vitae (PDF)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`mailto:${profile.email}?subject=Direct%20Inquiry%20from%20Portfolio`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-all"
                >
                  <Mail className="w-4 h-4 text-violet-400" />
                  <span>Send Direct Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Coding Handles & Online Verification Profiles */}
        <section className="mb-14">
          <div className="mb-6">
            <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-violet-400" />
              <span>Verified Developer & Competitive Profiles</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Active profiles across professional networking, source code management, and algorithmic problem-solving platforms.
            </p>
          </div>

          <SocialLinks variant="cards" />
        </section>

        {/* Technical Skills Grouped by Category */}
        <section className="mb-14">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-cyan-400" />
                <span>Technical Skills & Competencies</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Categorized technologies, libraries, databases, and engineering tools leveraged across production applications.
              </p>
            </div>

            {/* In Edit Mode, allow direct "+ Add Skill" button */}
            {isEditMode && (
              <button
                type="button"
                onClick={() => setAddSkillOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-md shadow-violet-600/30 transition-all self-start sm:self-auto"
              >
                <Plus className="w-4 h-4" />
                <span>Add Skill</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.skillCategories.map((category) => {
              const IconComp = skillCategoryIcons[category.icon] || Code2;

              return (
                <div
                  key={category.name}
                  className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between hover:border-violet-500/30 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-violet-600/10 border border-violet-500/20 text-violet-400">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-base sm:text-lg text-white">
                            {category.name}
                          </h4>
                          <p className="text-[11px] text-slate-400">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 transition-colors relative group/skill"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-slate-200">
                              {skill.name}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 font-medium">
                              {skill.level}
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-400 mt-1 block">
                            {skill.experience}
                          </span>

                          {/* Delete Skill Action in Edit Mode */}
                          {isEditMode && (
                            <button
                              onClick={() => deleteSkill(category.name, skill.name)}
                              className="absolute top-2 right-2 p-1 rounded bg-dark-950/80 text-slate-500 hover:text-rose-400 opacity-0 group-hover/skill:opacity-100 transition-opacity"
                              title={`Remove ${skill.name}`}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Interests & Goals */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10">
            <h4 className="font-heading font-bold text-base sm:text-lg text-white flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span>Core Engineering Interests</span>
            </h4>
            <ul className="space-y-2">
              {profile.interests.map((interest, i) => (
                <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0" />
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10">
            <h4 className="font-heading font-bold text-base sm:text-lg text-white flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-cyan-400" />
              <span>Career Vision & Objectives</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {profile.careerGoals}
            </p>
            <div className="mt-4 pt-3 border-t border-white/5">
              <span className="text-xs font-semibold text-slate-400">Current Status:</span>
              <p className="text-xs text-emerald-400 font-medium mt-0.5">
                {profile.status.subtext}
              </p>
            </div>
          </div>
        </section>
      </div>

      <AddSkillModal
        isOpen={addSkillOpen}
        onClose={() => setAddSkillOpen(false)}
      />
    </PageTransition>
  );
}
