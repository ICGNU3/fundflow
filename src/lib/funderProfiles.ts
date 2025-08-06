export interface FunderProfile {
  id: string;
  name: string;
  formatPreference: 'formal' | 'concise' | 'narrative' | 'technical' | 'storytelling';
  region: string;
  requestType: 'general' | 'program' | 'capital' | 'research' | 'emergency' | 'capacity';
  focusAreas: string[];
  averageGrantSize: string;
  successRate: number;
  reviewTime: string;
  specialRequirements: string[];
  website?: string;
}

export const funderProfiles: FunderProfile[] = [
  {
    id: 'f001',
    name: 'Gates Foundation',
    formatPreference: 'technical',
    region: 'Global',
    requestType: 'program',
    focusAreas: ['Healthcare', 'Education', 'Technology', 'Research'],
    averageGrantSize: '$500,000 - $5,000,000',
    successRate: 0.15,
    reviewTime: '6-12 months',
    specialRequirements: ['Evidence-based approach', 'Measurable outcomes', 'Partnerships'],
    website: 'https://www.gatesfoundation.org'
  },
  {
    id: 'f002',
    name: 'Ford Foundation',
    formatPreference: 'narrative',
    region: 'Global',
    requestType: 'general',
    focusAreas: ['Social Justice', 'Arts & Culture', 'Education', 'Community Development'],
    averageGrantSize: '$100,000 - $1,000,000',
    successRate: 0.25,
    reviewTime: '4-8 months',
    specialRequirements: ['Social impact focus', 'Community engagement', 'Innovation'],
    website: 'https://www.fordfoundation.org'
  },
  {
    id: 'f003',
    name: 'MacArthur Foundation',
    formatPreference: 'concise',
    region: 'North America',
    requestType: 'research',
    focusAreas: ['Research', 'Technology', 'Justice', 'Climate'],
    averageGrantSize: '$200,000 - $2,000,000',
    successRate: 0.20,
    reviewTime: '3-6 months',
    specialRequirements: ['Bold ideas', 'Systemic change', 'Interdisciplinary approach'],
    website: 'https://www.macfound.org'
  },
  {
    id: 'f004',
    name: 'Rockefeller Foundation',
    formatPreference: 'formal',
    region: 'Global',
    requestType: 'program',
    focusAreas: ['Healthcare', 'Food Security', 'Energy', 'Climate'],
    averageGrantSize: '$300,000 - $3,000,000',
    successRate: 0.18,
    reviewTime: '5-10 months',
    specialRequirements: ['Scalable solutions', 'Cross-sector partnerships', 'Innovation'],
    website: 'https://www.rockefellerfoundation.org'
  },
  {
    id: 'f005',
    name: 'Open Society Foundations',
    formatPreference: 'narrative',
    region: 'Global',
    requestType: 'general',
    focusAreas: ['Human Rights', 'Democracy', 'Justice', 'Education'],
    averageGrantSize: '$50,000 - $500,000',
    successRate: 0.30,
    reviewTime: '3-5 months',
    specialRequirements: ['Human rights focus', 'Grassroots approach', 'Advocacy'],
    website: 'https://www.opensocietyfoundations.org'
  },
  {
    id: 'f006',
    name: 'Hewlett Foundation',
    formatPreference: 'technical',
    region: 'Global',
    requestType: 'research',
    focusAreas: ['Education', 'Environment', 'Arts', 'Global Development'],
    averageGrantSize: '$250,000 - $2,500,000',
    successRate: 0.22,
    reviewTime: '4-8 months',
    specialRequirements: ['Evidence-based', 'Long-term impact', 'Collaboration'],
    website: 'https://hewlett.org'
  },
  {
    id: 'f007',
    name: 'Knight Foundation',
    formatPreference: 'storytelling',
    region: 'North America',
    requestType: 'program',
    focusAreas: ['Journalism', 'Arts', 'Communities', 'Technology'],
    averageGrantSize: '$100,000 - $1,000,000',
    successRate: 0.28,
    reviewTime: '2-4 months',
    specialRequirements: ['Community engagement', 'Innovation', 'Local impact'],
    website: 'https://knightfoundation.org'
  },
  {
    id: 'f008',
    name: 'Robert Wood Johnson Foundation',
    formatPreference: 'formal',
    region: 'North America',
    requestType: 'program',
    focusAreas: ['Healthcare', 'Public Health', 'Health Equity', 'Research'],
    averageGrantSize: '$200,000 - $2,000,000',
    successRate: 0.20,
    reviewTime: '6-12 months',
    specialRequirements: ['Health equity focus', 'Evidence-based', 'Systems change'],
    website: 'https://www.rwjf.org'
  },
  {
    id: 'f009',
    name: 'Kellogg Foundation',
    formatPreference: 'narrative',
    region: 'North America',
    requestType: 'general',
    focusAreas: ['Education', 'Health', 'Food', 'Community'],
    averageGrantSize: '$150,000 - $1,500,000',
    successRate: 0.25,
    reviewTime: '4-8 months',
    specialRequirements: ['Racial equity', 'Community-driven', 'Systems change'],
    website: 'https://www.wkkf.org'
  },
  {
    id: 'f010',
    name: 'Packard Foundation',
    formatPreference: 'technical',
    region: 'Global',
    requestType: 'program',
    focusAreas: ['Conservation', 'Science', 'Population', 'Children'],
    averageGrantSize: '$300,000 - $3,000,000',
    successRate: 0.18,
    reviewTime: '5-10 months',
    specialRequirements: ['Environmental focus', 'Scientific approach', 'Long-term impact'],
    website: 'https://www.packard.org'
  },
  {
    id: 'f011',
    name: 'Mellon Foundation',
    formatPreference: 'formal',
    region: 'North America',
    requestType: 'program',
    focusAreas: ['Arts', 'Humanities', 'Higher Education', 'Cultural Heritage'],
    averageGrantSize: '$500,000 - $5,000,000',
    successRate: 0.15,
    reviewTime: '6-12 months',
    specialRequirements: ['Arts focus', 'Academic rigor', 'Cultural preservation'],
    website: 'https://mellon.org'
  },
  {
    id: 'f012',
    name: 'Sloan Foundation',
    formatPreference: 'technical',
    region: 'North America',
    requestType: 'research',
    focusAreas: ['Science', 'Technology', 'Economics', 'Education'],
    averageGrantSize: '$200,000 - $2,000,000',
    successRate: 0.20,
    reviewTime: '4-8 months',
    specialRequirements: ['Scientific rigor', 'Innovation', 'Interdisciplinary'],
    website: 'https://sloan.org'
  },
  {
    id: 'f013',
    name: 'Carnegie Corporation',
    formatPreference: 'concise',
    region: 'Global',
    requestType: 'program',
    focusAreas: ['Education', 'Democracy', 'International Peace', 'Research'],
    averageGrantSize: '$400,000 - $4,000,000',
    successRate: 0.16,
    reviewTime: '6-12 months',
    specialRequirements: ['Educational impact', 'Policy influence', 'Global perspective'],
    website: 'https://carnegie.org'
  },
  {
    id: 'f014',
    name: 'Doris Duke Foundation',
    formatPreference: 'narrative',
    region: 'North America',
    requestType: 'program',
    focusAreas: ['Arts', 'Environment', 'Medical Research', 'Child Well-being'],
    averageGrantSize: '$250,000 - $2,500,000',
    successRate: 0.22,
    reviewTime: '4-8 months',
    specialRequirements: ['Arts integration', 'Innovation', 'Cross-sector approach'],
    website: 'https://www.dorisduke.org'
  },
  {
    id: 'f015',
    name: 'Surdna Foundation',
    formatPreference: 'storytelling',
    region: 'North America',
    requestType: 'general',
    focusAreas: ['Arts', 'Environment', 'Strong Local Economies', 'Thriving Cultures'],
    averageGrantSize: '$100,000 - $1,000,000',
    successRate: 0.30,
    reviewTime: '3-5 months',
    specialRequirements: ['Community focus', 'Sustainability', 'Cultural equity'],
    website: 'https://www.surdna.org'
  },
  {
    id: 'f016',
    name: 'Kresge Foundation',
    formatPreference: 'formal',
    region: 'North America',
    requestType: 'capital',
    focusAreas: ['Arts & Culture', 'Education', 'Environment', 'Health', 'Human Services'],
    averageGrantSize: '$500,000 - $5,000,000',
    successRate: 0.18,
    reviewTime: '6-12 months',
    specialRequirements: ['Capital projects', 'Community impact', 'Partnerships'],
    website: 'https://kresge.org'
  },
  {
    id: 'f017',
    name: 'Annie E. Casey Foundation',
    formatPreference: 'narrative',
    region: 'North America',
    requestType: 'program',
    focusAreas: ['Children & Families', 'Community Development', 'Child Welfare'],
    averageGrantSize: '$200,000 - $2,000,000',
    successRate: 0.25,
    reviewTime: '4-8 months',
    specialRequirements: ['Child-focused', 'Family-centered', 'Systems change'],
    website: 'https://www.aecf.org'
  },
  {
    id: 'f018',
    name: 'W.K. Kellogg Foundation',
    formatPreference: 'storytelling',
    region: 'North America',
    requestType: 'general',
    focusAreas: ['Children', 'Families', 'Communities', 'Racial Equity'],
    averageGrantSize: '$300,000 - $3,000,000',
    successRate: 0.24,
    reviewTime: '5-10 months',
    specialRequirements: ['Racial equity', 'Community engagement', 'Child well-being'],
    website: 'https://www.wkkf.org'
  },
  {
    id: 'f019',
    name: 'Lilly Endowment',
    formatPreference: 'formal',
    region: 'North America',
    requestType: 'program',
    focusAreas: ['Religion', 'Education', 'Community Development'],
    averageGrantSize: '$500,000 - $5,000,000',
    successRate: 0.16,
    reviewTime: '6-12 months',
    specialRequirements: ['Religious focus', 'Community impact', 'Educational excellence'],
    website: 'https://www.lillyendowment.org'
  },
  {
    id: 'f020',
    name: 'Pew Charitable Trusts',
    formatPreference: 'technical',
    region: 'Global',
    requestType: 'research',
    focusAreas: ['Environment', 'Health', 'Public Policy', 'Arts & Culture'],
    averageGrantSize: '$300,000 - $3,000,000',
    successRate: 0.20,
    reviewTime: '4-8 months',
    specialRequirements: ['Research-based', 'Policy impact', 'Evidence-driven'],
    website: 'https://www.pewtrusts.org'
  },
  {
    id: 'f021',
    name: 'Commonwealth Fund',
    formatPreference: 'concise',
    region: 'North America',
    requestType: 'research',
    focusAreas: ['Healthcare', 'Health Policy', 'Health Equity'],
    averageGrantSize: '$200,000 - $2,000,000',
    successRate: 0.22,
    reviewTime: '3-6 months',
    specialRequirements: ['Healthcare focus', 'Policy research', 'Health equity'],
    website: 'https://www.commonwealthfund.org'
  },
  {
    id: 'f022',
    name: 'Russell Sage Foundation',
    formatPreference: 'technical',
    region: 'North America',
    requestType: 'research',
    focusAreas: ['Social Sciences', 'Economics', 'Social Policy'],
    averageGrantSize: '$150,000 - $1,500,000',
    successRate: 0.18,
    reviewTime: '4-8 months',
    specialRequirements: ['Social science research', 'Policy relevance', 'Academic rigor'],
    website: 'https://www.russellsage.org'
  },
  {
    id: 'f023',
    name: 'Alfred P. Sloan Foundation',
    formatPreference: 'technical',
    region: 'North America',
    requestType: 'research',
    focusAreas: ['Science', 'Technology', 'Economics', 'Education'],
    averageGrantSize: '$250,000 - $2,500,000',
    successRate: 0.20,
    reviewTime: '4-8 months',
    specialRequirements: ['Scientific excellence', 'Innovation', 'Interdisciplinary'],
    website: 'https://sloan.org'
  },
  {
    id: 'f024',
    name: 'John D. and Catherine T. MacArthur Foundation',
    formatPreference: 'concise',
    region: 'Global',
    requestType: 'program',
    focusAreas: ['Climate Solutions', 'Criminal Justice', 'Democracy', 'Local News'],
    averageGrantSize: '$400,000 - $4,000,000',
    successRate: 0.15,
    reviewTime: '6-12 months',
    specialRequirements: ['Bold solutions', 'Systemic change', 'Innovation'],
    website: 'https://www.macfound.org'
  },
  {
    id: 'f025',
    name: 'William and Flora Hewlett Foundation',
    formatPreference: 'technical',
    region: 'Global',
    requestType: 'program',
    focusAreas: ['Education', 'Environment', 'Arts', 'Global Development'],
    averageGrantSize: '$300,000 - $3,000,000',
    successRate: 0.18,
    reviewTime: '5-10 months',
    specialRequirements: ['Evidence-based', 'Long-term impact', 'Collaboration'],
    website: 'https://hewlett.org'
  },
  {
    id: 'f026',
    name: 'David and Lucile Packard Foundation',
    formatPreference: 'technical',
    region: 'Global',
    requestType: 'program',
    focusAreas: ['Conservation', 'Science', 'Population', 'Children'],
    averageGrantSize: '$400,000 - $4,000,000',
    successRate: 0.16,
    reviewTime: '6-12 months',
    specialRequirements: ['Environmental focus', 'Scientific approach', 'Long-term impact'],
    website: 'https://www.packard.org'
  },
  {
    id: 'f027',
    name: 'Andrew W. Mellon Foundation',
    formatPreference: 'formal',
    region: 'North America',
    requestType: 'program',
    focusAreas: ['Arts', 'Humanities', 'Higher Education', 'Cultural Heritage'],
    averageGrantSize: '$600,000 - $6,000,000',
    successRate: 0.12,
    reviewTime: '8-12 months',
    specialRequirements: ['Arts focus', 'Academic rigor', 'Cultural preservation'],
    website: 'https://mellon.org'
  },
  {
    id: 'f028',
    name: 'Gordon and Betty Moore Foundation',
    formatPreference: 'technical',
    region: 'Global',
    requestType: 'research',
    focusAreas: ['Science', 'Environmental Conservation', 'Patient Care'],
    averageGrantSize: '$500,000 - $5,000,000',
    successRate: 0.14,
    reviewTime: '6-12 months',
    specialRequirements: ['Scientific excellence', 'Environmental impact', 'Innovation'],
    website: 'https://www.moore.org'
  },
  {
    id: 'f029',
    name: 'Simons Foundation',
    formatPreference: 'technical',
    region: 'Global',
    requestType: 'research',
    focusAreas: ['Mathematics', 'Physical Sciences', 'Life Sciences'],
    averageGrantSize: '$300,000 - $3,000,000',
    successRate: 0.16,
    reviewTime: '4-8 months',
    specialRequirements: ['Scientific rigor', 'Mathematical approach', 'Interdisciplinary'],
    website: 'https://www.simonsfoundation.org'
  },
  {
    id: 'f030',
    name: 'Chan Zuckerberg Initiative',
    formatPreference: 'technical',
    region: 'Global',
    requestType: 'program',
    focusAreas: ['Science', 'Education', 'Justice & Opportunity'],
    averageGrantSize: '$400,000 - $4,000,000',
    successRate: 0.18,
    reviewTime: '5-10 months',
    specialRequirements: ['Technology integration', 'Innovation', 'Social impact'],
    website: 'https://chanzuckerberg.com'
  }
];

// Helper function to get funder by ID
export const getFunderById = (id: string): FunderProfile | undefined => {
  return funderProfiles.find(funder => funder.id === id);
};

// Helper function to generate tailored prompt suggestions
export const generateTailoredPrompt = (funderId: string, projectData: {
  title: string;
  impactArea: string;
  budgetRange: string;
  requestType: string;
  description: string;
}): string => {
  const funder = getFunderById(funderId);
  
  if (!funder) {
    return 'Please provide a comprehensive proposal for this project.';
  }

  const formatGuidance = getFormatGuidance(funder.formatPreference);
  const focusGuidance = getFocusGuidance(funder.focusAreas, projectData.impactArea);
  const requirementGuidance = getRequirementGuidance(funder.specialRequirements);

  return `
Create a ${funder.formatPreference} proposal for ${funder.name} with the following specifications:

PROJECT: ${projectData.title}
IMPACT AREA: ${projectData.impactArea}
BUDGET: ${projectData.budgetRange}
REQUEST TYPE: ${projectData.requestType}

FORMAT GUIDANCE:
${formatGuidance}

FOCUS AREAS:
${focusGuidance}

SPECIAL REQUIREMENTS:
${requirementGuidance}

PROJECT DESCRIPTION:
${projectData.description}

Please ensure the proposal aligns with ${funder.name}'s focus on ${funder.focusAreas.join(', ')} and their preference for ${funder.formatPreference} communication style. Include specific metrics and outcomes that would appeal to this funder's evaluation criteria.
  `.trim();
};

// Helper functions for prompt generation
const getFormatGuidance = (format: string): string => {
  switch (format) {
    case 'formal':
      return 'Use formal, academic language with proper citations and references. Structure should be highly organized with clear sections.';
    case 'concise':
      return 'Keep language clear and direct. Focus on key points and measurable outcomes. Avoid unnecessary elaboration.';
    case 'narrative':
      return 'Tell a compelling story about the project and its impact. Use engaging language that connects emotionally with the reader.';
    case 'technical':
      return 'Include detailed technical specifications, methodology, and evidence-based approaches. Use precise, scientific language.';
    case 'storytelling':
      return 'Frame the proposal as a narrative journey. Include personal stories, community voices, and vivid descriptions of impact.';
    default:
      return 'Use clear, professional language appropriate for grant applications.';
  }
};

const getFocusGuidance = (funderFocusAreas: string[], projectArea: string): string => {
  const matchingAreas = funderFocusAreas.filter(area => 
    area.toLowerCase().includes(projectArea.toLowerCase()) ||
    projectArea.toLowerCase().includes(area.toLowerCase())
  );
  
  if (matchingAreas.length > 0) {
    return `Emphasize alignment with ${matchingAreas.join(', ')}. Highlight how the project addresses these specific focus areas.`;
  } else {
    return `Connect the project to relevant focus areas: ${funderFocusAreas.join(', ')}. Show how the project contributes to these broader goals.`;
  }
};

const getRequirementGuidance = (requirements: string[]): string => {
  return requirements.map(req => `• ${req}`).join('\n');
};

// Helper function to get funder recommendations based on project criteria
export const getFunderRecommendations = (projectData: {
  impactArea: string;
  budgetRange: string;
  requestType: string;
  region?: string;
}): FunderProfile[] => {
  let recommendations = funderProfiles;

  // Filter by region if specified
  if (projectData.region) {
    recommendations = recommendations.filter(funder => 
      funder.region === projectData.region || funder.region === 'Global'
    );
  }

  // Filter by focus area
  recommendations = recommendations.filter(funder =>
    funder.focusAreas.some(area =>
      area.toLowerCase().includes(projectData.impactArea.toLowerCase()) ||
      projectData.impactArea.toLowerCase().includes(area.toLowerCase())
    )
  );

  // Filter by request type
  recommendations = recommendations.filter(funder =>
    funder.requestType === projectData.requestType || funder.requestType === 'general'
  );

  // Sort by success rate (higher is better)
  recommendations.sort((a, b) => b.successRate - a.successRate);

  return recommendations.slice(0, 10); // Return top 10 matches
}; 