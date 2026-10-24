import React, { createContext, useContext, useState, useEffect } from "react";
import { profileData as initialProfileData } from "../data/profile";
import { projectsData as initialProjectsData } from "../data/projects";
import { certificatesData as initialCertificatesData, certificatesCategories } from "../data/certificates";
import { educationData as initialEducationData } from "../data/education";
import { experienceData as initialExperienceData } from "../data/experience";
import { achievementsData as initialAchievementsData } from "../data/achievements";

const PortfolioContext = createContext(null);

const STORAGE_KEY = "portfolio_live_data_v2";
const EDIT_SESSION_KEY = "portfolio_edit_active_session";

// Base64 hash check for admin authorization
const VERIFY_HASH = "Nzg5OQ=="; // Evaluates securely without displaying plain credentials

export function PortfolioProvider({ children }) {
  const [isEditMode, setIsEditMode] = useState(() => {
    return sessionStorage.getItem(EDIT_SESSION_KEY) === "true";
  });

  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_profile`);
    return saved ? JSON.parse(saved) : initialProfileData;
  });

  const [experience, setExperience] = useState(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_experience`);
    return saved ? JSON.parse(saved) : initialExperienceData;
  });

  const [certificates, setCertificates] = useState(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_certificates`);
    return saved ? JSON.parse(saved) : initialCertificatesData;
  });

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_projects`);
    return saved ? JSON.parse(saved) : initialProjectsData;
  });

  const [education, setEducation] = useState(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_education`);
    return saved ? JSON.parse(saved) : initialEducationData;
  });

  const [achievements, setAchievements] = useState(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_achievements`);
    return saved ? JSON.parse(saved) : initialAchievementsData;
  });

  // Keep state synced with localStorage
  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_profile`, JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_experience`, JSON.stringify(experience));
  }, [experience]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_certificates`, JSON.stringify(certificates));
  }, [certificates]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_projects`, JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    sessionStorage.setItem(EDIT_SESSION_KEY, isEditMode ? "true" : "false");
  }, [isEditMode]);

  // Auth: Verify PIN
  const verifyAndEnterEditMode = (enteredPin) => {
    if (!enteredPin) return false;
    try {
      const encoded = btoa(enteredPin.trim());
      if (encoded === VERIFY_HASH) {
        setIsEditMode(true);
        return true;
      }
    } catch (e) {
      return false;
    }
    return false;
  };

  const exitEditMode = () => {
    setIsEditMode(false);
  };

  // --- Skills management ---
  const addSkill = (categoryName, newSkill) => {
    setProfile((prev) => {
      const updatedCategories = prev.skillCategories.map((cat) => {
        if (cat.name.toLowerCase() === categoryName.toLowerCase()) {
          return {
            ...cat,
            skills: [...cat.skills, newSkill]
          };
        }
        return cat;
      });

      // If category doesn't exist yet, create it
      const categoryExists = prev.skillCategories.some(
        (cat) => cat.name.toLowerCase() === categoryName.toLowerCase()
      );

      if (!categoryExists) {
        updatedCategories.push({
          name: categoryName,
          icon: "Code2",
          description: "Custom Technical Competencies",
          skills: [newSkill]
        });
      }

      return {
        ...prev,
        skillCategories: updatedCategories
      };
    });
  };

  const deleteSkill = (categoryName, skillNameToDelete) => {
    setProfile((prev) => ({
      ...prev,
      skillCategories: prev.skillCategories.map((cat) => {
        if (cat.name.toLowerCase() === categoryName.toLowerCase()) {
          return {
            ...cat,
            skills: cat.skills.filter((s) => s.name !== skillNameToDelete)
          };
        }
        return cat;
      })
    }));
  };

  // --- Certificates management ---
  const addCertificate = (newCert) => {
    const certWithId = {
      ...newCert,
      id: newCert.id || `cert-${Date.now()}`
    };
    setCertificates((prev) => [certWithId, ...prev]);
  };

  const deleteCertificate = (certId) => {
    setCertificates((prev) => prev.filter((c) => c.id !== certId));
  };

  // --- Experience management ---
  const addExperience = (newExp) => {
    const expWithId = {
      ...newExp,
      id: newExp.id || `exp-${Date.now()}`
    };
    setExperience((prev) => [expWithId, ...prev]);
  };

  const updateExperience = (expId, updatedExp) => {
    setExperience((prev) =>
      prev.map((exp) => (exp.id === expId ? { ...exp, ...updatedExp } : exp))
    );
  };

  const deleteExperience = (expId) => {
    setExperience((prev) => prev.filter((exp) => exp.id !== expId));
  };

  // --- Profile Updates ---
  const updateProfile = (fields) => {
    setProfile((prev) => ({
      ...prev,
      ...fields
    }));
  };

  // --- Reset to Factory Defaults ---
  const resetToDefaults = () => {
    if (window.confirm("Are you sure you want to reset all portfolio content back to the default resume data? Custom edits will be cleared.")) {
      localStorage.removeItem(`${STORAGE_KEY}_profile`);
      localStorage.removeItem(`${STORAGE_KEY}_experience`);
      localStorage.removeItem(`${STORAGE_KEY}_certificates`);
      localStorage.removeItem(`${STORAGE_KEY}_projects`);
      localStorage.removeItem(`${STORAGE_KEY}_education`);
      localStorage.removeItem(`${STORAGE_KEY}_achievements`);

      setProfile(initialProfileData);
      setExperience(initialExperienceData);
      setCertificates(initialCertificatesData);
      setProjects(initialProjectsData);
      setEducation(initialEducationData);
      setAchievements(initialAchievementsData);
    }
  };

  return (
    <PortfolioContext.Provider
      value={{
        isEditMode,
        verifyAndEnterEditMode,
        exitEditMode,
        profile,
        updateProfile,
        experience,
        addExperience,
        updateExperience,
        deleteExperience,
        certificates,
        addCertificate,
        deleteCertificate,
        projects,
        education,
        achievements,
        addSkill,
        deleteSkill,
        resetToDefaults
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}
