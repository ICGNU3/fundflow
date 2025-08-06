'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  SparklesIcon, 
  ChartIcon,
  TargetIcon,
  RocketIcon,
  ArrowRightIcon
} from '@/components/icons/Icons';

const stats = [
  { label: '$2.5M+', description: 'Funding Secured' },
  { label: '500+', description: 'Proposals Funded' },
  { label: '85%', description: 'Success Rate' },
  { label: '48hrs', description: 'Avg. Response Time' },
];

const features = [
  {
    icon: SparklesIcon,
    title: 'AI-Powered Proposals',
    description: 'Generate tailored proposals that match funder preferences with our intelligent AI assistant.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: TargetIcon,
    title: 'Smart Funder Matching',
    description: 'Find the perfect funders for your project with our compatibility scoring algorithm.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: RocketIcon,
    title: 'Fast-Track Reviews',
    description: 'Get your proposals reviewed faster with our streamlined review process.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: ChartIcon,
    title: 'Analytics Dashboard',
    description: 'Track your success rates, funding trends, and optimize your grant strategy.',
    color: 'from-orange-500 to-red-500'
  },
];

const testimonials = [
  {
    quote: "FundFlow transformed our grant application process. We secured $250,000 in funding within 3 months!",
    author: "Sarah Johnson",
    role: "Executive Director, Green Future Initiative",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face"
  },
  {
    quote: "The AI-powered proposal generator saved us countless hours. It's like having a grant writer on staff.",
    author: "Michael Chen",
    role: "Program Manager, Youth Education Fund",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
  },
  {
    quote: "As a funder, FundFlow helps us identify high-impact projects quickly. The review tools are exceptional.",
    author: "Emily Rodriguez",
    role: "Grant Officer, Community Foundation",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
  },
];

const fundingProcess = [
  { step: '1', title: 'Create Profile', description: 'Set up your organization profile in minutes' },
  { step: '2', title: 'Match Funders', description: 'Find compatible funders for your mission' },
  { step: '3', title: 'Generate Proposal', description: 'Use AI to create winning proposals' },
  { step: '4', title: 'Track & Succeed', description: 'Monitor your applications and celebrate wins' },
];

export default function LandingPage() {
  const [email, setEmail] = useState('');

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for joining! We'll contact you at ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                FundFlow
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-gray-900 transition-colors">How It Works</a>
              <a href="#testimonials" className="text-gray-700 hover:text-gray-900 transition-colors">Testimonials</a>
              <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors">Pricing</a>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
                Sign In
              </Link>
              <Link 
                href="/" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
            <SparklesIcon className="text-purple-600 mr-2" size={16} />
            <span className="text-purple-700 text-sm font-medium">AI-Powered Grant Management Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Secure Funding for Your
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mission-Driven Projects
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with the right funders, generate winning proposals in minutes, and track your grant applications 
            all in one powerful platform designed for nonprofits and social enterprises.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="/"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRightIcon className="ml-2" size={20} />
            </Link>
            <button className="inline-flex items-center justify-center bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-medium border-2 border-gray-300 hover:border-gray-400 transition-colors">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Win Grants
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to streamline your grant management process from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How FundFlow Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get from application to funding in four simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {fundingProcess.map((item, index) => (
              <div key={index} className="relative">
                {index < fundingProcess.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200"></div>
                )}
                <div className="relative bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how FundFlow is helping organizations secure funding and achieve their missions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Grant Process?
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Join thousands of organizations already using FundFlow to secure funding faster.
            </p>
            
            <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Early Access
              </button>
            </form>
            
            <p className="text-sm mt-4 opacity-75">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">FundFlow</h3>
              <p className="text-sm">
                Empowering organizations to secure funding and create lasting impact.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 FundFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}