'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProductOverview } from '@/components/ProductOverview';
import { FeaturesGrid } from '@/components/FeaturesGrid';
import { WhyDiamonds } from '@/components/WhyDiamonds';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ConsultationModal } from '@/components/ConsultationModal';

export default function HomePage() {
  const [isDark, setIsDark] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Initialize theme from local preference or system
  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      const savedTheme = localStorage.getItem('diamonds-theme');
      if (savedTheme === 'dark') {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      } else if (savedTheme === 'light') {
        setIsDark(false);
        document.documentElement.classList.remove('dark');
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      }
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  const handleToggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('diamonds-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('diamonds-theme', 'light');
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-200">
      {/* 1. Compact Top Navigation */}
      <Navbar
        onOpenConsultation={() => setIsConsultationOpen(true)}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
      />

      <main id="main-content">
        {/* 2. Focused Hero with Restrained Product Visual */}
        <Hero onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* 3. Section A: What Diamonds ERP Does */}
        <ProductOverview />

        {/* 4. Section B: Key Features (6 Concise Areas) */}
        <FeaturesGrid />

        {/* 5. Section C: Why Diamonds ERP (3 Benefits) */}
        <WhyDiamonds />

        {/* 6. Section D: Contact */}
        <ContactSection onOpenConsultation={() => setIsConsultationOpen(true)} />
      </main>

      {/* 7. Clean, Minimal Footer */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* 8. Concise Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
