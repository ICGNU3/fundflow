'use client';

import { useState, useEffect } from 'react';

// Mock data for public proposal
const mockProposal = {
  id: 'abc123',
  title: 'Community Garden Initiative',
  organization: 'Green Thumb Community Center',
  amount: '$15,000',
  submittedDate: '2024-01-15',
  category: 'Environmental',
  status: 'Under Review',
  description: 'Creating sustainable community gardens to promote healthy eating and community engagement in underserved neighborhoods. This project will establish 5 community gardens across the city, providing fresh produce and educational opportunities for over 500 families.',
  impact: '500+ families will have access to fresh produce and gardening education',
  timeline: '12 months',
  location: 'Urban areas across the city',
  beneficiaries: 'Low-income families, children, seniors, and community members',
  budget: {
    total: 15000,
    breakdown: [
      { item: 'Garden supplies and tools', amount: 5000, percentage: 33 },
      { item: 'Educational materials', amount: 2000, percentage: 13 },
      { item: 'Staff training', amount: 3000, percentage: 20 },
      { item: 'Community outreach', amount: 2000, percentage: 13 },
      { item: 'Administrative costs', amount: 3000, percentage: 20 },
    ]
  },
  organizationInfo: {
    name: 'Green Thumb Community Center',
    type: 'Nonprofit',
    founded: '2018',
    mission: 'To promote sustainable living and community health through urban agriculture.',
    website: 'https://greenthumbcenter.org',
    contact: 'info@greenthumbcenter.org',
  },
  updates: [
    {
      date: '2024-01-20',
      title: 'Proposal Under Review',
      description: 'The proposal has been submitted and is currently under review by our funding committee.'
    },
    {
      date: '2024-01-15',
      title: 'Proposal Submitted',
      description: 'The proposal was successfully submitted for consideration.'
    }
  ]
};

export default function PublicProposalPage({ params }: { params: Promise<{ proposalId: string }> }) {
  const [proposalId, setProposalId] = useState<string>('');
  
  // Handle async params
  useEffect(() => {
    params.then(({ proposalId: id }) => setProposalId(id));
  }, [params]);
  const [proposal] = useState(mockProposal);
  const [activeTab, setActiveTab] = useState<'overview' | 'budget' | 'updates'>('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-gray-900">FundFlow</h1>
              <span className="text-gray-400">|</span>
              <span className="text-sm text-gray-600">Public Proposal View</span>
            </div>
            <div className="text-sm text-gray-500">
              Proposal ID: {proposalId}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Proposal Header */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{proposal.title}</h1>
                <p className="text-xl text-gray-600 mb-4">{proposal.organization}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>Category: {proposal.category}</span>
                  <span>•</span>
                  <span>Submitted: {new Date(proposal.submittedDate).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>Location: {proposal.location}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">{proposal.amount}</div>
                <div className="text-sm text-gray-500">Requested Funding</div>
                <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-yellow-100 text-yellow-800 mt-2">
                  {proposal.status}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'overview'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('budget')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'budget'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Budget
                </button>
                <button
                  onClick={() => setActiveTab('updates')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'updates'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Updates
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Project Description</h3>
                    <p className="text-gray-700 leading-relaxed">{proposal.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-md font-medium text-gray-900 mb-2">Expected Impact</h4>
                      <p className="text-gray-700">{proposal.impact}</p>
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-gray-900 mb-2">Timeline</h4>
                      <p className="text-gray-700">{proposal.timeline}</p>
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-gray-900 mb-2">Beneficiaries</h4>
                      <p className="text-gray-700">{proposal.beneficiaries}</p>
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-gray-900 mb-2">Location</h4>
                      <p className="text-gray-700">{proposal.location}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-md font-medium text-gray-900 mb-3">About the Organization</h4>
                    <div className="space-y-2">
                      <p className="text-gray-700"><strong>Mission:</strong> {proposal.organizationInfo.mission}</p>
                      <p className="text-gray-700"><strong>Founded:</strong> {proposal.organizationInfo.founded}</p>
                      <p className="text-gray-700"><strong>Type:</strong> {proposal.organizationInfo.type}</p>
                      {proposal.organizationInfo.website && (
                        <p className="text-gray-700">
                          <strong>Website:</strong> 
                          <a href={proposal.organizationInfo.website} className="text-blue-600 hover:text-blue-800 ml-1">
                            {proposal.organizationInfo.website}
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'budget' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Budget Breakdown</h3>
                    <div className="space-y-4">
                      {proposal.budget.breakdown.map((item, index) => (
                        <div key={index} className="flex items-center space-x-4">
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-gray-900 font-medium">{item.item}</span>
                              <span className="text-gray-900 font-semibold">${item.amount.toLocaleString()}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{ width: `${item.percentage}%` }}
                              />
                            </div>
                            <div className="text-right text-sm text-gray-500 mt-1">{item.percentage}%</div>
                          </div>
                        </div>
                      ))}
                      <div className="border-t border-gray-200 pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-gray-900">Total</span>
                          <span className="text-lg font-bold text-gray-900">${proposal.budget.total.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'updates' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Project Updates</h3>
                  <div className="space-y-4">
                    {proposal.updates.map((update, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-sm font-medium text-gray-900">{update.title}</span>
                          <span className="text-sm text-gray-500">•</span>
                          <span className="text-sm text-gray-500">{new Date(update.date).toLocaleDateString()}</span>
                        </div>
                        <p className="text-gray-700">{update.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-sm font-medium text-gray-500">Organization</span>
                <p className="text-gray-900">{proposal.organizationInfo.name}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Contact Email</span>
                <p className="text-gray-900">{proposal.organizationInfo.contact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 