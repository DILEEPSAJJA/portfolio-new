import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, CheckCircle2, Award, Sparkles } from "lucide-react";
import { experienceData } from "../data/experience";
import SectionHeading from "../components/SectionHeading";
import ExperienceCard from "../components/ExperienceCard";
import PageTransition from "../components/PageTransition";

export default function Experience() {
  useEffect(() => {
    document.title = "Experience & Work History | Dileep Sajja";
  }, []);

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Professional Background"
          title="Work Experience"
          highlight="& Leadership"
          subtitle="A track record of engineering software solutions, enterprise cloud development, and impactful organizational leadership."
        />

        {/* Experience List */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
            >
              <ExperienceCard experience={exp} />
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
                Combining full-stack software expertise with proven team leadership and problem-solving rigor. Open to discussing full-time software engineering roles.
              </p>
            </div>
          </div>

          <a
            href="mailto:sajjadileep2003@gmail.com?subject=Engineering%20Role%20Inquiry"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-600/25 transition-all whitespace-nowrap"
          >
            <span>Get in Touch</span>
          </a>
        </div>
      </div>
    </PageTransition>
  );
}
