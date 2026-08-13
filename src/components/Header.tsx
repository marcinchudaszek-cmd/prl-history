import React, { useState } from 'react';

interface HeaderProps {
  onSearch: (query: string) => void;
  onNavigate: (view: string) => void;
  activeView: string;
}

export default function Header({ onSearch, onNavigate, activeView }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const navItems = [
    { id: 'home', label: 'Strona główna' },
    { id: 'encyclopedia', label: 'Encyklopedia' },
    { id: 'bios', label: 'Biogramy' },
    { id: 'timeline', label: 'Oś czasu' },
    { id: 'map', label: 'Mapa' },
    { id: 'slang', label: 'Słownik' },
    { id: 'press', label: 'Prasa' },
    { id: 'archives', label: 'Archiwum' },
    { id: 'quiz', label: 'Quiz' },
    { id: 'about', label: 'O projekcie' },
  ];

  return (
    <header className="bg-[#1a0a00] text-white shadow-2xl relative z-50">
      {/* Top stripe */}
      <div className="bg-red-700 h-1" />
      
      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer flex-shrink-0" 
            onClick={() => onNavigate('home')}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-red-700 rounded-sm flex items-center justify-center font-bold text-xl border-2 border-red-500 shadow-lg">
                <span className="text-white font-serif">PRL</span>
              </div>
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight font-serif tracking-wide">
                Encyklopedia PRL
              </h1>
              <p className="text-xs text-red-300 tracking-widest uppercase">
                Dzieje Polski Ludowej 1944–1989
              </p>
            </div>
          </div>

          {/* Search */}
          <form onSubmit={handleSearch} className="flex-1 max-w-xl hidden md:flex">
            <div className="flex w-full">
              <input
                type="text"
                placeholder="Szukaj haseł, wydarzeń, osób..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-red-700 hover:bg-red-600 rounded-r-md transition-colors flex items-center gap-1 text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Szukaj
              </button>
            </div>
          </form>

          {/* Losowe hasło */}
          <button
            onClick={() => onNavigate('random')}
            title="Otwórz losowe hasło"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-md border border-white/20 hover:bg-white/10 text-gray-200 hover:text-white text-sm transition-colors flex-shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h5l11 11v5M20 4h-5L4 15v5M15 4h5v5M15 20h5v-5" />
            </svg>
            Losowe
          </button>

          {/* GitHub link */}
          <a
            href="https://github.com/marcinchudaszek-cmd/prl-history"
            target="_blank"
            rel="noopener noreferrer"
            title="Kod źródłowy na GitHub"
            className="p-2 rounded-md hover:bg-white/10 text-gray-300 hover:text-white transition-colors flex-shrink-0"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-white/10"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile search */}
        <form onSubmit={handleSearch} className="flex mt-3 md:hidden">
          <input
            type="text"
            placeholder="Szukaj haseł..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-md text-white placeholder-white/50 focus:outline-none text-sm"
          />
          <button type="submit" className="px-3 py-2 bg-red-700 rounded-r-md">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>
      </div>

      {/* Navigation */}
      <nav className="border-t border-white/10 bg-[#2a1200]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop nav */}
          <ul className="hidden md:flex">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`px-5 py-3 text-sm font-medium transition-all border-b-2 ${
                    activeView === item.id
                      ? 'text-red-400 border-red-500 bg-white/5'
                      : 'text-gray-300 border-transparent hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile nav */}
          {menuOpen && (
            <ul className="md:hidden py-2">
              {navItems.map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => { onNavigate(item.id); setMenuOpen(false); }}
                    className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                      activeView === item.id
                        ? 'text-red-400 bg-white/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              {/* na wąskich ekranach przycisk „Losowe” z paska jest ukryty */}
              <li>
                <button
                  onClick={() => { onNavigate('random'); setMenuOpen(false); }}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  Losowe hasło
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
