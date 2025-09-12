
import React from 'react';

interface StyleSelectorProps {
  styles: string[];
  selectedStyles: string[];
  onStyleToggle: (style: string) => void;
}

const StyleSelector: React.FC<StyleSelectorProps> = ({ styles, selectedStyles, onStyleToggle }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {styles.map(style => {
        const isSelected = selectedStyles.includes(style);
        return (
          <button
            key={style}
            onClick={() => onStyleToggle(style)}
            className={`px-4 py-3 rounded-lg text-sm font-semibold text-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500
              ${isSelected
                ? 'bg-cyan-500 text-white shadow-lg transform scale-105'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
              }`}
          >
            {style}
          </button>
        );
      })}
    </div>
  );
};

export default StyleSelector;
