import MainLayout from '@/components/layout/MainLayout';

// Hardcoded user data
const user = {
  name: 'John Doe',
  role: 'grantee',
};

// Mock data for dashboard
const stats = [
  { label: 'Active Proposals', value: '3', change: '+12%' },
  { label: 'Total Funding', value: '$45,000', change: '+8%' },
  { label: 'Pending Reviews', value: '2', change: '-5%' },
  { label: 'Success Rate', value: '78%', change: '+3%' },
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
];

export default function DashboardBackup() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {user.name}!
          </h1>
          <p className="text-gray-600">
            Here&apos;s what&apos;s happening with your grant applications today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <div className="text-sm font-medium text-green-600">
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Proposals */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Recent Proposals</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Proposal
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentProposals.map((proposal) => (
                  <tr key={proposal.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{proposal.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {proposal.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {proposal.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Create New Proposal
            </button>
            <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">
              View All Proposals
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}