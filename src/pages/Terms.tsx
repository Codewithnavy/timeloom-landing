
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: December 3, 2025
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using Timeloom ("the Service"), you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              Timeloom is a productivity management tool that provides:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>Global tagging system for emails, calendar events, and projects</li>
              <li>Integration with Gmail and Google Calendar</li>
              <li>Project visualization through Gantt charts</li>
              <li>Custom dashboard creation and management</li>
              <li>Cross-platform synchronization of tags and associations</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Google API Integration</h2>
            <p className="text-gray-700 mb-4">
              By using Timeloom, you authorize us to access your Google account data through the following APIs:
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-blue-900 mb-3">Required Permissions:</h4>
              <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                <li><strong>Gmail API:</strong> Read, modify, send, and compose emails; manage labels on your behalf</li>
                <li><strong>Calendar API:</strong> Read and modify calendar events</li>
              </ul>
              <p className="text-blue-800 mt-3 text-sm">
                <strong>Note:</strong> We use these permissions only to provide core functionality and do not store your email content or calendar event details.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
            <p className="text-gray-700 mb-4">As a user of Timeloom, you agree to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>Use the service in compliance with all applicable laws and regulations</li>
              <li>Maintain the security of your Google account credentials</li>
              <li>Not use the service for any illegal or unauthorized purpose</li>
              <li>Not attempt to gain unauthorized access to our systems or other users' data</li>
              <li>Report any security vulnerabilities or bugs responsibly</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Open Source License</h2>
            <p className="text-gray-700 mb-6">
              Timeloom is released under an open source license. The source code is available on GitHub, 
              and you are free to view, modify, and distribute the code according to the terms of the 
              applicable open source license. Commercial use and modification are permitted under the license terms.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Ownership and Privacy</h2>
            <p className="text-gray-700 mb-4">
              You retain full ownership of your data. Timeloom:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>Does not claim ownership of your emails, calendar events, or personal data</li>
              <li>Stores only the tags and associations you create within our service</li>
              <li>Provides tools to export your data at any time</li>
              <li>Will delete all your data upon account termination</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Service Availability</h2>
            <p className="text-gray-700 mb-6">
              While we strive to maintain high availability, Timeloom is provided "as is" without warranty 
              of any kind. We do not guarantee uninterrupted access to the service and may temporarily 
              suspend access for maintenance, updates, or technical issues.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              In no event shall Timeloom, its developers, or contributors be liable for any indirect, 
              incidental, special, consequential, or punitive damages, including without limitation, 
              loss of profits, data, use, goodwill, or other intangible losses resulting from your use of the service.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Account Termination</h2>
            <p className="text-gray-700 mb-4">
              You may terminate your account at any time by:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Deleting your account through the service settings</li>
              <li>Revoking Google API permissions in your Google account settings</li>
              <li>Contacting our support team</li>
            </ul>
            <p className="text-gray-700 mb-6">
              We may terminate accounts that violate these terms or for any reason with reasonable notice.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Updates to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these terms at any time. We will provide notice of significant 
              changes through the service or via email. Continued use of the service after changes constitutes 
              acceptance of the new terms.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These terms shall be governed by and construed in accordance with the laws of India, 
              without regard to its conflict of law provisions.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
            <p className="text-gray-700">
              For questions about these terms or the service, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="text-gray-700">
                Email: legal@timeloom.com<br />
                GitHub Issues: <a href="https://github.com/BerrySeriousCoder/Timeloom" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://github.com/BerrySeriousCoder/Timeloom/issues</a><br />
                Support: support@timeloom.com
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Terms;
