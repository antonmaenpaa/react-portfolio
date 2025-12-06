const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white/40 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-dawning text-2xl text-white/60">Anton.</div>
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-sm font-light tracking-wide">
           <p>© {new Date().getFullYear()} Anton Mäenpää</p>
           <p>Barcelona, Spain</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
