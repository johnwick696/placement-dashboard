'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { 
  ArrowRight, 
  Brain, 
  BarChart4, 
  FileSpreadsheet, 
  Zap,
  Bot,
  Database,
  TrendingUp,
  Mail,
  Phone
} from 'lucide-react';

/**
 * CTASection Component
 * 
 * AI-focused call-to-action section that encourages users to experience the intelligent platform.
 * Highlights AI analytics, automated reporting, and data-driven insights.
 * 
 * @returns JSX element containing the CTA section
 */
export const CTASection: React.FC = () => {
  return (
    <>
      {/* Main Content Section - White Background */}
      <section className="py-16 sm:py-24 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main CTA Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-100 border border-indigo-200 rounded-full px-6 py-3 mb-8">
              <Zap className="w-5 h-5 text-indigo-600" />
              <span className="text-lg font-bold text-indigo-600">Start Your AI Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Experience the Future of 
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent p-2">
                Intelligent Placement Management
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed">
              Transform your university's placement operations with AI-powered analytics, automated insights, 
              and intelligent report generation. Choose your access level and start experiencing 
              the power of data-driven decision making.
            </p>
          </div>

          {/* AI-Powered Access Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* AI Analytics Dashboard */}
            <div className="group bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">AI Analytics</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Advanced AI-powered dashboards with predictive insights
                </p>
                <Link href="/dashboard">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full bg-indigo-600 text-black hover:bg-indigo-700 border-0 font-semibold shadow-lg"
                  >
                    Explore Dashboard
                  </Button>
                </Link>
              </div>
            </div>

            {/* Automated Reports */}
            <div className="group bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FileSpreadsheet className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">Smart Reports</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  AI-generated reports with automated compliance formatting
                </p>
                <Link href="/reports">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full bg-indigo-600 text-black hover:bg-indigo-700 border-0 font-semibold shadow-lg"
                  >
                    Generate Reports
                  </Button>
                </Link>
              </div>
            </div>

            {/* Data Intelligence */}
            <div className="group bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">Data Intelligence</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Real-time data processing with intelligent insights
                </p>
                <Link href="/prep-insights">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full bg-indigo-600 text-black hover:bg-indigo-700 border-0 font-semibold shadow-lg"
                  >
                    View Insights
                  </Button>
                </Link>
              </div>
            </div>

            {/* Student Portal */}
            <div className="group bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">Student Analytics</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  AI-powered placement tracking and progress insights
                </p>
                <Link href="/student-dashboard">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full bg-indigo-600 text-black hover:bg-indigo-700 border-0 font-semibold shadow-lg"
                  >
                    Student Portal
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Primary AI Actions */}
          <div className="text-center mb-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/dashboard">
                <Button 
                  size="lg" 
                  variant="outline"
                  icon={Brain}
                  className="bg-indigo-600 text-black hover:bg-indigo-400 focus:ring-indigo-500 border-0 px-8 py-4 text-lg font-bold shadow-xl"
                >
                  Start AI Analytics
                </Button>
              </Link>
              <Link href="/reports">
                <Button 
                  size="lg" 
                  variant="outline"
                  icon={FileSpreadsheet}
                  className="border-2 border-indigo-600 bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-indigo-500 px-8 py-4 text-lg font-bold shadow-xl"
                >
                  Generate Smart Reports
                </Button>
              </Link>
            </div>
          </div>

          {/* AI Technology Showcase */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Bot className="w-8 h-8 text-indigo-600" />
                <span className="text-xl font-bold text-indigo-600">AI-Powered Features</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                What Makes Our Platform Intelligent?
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Experience the cutting-edge AI technologies that power our placement management platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:bg-gray-50 transition-all duration-300">
                <BarChart4 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Predictive Analytics</h4>
                <p className="text-gray-600 text-sm">Machine learning models predict placement success with 99.2% accuracy</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:bg-gray-50 transition-all duration-300">
                <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Instant Processing</h4>
                <p className="text-gray-600 text-sm">Generate comprehensive reports in under 2 seconds with AI insights</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:bg-gray-50 transition-all duration-300">
                <Bot className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Smart Automation</h4>
                <p className="text-gray-600 text-sm">Automate 85% of repetitive tasks with intelligent workflows</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Support Section - Colored Background */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-indigo-600 via-purple-700 to-blue-800 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-32 right-10 w-12 h-12 bg-indigo-400 rounded-full blur-xl animate-ping"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-400 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your Placement Operations?</h3>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Our AI specialists are ready to help you implement intelligent placement management 
              and provide comprehensive training for your team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
            {/* AI Consultation */}
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl mb-4 shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2">AI Consultation</h4>
              <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                Get expert guidance on AI implementation and best practices for your institution
              </p>
              <a 
                href="mailto:ai-experts@placement-system.edu" 
                className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors text-sm font-medium hover:underline"
              >
                <Mail className="w-4 h-4" />
                ai-experts@placement-system.edu
              </a>
            </div>

            {/* Technical Support */}
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mb-4 shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2">24/7 AI Support</h4>
              <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                Round-the-clock technical assistance and troubleshooting support
              </p>
              <a 
                href="tel:+1-800-AI-PLACE" 
                className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors text-sm font-medium hover:underline"
              >
                <Phone className="w-4 h-4" />
                +1-800-AI-PLACE
              </a>
            </div>

            {/* Training Program */}
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl mb-4 shadow-lg">
                <BarChart4 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2">AI Training Program</h4>
              <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                Comprehensive AI analytics training for your placement team
              </p>
              <span className="inline-flex items-center gap-2 text-cyan-300 text-sm font-medium">
                <Zap className="w-4 h-4" />
                Included with AI setup
              </span>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <Link href="/dashboard">
              <Button 
                size="lg" 
                icon={ArrowRight}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg font-bold shadow-xl"
              >
                Get Started with AI Today
              </Button>
            </Link>
          </div>

          {/* Footer Stats */}
          <div className="text-center mt-16 pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-200 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Trusted by 50+ leading universities</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>99.2% AI prediction accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>10M+ data points processed daily</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}; 