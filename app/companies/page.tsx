'use client';
import React, { useState, useEffect } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SearchInput } from '@/components/ui/SearchInput';
import { Select } from '@/components/ui/Select';
// import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import {
  Plus,
  Download,
  Filter,
  Building2,
  Users,
  MapPin,
  Calendar,
  Edit,
  Eye
} from 'lucide-react';
import { CompanyCard } from '@/components/companies/CompanyCard';
import { CompanyForm } from '@/components/companies/CompanyForm';
import type { Company, CompanyFilters } from '@/types';

// Mock data
const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'Microsoft',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibXNncmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDc4ZDQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDA1YTljIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI0IiBmaWxsPSJ1cmwoI21zZ3JhZGllbnQpIi8+CiAgPHJlY3QgeD0iOCIgeT0iOCIgd2lkdGg9IjEyLjUiIGhlaWdodD0iMTIuNSIgZmlsbD0iI2YyNTAyMiIvPgogIDxyZWN0IHg9IjE5LjUiIHk9IjgiIHdpZHRoPSIxMi41IiBoZWlnaHQ9IjEyLjUiIGZpbGw9IiM3ZmJhMDAiLz4KICA8cmVjdCB4PSI4IiB5PSIxOS41IiB3aWR0aD0iMTIuNSIgaGVpZ2h0PSIxMi41IiBmaWxsPSIjMDBiY2Y1Ii8+CiAgPHJlY3QgeD0iMTkuNSIgeT0iMTkuNSIgd2lkdGg9IjEyLjUiIGhlaWdodD0iMTIuNSIgZmlsbD0iI2ZmYjkwMCIvPgo8L3N2Zz4K',
    website: 'https://microsoft.com',
    industry: 'Technology',
    type: 'dream',
    tier: 'tier1',
    lastContactDate: new Date('2024-11-10'),
    isActive: true,
    createdAt: new Date('2024-01-15'),
    pocs: [
      {
        id: '1',
        name: 'John Smith',
        email: 'john.smith@microsoft.com',
        designation: 'Senior Recruiter',
        isPrimary: true,
        companyId: '1'
      }
    ],
    jobs: []
  },
  {
    id: '2',
    name: 'TCS',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iIzAwNGQ5OSIvPgo8dGV4dCB4PSI1IiB5PSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiPlRDUzwvdGV4dD4KPC9zdmc+',
    website: 'https://tcs.com',
    industry: 'IT Services',
    type: 'mass_recruiter',
    tier: 'tier2',
    lastContactDate: new Date('2024-11-05'),
    isActive: true,
    createdAt: new Date('2024-01-20'),
    pocs: [
      {
        id: '2',
        name: 'Priya Sharma',
        email: 'priya.sharma@tcs.com',
        designation: 'HR Manager',
        isPrimary: true,
        companyId: '2'
      }
    ],
    jobs: []
  },
  {
    id: '3',
    name: 'Amazon',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYW1hem9uZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMjMyZjNlIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzE0MTkyNSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNiIgZmlsbD0idXJsKCNhbWF6b25ncmFkaWVudCkiLz4KICA8dGV4dCB4PSIyMCIgeT0iMTgiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5hbWF6b248L3RleHQ+CiAgPCEtLSBBbWF6b24gU21pbGUgLS0+CiAgPHBhdGggZD0iTTkgMjhRMjAgMzMgMzEgMjgiIHN0cm9rZT0iI2ZmOTkwMCIgc3Ryb2tlLXdpZHRoPSIyLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxjaXJjbGUgY3g9IjMxIiBjeT0iMjgiIHI9IjEuNSIgZmlsbD0iI2ZmOTkwMCIvPgo8L3N2Zz4K',
    website: 'https://amazon.com',
    industry: 'E-commerce & Cloud',
    type: 'dream',
    tier: 'tier1',
    lastContactDate: new Date('2024-11-08'),
    isActive: true,
    createdAt: new Date('2024-02-01'),
    pocs: [
      {
        id: '3',
        name: 'Mike Johnson',
        email: 'mike.johnson@amazon.com',
        designation: 'Talent Acquisition Specialist',
        isPrimary: true,
        companyId: '3'
      }
    ],
    jobs: []
  },
  {
    id: '4',
    name: 'Pharma Ce',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSJ3aGl0ZSIvPgogIDwhLS0gR29vZ2xlIGZhdmljb24gc3R5bGUgLS0+CiAgPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTQiIGZpbGw9IiM0Mjg1ZjQiLz4KICA8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxMSIgZmlsbD0iI2ZmZmZmZiIvPgogIDxwYXRoIGQ9Ik0yNy41IDE5LjVIMjV2LTMuNWgtMi41djMuNUgyMHYyLjVoMi41VjI2SDI1di0zLjVoMi41di0yLjV6IiBmaWxsPSIjNDI4NWY0Ii8+CiAgPHRleHQgeD0iMTQiIHk9IjI0IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNDI4NWY0Ij5HPC90ZXh0Pgo8L3N2Zz4K',
    website: 'https://pharmace.com',
    industry: 'Technology',
    type: 'dream',
    tier: 'tier1',
    lastContactDate: new Date('2024-11-12'),
    isActive: true,
    createdAt: new Date('2024-01-10'),
    pocs: [
      {
        id: '4',
        name: 'Sarah Chen',
        email: 'sarah.chen@google.com',
        designation: 'University Relations Manager',
        isPrimary: true,
        companyId: '4'
      }
    ],
    jobs: []
  },
  {
    id: '5',
    name: 'Infosys',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iaW5mb3N5c2dyYWRpZW50IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwN2NkMiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMDVhOWQiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcng9IjYiIGZpbGw9InVybCgjaW5mb3N5c2dyYWRpZW50KSIvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTUiIHI9IjIiIGZpbGw9IiNmZmZmZmYiLz4KICA8Y2lyY2xlIGN4PSIyOCIgY3k9IjE1IiByPSIyIiBmaWxsPSIjZmZmZmZmIi8+CiAgPHBhdGggZD0iTTEwIDI1aDIwdjJIMTB2LTJ6IiBmaWxsPSIjZmZmZmZmIi8+CiAgPHRleHQgeD0iMjAiIHk9IjM0IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JTkZPU1lTPC90ZXh0Pgo8L3N2Zz4K',
    website: 'https://infosys.com',
    industry: 'IT Services',
    type: 'mass_recruiter',
    tier: 'tier2',
    lastContactDate: new Date('2024-11-07'),
    isActive: true,
    createdAt: new Date('2024-01-25'),
    pocs: [
      {
        id: '5',
        name: 'Rajesh Gupta',
        email: 'rajesh.gupta@infosys.com',
        designation: 'Campus Recruitment Lead',
        isPrimary: true,
        companyId: '5'
      }
    ],
    jobs: []
  }
];

const CompaniesPage: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>(mockCompanies);
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>(mockCompanies);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<CompanyFilters>({});
  const [showFilters, setShowFilters] = useState(false);
  const [showCompanyForm, setShowCompanyForm] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | undefined>();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const user = {
    name: 'Dr. Rajesh Kumar',
    email: 'rajesh.kumar@mitindia.edu',
    role: 'super_admin',
  };

  useEffect(() => {
    applyFilters();
  }, [searchTerm, filters, companies]);

  const applyFilters = () => {
    let filtered = companies;

    if (searchTerm) {
      filtered = filtered.filter(company =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.industry.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters.type) {
      filtered = filtered.filter(company => company.type === filters.type);
    }

    if (filters.tier) {
      filtered = filtered.filter(company => company.tier === filters.tier);
    }

    if (filters.industry) {
      filtered = filtered.filter(company => company.industry === filters.industry);
    }

    if (filters.isActive !== undefined) {
      filtered = filtered.filter(company => company.isActive === filters.isActive);
    }

    setFilteredCompanies(filtered);
  };

  const handleAddCompany = (companyData: any) => {
    const newCompany: Company = {
      id: Date.now().toString(),
      ...companyData,
      isActive: true,
      createdAt: new Date(),
      pocs: [],
      jobs: []
    };
    setCompanies([...companies, newCompany]);
    setShowCompanyForm(false);
  };

  const handleEditCompany = (companyData: any) => {
    if (!selectedCompany) return;
    
    const updatedCompanies = companies.map(company =>
      company.id === selectedCompany.id
        ? { ...company, ...companyData }
        : company
    );
    setCompanies(updatedCompanies);
    setShowCompanyForm(false);
    setSelectedCompany(undefined);
  };

  const pageActions = [
    {
      label: 'Add Company',
      onClick: () => {
        setSelectedCompany(undefined);
        setShowCompanyForm(true);
      },
      icon: Plus,
      variant: 'primary' as const
    },
    {
      label: 'Export',
      onClick: () => {
        // Implement export logic
        console.log('Exporting companies...');
      },
      icon: Download,
      variant: 'outline' as const
    }
  ];

  return (
    <MainLayout user={user}>
      <PageHeader
        title="Companies"
        subtitle={`${filteredCompanies.length} companies • ${filteredCompanies.filter(c => c.isActive).length} active`}
        actions={pageActions}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <SearchInput
              placeholder="Search companies by name or industry..."
              value={searchTerm}
              onChange={setSearchTerm}
              className="w-full"
            />
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              icon={Filter}
              onClick={() => setShowFilters(!showFilters)}
            >
              Filters
            </Button>
          </div>
        </div>

        {showFilters && (
          <div className="mt-4">
            <Card className="p-4 bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Select
                  label="Type"
                  options={[
                    { value: 'dream', label: 'Dream Company' },
                    { value: 'mass_recruiter', label: 'Mass Recruiter' },
                    { value: 'core', label: 'Core Company' },
                    { value: 'startup', label: 'Startup' }
                  ]}
                  value={filters.type || ''}
                  onChange={(e) => setFilters({ ...filters, type: e.target.value as any })}
                />
                
                <Select
                  label="Tier"
                  options={[
                    { value: 'tier1', label: 'Tier 1' },
                    { value: 'tier2', label: 'Tier 2' },
                    { value: 'tier3', label: 'Tier 3' }
                  ]}
                  value={filters.tier || ''}
                  onChange={(e) => setFilters({ ...filters, tier: e.target.value as any })}
                />
                
                <Select
                  label="Status"
                  options={[
                    { value: 'true', label: 'Active' },
                    { value: 'false', label: 'Inactive' }
                  ]}
                  value={filters.isActive?.toString() || ''}
                  onChange={(e) => setFilters({ ...filters, isActive: e.target.value === 'true' })}
                />

                <div className="flex items-end">
                  <Button
                    variant="outline"
                    onClick={() => setFilters({})}
                    className="w-full"
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </PageHeader>

      <div className="space-y-6">
        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company) => (
            <CompanyCard
              key={company.id}
              company={company}
              onEdit={() => {
                setSelectedCompany(company);
                setShowCompanyForm(true);
              }}
              onView={() => {
                window.location.href = `/companies/${company.id}`;
              }}
            />
          ))}
        </div>

        {filteredCompanies.length === 0 && (
          <Card className="p-12 text-center">
            <Building2 className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No companies found</h3>
            <p className="text-gray-500 mb-4">
              {searchTerm || Object.keys(filters).length > 0
                ? 'Try adjusting your search or filters'
                : 'Get started by adding your first company'}
            </p>
            <Button onClick={() => setShowCompanyForm(true)} icon={Plus}>
              Add Company
            </Button>
          </Card>
        )}
      </div>

      {/* Company Form Modal */}
      <Modal
        isOpen={showCompanyForm}
        onClose={() => {
          setShowCompanyForm(false);
          setSelectedCompany(undefined);
        }}
        title={selectedCompany ? 'Edit Company' : 'Add Company'}
        size="lg"
      >
        <CompanyForm
          company={selectedCompany}
          onSubmit={selectedCompany ? handleEditCompany : handleAddCompany}
          onCancel={() => {
            setShowCompanyForm(false);
            setSelectedCompany(undefined);
          }}
        />
      </Modal>
    </MainLayout>
  );
};

export default CompaniesPage;
