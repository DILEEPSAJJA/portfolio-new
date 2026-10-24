import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  align = "center",
  className = ""
}) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-3xl"} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-violet-500/10 text-violet-300 border border-violet-500/20 mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"></span>
          {badge}
        </motion.div>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-white leading-tight"
      >
        {title}{" "}
        {highlight && (
          <span className="text-gradient-primary">
            {highlight}
          </span>
        )}
      </motion.h1>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed font-normal"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
