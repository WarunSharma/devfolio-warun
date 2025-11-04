'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 text-white bg-slate-900 border-t border-slate-700/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Developed by{' '}
            <span className="text-blue-400 font-semibold">Warun Sharma</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

