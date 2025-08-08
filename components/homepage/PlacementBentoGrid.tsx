"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBrain,
  IconChartBar,
  IconUsers,
  IconTarget,
  IconTrendingUp,
  IconSchool,
  IconBriefcase,
  IconSparkles,
  IconRocket,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function PlacementBentoGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Transform Your Placement Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the power of AI-driven placement management with advanced analytics, 
            real-time insights, and seamless automation designed for modern universities.
          </p>
        </motion.div>
      </div>
      
      <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[24rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={cn(
              "[&>p:text-lg] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10", 
              i === 3 || i === 6 ? "md:col-span-2" : ""
            )} 
          />
        ))}
      </BentoGrid>
    </div>
  );
}

// Student Analytics Animation - Enhanced Blue theme
const StudentAnalyticsAnimation = () => {
  const metrics = [
    { label: "Placement Rate", value: "94%", color: "from-emerald-400 to-green-500" },
    { label: "Avg. Package", value: "₹8.5L", color: "from-blue-400 to-cyan-500" },
    { label: "Top Offers", value: "₹45L", color: "from-purple-400 to-indigo-500" }
  ];
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] relative overflow-hidden rounded-xl"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
      }}>
      
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40"
          style={{
            top: `${20 + (i * 15)}%`,
            left: `${10 + (i * 12)}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}
      
      <div className="relative z-10 p-6 flex flex-col justify-center space-y-5">
        {metrics.map((metric, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              scale: 1,
              transition: { 
                delay: i * 0.3, 
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }
            }}
            whileHover={{ 
              scale: 1.05, 
              x: 8,
              transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
            className="flex items-center justify-between bg-gradient-to-r from-slate-800/60 to-slate-700/40 backdrop-blur-lg p-4 rounded-xl border border-slate-600/30 hover:border-blue-400/50 transition-all duration-300 group shadow-lg">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${metric.color} shadow-lg`}></div>
              <span className="text-sm text-slate-200 font-medium">{metric.label}</span>
            </div>
            <motion.span 
              className={`text-xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6 }}
            >
              {metric.value}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Company Matching Animation - Enhanced
const CompanyMatchingAnimation = () => {
  const companies = [
    { name: "TCS", color: "from-blue-400 to-blue-600" },
    { name: "Google", color: "from-red-400 to-pink-600" },
    { name: "Microsoft", color: "from-green-400 to-emerald-600" },
    { name: "Amazon", color: "from-yellow-400 to-orange-600" }
  ];
  
  return (
    <motion.div
      className="flex flex-1 w-full h-full min-h-[6rem] relative overflow-hidden rounded-xl"
      style={{
        background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)",
      }}>
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(139,92,246,0.1)_180deg,transparent_360deg)]"></div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative">
          {/* Enhanced Central Student Node */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              boxShadow: ["0 0 20px rgba(99,102,241,0.5)", "0 0 40px rgba(99,102,241,0.8)", "0 0 20px rgba(99,102,241,0.5)"]
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity }
            }}
                         className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl z-20 relative border-2 border-white/20">
             <IconSchool className="w-8 h-8 text-white" />
          </motion.div>
          
          {/* Enhanced Company Nodes */}
          {companies.map((company, i) => {
            const angle = (i * 90) - 45;
            const radius = 65;
            const x = Math.cos(angle * Math.PI / 180) * radius;
            const y = Math.sin(angle * Math.PI / 180) * radius;
            
            return (
              <motion.div
                key={company.name}
                className={`absolute w-10 h-10 bg-gradient-to-br ${company.color} rounded-xl flex items-center justify-center text-xs font-bold text-white shadow-xl border border-white/20`}
                style={{
                  left: `calc(50% + ${x}px - 20px)`,
                  top: `calc(50% + ${y}px - 20px)`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  rotate: [0, 360],
                }}
                transition={{ 
                  delay: i * 0.2,
                  rotate: { duration: 15 + i * 3, repeat: Infinity, ease: "linear" }
                }}
                whileHover={{ scale: 1.3, zIndex: 30 }}>
                {company.name.slice(0, 3)}
              </motion.div>
            );
          })}
          
          {/* Enhanced Connection Lines */}
          {companies.map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 bg-gradient-to-t from-indigo-400/80 via-purple-400/60 to-transparent h-16 origin-bottom"
              style={{
                left: "50%",
                top: "50%",
                transform: `rotate(${i * 90 - 45}deg)`,
                transformOrigin: "bottom center",
                filter: "drop-shadow(0 0 4px rgba(99, 102, 241, 0.6))",
              }}
              initial={{ scaleY: 0 }}
              animate={{ 
                scaleY: [0, 1, 0],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Enhanced Skills Assessment Animation
const SkillsAssessmentAnimation = () => {
  const skills = [
    { name: "Technical Skills", level: 85, color: "from-cyan-400 to-blue-500" },
    { name: "Communication", level: 92, color: "from-emerald-400 to-green-500" },
    { name: "Leadership", level: 78, color: "from-purple-400 to-indigo-500" },
  ];

  return (
    <motion.div
      className="flex flex-1 w-full h-full min-h-[6rem] relative overflow-hidden rounded-xl"
      style={{
        background: "linear-gradient(135deg, #581c87 0%, #7c3aed 50%, #a855f7 100%)",
      }}>
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(168,85,247,0.1)_50%,transparent_75%)]"></div>
      </div>
      
      {/* Skill level indicators floating */}
      {skills.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-300 rounded-full opacity-30"
          style={{
            top: `${15 + i * 25}%`,
            right: `${10}%`,
          }}
          animate={{
            scale: [0.8, 1.4, 0.8],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: i * 0.8,
          }}
        />
      ))}
      
      <div className="relative z-10 p-6 flex flex-col justify-center space-y-5">
        {skills.map((skill, i) => (
          <div key={skill.name} className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-purple-100 font-medium">{skill.name}</span>
              <motion.span 
                className={`text-sm font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.3 + 0.5 }}
              >
                {skill.level}%
              </motion.span>
            </div>
            <div className="w-full bg-purple-900/40 rounded-full h-3 backdrop-blur-sm border border-purple-700/30">
              <motion.div
                className={`bg-gradient-to-r ${skill.color} h-3 rounded-full relative overflow-hidden`}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ 
                  duration: 2, 
                  delay: i * 0.4,
                  ease: "easeOut" 
                }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 + 1 }}
                />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Enhanced Real-time Placement Tracking
const PlacementTrackingAnimation = () => {
  return (
    <motion.div
      className="flex flex-1 w-full h-full min-h-[6rem] relative overflow-hidden rounded-xl"
      style={{
        background: "linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #3b82f6 100%)",
      }}>
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] animate-pulse"></div>
      </div>
      
      <div className="relative z-10 p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <motion.div 
              className="w-3 h-3 bg-emerald-400 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm text-blue-100 font-medium">Live Tracking</span>
          </div>
          <div className="text-xs text-blue-200 font-medium bg-blue-800/30 px-3 py-1 rounded-full">
            This Week
          </div>
        </div>
        
        <div className="flex-1 flex items-end justify-center space-x-3 mb-6">
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                height: ["25%", "75%", "50%", "85%", "40%"],
              }}
              transition={{
                delay: i * 0.1,
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-5 bg-gradient-to-t from-blue-500 via-cyan-400 to-blue-300 rounded-t-lg relative"
              style={{
                filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))",
              }}
              whileHover={{ scale: 1.1 }}
            >
              {/* Shimmer effect on bars */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent rounded-t-lg"
                animate={{ y: ["100%", "-100%"] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center bg-blue-900/40 backdrop-blur-sm px-4 py-3 rounded-xl border border-blue-400/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}>
          <div className="flex items-center justify-center space-x-2">
            <IconRocket className="w-4 h-4 text-blue-300" />
            <span className="text-sm text-blue-200 font-medium">127 Applications This Week</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Enhanced AI Recommendations Animation
const AIRecommendationsAnimation = () => {
  const recommendations = [
    { text: "Improve coding skills", type: "technical", icon: IconBrain },
    { text: "Practice mock interviews", type: "preparation", icon: IconTarget },
    { text: "Update portfolio", type: "profile", icon: IconSparkles }
  ];

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] relative overflow-hidden rounded-xl"
      style={{
        background: "linear-gradient(135deg, #4338ca 0%, #5b21b6 50%, #7c3aed 100%)",
      }}>
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_45deg,transparent_0deg,rgba(168,85,247,0.1)_90deg,transparent_180deg)]"></div>
      </div>
      
      {/* AI sparkles animation */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full"
          style={{
            top: `${20 + i * 20}%`,
            right: `${8 + i * 5}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
      
      <div className="relative z-10 p-6 flex flex-col justify-center space-y-4">
        {recommendations.map((rec, i) => {
          const IconComponent = rec.icon;
          return (
            <motion.div
              key={i}
              initial={{ x: -30, opacity: 0 }}
              animate={{ 
                x: 0, 
                opacity: 1,
                transition: { delay: i * 0.2, type: "spring", stiffness: 150, damping: 15 }
              }}
              whileHover={{ 
                scale: 1.05, 
                x: 8,
                transition: { type: 'spring', stiffness: 300 }
              }}
              className="flex items-center space-x-4 bg-indigo-600/20 backdrop-blur-sm p-4 rounded-xl border border-indigo-400/30 hover:border-indigo-300/50 transition-all duration-300 group">
              
              <motion.div
                className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.8 }}
              >
                <IconComponent className="w-4 h-4 text-white" />
              </motion.div>
              
              <span className="text-sm text-indigo-100 font-medium group-hover:text-white transition-all">
                {rec.text}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

// Enhanced University Dashboard Animation
const UniversityDashboardAnimation = () => {
  const stats = [
    { label: "Students", value: "2,450", color: "text-cyan-300", bg: "from-cyan-500 to-blue-600" },
    { label: "Companies", value: "180", color: "text-emerald-300", bg: "from-emerald-500 to-green-600" },
    { label: "Placements", value: "2,301", color: "text-purple-300", bg: "from-purple-500 to-indigo-600" },
  ];

  return (
    <motion.div
      className="flex flex-1 w-full h-full min-h-[6rem] relative overflow-hidden rounded-xl"
      style={{
        background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 30%, #5b21b6 70%, #7c3aed 100%)",
      }}>
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(147,51,234,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.15),transparent_50%)]"></div>
      </div>
      
      {/* Dashboard grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      <div className="relative z-10 p-6 flex flex-col justify-center space-y-5">
        <motion.div 
          className="text-center mb-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-sm text-purple-200 font-medium bg-purple-800/30 px-3 py-1 rounded-full">
            Dashboard Overview
          </span>
        </motion.div>
        
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-purple-400/20 hover:border-purple-300/40 transition-all duration-300 group"
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                y: 0
              }}
              transition={{ 
                delay: i * 0.15,
                type: "spring", 
                stiffness: 120,
                damping: 12
              }}
              whileHover={{ scale: 1.05, y: -2 }}>
              
              <motion.div 
                className={`text-xl font-bold ${stat.color} mb-1`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-xs text-purple-200 font-medium">{stat.label}</div>
              
              {/* Mini progress indicator */}
              <motion.div
                className={`w-full h-1 bg-gradient-to-r ${stat.bg} rounded-full mt-2 opacity-70`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: i * 0.3 + 0.5, duration: 1 }}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center bg-gradient-to-r from-purple-600/40 to-indigo-600/40 backdrop-blur-sm px-4 py-2 rounded-xl border border-purple-300/30 mt-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}>
          <span className="text-xs text-white font-medium flex items-center justify-center gap-2">
            <motion.span 
              className="w-2 h-2 bg-emerald-400 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Real-time Updates Active
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

const items = [
  {
    title: "Student Analytics Dashboard",
    description: "Real-time insights into student performance, placement rates, and career progression with AI-powered predictive analytics.",
    header: <StudentAnalyticsAnimation />,
    icon: <IconChartBar className="h-4 w-4 text-blue-400" />,
  },
  {
    title: "Smart Company Matching",
    description: "AI-driven algorithm that intelligently matches students with companies based on skills, preferences, and career aspirations.",
    header: <CompanyMatchingAnimation />,
    icon: <IconTarget className="h-4 w-4 text-indigo-400" />,
  },
  {
    title: "Skills Assessment & Growth",
    description: "Comprehensive skill evaluation with personalized learning paths, progress tracking, and industry-relevant certifications.",
    header: <SkillsAssessmentAnimation />,
    icon: <IconBrain className="h-4 w-4 text-purple-400" />,
  },
  {
    title: "Real-time Placement Tracking & Analytics",
    description: "Monitor placement activities, track applications, and analyze hiring trends with comprehensive real-time dashboards and predictive insights for better decision making.",
    header: <PlacementTrackingAnimation />,
    icon: <IconTrendingUp className="h-4 w-4 text-blue-400" />,
  },
  {
    title: "AI-Powered Career Recommendations",
    description: "Intelligent suggestions for career development, skill improvement, and strategic placement opportunities tailored to each student.",
    header: <AIRecommendationsAnimation />,
    icon: <IconSparkles className="h-4 w-4 text-indigo-400" />,
  },
  {
    title: "University Management Hub",
    description: "Centralized command center for placement officers to efficiently manage students, companies, and placement drives with automated workflows.",
    header: <UniversityDashboardAnimation />,
    icon: <IconUsers className="h-4 w-4 text-purple-400" />,
  },
]; 