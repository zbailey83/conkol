import React from 'react';
import { useTheme } from '../hooks/useTheme';

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-2.05-6.536a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1zm5.95.536a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0zm.707 8.536a1 1 0 01-1.414 0l-.707-.707a1 1 0 011.414-1.414l.707.707a1 1 0 010 1.414zM4.95 6.536a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-300" viewBox="0 0 20 20" fill="currentColor">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
);

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const isDarkMode = theme === 'dark';

    return (
        <button
            onClick={toggleTheme}
            className={`fixed bottom-4 right-4 z-50 w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-cyan-500 ${
                isDarkMode ? 'bg-gray-800' : 'bg-cyan-400'
            }`}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            role="switch"
            aria-checked={isDarkMode}
        >
            <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out flex items-center justify-center ${
                    isDarkMode ? 'translate-x-6' : 'translate-x-0'
                }`}
            >
                {isDarkMode ? <MoonIcon /> : <SunIcon />}
            </div>
        </button>
    );
};

export default ThemeToggle;
