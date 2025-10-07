import { Github,  Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import profile from '../assets/profile.jpeg';

const Footer = () => {
  return (
    <footer className="relative w-full flex flex-col items-center bg-white pt-0 pb-0 px-2">
      <div className="relative w-full  mx-auto bg-gray-900 rounded-t-[2.5rem] md:rounded-t-[3.5rem] xl:rounded-t-[4rem] px-4 sm:px-6 lg:px-8 py-16 mt-24 flex flex-col shadow-lg overflow-visible">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl text-white font-bold font-thicccboi mb-4">Timeloom</h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed font-thicccboi">
              The productivity tool that unifies your emails, calendar events, and projects 
              with a global tagging system. Open source and privacy-first.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/BerrySeriousCoder/Timeloom" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:support@timeloom.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="text-lg text-white font-semibold font-thicccboi mb-4">Product</h4>
            <ul className="space-y-2 font-thicccboi">
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          {/* Legal & Support */}
          <div>
            <h4 className="text-lg text-white font-semibold font-thicccboi mb-4">Legal & Support</h4>
            <ul className="space-y-2 font-thicccboi">
              <li><a href="https://www.timeloom.xyz/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Support</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>


        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-thicccboi">
              © 2025 Timeloom. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0 font-thicccboi">
              <span className=" text-sm">Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" /> 
              <span className=" text-sm">by</span> 
              <img src={profile} alt="Profile Icon" className="w-4 h-4 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
