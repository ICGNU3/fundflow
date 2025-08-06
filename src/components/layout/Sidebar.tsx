'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DashboardIcon, DocumentIcon, AlertIcon, UsersIcon, EyeIcon, PlusIcon } from '../icons/Icons';

// Hardcoded user data
const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'grantee', // 'grantee' or 'funder'
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
};

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const granteeLinks = [
    { href: '/', label: 'Dashboard', icon: DashboardIcon },
    { href: '/funders', label: 'Browse Funders', icon: UsersIcon },
    { href: '/grantee/proposal', label: 'Proposals', icon: DocumentIcon },
    { href: '/grantee/emergency', label: 'Emergency', icon: AlertIcon },
    { href: '/grantee/onboarding', label: 'Settings', icon: UsersIcon },
  ];

  const funderLinks = [
    { href: '/', label: 'Dashboard', icon: DashboardIcon },
    { href: '/funder/review/1', label: 'Review Proposals', icon: EyeIcon },
  ];

  const links = user.role === 'grantee' ? granteeLinks : funderLinks;

  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 min-h-screen">
      {/* User Profile Section */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <img
            className="h-10 w-10 rounded-full"
            src={user.avatar}
            alt={user.name}
          />
          <div>
            <div className="text-sm font-medium text-gray-900">{user.name}</div>
            <div className="text-xs text-gray-500 capitalize">{user.role}</div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="mt-4">
        <div className="px-4">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Navigation
          </div>
        </div>
        
        <ul className="space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-md mx-2 transition-all duration-200 ${
                    isActive(link.href)
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className="mr-3" size={20} />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Quick Actions */}
      <div className="mt-8 px-4">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Quick Actions
        </div>
        <div className="space-y-2">
          {user.role === 'grantee' && (
            <Link
              href="/grantee/proposal"
              className="flex items-center w-full text-left px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
            >
              <PlusIcon className="mr-2" size={16} />
              New Proposal
            </Link>
          )}
          {user.role === 'funder' && (
            <Link
              href="/funder/review/1"
              className="flex items-center w-full text-left px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
            >
              <EyeIcon className="mr-2" size={16} />
              Review Pending
            </Link>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          FundFlow v1.0.0
        </div>
      </div>
    </div>
  );
} 