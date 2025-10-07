import { Tag, BarChart3, Mail, Calendar, Layout } from 'lucide-react';
import video from '../assets/demo.mp4';

const DemoVideoSection = () => {
  return (
    <section id="demo" className="py-24 bg-gradient-to-br from-gray-50 via-white to-white animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"> {/* Added relative for absolute positioning of floating elements */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          See Timeloom in Action
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Watch a quick demo to see how Timeloom can transform your productivity.
        </p>
        <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200/70 bg-white p-4 transition-all duration-500 hover:shadow-3xl hover:scale-[1.01]">
        <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://player.vimeo.com/video/1093272547?h=900987d428&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              title="Timeloom demo video"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Floating text and icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute lg:top-[20%] top-40 lg:left-[10%] animate-float">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-base font-medium bg-blue-100 text-blue-800 shadow-lg">
              <Tag className="w-5 h-5 mr-2" /> Global Tagging
            </span>
          </div>
          <div className="absolute top-[30%] right-[10%] animate-float delay-500">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-base font-medium bg-purple-100 text-purple-800 shadow-lg">
              <BarChart3 className="w-5 h-5 mr-2" /> Gantt Charts
            </span>
          </div>
          <div className="absolute -bottom-[5%] left-[45%] animate-float delay-1000">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-base font-medium bg-green-100 text-green-800 shadow-lg">
              <Mail className="w-5 h-5 mr-2" /> Integrations
            </span>
          </div>
          <div className="absolute lg:top-[50%] lg:-left-[1%] -bottom-10  animate-float delay-1500">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-base font-medium bg-red-100 text-red-800 shadow-lg">
              <Calendar className="w-5 h-5 mr-2" /> Event Sync
            </span>
          </div>
          <div className="absolute lg:bottom-[15%] -bottom-24 lg:-right-[5%] -right-[1%] animate-float delay-2000">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-base font-medium bg-orange-100 text-orange-800 shadow-lg">
              <Layout className="w-5 h-5 mr-2" /> Custom Dashboards
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideoSection;