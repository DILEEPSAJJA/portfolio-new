import React, { useEffect } from "react";
import { GraduationCap, Award, BookOpen, Compass, CheckCircle2 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import EducationTimeline from "../components/EducationTimeline";
import PageTransition from "../components/PageTransition";

export default function Education() {
  useEffect(() => {
    document.title = "Academic Journey & Education | Dileep Sajja";
  }, []);

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Foundational Excellence"
          title="Academic Journey"
          highlight="& Education"
          subtitle="My chronological educational milestones, from secondary school foundations to specialized undergraduate studies in Information Technology."
        />

        {/* Education Timeline */}
        <EducationTimeline />

        {/* Academic Highlights & Key Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-6 border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-500/20 text-violet-400 flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-base text-white">
              Undergraduate CGPA: 8.44
            </h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Maintained high academic performance throughout the 4-year B.Tech Information Technology curriculum at CVR College of Engineering.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-cyan-600/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-base text-white">
              CS & IT Core Disciplines
            </h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Specialized mastery in Data Structures, Object-Oriented Programming (Java), Database Management, Operating Systems, and Distributed Computing.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-base text-white">
              Departmental Student Leadership
            </h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Elected Organizational Secretary of IngenuITy, organizing major technical symposiums and fostering collaborative peer development.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
