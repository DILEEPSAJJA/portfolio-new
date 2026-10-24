import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Award, Trophy, Star, Sparkles, Info, ExternalLink } from "lucide-react";
import { 
  achievementsData, 
  achievementCategories, 
  achievementTerminology 
} from "../data/achievements";
import SectionHeading from "../components/SectionHeading";
import AchievementCard from "../components/AchievementCard";
import PageTransition from "../components/PageTransition";

export default function Achievements() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    document.title = "Achievements & Recognition | Dileep Sajja";
  }, []);

  const filteredAchievements = achievementsData.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Honors & Competitions"
          title="Achievements"
          highlight="& Recognition"
          subtitle="A showcase of competitive hackathon victories, innovation milestones, leadership awards, and institutional citations."
        />

        {/* Terminology Context Banner for CIG & OFC */}
        <div className="mb-10 p-5 rounded-2xl glass-panel border border-violet-500/20 bg-dark-900/60 max-w-4xl mx-auto">
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-violet-600/15 text-violet-400 mt-0.5 flex-shrink-0">
              <Info className="w-4 h-4" />
            </div>
            <div className="text-xs text-slate-300 space-y-1">
              <p className="font-semibold text-white">
                Categorized Recognition Tracks (Including CIG & OFC)
              </p>
              <p className="text-slate-400 leading-relaxed">
                <strong className="text-slate-200">{achievementTerminology.CIG.shortCode}:</strong> {achievementTerminology.CIG.fullName} — {achievementTerminology.CIG.description}
              </p>
              <p className="text-slate-400 leading-relaxed">
                <strong className="text-slate-200">{achievementTerminology.OFC.shortCode}:</strong> {achievementTerminology.OFC.fullName} — {achievementTerminology.OFC.description}
              </p>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-10 flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {achievementCategories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? "bg-violet-600 text-white shadow-md shadow-violet-600/30 border border-violet-400/30"
                    : "bg-dark-850/80 text-slate-400 hover:text-white hover:bg-dark-800 border border-white/5"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredAchievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <AchievementCard achievement={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
