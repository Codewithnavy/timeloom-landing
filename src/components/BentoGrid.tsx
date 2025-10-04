
import React from 'react';
import { Tag, Calendar, BarChart3, Layout, Mail, Github } from 'lucide-react';

const BentoGrid = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-br from-gray-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to stay
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> organized</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Timeloom brings together all your productivity tools with intelligent tagging and beautiful visualizations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {/* Global Tagging - Large card */}
          <div className="md:col-span-2 lg:row-span-2 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl lg:p-8 p-6 transition-all duration-500 group cursor-pointer border border-blue-200/50 shadow-xl hover:shadow-2xl hover:scale-[1.02]">
            <div className="h-full flex flex-col justify-between">
              <div>
                <Tag className="lg:w-12 lg:h-12 w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="lg:text-2xl text-lg font-bold text-gray-900 lg:mb-3 mb-2">Global Tagging System</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tag emails, calendar events, and projects with a unified system.
                  See everything related to a tag in one beautiful dashboard.
                </p>
              </div>
              <div className="mt-6 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-indigo-500 rounded-full border-2 border-white flex items-center justify-center">
                    <Layout className="w-4 h-4 text-white" />
                  </div>
                </div>
                <span className="text-sm text-gray-500">All connected</span>
              </div>
            </div>
          </div>
          
          {/* Gantt Charts */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-6 transition-all duration-500 group cursor-pointer border border-purple-200/50 shadow-md hover:shadow-lg hover:scale-[1.02]">
            <BarChart3 className="w-10 h-10 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Gantt Charts</h3>
            <p className="text-gray-600 text-sm">
              Visualize project progress with beautiful, interactive Gantt charts.
            </p>
          </div>
          
          {/* Open Source */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-6 transition-all duration-500 group cursor-pointer border border-green-200/50 shadow-md hover:shadow-lg hover:scale-[1.02]">
            <Github className="w-10 h-10 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Open Source</h3>
            <p className="text-gray-600 text-sm">
              Completely open source. Contribute, customize, and make it yours.
            </p>
          </div>
          
          {/* Gmail Integration */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-6 transition-all duration-500 group cursor-pointer border border-red-200/50 shadow-md hover:shadow-lg hover:scale-[1.02]">
            <Mail className="w-10 h-10 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Gmail Integration</h3>
            <p className="text-gray-600 text-sm">
              Tag and organize your emails seamlessly with full Gmail integration.
            </p>
          </div>
          
          {/* Calendar Events */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-6 transition-all duration-500 group cursor-pointer border border-orange-200/50 shadow-md hover:shadow-lg hover:scale-[1.02]">
            <Calendar className="w-10 h-10 text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Calendar Events</h3>
            <p className="text-gray-600 text-sm">
              Connect Google Calendar create events and tag them.
            </p>
          </div>
          
          {/* Custom Dashboard - Wide card */}
          <div className="md:col-span-2 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-3xl lg:p-8 p-6 transition-all duration-500 group cursor-pointer border border-indigo-200/50 shadow-xl hover:shadow-2xl hover:scale-[1.02]">
            <div className="h-full flex flex-col justify-between">
              <div>
                <Layout className="lg:w-12 lg:h-12 w-10 h-10 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="lg:text-2xl text-lg font-bold text-gray-900 lg:mb-3 mb-1">Custom Dashboard</h3>
                <p className="text-gray-600 leading-relaxed">
                  Create custom cards, add tags, and see everything related to that tag in one unified view.
                  Your productivity, your way.
                </p>
              </div>
              <div className="mt-4 flex items-center space-x-2">
                <div className="px-3 py-1 bg-indigo-200 text-indigo-800 rounded-full text-xs font-medium">work</div>
                <div className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-medium">urgent</div>
                <div className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-xs font-medium">meeting</div>
                <span className="text-xs text-gray-500">+12 more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
