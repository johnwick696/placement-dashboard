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
      <div className="flex items-center space-x-2 mb-6">
        <TrendingUp className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">PrepCV Analytics</h3>
        <Badge variant="success" className="ml-auto">
          Overall Score: {prepCVScore}/100
        </Badge>
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

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Test Type Performance */}
        <div>
          <h4 className="text-md font-medium text-gray-900 mb-4">Test Type Performance</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="average" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Test Scores */}
        <div>
          <h4 className="text-md font-medium text-gray-900 mb-4">Recent Test Scores</h4>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={recentTests}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#10B981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Skills Radar Chart */}
        <div>
          <h4 className="text-md font-medium text-gray-900 mb-4">Skills Assessment</h4>
          <ResponsiveContainer width="100%" height={200}>
            <RadarChart data={skillsData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="skill" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar name="Skills" dataKey="value" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Test Completion Status */}
        <div>
          <h4 className="text-md font-medium text-gray-900 mb-4">Test Completion Status</h4>
          <ResponsiveContainer width="100%" height={200}>
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

      {/* Detailed Test List */}
      <div className="mt-6">
        <h4 className="text-md font-medium text-gray-900 mb-4">Test History</h4>
        <div className="space-y-3">
          {tests.map((test) => (
            <div key={test.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  test.status === 'completed' ? 'bg-green-500' : 
                  test.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                }`} />
                <div>
                  <p className="font-medium text-gray-900">{test.name}</p>
                  <p className="text-sm text-gray-500 capitalize">{test.type} Test</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">
                  {test.status === 'completed' ? `${test.score}/${test.maxScore}` : test.status}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(test.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
} 