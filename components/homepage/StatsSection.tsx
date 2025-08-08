'use client';

import React from 'react';
import { Brain, Database, Zap, BarChart4, TrendingUp, Bot } from 'lucide-react';

/**
 * Statistic interface defining the structure of each stat
 */
interface Stat {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  description: string;
  gradient: string;
  illustration: React.ReactNode;
  progressValue: number;
}

/**
 * StatsSection Component
 * 
 * Displays key AI and data analytics statistics of the University Placement System.
 * Shows impressive numbers focused on intelligent processing and automated capabilities.
 * 
 * @returns JSX element containing the statistics section
 */
export const StatsSection: React.FC = () => {
  // Array of impressive AI and data-focused statistics about the system
  const stats: Stat[] = [
    {
      icon: Brain,
      value: '99.2%',
      label: 'AI Prediction Accuracy',
      description: 'Machine learning models predict placement success with exceptional precision',
      gradient: 'from-purple-500 to-indigo-600',
      progressValue: 99,
      illustration: (
        <svg className="w-16 h-16 opacity-60" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="url(#brainStatGradient)" opacity="0.2"/>
          <path d="M20 28 Q32 16 44 28 Q42 40 32 38 Q22 40 20 28" fill="url(#brainStatGradient)"/>
          <circle cx="28" cy="30" r="1.5" fill="white"/>
          <circle cx="36" cy="30" r="1.5" fill="white"/>
          <defs>
            <linearGradient id="brainStatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6"/>
              <stop offset="100%" stopColor="#3730a3"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      icon: Database,
      value: '10M+',
      label: 'Data Points Processed',
      description: 'Real-time processing of millions of student and placement data points',
      gradient: 'from-blue-500 to-cyan-600',
      progressValue: 100,
      illustration: (
        <svg className="w-16 h-16 opacity-60" viewBox="0 0 64 64" fill="none">
          <ellipse cx="32" cy="20" rx="16" ry="6" fill="url(#dataStatGradient)"/>
          <ellipse cx="32" cy="32" rx="16" ry="6" fill="url(#dataStatGradient)"/>
          <ellipse cx="32" cy="44" rx="16" ry="6" fill="url(#dataStatGradient)"/>
          <rect x="16" y="20" width="32" height="12" fill="url(#dataStatGradient)" opacity="0.5"/>
          <rect x="16" y="32" width="32" height="12" fill="url(#dataStatGradient)" opacity="0.5"/>
          <defs>
            <linearGradient id="dataStatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6"/>
              <stop offset="100%" stopColor="#0891b2"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      icon: Zap,
      value: '< 2sec',
      label: 'Report Generation Time',
      description: 'Lightning-fast automated report generation with AI insights',
      gradient: 'from-yellow-500 to-orange-600',
      progressValue: 95,
      illustration: (
        <svg className="w-16 h-16 opacity-60" viewBox="0 0 64 64" fill="none">
          <path d="M25 10 L35 30 L28 30 L38 54 L28 34 L35 34 Z" fill="url(#zapStatGradient)"/>
          <circle cx="45" cy="20" r="3" fill="url(#zapStatGradient)" opacity="0.6"/>
          <circle cx="50" cy="35" r="2" fill="url(#zapStatGradient)" opacity="0.4"/>
          <circle cx="15" cy="25" r="2.5" fill="url(#zapStatGradient)" opacity="0.5"/>
          <defs>
            <linearGradient id="zapStatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#eab308"/>
              <stop offset="100%" stopColor="#ea580c"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      icon: BarChart4,
      value: '150+',
      label: 'Analytics Dashboards',
      description: 'Comprehensive real-time dashboards covering every placement metric',
      gradient: 'from-green-500 to-emerald-600',
      progressValue: 88,
      illustration: (
        <svg className="w-16 h-16 opacity-60" viewBox="0 0 64 64" fill="none">
          <rect x="10" y="40" width="6" height="15" fill="url(#chartStatGradient)"/>
          <rect x="20" y="30" width="6" height="25" fill="url(#chartStatGradient)"/>
          <rect x="30" y="35" width="6" height="20" fill="url(#chartStatGradient)"/>
          <rect x="40" y="25" width="6" height="30" fill="url(#chartStatGradient)"/>
          <rect x="50" y="32" width="6" height="23" fill="url(#chartStatGradient)"/>
          <circle cx="32" cy="15" r="8" fill="none" stroke="url(#chartStatGradient)" strokeWidth="2"/>
          <path d="M32 10 L37 15 L32 20 L27 15 Z" fill="url(#chartStatGradient)" opacity="0.6"/>
          <defs>
            <linearGradient id="chartStatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981"/>
              <stop offset="100%" stopColor="#059669"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      icon: TrendingUp,
      value: '40%',
      label: 'Improvement in Placement Rates',
      description: 'Universities see significant improvement using our AI-powered platform',
      gradient: 'from-violet-500 to-purple-600',
      progressValue: 78,
      illustration: (
        <svg className="w-16 h-16 opacity-60" viewBox="0 0 64 64" fill="none">
          <path d="M8 45 Q20 25 32 35 Q44 15 56 25" stroke="url(#trendStatGradient)" strokeWidth="3" fill="none"/>
          <circle cx="8" cy="45" r="2" fill="url(#trendStatGradient)"/>
          <circle cx="20" cy="32" r="2" fill="url(#trendStatGradient)"/>
          <circle cx="32" cy="35" r="2" fill="url(#trendStatGradient)"/>
          <circle cx="44" cy="22" r="2" fill="url(#trendStatGradient)"/>
          <circle cx="56" cy="25" r="2" fill="url(#trendStatGradient)"/>
          <polygon points="50,20 56,18 58,25" fill="url(#trendStatGradient)"/>
          <defs>
            <linearGradient id="trendStatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6"/>
              <stop offset="100%" stopColor="#7c3aed"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      icon: Bot,
      value: '85%',
      label: 'Process Automation',
      description: 'Intelligent automation reduces manual work and eliminates errors',
      gradient: 'from-pink-500 to-rose-600',
      progressValue: 85,
      illustration: (
        <svg className="w-16 h-16 opacity-60" viewBox="0 0 64 64" fill="none">
          <rect x="24" y="25" width="16" height="20" fill="url(#botStatGradient)" rx="4"/>
          <circle cx="28" cy="32" r="1.5" fill="white"/>
          <circle cx="36" cy="32" r="1.5" fill="white"/>
          <rect x="30" y="38" width="4" height="3" fill="white" opacity="0.8" rx="1"/>
          <rect x="20" y="20" width="6" height="10" fill="url(#botStatGradient)" rx="3"/>
          <rect x="38" y="20" width="6" height="10" fill="url(#botStatGradient)" rx="3"/>
          <circle cx="15" cy="30" r="3" fill="url(#botStatGradient)" opacity="0.6"/>
          <circle cx="49" cy="35" r="3" fill="url(#botStatGradient)" opacity="0.6"/>
          <defs>
            <linearGradient id="botStatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899"/>
              <stop offset="100%" stopColor="#e11d48"/>
            </linearGradient>
          </defs>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Enhanced Background Graphics */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-10 w-20 h-20 bg-cyan-500 rounded-full blur-2xl"></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-20 bg-gradient-to-t from-blue-200 to-transparent opacity-15"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 right-1/3 w-2 h-2 bg-purple-300 rounded-full animate-bounce opacity-30"></div>
        <div className="absolute bottom-40 left-1/5 w-3 h-3 bg-blue-300 rounded-full animate-ping opacity-20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-full px-4 py-2 mb-6">
            <BarChart4 className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-700">Performance Metrics</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            AI-Powered Results That
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Speak for Themselves
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our intelligent platform delivers measurable improvements across all key placement metrics, 
            powered by advanced machine learning and real-time analytics.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden"
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
              
              {/* Background Illustration */}
              <div className="absolute top-4 right-4">
                {stat.illustration}
              </div>
              
              <div className="relative">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-xl mb-6 shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Stat Value */}
                <div className="mb-2">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors duration-300">
                    {stat.value}
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${stat.gradient} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                    style={{ width: `${stat.progressValue}%` }}
                  ></div>
                </div>
                
                {/* Stat Label */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {stat.label}
                </h3>
                
                {/* Stat Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Achievement Highlight */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 1px, transparent 1px),
                                 radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}></div>
              {/* Additional geometric overlay */}
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%),
                                 linear-gradient(-45deg, rgba(255,255,255,0.05) 25%, transparent 25%)`,
                backgroundSize: '60px 60px'
              }}></div>
            </div>
            
            {/* Floating Achievement Icons */}
            <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center animate-pulse">
              <TrendingUp className="w-8 h-8 text-cyan-300" />
            </div>
            <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center animate-bounce">
              <Brain className="w-6 h-6 text-purple-300" />
            </div>
            
            <div className="relative text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Zap className="w-6 h-6 text-yellow-300" />
                <span className="text-lg font-semibold text-yellow-300">Real-Time Intelligence</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                Experience the Power of AI-Driven Placement Management
              </h3>
              <p className="text-lg text-indigo-100 max-w-4xl mx-auto mb-8 leading-relaxed">
                Our platform processes over 10,000 data points per student, generates 50+ different report types, 
                and provides real-time analytics that help universities achieve 40% higher placement success rates.
              </p>
              
              {/* Achievement Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-300 mb-1">10K+</div>
                  <div className="text-sm text-indigo-200">Data Points Per Student</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-300 mb-1">50+</div>
                  <div className="text-sm text-indigo-200">Report Types Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300 mb-1">40%</div>
                  <div className="text-sm text-indigo-200">Higher Success Rates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 