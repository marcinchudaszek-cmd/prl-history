interface FooterProps {
  onNavigate: (view: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#1a0a00] text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-red-700 rounded-sm flex items-center justify-center font-bold text-white font-serif text-sm">
                PRL
              </div>
              <div>
                <div className="font-bold text-white font-serif">Encyklopedia PRL</div>
                <div className="text-xs text-red-400">Polska Rzeczpospolita Ludowa 1944–1989</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Cyfrowe archiwum wiedzy o dziejach PRL. Hasła encyklopedyczne, 
              dokumenty archiwalne, nagrania i fotografie historyczne.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Nawigacja</h4>
            <ul className="space-y-2 text-sm">
              {[
                { id: 'home', label: 'Strona główna' },
                { id: 'encyclopedia', label: 'Encyklopedia' },
                { id: 'timeline', label: 'Oś czasu' },
                { id: 'archives', label: 'Archiwum' },
                { id: 'about', label: 'O projekcie' },
              ].map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* External links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Archiwa zewnętrzne</h4>
            <ul className="space-y-2 text-sm">
              {[
                { url: 'https://ipn.gov.pl', label: 'IPN' },
                { url: 'https://ninateka.pl', label: 'NINATEKA' },
                { url: 'https://ecs.gda.pl', label: 'Centr. Solidarności' },
                { url: 'https://polona.pl', label: 'Polona' },
                { url: 'https://szukajwarchiwach.gov.pl', label: 'Szukaj w Archiwach' },
              ].map(link => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-1"
                  >
                    ↗ {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2025 Encyklopedia PRL – Projekt edukacyjno-historyczny</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>Pamiętamy. Dokumentujemy. Edukujemy.</span>
            </div>
            <a
              href="https://github.com/marcinchudaszek-cmd/prl-history"
              target="_blank"
              rel="noopener noreferrer"
              title="Repozytorium GitHub"
              className="flex items-center gap-1.5 text-gray-500 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
