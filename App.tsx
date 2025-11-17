import React, { useState, useCallback } from 'react';
import AdGeneratorTool from './pages/AdGeneratorTool';
import SocialPostWriterTool from './pages/SocialPostWriterTool';
import ContentCalendarTool from './pages/ContentCalendarTool';
import Dashboard from './pages/Dashboard';
import ThemeToggle from './components/ThemeToggle';
import type { Tool } from './types';

const App: React.FC = () => {
  const [activeTool, setActiveTool] = useState<Tool>('dashboard');
  const [initialSocialPostType, setInitialSocialPostType] = useState<string | null>(null);

  const handleNavClick = useCallback((tool: Tool, options?: { postType: string }) => {
    setActiveTool(tool);
    // When navigating from sidebar, options is undefined, so this clears the initial type.
    setInitialSocialPostType(options?.postType || null);
  }, []);

  const renderTool = () => {
    const backToDashboard = () => handleNavClick('dashboard');

    switch (activeTool) {
      case 'dashboard':
        return <Dashboard onNavClick={handleNavClick} />;
      case 'ad-generator':
        return <AdGeneratorTool onBackToDashboard={backToDashboard} />;
      case 'social-posts':
        return <SocialPostWriterTool onBackToDashboard={backToDashboard} initialPostType={initialSocialPostType} />;
      case 'content-calendar':
        return <ContentCalendarTool onBackToDashboard={backToDashboard} />;
      default:
        return <Dashboard onNavClick={handleNavClick} />;
    }
  }

  return (
    <div className="min-h-screen">
      <main className="p-4 sm:p-6 lg:p-8">
        {renderTool()}
      </main>
      <ThemeToggle />
    </div>
  );
};

export default App;
