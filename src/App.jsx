import { useState } from 'react';
import './App.css';
import StoryForm from './components/StoryForm';
import { generateStory } from './services/openai';

function App() {
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateStory = async (formData) => {
    setLoading(true);
    setError('');
    try {
      const generatedStory = await generateStory(formData);
      setStory(generatedStory);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="child-theme" style={{ minHeight: '100vh', background: 'rgba(255, 255, 255, 0.9)' }}>
      <div className="story-container" style={{ backgroundImage: 'url("/images/forest-bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <img src="/images/unicorn.png" alt="Unicornio mágico" className="floating-animal left w-32 h-32 object-contain" />
        <img src="/images/dragon.png" alt="Dragón amigable" className="floating-animal right w-32 h-32 object-contain" />
        <div className="form-container">
          <StoryForm onGenerateStory={handleGenerateStory} />
        </div>
        
        {loading && (
          <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
            <div className="loading-animation">
              <div className="loading-dot"></div>
              <div className="loading-dot"></div>
              <div className="loading-dot"></div>
            </div>
            <p className="text-primary-800 text-center mt-4 font-bold">Generando tu cuento mágico...</p>
          </div>
        )}

        {error && (
          <div className="max-w-2xl mx-auto mt-8 p-6 bg-red-100 rounded-lg shadow-xl">
            <p className="text-red-800 text-center font-bold">{error}</p>
          </div>
        )}

        {story && !loading && (
          <div className="story-result">
            <h3 className="text-3xl font-bold text-primary-800 mb-4">Tu Cuento Mágico</h3>
            <div className="prose prose-lg">
              {story.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-900 font-medium">{paragraph}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
