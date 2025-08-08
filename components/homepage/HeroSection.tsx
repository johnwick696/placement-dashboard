'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Brain, BarChart4, FileSpreadsheet, Zap, TrendingUp } from 'lucide-react';

/**
 * HeroSection Component
 * 
 * The main hero section of the homepage that introduces the AI-powered University Placement System.
 * Features a compelling headline focused on AI, data analytics, and automated report generation.
 * 
 * @returns JSX element containing the hero section
 */
export const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-indigo-600 via-purple-700 to-blue-800 text-white overflow-hidden">
      {/* Enhanced Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        {/* Additional geometric patterns */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
                           linear-gradient(-45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
                           linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.03) 75%),
                           linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.03) 75%)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }}></div>
      </div>
      
      {/* Main Hero Illustration */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30">
        <svg 
          className="w-full h-full object-cover" 
          viewBox="0 0 800 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* University Building */}
          <g transform="translate(500, 80)">
            <rect x="0" y="0" width="200" height="150" fill="rgba(255,255,255,0.1)" rx="8"/>
            <rect x="20" y="20" width="30" height="40" fill="rgba(255,255,255,0.15)" rx="4"/>
            <rect x="70" y="20" width="30" height="40" fill="rgba(255,255,255,0.15)" rx="4"/>
            <rect x="120" y="20" width="30" height="40" fill="rgba(255,255,255,0.15)" rx="4"/>
            <rect x="170" y="20" width="30" height="40" fill="rgba(255,255,255,0.15)" rx="4"/>
            <rect x="80" y="80" width="40" height="70" fill="rgba(255,255,255,0.2)" rx="8"/>
            <polygon points="100,0 0,30 200,30" fill="rgba(255,255,255,0.15)"/>
          </g>
          
          {/* Graduation Cap */}
          <g transform="translate(200, 200)">
            <circle cx="50" cy="50" r="40" fill="rgba(255,255,255,0.15)"/>
            <rect x="10" y="30" width="80" height="40" fill="rgba(255,255,255,0.2)" rx="20"/>
            <rect x="70" y="20" width="6" height="40" fill="rgba(255,255,255,0.15)"/>
            <circle cx="76" cy="15" r="3" fill="rgba(255,255,255,0.15)"/>
          </g>
          
          {/* Charts and Analytics */}
          <g transform="translate(350, 300)">
            <rect x="0" y="0" width="120" height="80" fill="rgba(255,255,255,0.1)" rx="8"/>
            <rect x="10" y="50" width="12" height="20" fill="rgba(147,197,253,0.8)"/>
            <rect x="30" y="35" width="12" height="35" fill="rgba(196,181,253,0.8)"/>
            <rect x="50" y="40" width="12" height="30" fill="rgba(167,243,208,0.8)"/>
            <rect x="70" y="25" width="12" height="45" fill="rgba(252,211,77,0.8)"/>
            <rect x="90" y="45" width="12" height="25" fill="rgba(248,113,113,0.8)"/>
          </g>
          
          {/* Network Connection Nodes */}
          <g transform="translate(100, 350)">
            <circle cx="50" cy="50" r="8" fill="rgba(147,197,253,0.8)"/>
            <circle cx="150" cy="30" r="8" fill="rgba(196,181,253,0.8)"/>
            <circle cx="200" cy="80" r="8" fill="rgba(167,243,208,0.8)"/>
            <line x1="50" y1="50" x2="150" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
            <line x1="150" y1="30" x2="200" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
            <line x1="50" y1="50" x2="200" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
          </g>
          
          {/* Floating AI Brain */}
          <g transform="translate(600, 350)" className="animate-pulse">
            <circle cx="40" cy="40" r="35" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
            <path d="M20 35 Q40 15 60 35 Q55 50 40 45 Q25 50 20 35" fill="rgba(147,197,253,0.6)"/>
            <circle cx="35" cy="32" r="3" fill="rgba(255,255,255,0.8)"/>
            <circle cx="45" cy="32" r="3" fill="rgba(255,255,255,0.8)"/>
          </g>
        </svg>
      </div>
      
      {/* Enhanced Floating Data Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center animate-pulse">
          <BarChart4 className="w-8 h-8 text-blue-200" />
        </div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center animate-bounce">
          <Brain className="w-6 h-6 text-purple-200" />
        </div>
        <div className="absolute bottom-32 left-20 w-14 h-14 bg-indigo-500/20 rounded-xl flex items-center justify-center animate-pulse">
          <FileSpreadsheet className="w-7 h-7 text-indigo-200" />
        </div>
        <div className="absolute bottom-20 right-10 w-10 h-10 bg-white/15 rounded-full flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        
        {/* New floating elements */}
        <div className="absolute top-32 right-1/3 w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center animate-ping">
          <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
        </div>
        <div className="absolute bottom-40 left-1/3 w-6 h-6 bg-yellow-500/20 rounded-square flex items-center justify-center animate-bounce">
          <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
        </div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/10 transform rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-12 bg-gradient-to-t from-purple-300/20 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          {/* AI Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium text-white">AI-Powered Analytics</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="block">AI-Driven Placement</span>
            <span className="block bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent p-2">
              Analytics & Reports
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto mb-10 leading-relaxed">
            Transform your university placement process with intelligent data analytics, 
            AI-powered insights, and automated report generation. Make data-driven decisions 
            with real-time dashboards and comprehensive compliance reports.
          </p>
          
          {/* Key AI Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Brain className="w-5 h-5 text-cyan-300" />
              <span className="text-sm font-medium text-white">AI Insights</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <BarChart4 className="w-5 h-5 text-purple-300" />
              <span className="text-sm font-medium text-white">Smart Analytics</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <FileSpreadsheet className="w-5 h-5 text-blue-300" />
              <span className="text-sm font-medium text-white">Auto Reports</span>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/dashboard">
              <Button 
                size="lg" 
                variant="outline"
                icon={ArrowRight}
                className="bg-white text-indigo-700 hover:bg-blue-50 hover:text-indigo-800 focus:ring-white shadow-xl border-0 px-8 py-4 text-lg font-semibold"
              >
                Explore Analytics Dashboard
              </Button>
            </Link>
            <Link href="/reports">
              <Button   
                size="lg" 
                variant="outline"
                icon={FileSpreadsheet}
                className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-indigo-700 focus:ring-white shadow-xl px-8 py-4 text-lg font-semibold"
              >
                View Sample Reports
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom blur/fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent backdrop-blur-sm"></div>
    </div>
  );
}; 