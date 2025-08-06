'use client';

import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { SearchIcon, DollarIcon, ClockIcon, SparklesIcon } from '@/components/icons/Icons';
import { funderProfiles } from '@/lib/funderProfiles';

export default function FundersMarketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedGrantSize, setSelectedGrantSize] = useState('all');
  const [showFunderDetail, setShowFunderDetail] = useState<string | null>(null);

  const categories = ['all', 'Healthcare', 'Education', 'Environment', 'Arts', 'Technology', 'Social Justice', 'Research'];
  const regions = ['all', 'Global', 'North America', 'Europe', 'Asia', 'Africa', 'South America'];
  const grantSizes = [
    { value: 'all', label: 'All Sizes' },
    { value: 'small', label: 'Under $100K' },
    { value: 'medium', label: '$100K - $500K' },
    { value: 'large', label: '$500K - $1M' },
    { value: 'xlarge', label: 'Over $1M' },
  ];

  const filteredFunders = funderProfiles.filter(funder => {
    const matchesSearch = 
      funder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      funder.focusAreas.some(area => area.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = 
      selectedCategory === 'all' || 
      funder.focusAreas.some(area => area.toLowerCase().includes(selectedCategory.toLowerCase()));
    
    const matchesRegion = selectedRegion === 'all' || funder.region === selectedRegion;
    
    return matchesSearch && matchesCategory && matchesRegion;
  });

  const getCompatibilityScore = (funder: typeof funderProfiles[0]) => {
    // Mock compatibility score calculation
    const baseScore = funder.successRate * 100;
    const bonus = Math.random() * 20;
    return Math.min(Math.round(baseScore + bonus), 95);
  };

  const getFormatBadgeColor = (format: string) => {
    const colors: Record<string, string> = {
      'formal': 'bg-blue-100 text-blue-800',
      'concise': 'bg-green-100 text-green-800',
      'narrative': 'bg-purple-100 text-purple-800',
      'technical': 'bg-orange-100 text-orange-800',
      'storytelling': 'bg-pink-100 text-pink-800',
    };
    return colors[format] || 'bg-gray-100 text-gray-800';
  };

  const selectedFunder = showFunderDetail ? funderProfiles.find(f => f.id === showFunderDetail) : null;

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
          <h1 className="text-3xl font-bold mb-2">Discover Funders</h1>
          <p className="text-blue-100">
            Explore {funderProfiles.length} funding organizations and find the perfect match for your project
          </p>
          
          {/* Search Bar */}
          <div className="mt-6 relative">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by funder name or focus area..."
              className="w-full pl-12 pr-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Grant Size</label>
              <select
                value={selectedGrantSize}
                onChange={(e) => setSelectedGrantSize(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {grantSizes.map(size => (
                  <option key={size.value} value={size.value}>{size.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredFunders.length}</span> funders
          </p>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              Sort by Relevance
            </button>
            <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              Sort by Success Rate
            </button>
          </div>
        </div>

        {/* Funder Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFunders.map((funder) => {
            const compatScore = getCompatibilityScore(funder);
            
            return (
              <div 
                key={funder.id} 
                className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setShowFunderDetail(funder.id)}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{funder.name}</h3>
                      <p className="text-sm text-gray-500">{funder.region}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{compatScore}%</div>
                      <div className="text-xs text-gray-500">Match Score</div>
                    </div>
                  </div>

                  {/* Format Badge */}
                  <div className="mb-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getFormatBadgeColor(funder.formatPreference)}`}>
                      {funder.formatPreference} format
                    </span>
                  </div>

                  {/* Focus Areas */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Focus Areas:</p>
                    <div className="flex flex-wrap gap-1">
                      {funder.focusAreas.slice(0, 3).map((area, index) => (
                        <span key={index} className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                          {area}
                        </span>
                      ))}
                      {funder.focusAreas.length > 3 && (
                        <span className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                          +{funder.focusAreas.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <DollarIcon className="text-gray-400" size={16} />
                      <div>
                        <p className="text-xs text-gray-500">Grant Size</p>
                        <p className="text-sm font-medium text-gray-900">{funder.averageGrantSize.split(' - ')[0]}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ClockIcon className="text-gray-400" size={16} />
                      <div>
                        <p className="text-xs text-gray-500">Review Time</p>
                        <p className="text-sm font-medium text-gray-900">{funder.reviewTime}</p>
                      </div>
                    </div>
                  </div>

                  {/* Success Rate Bar */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-500">Success Rate</span>
                      <span className="text-xs font-medium text-gray-900">{Math.round(funder.successRate * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${funder.successRate * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-3 bg-gray-50 rounded-b-xl">
                  <button className="w-full text-center text-sm font-medium text-blue-600 hover:text-blue-700">
                    View Details →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Funder Detail Modal */}
        {showFunderDetail && selectedFunder && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-4 mx-auto p-5 border w-11/12 max-w-4xl shadow-lg rounded-2xl bg-white">
              <div className="mt-3">
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedFunder.name}</h3>
                    <p className="text-gray-600">{selectedFunder.region}</p>
                    {selectedFunder.website && (
                      <a 
                        href={selectedFunder.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-sm mt-1 inline-block"
                      >
                        Visit Website →
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => setShowFunderDetail(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Modal Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Overview</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500">Format Preference</p>
                        <p className="font-medium capitalize">{selectedFunder.formatPreference}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Request Type</p>
                        <p className="font-medium capitalize">{selectedFunder.requestType}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Average Grant Size</p>
                        <p className="font-medium">{selectedFunder.averageGrantSize}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Review Timeline</p>
                        <p className="font-medium">{selectedFunder.reviewTime}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Success Rate</p>
                        <p className="font-medium">{Math.round(selectedFunder.successRate * 100)}%</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Focus Areas</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedFunder.focusAreas.map((area, index) => (
                        <span key={index} className="inline-flex px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                          {area}
                        </span>
                      ))}
                    </div>

                    <h4 className="font-semibold text-gray-900 mb-3">Special Requirements</h4>
                    <ul className="space-y-2">
                      {selectedFunder.specialRequirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-sm text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Compatibility Score */}
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">Compatibility Score</h4>
                      <p className="text-sm text-gray-600">Based on your profile and project alignment</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-600">{getCompatibilityScore(selectedFunder)}%</div>
                      <div className="flex items-center space-x-1 mt-1">
                        <SparklesIcon className="text-yellow-500" size={16} />
                        <span className="text-sm text-gray-600">Excellent Match</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                    Create Proposal for This Funder
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Save to Favorites
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