import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HeartPulse } from 'lucide-react';

// Lazy loaded page components
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Login = lazy(() => import('./pages/Login').then(m => ({ default: m.Login })));

// Loading spinner fallback
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 p-8">
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center animate-pulse">
          <HeartPulse className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div className="absolute -inset-1 rounded-2xl border-2 border-emerald-500 border-t-transparent animate-spin" />
      </div>
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        Loading Rupa Medical Hall...
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route 
            index 
            element={
              <Suspense fallback={<PageLoader />}>
                <Home />
              </Suspense>
            } 
          />
          <Route 
            path="about" 
            element={
              <Suspense fallback={<PageLoader />}>
                <About />
              </Suspense>
            } 
          />
          <Route 
            path="services" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Services />
              </Suspense>
            } 
          />
          <Route 
            path="gallery" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Gallery />
              </Suspense>
            } 
          />
          <Route 
            path="contact" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Contact />
              </Suspense>
            } 
          />
          <Route 
            path="login" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Login />
              </Suspense>
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
