import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, ExternalLink, CheckCircle } from "lucide-react";
import { certificatesData, certificatesCategories } from "../data/certificates";
import SectionHeading from "../components/SectionHeading";
import CertificateCard from "../components/CertificateCard";
import PageTransition from "../components/PageTransition";

export default function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    document.title = "Certifications & Credentials | Dileep Sajja";
  }, []);

  const filteredCertificates = certificatesData.filter(
    (cert) => selectedCategory === "All" || cert.category === selectedCategory
  );

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Credentials"
          title="Professional Certifications"
          highlight="& Training"
          subtitle="Accredited technical credentials, university symposium courses, and merit recognitions with direct verification proofs."
        />

        {/* Category Filters */}
        <div className="mb-10 flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {certificatesCategories.map((category) => {
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

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCertificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CertificateCard certificate={cert} />
            </motion.div>
          ))}
        </div>

        {/* Verification Guarantee Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl glass-panel border border-violet-500/20 bg-dark-900/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-violet-600/10 border border-violet-500/30 text-violet-400 flex-shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-white">
                Authentic & Verified Credentials
              </h4>
              <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                All certificates represent legitimate completions from NIT Warangal, AWS Simplilearn, and HackerRank. Click any certificate to inspect full resolution transcripts.
              </p>
            </div>
          </div>

          <a
            href="https://www.hackerrank.com/profile/sajjadileep2003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-violet-600/20 text-violet-300 border border-violet-500/30 hover:bg-violet-600/40 transition-colors whitespace-nowrap"
          >
            <span>HackerRank Verified Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </PageTransition>
  );
}
