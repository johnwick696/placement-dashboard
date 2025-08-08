'use client'

import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts'
import { TrendingUp, Code, Users, Target, Award } from 'lucide-react'

interface PrepCVTest {
  id: string
  name: string
  type: 'coding' | 'interview' | 'aptitude' | 'technical'
  score: number
  maxScore: number
  date: Date
  status: 'completed' | 'pending' | 'failed'
}

interface PrepCVStatsProps {
  studentName: string
  prepCVScore: number
  tests: PrepCVTest[]
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

export function PrepCVStats({ studentName, prepCVScore, tests }: PrepCVStatsProps) {
  // Calculate overall statistics
  const totalTests = tests.length
  const completedTests = tests.filter(test => test.status === 'completed').length
  const averageScore = tests.length > 0 
    ? tests.reduce((sum, test) => sum + test.score, 0) / tests.length 
    : 0

  // Prepare data for charts
  const testTypeData = tests.reduce((acc, test) => {
    const type = test.type
    if (!acc[type]) {
      acc[type] = { type, count: 0, totalScore: 0, maxScore: 0 }
    }
    acc[type].count++
    acc[type].totalScore += test.score
    acc[type].maxScore += test.maxScore
    return acc
  }, {} as Record<string, { type: string; count: number; totalScore: number; maxScore: number }>)

  const chartData = Object.values(testTypeData).map(item => ({
    name: item.type.charAt(0).toUpperCase() + item.type.slice(1),
    average: Math.round((item.totalScore / item.count / item.maxScore) * 100),
    count: item.count
  }))

  // Recent test scores for line chart
  const recentTests = tests
    .filter(test => test.status === 'completed')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10)
    .reverse()
    .map(test => ({
      name: test.name,
      score: Math.round((test.score / test.maxScore) * 100),
      date: new Date(test.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    }))

  // Skills radar chart data
  const skillsData = [
    { skill: 'Coding', value: 85 },
    { skill: 'Problem Solving', value: 78 },
    { skill: 'Technical Knowledge', value: 92 },
    { skill: 'Communication', value: 88 },
    { skill: 'System Design', value: 75 },
    { skill: 'Data Structures', value: 90 }
  ]

  // Test completion status for pie chart
  const completionData = [
    { name: 'Completed', value: completedTests, color: '#00C49F' },
    { name: 'Pending', value: totalTests - completedTests, color: '#FFBB28' }
  ]

  return (
    <Card className="p-6">
      {/* Header with enhanced design */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">PrepCV Analytics</h3>
              <p className="text-sm text-gray-600">Comprehensive performance insights for {studentName}</p>
            </div>
          </div>
          <div className="text-right">
            <Badge variant="success" className="text-sm px-3 py-1">
              Overall Score: {prepCVScore}/100
            </Badge>
            <p className="text-xs text-gray-500 mt-1">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <Code className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-gray-600">Total Tests</span>
          </div>
          <p className="text-2xl font-bold text-blue-600">{totalTests}</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <Target className="w-4 h-4 text-green-600" />
            <span className="text-sm text-gray-600">Completed</span>
          </div>
          <p className="text-2xl font-bold text-green-600">{completedTests}</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-gray-600">Avg Score</span>
          </div>
          <p className="text-2xl font-bold text-purple-600">{Math.round(averageScore)}%</p>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-orange-600" />
            <span className="text-sm text-gray-600">Completion</span>
          </div>
          <p className="text-2xl font-bold text-orange-600">
            {totalTests > 0 ? Math.round((completedTests / totalTests) * 100) : 0}%
          </p>
        </div>
      </div>

      {/* Charts Grid - Full Width Layout */}
      <div className="space-y-8">
        {/* Top Row - Performance Charts */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Test Type Performance */}
          <div className="xl:col-span-2">
            <h4 className="text-md font-medium text-gray-900 mb-4">Test Type Performance</h4>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="average" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Test Completion Status */}
          <div>
            <h4 className="text-md font-medium text-gray-900 mb-4">Test Completion Status</h4>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={completionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {completionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Middle Row - Progress and Skills */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Recent Test Scores */}
          <div>
            <h4 className="text-md font-medium text-gray-900 mb-4">Recent Test Scores Progress</h4>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={recentTests}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: '#10B981', strokeWidth: 2, fill: '#fff' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Skills Radar Chart */}
          <div>
            <h4 className="text-md font-medium text-gray-900 mb-4">Skills Assessment</h4>
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart data={skillsData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar 
                  name="Skills" 
                  dataKey="value" 
                  stroke="#8B5CF6" 
                  fill="#8B5CF6" 
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Detailed Test List with Enhanced Design */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-md font-medium text-gray-900">Test History</h4>
          <div className="flex space-x-2">
            <Badge variant="success" className="text-xs">
              {completedTests} Completed
            </Badge>
            <Badge variant="warning" className="text-xs">
              {totalTests - completedTests} Pending
            </Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tests.map((test) => (
            <div key={test.id} className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`w-2 h-2 rounded-full ${
                      test.status === 'completed' ? 'bg-green-500' : 
                      test.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                    }`} />
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      test.type === 'coding' ? 'bg-blue-100 text-blue-700' :
                      test.type === 'interview' ? 'bg-purple-100 text-purple-700' :
                      test.type === 'aptitude' ? 'bg-green-100 text-green-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {test.type.charAt(0).toUpperCase() + test.type.slice(1)}
                    </span>
                  </div>
                  <h5 className="font-medium text-gray-900 mb-1">{test.name}</h5>
                  <p className="text-sm text-gray-500">
                    {new Date(test.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
                <div className="text-right">
                  {test.status === 'completed' ? (
                    <div>
                      <p className="text-lg font-bold text-gray-900">
                        {Math.round((test.score / test.maxScore) * 100)}%
                      </p>
                      <p className="text-xs text-gray-500">
                        {test.score}/{test.maxScore}
                      </p>
                    </div>
                  ) : (
                    <Badge variant={test.status === 'pending' ? 'warning' : 'error'} className="text-xs">
                      {test.status.charAt(0).toUpperCase() + test.status.slice(1)}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
} 