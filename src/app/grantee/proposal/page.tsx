'use client';

import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';

interface Proposal {
  id: number;
  title: string;
  status: string;
  amount: string;
  submittedDate: string;
  category: string;
  description: string;
  reviewer: string | null;
  estimatedDecision: string | null;
  content?: string;
}

// Mock data for proposals
const mockProposals = [
  {
    id: 1,
    title: 'Community Garden Initiative',
    status: 'Under Review',
    amount: '$15,000',
    submittedDate: '2024-01-15',
    category: 'Environmental',
    description: 'Creating sustainable community gardens to promote healthy eating and community engagement.',
    reviewer: 'Dr. Sarah Johnson',
    estimatedDecision: '2024-02-15',
  },
  {
    id: 2,
    title: 'Youth Education Program',
    status: 'Approved',
    amount: '$25,000',
    submittedDate: '2024-01-10',
    category: 'Education',
    description: 'After-school program providing STEM education and mentorship for underserved youth.',
    reviewer: 'Prof. Michael Chen',
    estimatedDecision: '2024-01-25',
  },
  {
    id: 3,
    title: 'Healthcare Access Project',
    status: 'Draft',
    amount: '$30,000',
    submittedDate: '2024-01-20',
    category: 'Healthcare',
    description: 'Mobile health clinic providing basic healthcare services to rural communities.',
    reviewer: null,
    estimatedDecision: null,
  },
  {
    id: 4,
    title: 'Arts & Culture Festival',
    status: 'Rejected',
    amount: '$20,000',
    submittedDate: '2023-12-01',
    category: 'Arts & Culture',
    description: 'Annual festival celebrating local artists and cultural diversity.',
    reviewer: 'Ms. Emily Rodriguez',
    estimatedDecision: '2023-12-20',
  },
];

// Form options
const impactAreaOptions = [
  'Education', 'Healthcare', 'Environment', 'Arts & Culture',
  'Social Services', 'Youth Development', 'Community Development',
  'Research', 'Advocacy', 'Emergency Relief', 'Technology', 'Agriculture'
];

const budgetRangeOptions = [
  'Under $10,000', '$10,000 - $50,000', '$50,000 - $100,000',
  '$100,000 - $500,000', '$500,000 - $1,000,000', 'Over $1,000,000'
];

const requestTypeOptions = [
  'General Operating Support', 'Program/Project Support', 'Capital/Infrastructure',
  'Research & Development', 'Capacity Building', 'Emergency/Disaster Relief'
];

export default function GranteeProposalPage() {
  const [proposals, setProposals] = useState(mockProposals);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [currentProposal, setCurrentProposal] = useState<Proposal | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    projectTitle: '',
    impactArea: '',
    budgetRange: '',
    requestType: '',
    description: ''
  });

  const filteredProposals = proposals.filter(proposal => {
    const matchesFilter = filter === 'all' || proposal.status.toLowerCase() === filter;
    const matchesSearch = proposal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         proposal.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'under review':
        return 'bg-yellow-100 text-yellow-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCreateProposal = () => {
    setShowCreateForm(true);
    setCurrentProposal(null);
    setGeneratedContent('');
    setFormData({
      projectTitle: '',
      impactArea: '',
      budgetRange: '',
      requestType: '',
      description: ''
    });
  };

  const handleEditProposal = (id: number) => {
    const proposal = proposals.find(p => p.id === id);
    if (proposal) {
      setCurrentProposal(proposal);
      setShowCreateForm(true);
      setFormData({
        projectTitle: proposal.title,
        impactArea: proposal.category,
        budgetRange: proposal.amount,
        requestType: 'Program/Project Support',
        description: proposal.description
      });
    }
  };

  const handleViewProposal = (id: number) => {
    const proposal = proposals.find(p => p.id === id);
    if (proposal) {
      setCurrentProposal(proposal);
      setShowCreateForm(true);
      setFormData({
        projectTitle: proposal.title,
        impactArea: proposal.category,
        budgetRange: proposal.amount,
        requestType: 'Program/Project Support',
        description: proposal.description
      });
    }
  };

  // Mock AI generation function
  const generateProposal = async () => {
    setIsGenerating(true);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockGeneratedContent = `
# ${formData.projectTitle}

## Executive Summary

This proposal seeks funding for the ${formData.projectTitle} project, which aims to address critical needs in the ${formData.impactArea} sector. With a requested budget of ${formData.budgetRange}, this ${formData.requestType.toLowerCase()} initiative will create lasting positive impact in our community.

## Project Description

${formData.description || 'This project will implement innovative solutions to address pressing community needs through collaborative partnerships and evidence-based approaches.'}

## Objectives

1. **Primary Objective**: To establish sustainable programs that address identified community needs
2. **Secondary Objective**: To build capacity within the organization and community
3. **Long-term Objective**: To create lasting positive change in the target area

## Methodology

Our approach combines proven best practices with innovative strategies tailored to local context. We will:

- Conduct thorough needs assessment and stakeholder engagement
- Implement evidence-based interventions
- Monitor progress through regular evaluation
- Adapt strategies based on feedback and outcomes

## Budget Breakdown

- **Program Implementation**: 60% of total budget
- **Staff and Administration**: 25% of total budget  
- **Evaluation and Monitoring**: 10% of total budget
- **Contingency**: 5% of total budget

## Expected Outcomes

- Measurable improvements in target areas
- Increased community engagement and participation
- Enhanced organizational capacity
- Sustainable impact beyond the funding period

## Timeline

- **Phase 1** (Months 1-3): Planning and preparation
- **Phase 2** (Months 4-9): Implementation
- **Phase 3** (Months 10-12): Evaluation and reporting

## Conclusion

This proposal represents a comprehensive approach to addressing critical community needs. With your support, we can create meaningful and lasting positive change.
    `;
    
    setGeneratedContent(mockGeneratedContent);
    setIsGenerating(false);
  };

  const saveProposal = () => {
    const proposalData = {
      id: currentProposal?.id || Date.now(),
      title: formData.projectTitle,
      status: currentProposal?.status || 'Draft',
      amount: formData.budgetRange,
      submittedDate: currentProposal?.submittedDate || new Date().toISOString().split('T')[0],
      category: formData.impactArea,
      description: formData.description,
      content: generatedContent,
      reviewer: currentProposal?.reviewer || null,
      estimatedDecision: currentProposal?.estimatedDecision || null,
    };

    // Save to localStorage
    const savedProposals = JSON.parse(localStorage.getItem('proposals') || '[]');
    const existingIndex = savedProposals.findIndex((p: Proposal) => p.id === proposalData.id);
    
    if (existingIndex >= 0) {
      savedProposals[existingIndex] = proposalData;
    } else {
      savedProposals.push(proposalData);
    }
    
    localStorage.setItem('proposals', JSON.stringify(savedProposals));
    
    // Update state
    setProposals(savedProposals);
    alert('Proposal saved successfully!');
  };

  const loadProposal = () => {
    const savedProposals = JSON.parse(localStorage.getItem('proposals') || '[]');
    if (savedProposals.length > 0) {
      const latestProposal = savedProposals[savedProposals.length - 1];
      setCurrentProposal(latestProposal);
      setFormData({
        projectTitle: latestProposal.title,
        impactArea: latestProposal.category,
        budgetRange: latestProposal.amount,
        requestType: 'Program/Project Support',
        description: latestProposal.description
      });
      setGeneratedContent(latestProposal.content || '');
    }
  };

  const exportToPDF = () => {
    // Mock PDF export
    const content = `
      Proposal: ${formData.projectTitle}
      Impact Area: ${formData.impactArea}
      Budget: ${formData.budgetRange}
      Type: ${formData.requestType}
      
      ${generatedContent}
    `;
    
    console.log('Exporting to PDF:', content);
    alert('PDF export functionality would be implemented here. Check console for content.');
  };

  const exportToDocx = () => {
    // Mock DOCX export
    const content = `
      Proposal: ${formData.projectTitle}
      Impact Area: ${formData.impactArea}
      Budget: ${formData.budgetRange}
      Type: ${formData.requestType}
      
      ${generatedContent}
    `;
    
    console.log('Exporting to DOCX:', content);
    alert('DOCX export functionality would be implemented here. Check console for content.');
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Proposals</h1>
            <p className="text-gray-600">Manage your grant proposals and track their progress.</p>
          </div>
          <div className="flex space-x-3 mt-4 sm:mt-0">
            <button
              onClick={loadProposal}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Load Draft
            </button>
            <button
              onClick={handleCreateProposal}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              + New Proposal
            </button>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            {/* Status Filter */}
            <div className="flex space-x-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  filter === 'all'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('draft')}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  filter === 'draft'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Draft
              </button>
              <button
                onClick={() => setFilter('under review')}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  filter === 'under review'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Under Review
              </button>
              <button
                onClick={() => setFilter('approved')}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  filter === 'approved'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Approved
              </button>
              <button
                onClick={() => setFilter('rejected')}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  filter === 'rejected'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Rejected
              </button>
            </div>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search proposals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                className="absolute right-3 top-2.5 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Proposals List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {filteredProposals.length === 0 ? (
            <div className="p-8 text-center">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No proposals found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria.</p>
              <button
                onClick={handleCreateProposal}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Create Your First Proposal
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Proposal
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Submitted
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredProposals.map((proposal) => (
                    <tr key={proposal.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{proposal.title}</div>
                          <div className="text-sm text-gray-500 max-w-xs truncate">{proposal.description}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                          {proposal.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {proposal.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(proposal.status)}`}>
                          {proposal.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(proposal.submittedDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleViewProposal(proposal.id)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            View
                          </button>
                          {proposal.status === 'Draft' && (
                            <button
                              onClick={() => handleEditProposal(proposal.id)}
                              className="text-green-600 hover:text-green-900"
                            >
                              Edit
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-gray-900">{proposals.length}</div>
            <div className="text-sm text-gray-600">Total Proposals</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-green-600">
              {proposals.filter(p => p.status === 'Approved').length}
            </div>
            <div className="text-sm text-gray-600">Approved</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-yellow-600">
              {proposals.filter(p => p.status === 'Under Review').length}
            </div>
            <div className="text-sm text-gray-600">Under Review</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-gray-600">
              {proposals.filter(p => p.status === 'Draft').length}
            </div>
            <div className="text-sm text-gray-600">Drafts</div>
          </div>
        </div>

        {/* Proposal Creation Modal */}
        {showCreateForm && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-4 mx-auto p-5 border w-11/12 max-w-6xl shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {currentProposal ? 'Edit Proposal' : 'Create New Proposal'}
                  </h3>
                  <button
                    onClick={() => setShowCreateForm(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column - Form */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-4">Proposal Details</h4>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Project Title *
                          </label>
                          <input
                            type="text"
                            value={formData.projectTitle}
                            onChange={(e) => handleInputChange('projectTitle', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter project title"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Impact Area *
                          </label>
                          <select
                            value={formData.impactArea}
                            onChange={(e) => handleInputChange('impactArea', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            aria-label="Select impact area"
                          >
                            <option value="">Select impact area</option>
                            {impactAreaOptions.map((area) => (
                              <option key={area} value={area}>{area}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Budget Range *
                          </label>
                          <select
                            value={formData.budgetRange}
                            onChange={(e) => handleInputChange('budgetRange', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            aria-label="Select budget range"
                          >
                            <option value="">Select budget range</option>
                            {budgetRangeOptions.map((range) => (
                              <option key={range} value={range}>{range}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Type of Request *
                          </label>
                          <select
                            value={formData.requestType}
                            onChange={(e) => handleInputChange('requestType', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            aria-label="Select request type"
                          >
                            <option value="">Select request type</option>
                            {requestTypeOptions.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Brief Description
                          </label>
                          <textarea
                            value={formData.description}
                            onChange={(e) => handleInputChange('description', e.target.value)}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Brief description of your project..."
                          />
                        </div>

                        <div className="pt-4">
                          <button
                            onClick={generateProposal}
                            disabled={isGenerating || !formData.projectTitle || !formData.impactArea || !formData.budgetRange || !formData.requestType}
                            className="w-full bg-green-600 text-white px-4 py-3 rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                          >
                            {isGenerating ? (
                              <div className="flex items-center justify-center space-x-2">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Generating Proposal...</span>
                              </div>
                            ) : (
                              '🤖 Generate Proposal with AI'
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Generated Content */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-4">Generated Proposal</h4>
                      
                      {generatedContent ? (
                        <div className="space-y-4">
                          {/* TipTap-like Editor */}
                          <div className="border border-gray-300 rounded-md bg-white">
                                                         <div className="border-b border-gray-200 px-4 py-2 bg-gray-50">
                               <div className="flex items-center space-x-2">
                                 <button className="p-1 hover:bg-gray-200 rounded" aria-label="Bold text">
                                   <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                     <path d="M12.6 12.6c.8-.8.8-2.1 0-2.9l-1.4-1.4c-.8-.8-2.1-.8-2.9 0l-1.4 1.4c-.8.8-.8 2.1 0 2.9l1.4 1.4c.8.8 2.1.8 2.9 0l1.4-1.4z"/>
                                   </svg>
                                 </button>
                                 <button className="p-1 hover:bg-gray-200 rounded" aria-label="Italic text">
                                   <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                     <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 12a2 2 0 114 0 2 2 0 01-4 0z"/>
                                   </svg>
                                 </button>
                                 <button className="p-1 hover:bg-gray-200 rounded" aria-label="Heading">
                                   <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                     <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                                   </svg>
                                 </button>
                                 <button className="p-1 hover:bg-gray-200 rounded" aria-label="List">
                                   <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                     <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM3 16a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z"/>
                                   </svg>
                                 </button>
                               </div>
                             </div>
                            <div className="p-4 max-h-96 overflow-y-auto">
                              <div 
                                className="prose prose-sm max-w-none"
                                dangerouslySetInnerHTML={{ 
                                  __html: generatedContent.replace(/\n/g, '<br>').replace(/# (.*)/g, '<h1>$1</h1>').replace(/## (.*)/g, '<h2>$1</h2>').replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>')
                                }}
                              />
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex space-x-3">
                            <button
                              onClick={saveProposal}
                              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                            >
                              💾 Save Proposal
                            </button>
                            <button
                              onClick={exportToPDF}
                              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                            >
                              📄 PDF
                            </button>
                            <button
                              onClick={exportToDocx}
                              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                            >
                              📝 DOCX
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                          <div className="text-gray-400 mb-4">
                            <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2">No Proposal Generated Yet</h3>
                          <p className="text-gray-500 mb-4">Fill out the form and click &quot;Generate Proposal&quot; to create your AI-powered proposal.</p>
                          <div className="text-sm text-gray-400">
                            <p>✨ AI will help you create a comprehensive proposal</p>
                            <p>📝 You can edit the generated content</p>
                            <p>💾 Save and export in multiple formats</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
} 