'use client';

import React from 'react';
import { 
  HeroSection, 
  FeaturesSection, 
  StatsSection, 
  BenefitsSection, 
  CTASection 
} from '@/components/homepage';

/**
 * HomePage Component
 * 
 * The main landing page of the University Placement System.
 * Showcases all the features, benefits, and statistics of the platform
 * in a comprehensive, component-based layout.
 * 
 * Components included:
 * - HeroSection: Main introduction with call-to-action
 * - FeaturesSection: Detailed feature showcase
 * - StatsSection: Impressive statistics and achievements
 * - BenefitsSection: Benefits for different user types
 * - CTASection: Final call-to-action with contact information
 * 
 * @returns JSX element containing the complete homepage
 */
export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Main introduction */}
      <HeroSection />
      
      {/* Features Section - Showcase all platform features */}
      <FeaturesSection />
      
      {/* Statistics Section - Display impressive numbers */}
      <StatsSection />
      
      {/* Benefits Section - Show benefits for different users */}
      <BenefitsSection />
      
      {/* Call to Action Section - Final push to get started */}
      <CTASection />
    </main>
  );
}
