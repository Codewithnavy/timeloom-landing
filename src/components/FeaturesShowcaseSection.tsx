import dashboardImg from '../assets/features/dashboard.png';
import customCardImg from '../assets/features/customCard.png';
import emailImg from '../assets/features/email.png';
import composeEmailImg from '../assets/features/composeEmail.png';
import calendarImg from '../assets/features/calendar.png';
import addCalendarEventImg from '../assets/features/addCalendarEvent.png';
import projectImg from '../assets/features/project.png';
import taskCardImg from '../assets/features/taskcard.png';
import { motion } from 'framer-motion';

const FeatureSection = ({
  title,
  description,
  mainImg,
  mainImgAlt,
  cardImg,
  cardImgAlt,
  cardTitle,
  cardDescription,
}: {
  title: string;
  description: string;
  mainImg: string;
  mainImgAlt: string;
  cardImg?: string;
  cardImgAlt?: string;
  cardTitle: string;
  cardDescription: string;
}) => (
  <motion.div
    className="w-full flex flex-col md:flex-row items-center gap-6 md:gap-12 p-4 sm:p-6 md:p-16 mb-0 relative overflow-visible bg-transparent"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <div className="flex-1 flex flex-col items-center md:items-start relative z-0 w-full">
      <motion.h3
        className="text-xl sm:text-2xl md:text-3xl font-thicccboi font-bold text-[#1a1a1a] mb-2 text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-base sm:text-lg text-gray-600 font-thicccboi text-center md:text-left max-w-lg mb-4 md:mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {description}
      </motion.p>
      <motion.div
        className="w-full flex justify-center md:justify-start relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <img
          src={mainImg}
          alt={mainImgAlt}
          className="w-full max-w-xs sm:max-w-md md:max-w-9xl object-contain md:ml-[-60px] md:mr-0 md:mt-8 md:mb-8"
          style={{ minHeight: undefined, minWidth: undefined, zIndex: 0 }}
        />
      </motion.div>
    </div>
    <motion.div
      className="flex-1 flex flex-col items-center md:items-end relative z-10 w-full md:-ml-32"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg bg-white p-4 sm:p-6 md:p-8 mb-4 md:mb-8 flex flex-col items-center">
        {cardImg && (
          <motion.img
            src={cardImg}
            alt={cardImgAlt}
            className="w-full h-auto object-contain rounded-lg mb-4 md:mb-6"
            style={{ minHeight: undefined, minWidth: undefined }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
          />
        )}
        <div className="font-thicccboi text-lg sm:text-xl md:text-2xl text-[#6349f8] mb-2 text-center md:text-left">{cardTitle}</div>
        <div className="text-sm sm:text-base text-gray-600 font-thicccboi text-center md:text-left">{cardDescription}</div>
      </div>
    </motion.div>
  </motion.div>
);

const FullWidthDivider = () => (
  <div
    className="pointer-events-none absolute left-1/2 border-t border-gray-200 z-0"
    style={{ width: '100vw', transform: 'translateX(-50%)' }}
    aria-hidden
  />
);

const FeaturesShowcaseSection = () => {
  return (
    <section className="relative z-10 w-full flex flex-col items-center bg-white pt-32 pb-24 px-2">
      <div className="pointer-events-none absolute left-0 right-0 top-0 border-t border-gray-200 z-0" style={{ width: '100vw' }} aria-hidden />
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 border-b border-gray-200 z-0" style={{ width: '100vw' }} aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
        style={{ width: '100%', maxWidth: '80rem', height: '100%' }}
      >
        {/* Vertical lines */}
        <div className="absolute top-0 left-0 h-full border-l border-gray-200" style={{ width: 0 }} />
        <div className="absolute top-0 right-0 h-full border-l border-gray-200" style={{ width: 0 }} />
        {/* Horizontal lines: between each row (not top/bottom) */}
      </div>
      {/* Content inside grid */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center z-10" style={{ background: 'transparent' }}>
        {/* Title + subtitle row */}
        <div className="w-full flex flex-col items-center justify-center py-16">
          <motion.h2
            className="text-4xl md:text-5xl font-thicccboi font-bold text-[#1a1a1a] text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Why Timeloom?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-500 text-center max-w-2xl font-thicccboi"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            All your productivity essentials—email, calendar, projects, and more—unified, organized, and supercharged with global tagging.
          </motion.p>
        </div>
        <motion.div
          className="relative w-full flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
        >
          <FeatureSection
            title="Custom Dashboard"
            description="Create your own dashboard with custom cards. Add one or more tags to a card and instantly see all emails, events, and projects for those tags in a single view."
            mainImg={dashboardImg}
            mainImgAlt="Dashboard"
            cardImg={customCardImg}
            cardImgAlt="Custom Card"
            cardTitle="Custom Cards"
            cardDescription="Your productivity, your way—multi-tag views. Instantly see all emails, events, and projects for those tags in a single view."
          />
          <div className="relative w-full flex justify-center" style={{ height: 0 }}>
            <FullWidthDivider />
          </div>
          <FeatureSection
            title="Unified Inbox"
            description="Connect your Gmail account and manage all your emails, compose, read, and tag them without switching apps. All your communication, unified."
            mainImg={emailImg}
            mainImgAlt="Email"
            cardImg={composeEmailImg}
            cardImgAlt="Compose Email"
            cardTitle="Compose Email"
            cardDescription="Write, tag, and send emails in seconds. Stay on top of your inbox with powerful productivity features."
          />
          <div className="relative w-full flex justify-center" style={{ height: 0 }}>
            <FullWidthDivider />
          </div>
          <FeatureSection
            title="Smart Calendar"
            description="See all your events, deadlines, and reminders in one unified calendar. Tag events and instantly filter by project, context, or priority."
            mainImg={calendarImg}
            mainImgAlt="Calendar"
            cardImg={addCalendarEventImg}
            cardImgAlt="Add Calendar Event"
            cardTitle="Add Events"
            cardDescription="Quickly add, tag, and manage events. Stay organized and never miss a deadline."
          />
          <div className="relative w-full flex justify-center" style={{ height: 0 }}>
            <FullWidthDivider />
          </div>
          <FeatureSection
            title="Projects & Tasks"
            description="Organize your work with powerful project boards and task lists. Tag tasks, set priorities, and track progress across all your projects."
            mainImg={projectImg}
            mainImgAlt="Project"
            cardImg={taskCardImg}
            cardImgAlt="Task Card"
            cardTitle="Task Management"
            cardDescription="Create, tag, and manage tasks for every project. Stay on top of your work and hit every milestone."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesShowcaseSection; 