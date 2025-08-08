'use client'

import { useState, useRef, useEffect } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Send, Bot, User } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

interface CompanyChatbotProps {
  companyName: string
  companyIndustry: string
  companyDescription: string
}

export function CompanyChatbot({ companyName, companyIndustry, companyDescription }: CompanyChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `Hello! I'm your AI assistant for ${companyName}. I can help you with information about the company, interview preparation tips, job requirements, and more. How can I assist you today?`,
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // AI response generator based on company context
  const generateAIResponse = async (userMessage: string): Promise<string> => {
    setIsTyping(true)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))

    const lowerMessage = userMessage.toLowerCase()
    
    // Company information responses
    if (lowerMessage.includes('company') || lowerMessage.includes('about') || lowerMessage.includes('what') || lowerMessage.includes('tell me')) {
      return `${companyName} is a ${companyIndustry} company. ${companyDescription} They are known for their innovative approach and strong market presence. Is there anything specific about the company you'd like to know?`
    }

    // Interview preparation responses
    if (lowerMessage.includes('interview') || lowerMessage.includes('prepare') || lowerMessage.includes('tips') || lowerMessage.includes('how to')) {
      return `Here are some interview preparation tips for ${companyName}:\n\n1. Research the company thoroughly - understand their products, services, and recent news\n2. Review common technical questions related to ${companyIndustry}\n3. Prepare behavioral questions using the STAR method\n4. Practice coding problems if applying for technical roles\n5. Dress professionally and arrive early\n6. Prepare thoughtful questions to ask the interviewer\n\nWould you like more specific tips for any particular role?`
    }

    // Job requirements responses
    if (lowerMessage.includes('requirement') || lowerMessage.includes('qualification') || lowerMessage.includes('skill') || lowerMessage.includes('need')) {
      return `For ${companyName}, typical requirements include:\n\n• Strong technical skills in relevant technologies\n• Good communication and teamwork abilities\n• Problem-solving mindset\n• Relevant educational background\n• Internship or project experience\n• Knowledge of ${companyIndustry} trends\n\nWhat specific role are you interested in? I can provide more targeted requirements.`
    }

    // Salary related responses
    if (lowerMessage.includes('salary') || lowerMessage.includes('package') || lowerMessage.includes('ctc') || lowerMessage.includes('pay')) {
      return `Salary packages at ${companyName} vary based on role, experience, and location. They typically offer competitive compensation including:\n\n• Base salary\n• Performance bonuses\n• Health benefits\n• Professional development opportunities\n• Stock options (for senior roles)\n\nFor specific salary information, I'd recommend checking their career portal or discussing during the interview process.`
    }

    // Application process responses
    if (lowerMessage.includes('apply') || lowerMessage.includes('process') || lowerMessage.includes('how to apply') || lowerMessage.includes('application')) {
      return `To apply at ${companyName}:\n\n1. Visit their career portal or job boards\n2. Create/update your profile\n3. Upload your resume and cover letter\n4. Complete any required assessments\n5. Submit your application\n6. Follow up if you don't hear back within 2-3 weeks\n\nMake sure your resume highlights relevant skills and experiences for the role you're applying for.`
    }

    // Culture and work environment responses
    if (lowerMessage.includes('culture') || lowerMessage.includes('environment') || lowerMessage.includes('work') || lowerMessage.includes('office')) {
      return `${companyName} is known for fostering a collaborative and innovative work environment. They typically offer:\n\n• Flexible work arrangements\n• Learning and development programs\n• Employee wellness initiatives\n• Team building activities\n• Modern office facilities\n• Work-life balance policies\n\nWould you like to know more about any specific aspect of their work culture?`
    }

    // Default response
    return `I understand you're asking about "${userMessage}". While I can provide general information about ${companyName}, for the most accurate and up-to-date information, I'd recommend:\n\n• Checking their official website\n• Reaching out to their HR department\n• Connecting with current employees on LinkedIn\n• Attending their recruitment events\n\nIs there anything specific about the company, interview process, or job requirements I can help you with?`
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    const aiResponse = await generateAIResponse(inputValue)
    
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: aiResponse,
      sender: 'bot',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, botMessage])
    setIsTyping(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const suggestedQuestions = [
    "Tell me about the company",
    "Interview preparation tips",
    "What are the job requirements?",
    "How is the work culture?",
    "What's the application process?"
  ]

  return (
    <Card className="mt-6">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Bot className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">{companyName} AI Assistant</h3>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">
          Ask me anything about {companyName}, interview preparation, job requirements, or application process.
        </p>

        {/* Chat Messages */}
        <div className="bg-gray-50 rounded-lg p-4 h-64 overflow-y-auto mb-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-900 border border-gray-200'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && (
                      <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    )}
                    <div className="whitespace-pre-wrap text-sm">{message.text}</div>
                    {message.sender === 'user' && (
                      <User className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-900 p-3 rounded-lg border border-gray-200">
                  <div className="flex items-center space-x-2">
                    <Bot className="w-4 h-4" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Suggested Questions */}
        {messages.length === 1 && (
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-2">Quick questions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => setInputValue(question)}
                  className="text-xs"
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="flex space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about the company, interviews, or requirements..."
            className="flex-1"
            disabled={isTyping}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            size="sm"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
} 