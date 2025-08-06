'use client';

import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';

export default function GranteeOnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    firstName: '',
    lastName: '',
    organizationName: '',
    country: '',
    role: '',
    
    // Step 2: Impact Area, Team Size, Budget Range
    impactArea: '',
    teamSize: '',
    budgetRange: '',
    
    // Step 3: Input Mode
    inputMode: '',
    
    // Step 4: Preferred Funders or Regions
    preferredFunders: [] as string[],
    preferredRegions: [] as string[],
  });

  const impactAreaOptions = [
    'Education', 'Healthcare', 'Environment', 'Arts & Culture',
    'Social Services', 'Youth Development', 'Community Development',
    'Research', 'Advocacy', 'Emergency Relief', 'Technology', 'Agriculture'
  ];

  const teamSizeOptions = [
    '1-5 people', '6-10 people', '11-25 people', '26-50 people', '50+ people'
  ];

  const budgetRangeOptions = [
    'Under $10,000', '$10,000 - $50,000', '$50,000 - $100,000',
    '$100,000 - $500,000', '$500,000 - $1,000,000', 'Over $1,000,000'
  ];

  const inputModeOptions = [
    'Text Input', 'File Upload', 'Voice Input'
  ];

  const funderOptions = [
    'Gates Foundation', 'Ford Foundation', 'MacArthur Foundation',
    'Rockefeller Foundation', 'Open Society Foundations', 'Hewlett Foundation',
    'Knight Foundation', 'Robert Wood Johnson Foundation', 'Other'
  ];

  const regionOptions = [
    'North America', 'Europe', 'Asia Pacific', 'Latin America',
    'Africa', 'Middle East', 'Global'
  ];

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleMultiSelectToggle = (field: 'preferredFunders' | 'preferredRegions', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    
    // Save to localStorage
    localStorage.setItem('granteeOnboardingData', JSON.stringify(formData));
    
    // Show preview
    alert('Onboarding completed successfully! Check console for data preview.');
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h3>
        <p className="text-gray-600 mb-6">Tell us about yourself and your organization.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name *
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your first name"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name *
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your last name"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Organization Name *
          </label>
          <input
            type="text"
            value={formData.organizationName}
            onChange={(e) => handleInputChange('organizationName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter organization name"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Country *
          </label>
          <input
            type="text"
            value={formData.country}
            onChange={(e) => handleInputChange('country', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your country"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Role *
          </label>
          <input
            type="text"
            value={formData.role}
            onChange={(e) => handleInputChange('role', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Executive Director, Program Manager"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Organization Details</h3>
        <p className="text-gray-600 mb-6">Tell us about your organization&apos;s impact and capacity.</p>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Primary Impact Area *
          </label>
          <select
            value={formData.impactArea}
            onChange={(e) => handleInputChange('impactArea', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select primary impact area</option>
            {impactAreaOptions.map((area) => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Team Size *
          </label>
          <select
            value={formData.teamSize}
            onChange={(e) => handleInputChange('teamSize', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select team size</option>
            {teamSizeOptions.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Annual Budget Range *
          </label>
          <select
            value={formData.budgetRange}
            onChange={(e) => handleInputChange('budgetRange', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select budget range</option>
            {budgetRangeOptions.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Input Mode Preference</h3>
        <p className="text-gray-600 mb-6">Choose how you prefer to input your proposal information.</p>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Input Mode *
          </label>
          <select
            value={formData.inputMode}
            onChange={(e) => handleInputChange('inputMode', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select input mode</option>
            {inputModeOptions.map((mode) => (
              <option key={mode} value={mode}>{mode}</option>
            ))}
          </select>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
          <h4 className="text-sm font-medium text-blue-900 mb-2">Input Mode Options</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• <strong>Text Input:</strong> Traditional form-based input</li>
            <li>• <strong>File Upload:</strong> Upload existing documents (PDF, Word, etc.)</li>
            <li>• <strong>Voice Input:</strong> Speak your proposal and we&apos;ll transcribe it</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Preferred Funders & Regions</h3>
        <p className="text-gray-600 mb-6">Select your preferred funders and regions for better matching.</p>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Funders
          </label>
          <p className="text-sm text-gray-500 mb-3">Select all that apply</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-48 overflow-y-auto border border-gray-200 rounded-md p-3">
            {funderOptions.map((funder) => (
              <label key={funder} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.preferredFunders.includes(funder)}
                  onChange={() => handleMultiSelectToggle('preferredFunders', funder)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{funder}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Regions
          </label>
          <p className="text-sm text-gray-500 mb-3">Select all that apply</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {regionOptions.map((region) => (
              <label key={region} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.preferredRegions.includes(region)}
                  onChange={() => handleMultiSelectToggle('preferredRegions', region)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{region}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-md p-4">
          <h4 className="text-sm font-medium text-green-900 mb-2">Almost Done!</h4>
          <ul className="text-sm text-green-800 space-y-1">
            <li>• Review your information for accuracy</li>
            <li>• Submit to complete onboarding</li>
            <li>• Start creating proposals</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      default:
        return null;
    }
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Organization Onboarding</h1>
            <span className="text-sm text-gray-500">Step {currentStep} of 4</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
          
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Basic Info</span>
            <span>Details</span>
            <span>Input Mode</span>
            <span>Preferences</span>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {renderStepContent()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          <div className="space-x-3">
            {currentStep < 4 ? (
              <button
                onClick={nextStep}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Complete Onboarding
              </button>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 