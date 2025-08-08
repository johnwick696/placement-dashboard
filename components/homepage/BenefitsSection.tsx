'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { 
  Brain, 
  BarChart4, 
  Zap, 
  FileSpreadsheet,
  Bot,
  TrendingUp,
  Target,
  Database,
  Sparkles,
  ArrowRight,
  Shield,
  Cpu
} from 'lucide-react';

/**
 * Benefit interface defining the structure of each benefit
 */
interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  metric?: string;
}

/**
 * UserType interface defining different user categories and their benefits
 */
interface UserType {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  gradient: string;
  benefits: Benefit[];
  illustration: React.ReactNode;
}

/**
 * Enhanced BenefitsSection Component with light theme and smaller text
 */
export const BenefitsSection: React.FC = () => {
  const userTypes: UserType[] = [
    {
      title: 'Placement Administrators',
      subtitle: 'Intelligent Automation',
      description: 'AI-powered automation and intelligent insights for placement officers',
      color: 'indigo',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      benefits: [
        {
          icon: Brain,
          title: 'AI Decision Engine',
          description: 'Get intelligent recommendations with 95% accuracy using advanced ML algorithms',
          metric: '95% Accuracy'
        },
        {
          icon: Bot,
          title: 'Smart Automation',
          description: 'Automate 90% of repetitive tasks with intelligent workflows and process optimization',
          metric: '90% Automated'
        },
        {
          icon: BarChart4,
          title: 'Live Intelligence',
          description: 'Real-time dashboards with predictive analytics and automated performance insights',
          metric: 'Real-time'
        },
        {
          icon: FileSpreadsheet,
          title: 'Instant AI Reports',
          description: 'Generate comprehensive reports in seconds with AI-written summaries',
          metric: '< 5 seconds'
        }
      ],
      illustration: (
        <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-purple-300 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute top-4 left-4 w-40 h-40 bg-gradient-to-br from-pink-200 to-indigo-300 rounded-2xl rotate-12 opacity-60 animate-float"></div>
            <div className="absolute top-8 left-8 w-24 h-24 bg-gray-100 rounded-xl rotate-45 opacity-80 animate-spin-slow"></div>
            <Brain className="absolute top-16 left-16 w-12 h-12 text-indigo-400 animate-bounce" />
          </div>
        </div>
      )
    },
    {
      title: 'Data Analysts',
      subtitle: 'Advanced Analytics',
      description: 'Machine learning platform with enterprise-grade analytics capabilities',
      color: 'blue',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      benefits: [
        {
          icon: Database,
          title: 'Big Data Engine',
          description: 'Process millions of records in real-time with distributed computing power',
          metric: '10M+ Records'
        },
        {
          icon: TrendingUp,
          title: 'Predictive AI',
          description: 'Forecast placement trends with 92% accuracy using deep learning models',
          metric: '92% Forecast'
        },
        {
          icon: Target,
          title: 'Smart Matching',
          description: 'AI-driven student-company matching with neural network algorithms',
          metric: '3x Better Matches'
        },
        {
          icon: Cpu,
          title: 'Visual Intelligence',
          description: 'Interactive dashboards with AI-generated insights and pattern recognition',
          metric: 'AI Insights'
        }
      ],
      illustration: (
        <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute top-2 left-2 w-44 h-44 border-2 border-cyan-300 rounded-full animate-spin-slow"></div>
            <div className="absolute top-8 left-8 w-32 h-32 bg-gradient-to-br from-teal-200 to-blue-300 rounded-full opacity-60 animate-float"></div>
            <BarChart4 className="absolute top-16 left-16 w-12 h-12 text-blue-400 animate-pulse" />
          </div>
        </div>
      )
    },
    {
      title: 'External Auditors',
      subtitle: 'Compliance & Security',
      description: 'Automated compliance with blockchain-level security and AI validation',
      color: 'green',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      benefits: [
        {
          icon: FileSpreadsheet,
          title: 'AI Compliance Engine',
          description: 'Auto-generated NAAC/AICTE reports with intelligent data validation',
          metric: '100% Compliant'
        },
        {
          icon: Shield,
          title: 'Instant Verification',
          description: 'Real-time data integrity with blockchain-powered anomaly detection',
          metric: 'Blockchain Secured'
        },
        {
          icon: Sparkles,
          title: 'Smart Insights',
          description: 'AI-generated audit summaries with risk assessment and recommendations',
          metric: 'AI Generated'
        },
        {
          icon: Database,
          title: 'Secure Access',
          description: 'Zero-trust architecture with AI-monitored security and audit trails',
          metric: 'Zero-Trust'
        }
      ],
      illustration: (
        <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute top-4 left-4 w-40 h-40 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-3xl rotate-45 opacity-60 animate-float"></div>
            <div className="absolute top-8 left-8 w-24 h-24 border-2 border-gray-300 rounded-2xl animate-spin-slow opacity-80"></div>
            <Shield className="absolute top-16 left-16 w-12 h-12 text-green-400 animate-bounce" />
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Light Animated Background */}
      <div className="absolute inset-0">
        {/* Subtle Gradient Mesh Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-indigo-100 to-purple-200 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-br from-cyan-100 to-blue-200 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute bottom-0 left-1/3 w-56 h-56 bg-gradient-to-br from-emerald-100 to-teal-200 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-pink-100 to-rose-200 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        
        {/* Subtle Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gray-300 rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Light Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Compact Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-indigo-600 animate-pulse" />
            <span className="text-xs font-semibold text-indigo-700 tracking-wide">AI PLATFORM</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            <span className="block">Intelligent Solutions</span>
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent p-2">
              For Every Stakeholder
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Experience the future of placement management with our AI-powered platform. 
            Delivering unprecedented efficiency through machine learning, automation, and intelligent insights.
          </p>
          
          {/* Compact Stats Bar */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">95%</div>
              <div className="text-base text-gray-500">AI Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">10M+</div>
              <div className="text-base text-gray-500">Data Points</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">90%</div>
              <div className="text-base text-gray-500">Automation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">24/7</div>
              <div className="text-base text-gray-500">Real-time</div>
            </div>
          </div>
        </div>

        {/* User Types */}
        <div className="space-y-20">
          {userTypes.map((userType, typeIndex) => (
            <div key={typeIndex} className="relative">
              {/* Background Illustration */}
              {userType.illustration}
              
              {/* Compact Section Header */}
              <div className="text-center mb-12">
                <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${userType.gradient} text-white rounded-full px-5 py-2 mb-4 shadow-lg transform hover:scale-105 transition-transform duration-300`}>
                  <Brain className="w-4 h-4 animate-pulse" />
                  <span className="font-semibold text-lg">{userType.subtitle}</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                  {userType.title}
                </h2>
                
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  {userType.description}
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {userType.benefits.map((benefit, benefitIndex) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={benefitIndex}
                      className="group relative"
                    >
                      {/* Subtle glowing background effect */}
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${userType.gradient} rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300`}></div>
                      
                      <Card className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 h-full transform group-hover:-translate-y-1 transition-all duration-300 group-hover:shadow-lg">
                        <div className="text-center">
                          {/* Compact Icon */}
                          <div className="relative mb-4">
                            <div className={`absolute inset-0 bg-gradient-to-r ${userType.gradient} rounded-xl blur opacity-30 animate-pulse`}></div>
                            <div className={`relative inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${userType.gradient} rounded-xl shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          
                          {/* Compact Metric Badge */}
                          {benefit.metric && (
                            <div className="inline-flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1 mb-3">
                              <Sparkles className="w-2 h-2 text-indigo-500" />
                              <span className="text-base font-semibold text-indigo-600">{benefit.metric}</span>
                            </div>
                          )}
                          
                          {/* Compact Title */}
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                            {benefit.title}
                          </h3>
                          
                          {/* Smaller Description */}
                          <p className="text-gray-600 text-base leading-relaxed mb-4">
                            {benefit.description}
                          </p>
                          
                          {/* Compact Learn More Link */}
                          <div className="flex items-center justify-center gap-1 text-indigo-500 font-semibold text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span>Learn More</span>
                            <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Compact CTA Section */}
        <div className="mt-20">
          <div className="relative">
            {/* Subtle glowing background */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 rounded-2xl blur opacity-20 animate-pulse"></div>
            
            <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 md:p-10 text-center overflow-hidden">
              {/* Light Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px'
                }}></div>
              </div>
              
              {/* Subtle Floating Elements */}
              <div className="absolute inset-0">
                <Brain className="absolute top-4 left-4 w-6 h-6 text-indigo-300 opacity-30 animate-float" />
                <Zap className="absolute top-6 right-6 w-4 h-4 text-purple-300 opacity-30 animate-bounce" />
                <Sparkles className="absolute bottom-4 left-6 w-5 h-5 text-pink-300 opacity-30 animate-pulse" />
                <Bot className="absolute bottom-6 right-4 w-5 h-5 text-emerald-300 opacity-30 animate-float" />
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full px-4 py-2 mb-4">
                  <Zap className="w-4 h-4 animate-pulse" />
                  <span className="font-semibold text-lg">Ready to Transform?</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Experience the Future of
                  <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    AI-Powered Placement Management
                  </span>
                </h2>
                
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                  Join leading universities already leveraging our intelligent platform to automate processes, 
                  generate insights, and achieve exceptional placement outcomes.
                </p>
                
                {/* Compact Feature Highlights */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                  <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                    <Bot className="w-6 h-6 text-indigo-500 mx-auto mb-2 animate-bounce" />
                    <div className="text-base font-semibold text-gray-700">AI Automation</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                    <BarChart4 className="w-6 h-6 text-purple-500 mx-auto mb-2 animate-pulse" />
                    <div className="text-base font-semibold text-gray-700">Real-Time Analytics</div>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-4 border border-pink-100">
                    <FileSpreadsheet className="w-6 h-6 text-pink-500 mx-auto mb-2 animate-bounce" />
                    <div className="text-base font-semibold text-gray-700">Instant Reports</div>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                    <Brain className="w-6 h-6 text-emerald-500 mx-auto mb-2 animate-pulse" />
                    <div className="text-base font-semibold text-gray-700">Predictive Insights</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-3deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};