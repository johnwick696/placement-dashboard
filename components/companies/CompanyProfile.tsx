'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { MapPin, Globe, Phone, Mail, Building, Users } from 'lucide-react'

interface Company {
  id: string
  name: string
  description: string
  industry: string
  location: string
  website: string
  phone: string
  email: string
  foundedYear: number
  employeeCount: string
  logo?: string
  type?: string
  tier?: string
  lastContactDate?: Date
  isActive?: boolean
  createdAt?: Date
  pocs?: Array<{
    id: string
    name: string
    email: string
    designation: string
    isPrimary: boolean
    companyId: string
  }>
  jobs?: Array<{
    id: string
    title: string
    description: string
    requirements: string[]
    salary: string
    location: string
    postedDate: Date
    companyId: string
  }>
}

interface CompanyProfileProps {
  companyId: string
}

export function CompanyProfile({ companyId }: CompanyProfileProps) {
  const [company, setCompany] = useState<Company | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        setLoading(true)
        // TODO: Replace with actual API call
        // const response = await fetch(`/api/companies/${companyId}`)
        // const data = await response.json()
        
        // Mock data for now
        const mockCompany: Company = {
          id: companyId,
          name: 'TechMahindra Solutions',
          description: 'A leading Indian multinational technology company providing digital transformation, consulting and business re-engineering services. We are a pioneer in leveraging emerging technologies like AI, IoT, and blockchain to deliver innovative solutions.',
          industry: 'Information Technology',
          location: 'Pune, Maharashtra',
          website: 'https://techmahindra.com',
          phone: '+91-20-6601-4040',
          email: 'contact@techmahindra.com',
          foundedYear: 1986,
          employeeCount: '50,000+',
          logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iIzAwNTI5YiIvPgo8dGV4dCB4PSI0IiB5PSIyMiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiPlRlY2g8L3RleHQ+Cjx0ZXh0IHg9IjQiIHk9IjMzIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNmZmY5MDAiPk1haGluZHJhPC90ZXh0Pgo8L3N2Zz4K',
          type: 'mass_recruiter',
          tier: 'tier2',
          lastContactDate: new Date('2024-11-10'),
          isActive: true,
          createdAt: new Date('2024-01-15'),
          pocs: [
            {
              id: '1',
              name: 'Ravi Shankar',
              email: 'ravi.shankar@techmahindra.com',
              designation: 'Senior HR Manager',
              isPrimary: true,
              companyId: companyId
            }
          ],
          jobs: []
        }
        
        setCompany(mockCompany)
      } catch (err) {
        setError('Failed to load company information')
        console.error('Error fetching company:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCompany()
  }, [companyId])

  if (loading) {
    return (
      <Card>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Company Profile</h2>
        </div>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </Card>
    )
  }

  if (error || !company) {
    return (
      <Card>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Company Profile</h2>
        </div>
        <div className="text-center py-8">
          <p className="text-red-600 mb-4">{error || 'Company not found'}</p>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <Card>
      <div className="mb-6">
        <div className="flex items-center gap-4">
          {company.logo && (
            <img 
              src={company.logo} 
              alt={`${company.name} logo`}
              className="w-16 h-16 rounded-lg object-cover"
            />
          )}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{company.name}</h2>
            <Badge variant="default" className="mt-1">
              {company.industry}
            </Badge>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-2">About</h3>
          <p className="text-gray-600 leading-relaxed">{company.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-gray-500" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-gray-600">{company.location}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Building className="w-5 h-5 text-gray-500" />
            <div>
              <p className="font-medium">Founded</p>
              <p className="text-gray-600">{company.foundedYear}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-gray-500" />
            <div>
              <p className="font-medium">Employees</p>
              <p className="text-gray-600">{company.employeeCount}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-gray-500" />
            <div>
              <p className="font-medium">Website</p>
              <a 
                href={company.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {company.website.replace(/^https?:\/\//, '')}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-gray-500" />
            <div>
              <p className="font-medium">Phone</p>
              <a 
                href={`tel:${company.phone}`}
                className="text-blue-600 hover:underline"
              >
                {company.phone}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-gray-500" />
            <div>
              <p className="font-medium">Email</p>
              <a 
                href={`mailto:${company.email}`}
                className="text-blue-600 hover:underline"
              >
                {company.email}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t">
          <Button className="w-full" variant="outline">
            Contact Company
          </Button>
        </div>
      </div>
    </Card>
  )
} 