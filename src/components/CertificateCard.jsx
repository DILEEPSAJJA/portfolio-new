import React, { useState } from "react";
import { Award, Calendar, ExternalLink, Maximize2, ShieldCheck } from "lucide-react";
import CertificateModal from "./CertificateModal";

export default function CertificateCard({ certificate }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <div className="group rounded-2xl border border-white/10 bg-dark-850/70 hover:bg-dark-800/80 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-xl hover:shadow-violet-950/20 hover:border-violet-500/30">
        {/* Certificate Preview Frame */}
        <div 
          onClick={() => setModalOpen(true)}
          className="relative aspect-[16/10] w-full bg-dark-900 border-b border-white/5 overflow-hidden cursor-pointer flex items-center justify-center p-3"
        >
          {certificate.image ? (
            <img
              src={certificate.image}
              alt={certificate.title}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              className="max-h-full max-w-full object-contain rounded-md group-hover:scale-102 transition-transform duration-300 shadow"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-4">
              <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-2">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-slate-300">
                Verified Credential
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5">
                {certificate.issuer}
              </span>
            </div>
          )}

          {/* Hover overlay with zoom icon */}
          <div className="absolute inset-0 bg-dark-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-dark-900/90 text-white border border-white/20 shadow-lg">
              <Maximize2 className="w-3.5 h-3.5 text-violet-400" />
              <span>Preview Certificate</span>
            </span>
          </div>

          {/* Category Tag */}
          <div className="absolute top-2.5 left-2.5 z-10">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-dark-950/80 backdrop-blur-md text-violet-300 border border-violet-500/20">
              {certificate.category}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 flex flex-col flex-1 justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>{certificate.date}</span>
            </div>

            <h3 
              onClick={() => setModalOpen(true)}
              className="font-heading font-bold text-base text-white group-hover:text-violet-300 transition-colors cursor-pointer leading-snug line-clamp-2"
            >
              {certificate.title}
            </h3>

            <p className="text-xs font-medium text-cyan-400/90 mt-1">
              {certificate.issuer}
            </p>

            <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
              {certificate.description}
            </p>
          </div>

          {/* Card Footer: Skills & Verification Link */}
          <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
            <button
              onClick={() => setModalOpen(true)}
              type="button"
              className="text-xs font-medium text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1"
            >
              <span>View full</span>
              <Maximize2 className="w-3 h-3" />
            </button>

            {certificate.verificationUrl && (
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
                title="Verify certificate authenticity"
              >
                <span>Verify</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <CertificateModal
        certificate={certificate}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
