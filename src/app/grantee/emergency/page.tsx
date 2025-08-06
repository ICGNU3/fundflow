'use client';

import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';

// Mock data for emergency requests
const mockEmergencyRequests = [
  {
    id: 1,
    title: 'Hurricane Relief - Immediate Aid Needed',
    status: 'Approved',
    amount: '$50,000',
    submittedDate: '2024-01-18',
    urgency: 'Critical',
    description: 'Emergency funding needed for immediate hurricane relief efforts in coastal communities.',
    impact: '500+ families affected',
    timeline: 'Immediate - 48 hours',
    category: 'Disaster Relief',
  },
  {
    id: 2,
    title: 'Medical Equipment Emergency',
    status: 'Under Review',
    amount: '$25,000',
    submittedDate: '2024-01-20',
    urgency: 'High',
    description: 'Critical medical equipment failure requiring immediate replacement for patient care.',
    impact: '200+ patients at risk',
    timeline: '72 hours',
    category: 'Healthcare',
  },
  {
    id: 3,
    title: 'Food Bank Emergency',
    status: 'Draft',
    amount: '$15,000',
    submittedDate: '2024-01-21',
    urgency: 'Medium',
    description: 'Sudden increase in demand for food assistance due to economic crisis.',
    impact: '1000+ individuals',
    timeline: '1 week',
    category: 'Social Services',
  },
];

// Form options
const teamSizeOptions = [
  '1-5 people', '6-10 people', '11-25 people', '26-50 people', '50+ people'
];

const urgencyOptions = [
  'Critical - Immediate response needed',
  'High - Response needed within 24-48 hours',
  'Medium - Response needed within 1 week'
];

export default function GranteeEmergencyPage() {
  const [emergencyRequests, setEmergencyRequests] = useState(mockEmergencyRequests);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [filter, setFilter] = useState('all');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedOutput, setGeneratedOutput] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    orgDescription: '',
    fundingLoss: '',
    teamSize: '',
    immediateUse: '',
    urgency: ''
  });

  const filteredRequests = emergencyRequests.filter(request => {
    return filter === 'all' || request.status.toLowerCase() === filter;
  });

  const getUrgencyColor = (urgency: string) => {
    switch (urgency.toLowerCase()) {
      case 'critical':
        return 'bg-red-100 text-red-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'under review':
        return 'bg-yellow-100 text-yellow-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleCreateEmergency = () => {
    setShowCreateForm(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateEmergencyOutput = async () => {
    setIsGenerating(true);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const output = `Our organization, ${formData.orgDescription}, is facing a critical funding crisis where we have experienced ${formData.fundingLoss}. With a team of ${formData.teamSize}, we urgently need emergency funding to ${formData.immediateUse}. This situation requires ${formData.urgency.toLowerCase()} to prevent severe disruption to our essential services and the communities we serve.`;
    
    setGeneratedOutput(output);
    setIsGenerating(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedOutput).then(() => {
      alert('Emergency statement copied to clipboard!');
    }).catch(() => {
      alert('Failed to copy to clipboard. Please select and copy manually.');
    });
  };

  const exportEmergency = () => {
    const content = `Emergency Funding Request

Organization: ${formData.orgDescription}
Funding Loss/Need: ${formData.fundingLoss}
Team Size: ${formData.teamSize}
Immediate Use: ${formData.immediateUse}
Urgency: ${formData.urgency}

Emergency Statement:
${generatedOutput}

Generated on: ${new Date().toLocaleDateString()}`;
    
    console.log('Exporting emergency request:', content);
    alert('Emergency request exported! Check console for content.');
  };

  const handleSubmitEmergency = () => {
    if (!generatedOutput) {
      alert('Please generate the emergency statement first.');
      return;
    }
    
    // Save to localStorage
    const emergencyData = {
      id: Date.now(),
      title: `Emergency Request - ${formData.orgDescription}`,
      status: 'Draft',
      amount: 'TBD',
      submittedDate: new Date().toISOString().split('T')[0],
      urgency: formData.urgency.split(' - ')[0],
      description: generatedOutput,
      impact: formData.teamSize,
      timeline: formData.urgency.split(' - ')[1] || 'Immediate',
      category: 'Emergency',
      formData: formData
    };
    
    const savedEmergencies = JSON.parse(localStorage.getItem('emergencyRequests') || '[]');
    savedEmergencies.push(emergencyData);
    localStorage.setItem('emergencyRequests', JSON.stringify(savedEmergencies));
    
    // Update state
    setEmergencyRequests([...emergencyRequests, emergencyData]);
    
    alert('Emergency request saved successfully!');
    setShowCreateForm(false);
    setGeneratedOutput('');
    setFormData({
      orgDescription: '',
      fundingLoss: '',
      teamSize: '',
      immediateUse: '',
      urgency: ''
    });
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Emergency Requests</h1>
            <p className="text-gray-600">Submit and track urgent funding requests for emergency situations.</p>
          </div>
          <button
            onClick={handleCreateEmergency}
            className="mt-4 sm:mt-0 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
          >
            + Emergency Request
          </button>
        </div>

        {/* Emergency Alert Banner */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Emergency Funding Process</h3>
              <div className="mt-2 text-sm text-red-700">
                <p>Emergency requests are reviewed within 24-48 hours. Please provide detailed information about the urgent need and expected impact.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
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
          </div>
        </div>

        {/* Emergency Requests List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {filteredRequests.length === 0 ? (
            <div className="p-8 text-center">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No emergency requests found</h3>
              <p className="text-gray-500 mb-4">You haven&apos;t submitted any emergency requests yet.</p>
              <button
                onClick={handleCreateEmergency}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Submit Emergency Request
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Emergency Request
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Urgency
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Timeline
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredRequests.map((request) => (
                    <tr key={request.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{request.title}</div>
                          <div className="text-sm text-gray-500 max-w-xs truncate">{request.description}</div>
                          <div className="text-xs text-gray-400 mt-1">Impact: {request.impact}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getUrgencyColor(request.urgency)}`}>
                          {request.urgency}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {request.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(request.status)}`}>
                          {request.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {request.timeline}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            View
                          </button>
                          {request.status === 'Draft' && (
                            <button className="text-green-600 hover:text-green-900">
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

        {/* Emergency Request Form Modal */}
        {showCreateForm && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-4 mx-auto p-5 border w-11/12 max-w-4xl shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Emergency Funding Request</h3>
                  <button
                    onClick={() => setShowCreateForm(false)}
                    className="text-gray-400 hover:text-gray-600"
                    aria-label="Close modal"
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
                      <h4 className="text-lg font-medium text-gray-900 mb-4">Emergency Details</h4>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Organization Description *
                          </label>
                          <textarea
                            value={formData.orgDescription}
                            onChange={(e) => handleInputChange('orgDescription', e.target.value)}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Describe your organization and its mission..."
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Funding Loss/Need *
                          </label>
                          <textarea
                            value={formData.fundingLoss}
                            onChange={(e) => handleInputChange('fundingLoss', e.target.value)}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Describe the funding crisis, loss, or urgent need..."
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Team Size *
                          </label>
                          <select
                            value={formData.teamSize}
                            onChange={(e) => handleInputChange('teamSize', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                            aria-label="Select team size"
                          >
                            <option value="">Select team size</option>
                            {teamSizeOptions.map((size) => (
                              <option key={size} value={size}>{size}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Immediate Use of Funds *
                          </label>
                          <textarea
                            value={formData.immediateUse}
                            onChange={(e) => handleInputChange('immediateUse', e.target.value)}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="How will the emergency funding be used immediately?"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Urgency Level *
                          </label>
                          <select
                            value={formData.urgency}
                            onChange={(e) => handleInputChange('urgency', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                            aria-label="Select urgency level"
                          >
                            <option value="">Select urgency level</option>
                            {urgencyOptions.map((level) => (
                              <option key={level} value={level}>{level}</option>
                            ))}
                          </select>
                        </div>

                        <div className="pt-4">
                          <button
                            onClick={generateEmergencyOutput}
                            disabled={isGenerating || !formData.orgDescription || !formData.fundingLoss || !formData.teamSize || !formData.immediateUse || !formData.urgency}
                            className="w-full bg-red-600 text-white px-4 py-3 rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                          >
                            {isGenerating ? (
                              <div className="flex items-center justify-center space-x-2">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Generating Emergency Statement...</span>
                              </div>
                            ) : (
                              '🚨 Generate Emergency Statement'
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Generated Output */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-4">Generated Emergency Statement</h4>
                      
                      {generatedOutput ? (
                        <div className="space-y-4">
                          {/* Generated Content */}
                          <div className="border border-gray-300 rounded-md bg-white p-4">
                            <div className="bg-red-50 border-l-4 border-red-400 p-4">
                              <div className="flex">
                                <div className="flex-shrink-0">
                                  <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                  </svg>
                                </div>
                                <div className="ml-3">
                                  <p className="text-sm text-red-700 leading-relaxed">
                                    {generatedOutput}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex space-x-3">
                            <button
                              onClick={copyToClipboard}
                              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                            >
                              📋 Copy to Clipboard
                            </button>
                            <button
                              onClick={exportEmergency}
                              className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                            >
                              📄 Export
                            </button>
                          </div>

                          <div className="pt-4">
                            <button
                              onClick={handleSubmitEmergency}
                              className="w-full bg-red-600 text-white px-4 py-3 rounded-md hover:bg-red-700 transition-colors"
                            >
                              💾 Save Emergency Request
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                          <div className="text-gray-400 mb-4">
                            <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2">No Emergency Statement Generated</h3>
                          <p className="text-gray-500 mb-4">Fill out the form and click &quot;Generate Emergency Statement&quot; to create your emergency funding request.</p>
                          <div className="text-sm text-gray-400">
                            <p>🚨 AI will help you create a compelling emergency statement</p>
                            <p>📋 Copy and use the generated text</p>
                            <p>💾 Save for future reference</p>
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

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-gray-900">{emergencyRequests.length}</div>
            <div className="text-sm text-gray-600">Total Requests</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-green-600">
              {emergencyRequests.filter(r => r.status === 'Approved').length}
            </div>
            <div className="text-sm text-gray-600">Approved</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-yellow-600">
              {emergencyRequests.filter(r => r.status === 'Under Review').length}
            </div>
            <div className="text-sm text-gray-600">Under Review</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-red-600">
              {emergencyRequests.filter(r => r.urgency === 'Critical').length}
            </div>
            <div className="text-sm text-gray-600">Critical Urgency</div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 