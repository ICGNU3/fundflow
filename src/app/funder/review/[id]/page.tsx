'use client';

import { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';

// Mock data for proposal review
const mockProposal = {
  id: 1,
  title: 'Community Garden Initiative',
  organization: 'Green Thumb Community Center',
  amount: '$15,000',
  submittedDate: '2024-01-15',
  category: 'Environmental',
  status: 'Under Review',
  description: 'Creating sustainable community gardens to promote healthy eating and community engagement in underserved neighborhoods.',
  impact: '500+ families will have access to fresh produce and gardening education',
  timeline: '12 months',
  budget: {
    total: 15000,
    breakdown: [
      { item: 'Garden supplies and tools', amount: 5000 },
      { item: 'Educational materials', amount: 2000 },
      { item: 'Staff training', amount: 3000 },
      { item: 'Community outreach', amount: 2000 },
      { item: 'Administrative costs', amount: 3000 },
    ]
  },
  organizationInfo: {
    name: 'Green Thumb Community Center',
    type: 'Nonprofit',
    founded: '2018',
    mission: 'To promote sustainable living and community health through urban agriculture.',
    previousGrants: ['$10,000 - Local Food Initiative (2023)', '$5,000 - Youth Garden Program (2022)'],
  },
  attachments: [
    'Proposal_Detailed_Budget.pdf',
    'Organization_Financial_Statements.pdf',
    'Community_Support_Letters.pdf',
    'Project_Timeline.pdf'
  ],
  // Auto-summary data
  autoSummary: {
    keyPoints: [
      'Strong community engagement component with 500+ families impacted',
      'Clear budget breakdown with 60% allocated to program implementation',
      'Established organization with proven track record (founded 2018)',
      'Measurable outcomes with specific timeline (12 months)',
      'Addresses food security and education gaps in underserved areas'
    ],
    strengths: [
      'Comprehensive approach combining education and practical implementation',
      'Strong organizational capacity with previous successful grants',
      'Clear budget allocation with reasonable administrative costs',
      'Measurable impact metrics and timeline'
    ],
    concerns: [
      'Limited detail on sustainability beyond grant period',
      'Could benefit from more specific evaluation metrics',
      'Risk mitigation strategies not clearly outlined'
    ],
    recommendation: 'Strong candidate for funding with minor revisions recommended'
  },
  // Full proposal text
  fullProposal: `
# Community Garden Initiative
## Executive Summary

The Green Thumb Community Center proposes to establish five community gardens across underserved neighborhoods in our city, providing fresh produce and educational opportunities for over 500 families. This $15,000 initiative will address food security, promote healthy eating habits, and strengthen community bonds through hands-on gardening education.

## Project Description

Our Community Garden Initiative will transform vacant lots and underutilized spaces into thriving community gardens. Each garden will serve as both a food source and an educational hub, where community members can learn sustainable gardening practices, nutrition education, and environmental stewardship.

### Key Components:
- **Garden Establishment**: Five 1,000-square-foot community gardens with raised beds, irrigation systems, and tool sheds
- **Educational Programming**: Weekly workshops on gardening techniques, nutrition, and environmental sustainability
- **Community Engagement**: Monthly community events, harvest celebrations, and volunteer coordination
- **Youth Involvement**: After-school programs and summer camps focused on gardening and environmental education

## Objectives

1. **Primary Objective**: Establish five sustainable community gardens serving 500+ families
2. **Secondary Objective**: Provide educational programming reaching 200+ participants annually
3. **Long-term Objective**: Create lasting community infrastructure for food security and education

## Methodology

Our approach combines proven best practices with innovative strategies tailored to local context:

### Phase 1: Planning and Preparation (Months 1-3)
- Site selection and community consultation
- Garden design and infrastructure planning
- Community outreach and volunteer recruitment
- Educational curriculum development

### Phase 2: Implementation (Months 4-9)
- Garden construction and infrastructure installation
- Planting and establishment of garden systems
- Launch of educational programming
- Community engagement activities

### Phase 3: Evaluation and Reporting (Months 10-12)
- Impact assessment and data collection
- Community feedback and program refinement
- Sustainability planning and capacity building
- Final reporting and knowledge sharing

## Budget Breakdown

- **Garden supplies and tools**: $5,000 (33%)
  - Raised bed materials, soil, seeds, tools, irrigation systems
- **Educational materials**: $2,000 (13%)
  - Curriculum development, printed materials, demonstration supplies
- **Staff training**: $3,000 (20%)
  - Professional development, workshops, certifications
- **Community outreach**: $2,000 (13%)
  - Marketing materials, events, volunteer coordination
- **Administrative costs**: $3,000 (20%)
  - Project management, evaluation, reporting

## Expected Outcomes

### Quantitative Outcomes:
- 500+ families with access to fresh produce
- 200+ participants in educational programs
- 5 community gardens established
- 1,000+ volunteer hours contributed

### Qualitative Outcomes:
- Increased community cohesion and engagement
- Enhanced knowledge of sustainable practices
- Improved food security and nutrition awareness
- Strengthened environmental stewardship

## Risk Assessment and Mitigation

### Identified Risks:
1. **Weather-related challenges**: Mitigated through proper planning and resilient garden design
2. **Community participation**: Addressed through extensive outreach and engagement strategies
3. **Resource constraints**: Managed through partnerships and volunteer coordination

### Mitigation Strategies:
- Diversified garden locations to reduce weather impact
- Comprehensive community engagement plan
- Strong partnerships with local organizations
- Regular monitoring and adaptive management

## Sustainability Plan

Beyond the grant period, we will:
- Establish garden maintenance committees
- Develop revenue-generating activities (seed sales, workshops)
- Create partnerships with local businesses and organizations
- Implement knowledge transfer programs

## Conclusion

The Community Garden Initiative represents a comprehensive approach to addressing food security, education, and community development. With your support, we can create lasting positive change in our community while building sustainable infrastructure for future generations.

This proposal demonstrates our organization's commitment to innovative solutions and community engagement. We look forward to the opportunity to bring this vision to life with your partnership.
  `,
  shareableLink: 'https://fundflow.com/view/proposal/abc123'
};

export default function FunderReviewPage({ params }: { params: Promise<{ id: string }> }) {
  const [id, setId] = useState<string>('');
  
  // Handle async params
  useEffect(() => {
    params.then(({ id: proposalId }) => setId(proposalId));
  }, [params]);
  const [proposal] = useState(mockProposal);
  const [reviewNotes, setReviewNotes] = useState('');
  const [decision, setDecision] = useState<'pending' | 'approved' | 'rejected'>('pending');
  const [showDecisionModal, setShowDecisionModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [comment, setComment] = useState('');
  const [isTagged, setIsTagged] = useState(false);
  const [isForwarded, setIsForwarded] = useState(false);

  const handleDecision = (newDecision: 'approved' | 'rejected') => {
    setDecision(newDecision);
    setShowDecisionModal(true);
  };

  const confirmDecision = () => {
    console.log('Decision made:', { decision, reviewNotes, proposalId: id });
    alert(`Proposal ${decision}! Check console for details.`);
    setShowDecisionModal(false);
  };

  const handleTagForReview = () => {
    setIsTagged(!isTagged);
    alert(isTagged ? 'Proposal untagged from review' : 'Proposal tagged for review');
  };

  const handleForward = () => {
    setIsForwarded(true);
    alert('Proposal forwarded to review committee');
  };

  const handleComment = () => {
    setShowCommentModal(true);
  };

  const submitComment = () => {
    console.log('Comment submitted:', { comment, proposalId: id });
    alert('Comment submitted successfully!');
    setShowCommentModal(false);
    setComment('');
  };

  const copyShareableLink = () => {
    navigator.clipboard.writeText(proposal.shareableLink).then(() => {
      alert('Shareable link copied to clipboard!');
    }).catch(() => {
      alert('Failed to copy link. Please copy manually: ' + proposal.shareableLink);
    });
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Review Proposal</h1>
                            <p className="text-gray-600">Proposal ID: {id}</p>
          </div>
          <div className="flex flex-wrap gap-3 mt-4 sm:mt-0">
            <button
              onClick={copyShareableLink}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
            >
              📋 Copy Shareable Link
            </button>
            <button
              onClick={handleTagForReview}
              className={`px-4 py-2 rounded-md transition-colors ${
                isTagged 
                  ? 'bg-yellow-600 text-white hover:bg-yellow-700' 
                  : 'border border-yellow-300 text-yellow-700 hover:bg-yellow-50'
              }`}
            >
              {isTagged ? '🏷️ Tagged' : '🏷️ Tag for Review'}
            </button>
            <button
              onClick={handleForward}
              disabled={isForwarded}
              className={`px-4 py-2 rounded-md transition-colors ${
                isForwarded
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'border border-blue-300 text-blue-700 hover:bg-blue-50'
              }`}
            >
              {isForwarded ? '📤 Forwarded' : '📤 Forward'}
            </button>
            <button
              onClick={handleComment}
              className="px-4 py-2 border border-purple-300 text-purple-700 rounded-md hover:bg-purple-50"
            >
              💬 Comment
            </button>
            <button
              onClick={() => handleDecision('rejected')}
              className="px-4 py-2 border border-red-300 text-red-700 rounded-md hover:bg-red-50"
            >
              Reject
            </button>
            <button
              onClick={() => handleDecision('approved')}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Approve
            </button>
          </div>
        </div>

        {/* Proposal Overview */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{proposal.title}</h2>
              <p className="text-gray-600">{proposal.organization}</p>
            </div>
            <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-yellow-100 text-yellow-800">
              {proposal.status}
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <span className="text-sm text-gray-500">Requested Amount</span>
              <p className="text-lg font-semibold text-gray-900">{proposal.amount}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Category</span>
              <p className="text-lg font-semibold text-gray-900">{proposal.category}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Submitted</span>
              <p className="text-lg font-semibold text-gray-900">
                {new Date(proposal.submittedDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Auto-Summary */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900">AI Auto-Summary</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Key Points</h4>
              <ul className="space-y-2">
                {proposal.autoSummary.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-sm text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Strengths</h4>
              <ul className="space-y-2">
                {proposal.autoSummary.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-sm text-gray-700">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Areas of Concern</h4>
                <ul className="space-y-2">
                  {proposal.autoSummary.concerns.map((concern, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-yellow-600 mt-1">⚠</span>
                      <span className="text-sm text-gray-700">{concern}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Recommendation</h4>
                <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                  <p className="text-sm text-blue-800 font-medium">{proposal.autoSummary.recommendation}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Proposal Text */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <svg className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900">Full Proposal Text</h3>
          </div>
          
          <div className="prose prose-sm max-w-none">
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: proposal.fullProposal
                  .replace(/\n/g, '<br>')
                  .replace(/# (.*)/g, '<h1 class="text-xl font-bold text-gray-900 mt-6 mb-3">$1</h1>')
                  .replace(/## (.*)/g, '<h2 class="text-lg font-semibold text-gray-900 mt-5 mb-2">$1</h2>')
                  .replace(/### (.*)/g, '<h3 class="text-md font-medium text-gray-900 mt-4 mb-2">$1</h3>')
                  .replace(/\*\*(.*)\*\*/g, '<strong class="font-semibold">$1</strong>')
                  .replace(/- (.*)/g, '<li class="ml-4">$1</li>')
                  .replace(/(\d+\.) (.*)/g, '<li class="ml-4">$1 $2</li>')
              }}
            />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Proposal Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Description */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Project Description</h3>
              <p className="text-gray-700 mb-4">{proposal.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="text-sm font-medium text-gray-500">Expected Impact</span>
                  <p className="text-gray-900">{proposal.impact}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Timeline</span>
                  <p className="text-gray-900">{proposal.timeline}</p>
                </div>
              </div>
            </div>

            {/* Budget Breakdown */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Budget Breakdown</h3>
              <div className="space-y-3">
                {proposal.budget.breakdown.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-700">{item.item}</span>
                    <span className="font-medium text-gray-900">${item.amount.toLocaleString()}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-2 border-t border-gray-200 font-semibold">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">${proposal.budget.total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Organization Information */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Organization Information</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-gray-500">Organization Type</span>
                  <p className="text-gray-900">{proposal.organizationInfo.type}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Founded</span>
                  <p className="text-gray-900">{proposal.organizationInfo.founded}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Mission</span>
                  <p className="text-gray-900">{proposal.organizationInfo.mission}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Previous Grants</span>
                  <ul className="mt-1 space-y-1">
                    {proposal.organizationInfo.previousGrants.map((grant, index) => (
                      <li key={index} className="text-gray-900 text-sm">• {grant}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Review Tools */}
          <div className="space-y-6">
            {/* Review Notes */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Review Notes</h3>
              <textarea
                value={reviewNotes}
                onChange={(e) => setReviewNotes(e.target.value)}
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Add your review notes here..."
              />
            </div>

            {/* Attachments */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Attachments</h3>
              <div className="space-y-2">
                {proposal.attachments.map((attachment, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">{attachment}</span>
                    <button className="text-blue-600 hover:text-blue-800 text-sm">View</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                  Request Additional Information
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                  Schedule Interview
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                  Assign to Another Reviewer
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                  Flag for Follow-up
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decision Modal */}
        {showDecisionModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Confirm {decision === 'approved' ? 'Approval' : 'Rejection'}
                </h3>
                <p className="text-gray-600 mb-4">
                  Are you sure you want to {decision} this proposal? This action cannot be undone.
                </p>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setShowDecisionModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmDecision}
                    className={`px-4 py-2 rounded-md text-white ${
                      decision === 'approved' 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : 'bg-red-600 hover:bg-red-700'
                    }`}
                  >
                    Confirm {decision === 'approved' ? 'Approval' : 'Rejection'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Comment Modal */}
        {showCommentModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Add Comment</h3>
                  <button
                    onClick={() => setShowCommentModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                    aria-label="Close comment modal"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Comment
                  </label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Add your comment about this proposal..."
                  />
                </div>
                
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setShowCommentModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={submitComment}
                    disabled={!comment.trim()}
                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
} 