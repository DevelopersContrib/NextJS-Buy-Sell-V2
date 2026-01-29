import React, { useState, useEffect } from 'react';
import { X, Sparkles, Rocket, Crown, Zap, ArrowRight, Clock, CheckCircle } from 'lucide-react';

/**
 * First100FoundersModal Component
 * 
 * @param {Object} props
 * @param {string} [props.targetUrl='/first100founders'] - URL path to navigate to when CTA button is clicked
 * @param {number} [props.delay=15000] - Delay in milliseconds before showing the modal (15 seconds)
 * @param {string[]} [props.excludedPaths=['/first100founders', '/admin']] - Array of path prefixes to exclude the modal from showing
 * @param {string} [props.sessionKey='first100founders_modal_shown'] - Custom session storage key for tracking if modal was shown
 * @param {Function} [props.onNavigate] - Custom navigation handler function (for Next.js router.push, etc.). If not provided, will use window.location.href
 * @param {Function} [props.getCurrentPath] - Custom function to get current pathname. If not provided, will use window.location.pathname
 * @param {Object} [props.content] - Custom content overrides
 * @param {string} [props.content.title] - Custom title
 * @param {string} [props.content.subtitle] - Custom subtitle
 * @param {string} [props.content.description] - Custom description
 * @param {string} [props.content.ctaText] - Custom CTA button text
 * @param {string} [props.content.dismissText] - Custom dismiss button text
 * @param {string} [props.content.footerText] - Custom footer text
 * @param {Array} [props.benefits] - Custom benefits list
 * @param {Object} [props.pricing] - Pricing information
 * @param {number} [props.zIndex=9999] - Z-index for the modal
 * @param {boolean} [props.isOpen] - Whether to show the modal (controlled mode). If provided, component becomes controlled
 * @param {Function} [props.onClose] - Callback when modal is closed
 * @param {Function} [props.onCTAClick] - Callback when CTA is clicked
 * @param {boolean} [props.testMode=false] - Test mode - shows immediately and ignores sessionStorage
 */
export const First100FoundersModal = ({
  targetUrl = '/first100founders',
  delay = 15000,
  excludedPaths = ['/first100founders', '/admin'],
  sessionKey = 'first100founders_modal_shown',
  onNavigate,
  getCurrentPath,
  content,
  benefits,
  pricing,
  zIndex = 9999,
  isOpen: controlledIsOpen,
  onClose,
  onCTAClick,
  testMode = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const isControlled = controlledIsOpen !== undefined;

  // Get current pathname
  const getPathname = () => {
    if (getCurrentPath) {
      return getCurrentPath();
    }
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '';
  };

  useEffect(() => {
    // If controlled, use controlled state
    if (isControlled) {
      setIsVisible(controlledIsOpen || false);
      return;
    }

    // Check if path is excluded FIRST (before test mode or anything else)
    const currentPath = getPathname();
    console.log('[First100FoundersModal] Current path:', currentPath, 'Excluded paths:', excludedPaths);
    const isExcluded = excludedPaths.some(path => currentPath.startsWith(path));
    
    if (isExcluded) {
      console.log('[First100FoundersModal] Path excluded:', currentPath);
      return;
    }
    
    console.log('[First100FoundersModal] Path NOT excluded, continuing...');

    // Test mode - show immediately (only if not excluded)
    if (testMode) {
      console.log('[First100FoundersModal] Test mode - showing immediately');
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }

    // Check if user has already dismissed this modal in this session
    if (typeof window !== 'undefined') {
      // Allow clearing via URL parameter for testing: ?clearModal=true
      const urlParams = new URLSearchParams(window.location.search);
      const clearModal = urlParams.get('clearModal') === 'true';
      
      if (clearModal) {
        console.log('[First100FoundersModal] Clearing sessionStorage due to ?clearModal=true parameter');
        sessionStorage.removeItem(sessionKey);
      }
      
      const wasShown = sessionStorage.getItem(sessionKey);
      
      if (wasShown && !testMode && !clearModal) {
        console.log('[First100FoundersModal] Already shown in this session.');
        console.log('[First100FoundersModal] To test again, add ?clearModal=true to URL or run: sessionStorage.removeItem("' + sessionKey + '")');
        setHasShown(true);
        return;
      }

      console.log('[First100FoundersModal] Will show after', delay, 'ms on path:', currentPath);
      
      // Show modal after delay
      const timer = setTimeout(() => {
        // Double-check path hasn't changed
        const finalPath = getPathname();
        const stillExcluded = excludedPaths.some(path => finalPath.startsWith(path));
        
        if (stillExcluded) {
          console.log('[First100FoundersModal] Path became excluded, not showing:', finalPath);
          return;
        }
        
        console.log('[First100FoundersModal] Showing modal now on path:', finalPath);
        setIsVisible(true);
        if (!testMode) {
          sessionStorage.setItem(sessionKey, 'true');
        }
      }, delay);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [delay, excludedPaths, sessionKey, isControlled, controlledIsOpen, testMode]);

  const handleClose = () => {
    setIsVisible(false);
    setHasShown(true);
    if (onClose) {
      onClose();
    }
  };

  const handleNavigate = () => {
    if (onCTAClick) {
      onCTAClick();
    }
    
    if (onNavigate) {
      onNavigate(targetUrl);
    } else if (typeof window !== 'undefined') {
      window.location.href = targetUrl;
    }
    
    setIsVisible(false);
    setHasShown(true);
  };

  // Default benefits (cards)
  const defaultBenefits = benefits || [
    { 
      icon: <Rocket className="w-8 h-8" />, 
      text: 'Full Beta Launch - Now Live', 
      color: 'text-blue-300', 
      bg: 'from-blue-500/20 to-cyan-500/20' 
    },
    { 
      icon: <Zap className="w-8 h-8" />, 
      text: 'Auto-built contractor website with ALL AI agents', 
      color: 'text-purple-300', 
      bg: 'from-purple-500/20 to-pink-500/20' 
    },
    { 
      icon: <Crown className="w-8 h-8" />, 
      text: 'Early access to DomainFund Secret Auction', 
      color: 'text-yellow-300', 
      bg: 'from-yellow-500/20 to-orange-500/20' 
    },
    { 
      icon: <Sparkles className="w-8 h-8" />, 
      text: 'Founders Badge & exclusive community access', 
      color: 'text-pink-300', 
      bg: 'from-pink-500/20 to-red-500/20' 
    }
  ];

  // Default pricing
  const defaultPricing = pricing || {
    startingPrice: '$99',
    freePlanText: '1-month free Starter Plan included',
    plans: [
      { name: 'Professional Plan', price: '$299/month' },
      { name: 'Enterprise Plan', price: '$999/month' }
    ],
    limitedSlots: 'Only 100 available',
    expiryDate: 'December 31, 2025'
  };

  // Prevent body scroll when modal is visible
  useEffect(() => {
    if (isVisible) {
      // Prevent body scroll
      const originalOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      
      return () => {
        // Restore scroll on cleanup
        document.body.style.overflow = originalOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [isVisible]);

  // Debug logging
  useEffect(() => {
    const currentPath = getPathname();
    const isExcluded = excludedPaths.some(path => currentPath.startsWith(path));
    
    console.log('[First100FoundersModal] Component mounted', {
      isVisible,
      hasShown,
      isControlled,
      testMode,
      currentPath,
      isExcluded,
      delay,
      excludedPaths
    });
    
    if (isVisible) {
      console.log('[First100FoundersModal] Modal is visible - should render now');
    }
  }, [isVisible, hasShown, isControlled, testMode, excludedPaths, delay]);

  // Early return if path is excluded (even before checking visibility)
  const currentPath = getPathname();
  const isExcluded = excludedPaths.some(path => currentPath.startsWith(path));
  if (isExcluded) {
    return null;
  }

  if (!isVisible || hasShown) {
    console.log('[First100FoundersModal] Not rendering:', { isVisible, hasShown });
    return null;
  }

  console.log('[First100FoundersModal] RENDERING MODAL NOW');

  return (
    <div
      className="tw-fixed tw-inset-0 tw-w-full tw-h-full tw-overflow-hidden"
      style={{
        zIndex: zIndex || 99999,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
      data-testid="first100founders-modal"
    >
      {/* Full-screen animated background - more vibrant */}
      <div className="tw-absolute tw-inset-0">
        {/* Custom requested gradient background */}
        <div
          className="tw-absolute tw-inset-0"
          style={{
            background: 'linear-gradient(to right bottom, rgb(88, 28, 135), rgb(30, 58, 138), rgb(49, 46, 129))',
          }}
        ></div>
        <div className="tw-absolute tw-top-0 tw-right-0 tw-w-[32rem] tw-h-[32rem] tw-rounded-full tw-blur-3xl tw-bg-gradient-to-br tw-from-yellow-400 tw-via-orange-400 tw-to-pink-500 tw-opacity-60 tw-animate-pulse"></div>
        <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-[32rem] tw-h-[32rem] tw-rounded-full tw-blur-3xl tw-bg-gradient-to-br tw-from-purple-500 tw-via-blue-500 tw-to-cyan-400 tw-opacity-60 tw-animate-pulse"></div>
        <div className="tw-absolute tw-top-1/2 tw-left-1/2 tw-transform -tw-translate-x-1/2 -tw-translate-y-1/2 tw-w-[28rem] tw-h-[28rem] tw-rounded-full tw-blur-3xl tw-bg-gradient-to-br tw-from-pink-400 tw-via-red-400 tw-to-yellow-300 tw-opacity-40 tw-animate-pulse"></div>
      </div>

      {/* Content Container */}
      <div
        className="tw-fixed tw-inset-0 tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-4 md:tw-p-8 lg:tw-p-12 tw-h-screen tw-min-h-screen tw-overflow-y-auto"
        style={{
          position: 'fixed',
          minHeight: '100vh',
          height: '100vh',
          width: '100vw',
          zIndex: 10,
          pointerEvents: 'auto',
          overflowY: 'auto',
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="tw-absolute tw-top-6 tw-right-6 tw-z-30 tw-p-3 tw-rounded-full tw-bg-gradient-to-br tw-from-white/30 tw-to-white/10 tw-backdrop-blur-xl hover:tw-bg-white/40 tw-transition-all tw-duration-300 tw-border tw-border-white/30 tw-shadow-lg"
          aria-label="Close"
          style={{ zIndex: 30 }}
        >
          <X className="tw-w-6 tw-h-6 tw-text-white tw-drop-shadow" />
        </button>

        {/* Main Content */}
        <div className="tw-max-w-5xl tw-w-full tw-space-y-6 md:tw-space-y-6 tw-pt-36">
          {/* Header Section */}
          <div className="tw-text-center tw-space-y-8">
            <h1 className="tw-text-5xl md:tw-text-6xl lg:tw-text-7xl tw-font-extrabold tw-text-white tw-mb-4 tw-leading-tight tw-drop-shadow-xl">
              <span
                className="tw-bg-clip-text tw-text-transparent"
                style={{
                  background: 'linear-gradient(to right, rgb(253, 224, 71), rgb(255, 255, 255), rgb(147, 197, 253))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                }}
              >
                {content?.title || 'VentureOS Beta Now Live'}
              </span>
            </h1>

            <div className="tw-inline-flex tw-items-center tw-space-x-2 tw-bg-gradient-to-r tw-from-yellow-400 tw-via-orange-400 tw-to-pink-500 tw-rounded-full tw-px-10 tw-py-4 tw-shadow-2xl tw-mb-6 tw-border-2 tw-border-yellow-300 tw-animate-pulse">
              <Sparkles className="tw-w-7 tw-h-7 tw-text-white tw-animate-pulse" />
              <span className="tw-text-white tw-font-bold tw-text-lg tw-uppercase tw-tracking-wider tw-drop-shadow">
                {content?.subtitle || 'We Are Now in Full Beta Launch'}
              </span>
            </div>

            <p className="tw-text-lg md:tw-text-xl lg:tw-text-2xl tw-text-white/90 tw-font-semibold tw-max-w-3xl tw-mx-auto tw-drop-shadow">
              {content?.description || 'Join the beta and experience the future of business building with AI-powered tools. Full platform access is now available!'}
            </p>
          </div>

          {/* Benefits Grid - More premium look */}
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 md:tw-gap-8">
            {defaultBenefits.map((benefit, index) => (
              <div
                key={index}
                className={`tw-relative tw-backdrop-blur-lg tw-rounded-2xl tw-border tw-border-solid tw-px-4 tw-py-5 tw-flex tw-items-center tw-space-x-4 hover:tw-scale-105 tw-transition-all tw-duration-300 tw-bg-gradient-to-br ${benefit.bg ? benefit.bg.replace(/(from-|to-|via-|bg-)/g, 'tw-$&') : 'tw-from-blue-500/20 tw-to-cyan-500/20'}`}
                style={{ minHeight: '90px', borderColor: 'rgba(179, 177, 177, 0.4)', borderWidth: 1 }}
              >
                <div className={`tw-flex-shrink-0 tw-flex tw-items-center tw-justify-center tw-w-10 tw-h-10 tw-bg-white/30 tw-rounded-xl tw-shadow`}
                  >
                  {React.cloneElement(benefit.icon, { className: 'tw-w-6 tw-h-6 tw-text-white' })}
                </div>
                <span className="tw-text-white tw-text-base md:tw-text-lg tw-font-semibold tw-leading-relaxed">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons - More prominent */}
          <div className="tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-justify-center tw-gap-8 tw-mt-6">
            <a
            href="https://www.ventureos.com/first100founders"
            target="_blank"
            rel="noopener noreferrer"
            className="tw-group tw-px-12 tw-py-6 tw-bg-gradient-to-r tw-from-purple-600 tw-via-blue-600 tw-to-indigo-600 tw-text-white tw-font-bold tw-text-xl md:tw-text-2xl tw-rounded-2xl hover:tw-from-purple-700 hover:tw-via-blue-700 hover:tw-to-indigo-700 tw-transition-all tw-duration-300 tw-shadow-2xl hover:tw-shadow-purple-500/50 tw-transform hover:tw-scale-110 tw-flex tw-items-center tw-space-x-3 tw-w-full sm:tw-w-auto tw-justify-center"
            style={{
            background: 'linear-gradient(to right, #9333ea, #2563eb, #4f46e5)',
            border: 'none',
            textDecoration: 'none',
            }}
            >
            <span>{content?.ctaText || 'Access Beta Now'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tw-w-6 tw-h-6 tw-group-hover:tw-translate-x-2 tw-transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
            <button
              onClick={handleClose}
              className="tw-px-12 tw-py-7 tw-bg-white/20 tw-backdrop-blur-xl tw-text-white tw-font-semibold tw-text-xl tw-rounded-3xl hover:tw-bg-white/30 tw-border-2 tw-border-white/40 tw-transition-all tw-w-full sm:tw-w-auto tw-shadow-md"
            >
              {content?.dismissText || 'Maybe Later'}
            </button>
          </div>

          {/* Footer Note */}
          <p className="tw-text-center tw-text-white/70 tw-text-xl md:tw-text-2xl tw-mt-10 tw-drop-shadow">
            {content?.footerText || 'Limited beta access • Join now to secure your spot!'}
          </p>
        </div>
      </div>
    </div>
  );
};

// Export default for easier imports
export default First100FoundersModal;