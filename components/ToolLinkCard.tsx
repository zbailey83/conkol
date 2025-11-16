import React from 'react';

interface ToolLinkCardProps {
  icons: React.ReactNode[];
  title: string;
  colorClasses: string;
  onClick: () => void;
}

const ArrowIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const ToolLinkCard: React.FC<ToolLinkCardProps> = ({ icons, title, colorClasses, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`group flex items-center justify-between w-full p-2 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-opacity-50 ${colorClasses}`}
        >
            <div className="flex items-center">
                <div className="flex items-center -space-x-3 pl-1">
                    {icons.map((icon, index) => (
                        <div
                            key={index}
                            className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center ring-1 ring-white/10 backdrop-blur-sm shadow-md text-white"
                        >
                            {icon}
                        </div>
                    ))}
                </div>
                <span className="ml-4 text-lg font-bold text-white tracking-wide">
                    {title}
                </span>
            </div>
            <div className="mr-1 p-2 bg-black/20 rounded-xl group-hover:bg-black/30 transition-colors text-white">
                <ArrowIcon />
            </div>
        </button>
    );
};

export default ToolLinkCard;