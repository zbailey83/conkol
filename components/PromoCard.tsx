import React from 'react';

interface PromoCardProps {
    tag: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    buttonContent: React.ReactNode;
    onButtonClick: () => void;
}

const PromoCard: React.FC<PromoCardProps> = ({ tag, icon, title, description, buttonContent, onButtonClick }) => {
    return (
        <div className="relative p-6 sm:p-8 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/80 via-[#161B22] to-[#161B22] border border-blue-500/30 shadow-2xl shadow-blue-500/10">
             <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/10 blur-3xl rounded-full" />
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
                <div className="flex-shrink-0 bg-white/5 p-3 rounded-xl border border-white/10 hidden sm:block">
                    {icon}
                </div>
                <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="bg-blue-600/80 text-blue-50 font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                            {tag}
                        </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {title}
                    </h3>
                    <p className="mt-2 text-gray-400 max-w-xl">
                        {description}
                    </p>
                </div>
                <div className="w-full lg:w-auto flex-shrink-0 mt-4 lg:mt-0">
                    <button 
                        onClick={onButtonClick} 
                        className="group w-full lg:w-auto flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-white text-gray-900 font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 focus:outline-none focus:ring-4 focus:ring-white/50"
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