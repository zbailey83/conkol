
import React from 'react';
import Spinner from './Spinner';

interface GeneratedImageProps {
  isLoading: boolean;
  imageUrl: string | null;
  text: string | null;
  error: string | null;
}

const Placeholder: React.FC = () => (
    <div className="text-center text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="mt-4">Your generated ad image will appear here.</p>
    </div>
);

const GeneratedImage: React.FC<GeneratedImageProps> = ({ isLoading, imageUrl, text, error }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900/50 rounded-lg p-4">
      {isLoading && (
        <div className="text-center">
          <Spinner />
          <p className="mt-4 text-cyan-400">Generating your creative vision...</p>
          <p className="text-sm text-gray-400">This may take a moment.</p>
        </div>
      )}
      {error && !isLoading && (
        <div className="text-center text-red-400 bg-red-900/50 p-4 rounded-lg">
          <h3 className="font-bold">Generation Failed</h3>
          <p className="mt-2 text-sm">{error}</p>
        </div>
      )}
      {!isLoading && !error && imageUrl && (
        <div className="w-full">
            <img src={imageUrl} alt="Generated ad" className="max-h-[500px] w-full object-contain rounded-lg shadow-2xl" />
            {text && <p className="mt-4 text-sm text-gray-400 italic p-2 bg-gray-700 rounded-md">{text}</p>}
        </div>
      )}
       {!isLoading && !error && !imageUrl && <Placeholder />}
    </div>
  );
};

export default GeneratedImage;
