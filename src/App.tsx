import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import EncyclopediaPage from './components/EncyclopediaPage';
import EntryPage from './components/EntryPage';
import TimelinePage from './components/TimelinePage';
import ArchivesPage from './components/ArchivesPage';
import AboutPage from './components/AboutPage';
import MapPage from './components/MapPage';
import SlangPage from './components/SlangPage';
import BiosPage from './components/BiosPage';
import type { Category } from './data/entries';

type View = 'home' | 'encyclopedia' | 'entry' | 'timeline' | 'archives' | 'about' | 'map' | 'slang' | 'bios';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [entryId, setEntryId] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<Category | 'all'>('all');

  const handleNavigate = (newView: string, id?: string) => {
    setView(newView as View);
    if (id) setEntryId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCategoryFilter('all');
    setView('encyclopedia');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateWithCategory = (cat: Category | 'all') => {
    setCategoryFilter(cat);
    setSearchQuery('');
    setView('encyclopedia');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    switch (view) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onNavigateWithCategory={handleNavigateWithCategory} />;
      case 'encyclopedia':
        return (
          <EncyclopediaPage
            onNavigate={handleNavigate}
            searchQuery={searchQuery}
            initialCategory={categoryFilter}
            key={`${searchQuery}:${categoryFilter}`}
          />
        );
      case 'entry':
        return <EntryPage entryId={entryId} onNavigate={handleNavigate} />;
      case 'timeline':
        return <TimelinePage onNavigate={handleNavigate} />;
      case 'archives':
        return <ArchivesPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'map':
        return <MapPage onNavigate={handleNavigate} />;
      case 'slang':
        return <SlangPage onNavigate={handleNavigate} />;
      case 'bios':
        return <BiosPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} onNavigateWithCategory={handleNavigateWithCategory} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header
        onSearch={handleSearch}
        onNavigate={handleNavigate}
        activeView={view}
      />
      <main className="flex-1">
        {renderView()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
