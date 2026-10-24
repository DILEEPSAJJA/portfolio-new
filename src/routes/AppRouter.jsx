import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Code splitting with React.lazy for optimal route loading performance
const Home = lazy(() => import("../pages/Home"));
const Profile = lazy(() => import("../pages/Profile"));
const Projects = lazy(() => import("../pages/Projects"));
const Certificates = lazy(() => import("../pages/Certificates"));
const Education = lazy(() => import("../pages/Education"));
const Experience = lazy(() => import("../pages/Experience"));
const Achievements = lazy(() => import("../pages/Achievements"));
const NotFound = lazy(() => import("../pages/NotFound"));

// Route Loading Spinner Fallback
function RouteFallback() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-3">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 rounded-full border-2 border-violet-500/20"></div>
        <div className="absolute inset-0 rounded-full border-2 border-violet-500 border-t-transparent animate-spin"></div>
      </div>
      <span className="text-xs text-slate-400 font-medium">Loading view...</span>
    </div>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<RouteFallback />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="profile"
            element={
              <Suspense fallback={<RouteFallback />}>
                <Profile />
              </Suspense>
            }
          />
          <Route
            path="projects"
            element={
              <Suspense fallback={<RouteFallback />}>
                <Projects />
              </Suspense>
            }
          />
          <Route
            path="certificates"
            element={
              <Suspense fallback={<RouteFallback />}>
                <Certificates />
              </Suspense>
            }
          />
          <Route
            path="education"
            element={
              <Suspense fallback={<RouteFallback />}>
                <Education />
              </Suspense>
            }
          />
          <Route
            path="experience"
            element={
              <Suspense fallback={<RouteFallback />}>
                <Experience />
              </Suspense>
            }
          />
          <Route
            path="achievements"
            element={
              <Suspense fallback={<RouteFallback />}>
                <Achievements />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<RouteFallback />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
