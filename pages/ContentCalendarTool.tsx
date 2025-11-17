import React from 'react';

interface ContentCalendarToolProps {
  onBackToDashboard: () => void;
}

const ContentCalendarTool: React.FC<ContentCalendarToolProps> = ({ onBackToDashboard }) => {
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Content Calendar</h1>
        <button
          onClick={onBackToDashboard}
          className="px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700"
        >
          Back to Dashboard
        </button>
      </header>
      <div className="p-8 text-center border-2 border-dashed rounded-lg">
        <p className="text-lg text-gray-500">
          Content Calendar Tool is coming soon!
        </p>
      </div>
    </div>
  );
};

export default ContentCalendarTool;
