import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingElements from "../components/FloatingElements";
import ScrollToTop from "../components/ScrollToTop";
import EditorToolbar from "../components/editor/EditorToolbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-dark-950 text-slate-100 selection:bg-violet-600/30 selection:text-violet-200 relative overflow-x-hidden">
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Floating subtle UI elements, background glows & scroll-to-top button */}
      <FloatingElements />

      {/* Shared Navigation Header */}
      <Navbar />

      {/* Main Outlet Area for Route Pages */}
      <main className="flex-1 pt-24 sm:pt-28 pb-12 z-10">
        <Outlet />
      </main>

      {/* Floating live editor toolbar when in edit mode */}
      <EditorToolbar />

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
