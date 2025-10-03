
import { useState } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Desktop Navbar - Centered Dock Style */}
        <div className="hidden md:flex items-center  justify-between bg-white/80 backdrop-blur-xl border border-gray-200/20 rounded-2xl px-6 py-3 shadow-lg shadow-gray-900/5 font-thicccboi">
          <Link to="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors font-thicccboi">
            Timeloom
          </Link>
          
          <div className="flex items-center space-x-1 bg-gray-50/50 rounded-xl p-1 font-thicccboi">
            <Link to="/" className="text-gray-700 hover:text-blue-600 hover:bg-white/80 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg font-thicccboi">
              Home
            </Link>
            <a href="https://www.timeloom.xyz/privacy" className="text-gray-700 hover:text-blue-600 hover:bg-white/80 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg font-thicccboi">
              Privacy
            </a>
            <Link to="/terms" className="text-gray-700 hover:text-blue-600 hover:bg-white/80 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg font-thicccboi">
              Terms
            </Link>
          </div>
          
          <div className="flex items-center space-x-3 font-thicccboi">
            <a href="https://github.com/BerrySeriousCoder/Timeloom" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-50/50 transition-all duration-200 flex items-center gap-2 font-thicccboi">
              <Github size={16} />
            </a>
            <a href="https://app.timeloom.xyz/" className="bg-gray-900 text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition-all duration-200 font-medium text-sm hover:scale-105 shadow-sm flex items-center justify-center font-thicccboi">
              Get Started
            </a>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden font-thicccboi">
          <div className="bg-white/80 backdrop-blur-xl border border-gray-200/20 rounded-2xl px-4 py-3 shadow-lg shadow-gray-900/5 font-thicccboi">
            <div className="flex justify-between items-center">
              <Link to="/" className="text-xl font-bold text-gray-900 font-thicccboi">
                Timeloom
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-50/50 transition-all duration-200 font-thicccboi"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isOpen && (
            <div className="mt-2 bg-white/90 backdrop-blur-xl border border-gray-200/20 rounded-2xl shadow-lg shadow-gray-900/10 overflow-hidden font-thicccboi">
              <div className="px-4 py-2 space-y-1 font-thicccboi">
                <Link to="/" className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 font-thicccboi">
                  Home
                </Link>
                <a href="https://www.timeloom.xyz/privacy" className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 font-thicccboi">
                  Privacy
                </a>
                <Link to="/terms" className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 font-thicccboi">
                  Terms
                </Link>
                <a href="https://github.com/BerrySeriousCoder/Timeloom" target="_blank" rel="noopener noreferrer" className=" text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-2 font-thicccboi">
                  <Github size={16} />
                  Open Source
                </a>
                <div className="pt-2 pb-1">
                  <a href="https://app.timeloom.xyz/" className="w-full bg-gray-900 text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition-all duration-200 font-medium text-sm flex items-center justify-center font-thicccboi">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
