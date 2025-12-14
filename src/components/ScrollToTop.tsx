"use client";

interface ScrollToTopProps {
  showScrollTop: boolean;
}

const ScrollToTop = ({ showScrollTop }: ScrollToTopProps) => {
  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] p-4 rounded-full bg-white shadow-2xl border border-gray-100 text-teal-primary hover:text-white hover:bg-teal-primary hover:-translate-y-1 transition-all duration-300 ${
        showScrollTop ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-0 pointer-events-none'
      }`}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
