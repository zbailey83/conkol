
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import ImageUploader from './components/ImageUploader';
import StyleSelector from './components/StyleSelector';
import Button from './components/Button';
import GeneratedImage from './components/GeneratedImage';
import { generateStyledImage } from './services/geminiService';
import { STYLE_OPTIONS } from './constants';
import type { UploadedFile } from './types';

const App: React.FC = () => {
  const [primaryImage, setPrimaryImage] = useState<UploadedFile | null>(null);
  const [secondaryImage, setSecondaryImage] = useState<UploadedFile | null>(null);
  const [description, setDescription] = useState<string>('');
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [generatedText, setGeneratedText] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = (file: UploadedFile, type: 'primary' | 'secondary') => {
    if (type === 'primary') {
      setPrimaryImage(file);
    } else {
      setSecondaryImage(file);
    }
    setGeneratedImage(null);
    setGeneratedText(null);
    setError(null);
  };
  
  const handleClearImage = (type: 'primary' | 'secondary') => {
    if (type === 'primary') {
      setPrimaryImage(null);
    } else {
      setSecondaryImage(null);
    }
  };

  const handleStyleToggle = (style: string) => {
    setSelectedStyles(prev => {
      if (prev.includes(style)) {
        return prev.filter(s => s !== style);
      }
      if (prev.length < 3) {
        return [...prev, style];
      }
      return prev;
    });
  };

  const handleGenerate = useCallback(async () => {
    if (!primaryImage || description.trim().length === 0 || selectedStyles.length === 0) {
      setError("Please upload a primary image, provide a description, and select at least one style.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);
    setGeneratedText(null);

    try {
      const result = await generateStyledImage(primaryImage, secondaryImage, description, selectedStyles);
      setGeneratedImage(result.imageUrl);
      setGeneratedText(result.text);
    } catch (e) {
      console.error(e);
      setError(e instanceof Error ? e.message : "An unknown error occurred. Please check the console.");
    } finally {
      setIsLoading(false);
    }
  }, [primaryImage, secondaryImage, description, selectedStyles]);

  const canGenerate = primaryImage !== null && description.trim() !== '' && selectedStyles.length > 0 && !isLoading;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl">
        <Header />
        <main className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-6 p-6 bg-gray-800 rounded-2xl shadow-lg">
            <div>
              <h2 className="text-xl font-semibold text-cyan-400 mb-3">1. Upload Photos</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ImageUploader
                  value={primaryImage}
                  onImageUpload={(file) => handleImageUpload(file, 'primary')}
                  onClear={() => handleClearImage('primary')}
                  label="Primary Product Photo*"
                />
                <ImageUploader
                  value={secondaryImage}
                  onImageUpload={(file) => handleImageUpload(file, 'secondary')}
                  onClear={() => handleClearImage('secondary')}
                  label="Context Image (Optional)"
                />
              </div>
            </div>
             <div>
              <h2 className="text-xl font-semibold text-cyan-400 mb-3">2. Describe Your Ad*</h2>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g., A refreshing drink for a hot summer day, highlighting its natural ingredients."
                className="w-full h-24 p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                maxLength={200}
                aria-required="true"
              />
              <p className="text-right text-xs text-gray-400 mt-1">{description.length} / 200</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-cyan-400 mb-3">3. Choose Ad Styles (up to 3)</h2>
              <StyleSelector
                styles={STYLE_OPTIONS}
                selectedStyles={selectedStyles}
                onStyleToggle={handleStyleToggle}
              />
            </div>
            <div className="pt-4">
               <Button onClick={handleGenerate} disabled={!canGenerate}>
                {isLoading ? 'Generating...' : '✨ Generate Ad Image'}
              </Button>
            </div>
          </div>
          <div className="flex flex-col p-6 bg-gray-800 rounded-2xl shadow-lg min-h-[400px] lg:min-h-0">
             <h2 className="text-xl font-semibold text-cyan-400 mb-3">4. View Your AI-Generated Ad</h2>
            <GeneratedImage
              isLoading={isLoading}
              imageUrl={generatedImage}
              text={generatedText}
              error={error}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
