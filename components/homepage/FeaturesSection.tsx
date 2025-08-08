'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { 
  Brain, 
  BarChart4, 
  TrendingUp, 
  FileSpreadsheet, 
  Zap, 
  Target,
  Database,
  Bot,
  PieChart,
  LineChart,
  Activity,
  Layers
} from 'lucide-react';

/**
 * Feature interface defining the structure of each feature
 */
interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  illustration: React.ReactNode;
}

/**
 * FeaturesSection Component
 * 
 * Displays all the key AI-powered features of the University Placement System in an organized grid.
 * Each feature emphasizes intelligent analytics, automated processing, and comprehensive reporting.
 * 
 * @returns JSX element containing the features section
 */
export const FeaturesSection: React.FC = () => {
  // Array of all AI-powered system features with their details
  const features: Feature[] = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics Engine',
      description: 'Advanced machine learning algorithms analyze placement patterns, predict trends, and provide intelligent recommendations for better outcomes.',
      gradient: 'from-purple-500 to-indigo-600',
      features: [
        'Predictive placement success modeling',
        'AI-driven student-company matching',
        'Intelligent trend analysis and forecasting',
        'Automated anomaly detection in data'
      ],
      illustration: (
        <svg className="w-full h-32 opacity-20" viewBox="0 0 200 120" fill="none">
          <circle cx="100" cy="60" r="40" fill="url(#brainGradient)" opacity="0.3"/>
          <path d="M70 50 Q100 30 130 50 Q125 75 100 70 Q75 75 70 50" fill="url(#brainGradient)"/>
          <circle cx="90" cy="55" r="2" fill="white"/>
          <circle cx="110" cy="55" r="2" fill="white"/>
          <path d="M85 65 Q100 75 115 65" stroke="white" strokeWidth="2" fill="none"/>
          <defs>
            <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6"/>
              <stop offset="100%" stopColor="#3730a3"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      icon: BarChart4,
      title: 'Real-Time Data Visualization',
      description: 'Interactive dashboards with live data updates, advanced charts, and customizable visual analytics for comprehensive insights.',
      gradient: 'from-blue-500 to-cyan-600',
      features: [
        'Interactive real-time dashboards',
        'Customizable chart configurations',
        'Multi-dimensional data exploration',
        'Export visualizations to presentations'
      ],
      illustration: (
        <svg className="w-full h-32 opacity-20" viewBox="0 0 200 120" fill="none">
          <rect x="20" y="80" width="12" height="30" fill="url(#chartGradient)"/>
          <rect x="40" y="60" width="12" height="50" fill="url(#chartGradient)"/>
          <rect x="60" y="70" width="12" height="40" fill="url(#chartGradient)"/>
          <rect x="80" y="45" width="12" height="65" fill="url(#chartGradient)"/>
          <rect x="100" y="55" width="12" height="55" fill="url(#chartGradient)"/>
          <circle cx="130" cy="30" r="25" fill="none" stroke="url(#chartGradient)" strokeWidth="3"/>
          <path d="M130 15 L145 30 L130 45 L115 30 Z" fill="url(#chartGradient)" opacity="0.5"/>
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6"/>
              <stop offset="100%" stopColor="#0891b2"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      icon: FileSpreadsheet,
      title: 'Automated Report Generation',
      description: 'Intelligent report automation with AI-generated insights, compliance formatting, and dynamic content based on real-time data.',
      gradient: 'from-green-500 to-emerald-600',
      features: [
        'AI-generated executive summaries',
        'Auto-compliance report formatting',
        'Dynamic content based on live data',
        'Scheduled automated report delivery'
      ],
      illustration: (
        <svg className="w-full h-32 opacity-20" viewBox="0 0 200 120" fill="none">
          <rect x="60" y="20" width="80" height="100" fill="url(#reportGradient)" rx="8"/>
          <rect x="70" y="35" width="60" height="4" fill="white" opacity="0.6"/>
          <rect x="70" y="45" width="45" height="3" fill="white" opacity="0.4"/>
          <rect x="70" y="55" width="50" height="3" fill="white" opacity="0.4"/>
          <rect x="70" y="65" width="40" height="3" fill="white" opacity="0.4"/>
          <rect x="70" y="80" width="25" height="15" fill="white" opacity="0.3"/>
          <rect x="105" y="80" width="25" height="15" fill="white" opacity="0.3"/>
          <circle cx="40" cy="60" r="15" fill="url(#reportGradient)" opacity="0.5"/>
          <path d="M35 60 L38 63 L45 56" stroke="white" strokeWidth="2" fill="none"/>
          <defs>
            <linearGradient id="reportGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981"/>
              <stop offset="100%" stopColor="#059669"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      icon: Database,
      title: 'Smart Data Processing',
      description: 'Advanced data processing pipeline with intelligent validation, automated cleaning, and real-time synchronization capabilities.',
      gradient: 'from-orange-500 to-red-600',
      features: [
        'Intelligent data validation and cleaning',
        'Real-time data synchronization',
        'Automated duplicate detection',
        'Smart data categorization and tagging'
      ],
      illustration: (
        <svg className="w-full h-32 opacity-20" viewBox="0 0 200 120" fill="none">
          <ellipse cx="100" cy="30" rx="35" ry="12" fill="url(#dataGradient)"/>
          <ellipse cx="100" cy="60" rx="35" ry="12" fill="url(#dataGradient)"/>
          <ellipse cx="100" cy="90" rx="35" ry="12" fill="url(#dataGradient)"/>
          <rect x="65" y="30" width="70" height="30" fill="url(#dataGradient)" opacity="0.5"/>
          <rect x="65" y="60" width="70" height="30" fill="url(#dataGradient)" opacity="0.5"/>
          <circle cx="150" cy="60" r="8" fill="white" opacity="0.6"/>
          <path d="M142 60 L145 63 L158 50" stroke="url(#dataGradient)" strokeWidth="2" fill="none"/>
          <defs>
            <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316"/>
              <stop offset="100%" stopColor="#dc2626"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics Dashboard',
      description: 'Leverage AI to predict placement outcomes, identify high-potential students, and forecast departmental performance metrics.',
      gradient: 'from-violet-500 to-purple-600',
      features: [
        'Placement outcome predictions',
        'Student success probability scoring',
        'Department performance forecasting',
        'Market trend analysis and insights'
      ],
      illustration: (
        <svg className="w-full h-32 opacity-20" viewBox="0 0 200 120" fill="none">
          <path d="M20 80 Q60 40 100 60 Q140 20 180 40" stroke="url(#trendGradient)" strokeWidth="3" fill="none"/>
          <circle cx="20" cy="80" r="4" fill="url(#trendGradient)"/>
          <circle cx="60" cy="55" r="4" fill="url(#trendGradient)"/>
          <circle cx="100" cy="60" r="4" fill="url(#trendGradient)"/>
          <circle cx="140" cy="35" r="4" fill="url(#trendGradient)"/>
          <circle cx="180" cy="40" r="4" fill="url(#trendGradient)"/>
          <polygon points="170,35 180,30 185,40" fill="url(#trendGradient)"/>
          <rect x="40" y="90" width="120" height="20" fill="url(#trendGradient)" opacity="0.2" rx="4"/>
          <defs>
            <linearGradient id="trendGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6"/>
              <stop offset="100%" stopColor="#7c3aed"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      icon: Bot,
      title: 'Intelligent Process Automation',
      description: 'AI-powered workflow automation that streamlines placement processes, reduces manual work, and ensures consistent quality across all operations.',
      gradient: 'from-pink-500 to-rose-600',
      features: [
        'Smart workflow orchestration',
        'Automated decision making systems', 
        'Intelligent task prioritization',
        'Self-learning process optimization'
      ],
      illustration: (
        <svg className="w-full h-32 opacity-20" viewBox="0 0 200 120" fill="none">
          <rect x="80" y="40" width="40" height="50" fill="url(#botGradient)" rx="8"/>
          <circle cx="90" cy="55" r="3" fill="white"/>
          <circle cx="110" cy="55" r="3" fill="white"/>
          <rect x="95" y="65" width="10" height="8" fill="white" opacity="0.6" rx="2"/>
          <rect x="70" y="30" width="15" height="25" fill="url(#botGradient)" rx="7"/>
          <rect x="115" y="30" width="15" height="25" fill="url(#botGradient)" rx="7"/>
          <circle cx="50" cy="50" r="8" fill="url(#botGradient)" opacity="0.5"/>
          <circle cx="150" cy="70" r="8" fill="url(#botGradient)" opacity="0.5"/>
          <path d="M58 50 L72 45" stroke="white" strokeWidth="2"/>
          <path d="M128 50 L142 55" stroke="white" strokeWidth="2"/>
          <defs>
            <linearGradient id="botGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899"/>
              <stop offset="100%" stopColor="#e11d48"/>
            </linearGradient>
          </defs>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Enhanced Background Graphics */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-60 right-20 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-1/4 w-36 h-36 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl"></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-1/3 left-1/3 w-6 h-6 bg-indigo-200 transform rotate-45 opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/3 w-4 h-16 bg-gradient-to-t from-blue-200 to-transparent opacity-20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-700">AI-Powered Features</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Intelligent Analytics & 
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent p-2">
              Automated Insights
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Revolutionize your placement process with cutting-edge AI technology that transforms raw data 
            into actionable insights, automates complex workflows, and delivers intelligent recommendations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
            >
              {/* Card Background Illustration */}
              <div className="absolute top-0 right-0 overflow-hidden">
                {feature.illustration}
              </div>
              
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg`}></div>
              
              <div className="relative p-8">
                {/* Feature Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl mb-6 shadow-lg`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Feature Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Feature List */}
                <ul className="space-y-3">
                  {feature.features.map((featureItem, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-2 h-2 bg-gradient-to-br ${feature.gradient} rounded-full mt-2`}></div>
                      <span className="text-sm text-gray-700 leading-relaxed">{featureItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}; 