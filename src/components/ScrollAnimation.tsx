import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.55,
  distance = 32,
  className = '',
  once = true,
  amount = 0.15
}) => {
  const getInitial = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance };
      case 'down':
        return { opacity: 0, y: -distance };
      case 'left':
        return { opacity: 0, x: distance };
      case 'right':
        return { opacity: 0, x: -distance };
      case 'zoom':
        return { opacity: 0, scale: 0.94 };
      case 'fade':
      default:
        return { opacity: 0 };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case 'zoom':
        return { opacity: 1, scale: 1 };
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      case 'fade':
      default:
        return { opacity: 1 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] // Fluid cubic-bezier easeOut
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  once?: boolean;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  delayChildren = 0.1,
  staggerChildren = 0.12,
  once = true
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
}> = ({ children, className = '', yOffset = 24 }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: yOffset, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

/**
 * Global Top Scroll Reading Progress Indicator
 */
export const ScrollProgressBar: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{ scaleX }}
      className={`fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-600 via-sky-400 to-red-600 origin-left z-[9999] pointer-events-none shadow-sm ${className}`}
    />
  );
};

/**
 * Floating Scroll-To-Top Quick Action Button
 */
export const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 380);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-24 right-5 sm:right-6 z-40 p-2.5 sm:p-3 rounded-full bg-slate-900/90 hover:bg-[#0b1b3d] text-white border border-slate-700/80 shadow-xl backdrop-blur-md cursor-pointer transition-colors group"
        >
          <ArrowUp className="w-4 h-4 text-sky-400 group-hover:text-red-400 transition-colors" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
