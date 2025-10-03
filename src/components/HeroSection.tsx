
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/beta-signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(data.message || 'Request received!');
        setEmail('');
      } else {
        setError(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center w-full bg-white px-2 pt-10 pb-0">
      <motion.div
        className="relative w-full mx-auto bg-[#6349f8] rounded-[2.5rem] md:rounded-[3.5rem] xl:rounded-[4rem] px-4 md:px-16 pt-16 pb-48 flex flex-col items-center shadow-lg overflow-visible min-h-[650px] md:min-h-[750px] xl:min-h-[850px] justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {/* Beta badge */}
        <motion.div
          className="mb-6 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="bg-white/10 text-white text-xs font-semibold px-4 py-1 rounded-full border border-white/20 backdrop-blur-sm">BETA · Invite Only</span>
        </motion.div>
        {/* Main Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-thicccboi font-bold text-white text-center mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          You Only Need a Single<br className="hidden md:block" /> Tool to Crush Productivity
        </motion.h1>
        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-2xl text-white/90 text-center mb-8 max-w-2xl mx-auto font-thicccboi"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Reach hundreds of prospects per day across your tools. Timeloom is currently in invite-only beta. Request access to join our early users!
        </motion.p>
        {/* Email input and CTA */}
        <motion.form
          className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full max-w-lg mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            required
            placeholder="Enter your work email"
            className="w-full sm:w-auto flex-1 px-6 py-4 rounded-xl border-none outline-none text-base font-thicccboi bg-white text-[#6349f8] placeholder:text-[#6349f8]/60 shadow-sm focus:ring-2 focus:ring-white/60"
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading}
          />
          <button
            type="submit"
            className="px-8 py-4 rounded-xl bg-[#1a1a1a] text-white font-thicccboi font-bold text-lg shadow hover:bg-[#333] transition-all border-2 border-transparent hover:border-white"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Start now'}
          </button>
        </motion.form>
        {(message || error) && (
          <div className={`text-center mb-4 font-thicccboi ${message ? 'text-green-600' : 'text-red-600'}`}>{message || error}</div>
        )}
        {/* Feature highlights */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 text-white/80 text-base font-thicccboi mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="flex items-center gap-2">✓ One Minute Setup</span>
          <span className="flex items-center gap-2">✓ 7-Day Free Trial</span>
          <span className="flex items-center gap-2">✓ No Credit Card Required</span>
        </motion.div>
        {/* Demo video overlap */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-14 md:-bottom-52 w-full max-w-3xl z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <div className="overflow-hidden bg-black rounded-2xl">
              <div className="w-full aspect-video">
                <iframe
                  className="w-full h-full rounded-xl border-none shadow-none"
                  src="https://archive.org/embed/timeloomdemo?autoplay=1"
                  width="560"
                  height="384"
                  frameBorder="0"
                  allowFullScreen
                  title="Timeloom demo video"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Custom roundy squiggle inspired by user image */}
        {/* Desktop placement */}
        <svg className="hidden md:block absolute top-40 left-1/4 w-32 h-20 opacity-40" fill="none" viewBox="0 0 120 60">
          <path d="M10 50 Q 40 10, 60 40 Q 80 70, 70 30 Q 60 0, 110 20" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        </svg>
        {/* S-curve with a spiral - desktop */}
        <svg className="hidden md:block absolute bottom-20 right-96 w-32 h-20 opacity-25" fill="none" viewBox="0 0 120 60">
          <path d="M10 50 Q 40 10, 70 30 Q 100 50, 90 20 Q 80 0, 110 10 Q 120 20, 100 30" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        </svg>
        {/* Large arc with a tight loop - desktop */}
        <svg className="hidden md:block absolute top-40 right-1/4 w-28 h-16 opacity-20" fill="none" viewBox="0 0 110 50">
          <path d="M10 40 Q 60 0, 100 40 Q 80 30, 90 10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        </svg>
        {/* Spiral squiggle - desktop */}
        <svg className="hidden md:block absolute bottom-20 left-96 w-20 h-20 opacity-20" fill="none" viewBox="0 0 60 60">
          <path d="M30 50 Q 10 40, 20 20 Q 30 0, 50 20 Q 60 40, 40 40 Q 20 40, 30 30" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        </svg>

        {/* Mobile placement - more centered and less overlapping */}
        <svg className="md:hidden absolute top-8 left-1/2 -translate-x-1/2 w-24 h-12 opacity-40" fill="none" viewBox="0 0 120 60">
          <path d="M10 50 Q 40 10, 60 40 Q 80 70, 70 30 Q 60 0, 110 20" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        </svg>
        <svg className="md:hidden absolute bottom-44 left-1/2 -translate-x-1/2 w-20 h-10 opacity-25" fill="none" viewBox="0 0 120 60">
          <path d="M10 50 Q 40 10, 70 30 Q 100 50, 90 20 Q 80 0, 110 10 Q 120 20, 100 30" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        </svg>
        <svg className="md:hidden absolute top-1/2 left-4 w-14 h-8 opacity-20" fill="none" viewBox="0 0 110 50">
          <path d="M10 40 Q 60 0, 100 40 Q 80 30, 90 10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        </svg>
        <svg className="md:hidden absolute top-1/2 right-4 w-10 h-10 opacity-20" fill="none" viewBox="0 0 60 60">
          <path d="M30 50 Q 10 40, 20 20 Q 30 0, 50 20 Q 60 40, 40 40 Q 20 40, 30 30" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
