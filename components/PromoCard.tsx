import React from 'react';

interface PromoCardProps {
    tag: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    buttonContent: React.ReactNode;
    onButtonClick: () => void;
    platformIcons?: React.ReactNode[];
}

const PromoCard: React.FC<PromoCardProps> = ({ tag, icon, title, description, buttonContent, onButtonClick, platformIcons }) => {
    return (
        <div className="relative p-6 sm:p-8 rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-100/50 via-white to-white border border-cyan-200 dark:from-blue-900/80 dark:via-[#161B22] dark:to-[#161B22] dark:border-blue-500/30 shadow-2xl shadow-cyan-500/10 dark:shadow-blue-500/10">
             <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-cyan-500/10 dark:bg-blue-500/10 blur-3xl rounded-full" />
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
                <div className="flex-shrink-0 bg-cyan-500/10 dark:bg-white/5 p-3 rounded-xl border border-cyan-500/20 dark:border-white/10 hidden sm:block">
                    {icon}
                </div>
                <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="bg-cyan-500/30 text-cyan-800 dark:bg-blue-600/80 dark:text-blue-50 font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-cyan-700 dark:bg-white rounded-full animate-pulse"></span>
                            {tag}
                        </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                        {title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-xl">
                        {description}
                    </p>
                    {platformIcons && platformIcons.length > 0 && (
                        <div className="mt-6 flex items-center gap-3">
                            {platformIcons.map((icon, index) => (
                                <React.Fragment key={index}>{icon}</React.Fragment>
                            ))}
                        </div>
                    )}
                </div>
                <div className="w-full lg:w-auto flex-shrink-0 mt-6 lg:mt-0">
                    <button 
                        onClick={onButtonClick} 
                        className="group w-full lg:w-auto flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-white text-gray-900 font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/20 dark:hover:shadow-white/20 focus:outline-none focus:ring-4 focus:ring-white/50"
                    >
                        {buttonContent}
                        <span className="transform transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PromoCard;
