import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

// Hardcoded user data
const user = {
  name: 'John Doe',
  role: 'grantee',
};

// Mock data for dashboard
const stats = [
  { label: 'Active Proposals', value: '3', change: '+12%', changeType: 'positive' },
  { label: 'Total Funding', value: '$45,000', change: '+8%', changeType: 'positive' },
  { label: 'Pending Reviews', value: '2', change: '-5%', changeType: 'negative' },
  { label: 'Success Rate', value: '78%', change: '+3%', changeType: 'positive' },
];

const recentProposals = [
  {
    id: 1,
    title: 'Community Garden Initiative',
    status: 'Under Review',
    amount: '$15,000',
    submittedDate: '2024-01-15',
    category: 'Environmental',
  },
  {
    id: 2,
    title: 'Youth Education Program',
    status: 'Approved',
    amount: '$25,000',
    submittedDate: '2024-01-10',
    category: 'Education',
  },
  {
    id: 3,
    title: 'Healthcare Access Project',
    status: 'Draft',
    amount: '$30,000',
    submittedDate: '2024-01-20',
    category: 'Healthcare',
  },
];

export default function HomePage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back, {user.name}!
            </h1>
            <p className="text-gray-600">
              Here&apos;s what&apos;s happening with your grant applications today.
            </p>
          </div>
          <Link 
            href="/landing" 
            className="text-sm text-blue-600 hover:text-blue-700 underline"
          >
            View Landing Page →
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <div className={`text-sm font-medium mt-2 ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change} from last month
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Proposals */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Recent Proposals</h2>
          </div>
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
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentProposals.map((proposal) => (
                  <tr key={proposal.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{proposal.title}</div>
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
                      <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                        proposal.status === 'Approved' 
                          ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800'
                          : proposal.status === 'Under Review'
                          ? 'bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800'
                          : 'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800'
                      }`}>
                        {proposal.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(proposal.submittedDate).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Create New Proposal
              </button>
              <button className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                View All Proposals
              </button>
              <button className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                Emergency Request
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Proposal &quot;Youth Education Program&quot; was approved</span>
              </div>
              <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">New review request received</span>
              </div>
              <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Proposal &quot;Community Garden&quot; is under review</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Tips & Resources</h3>
            <div className="space-y-3">
              <div className="text-sm text-gray-600 p-3 bg-blue-50 rounded-lg">
                <p className="font-medium mb-1 text-blue-900">💡 Writing Tips</p>
                <p>Make your proposal stand out with clear objectives and measurable outcomes.</p>
              </div>
              <div className="text-sm text-gray-600 p-3 bg-purple-50 rounded-lg">
                <p className="font-medium mb-1 text-purple-900">📅 Deadlines</p>
                <p>Next funding cycle closes on February 15th, 2024.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
