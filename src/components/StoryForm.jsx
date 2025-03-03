import { useState } from 'react';

const StoryForm = ({ onGenerateStory }) => {
  const [formData, setFormData] = useState({
    childName: '',
    age: '',
    animalType: '',
    theme: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerateStory(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-10 bg-white/50 backdrop-blur-sm rounded-3xl shadow-xl border-4 border-primary-400 transform hover:scale-[1.02] transition-all duration-300">
      <h2 className="text-4xl font-bold text-primary-600 mb-8 text-center animate-bounce">✨ Generador de Cuentos Mágicos ✨</h2>
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="space-y-4">
          <label htmlFor="childName" className="block text-xl font-bold text-primary-700 animate-pulse">
            🌟 ¿Cómo te llamas?
          </label>
          <input
            type="text"
            id="childName"
            name="childName"
            value={formData.childName}
            onChange={handleChange}
            required
            placeholder="Tu nombre mágico aquí..."
            className="mt-3 block w-full rounded-2xl border-3 border-rainbow px-6 py-5 text-xl shadow-lg bg-white/95 text-primary-800 focus:border-primary-500 focus:ring-4 focus:ring-primary-300 focus:ring-opacity-50 hover:border-primary-400 transition-all duration-300 placeholder-primary-400"
          />
        </div>

        <div className="space-y-4">
          <label htmlFor="age" className="block text-xl font-bold text-primary-700 animate-pulse">
            🎂 ¿Cuántos años tienes?
          </label>
          <input
            type="number"
            id="age"
            name="age"
            min="1"
            max="12"
            value={formData.age}
            onChange={handleChange}
            required
            placeholder="Tu edad"
            className="mt-3 block w-full rounded-2xl border-3 border-rainbow px-6 py-5 text-xl shadow-lg bg-white/95 text-primary-800 focus:border-primary-500 focus:ring-4 focus:ring-primary-300 focus:ring-opacity-50 hover:border-primary-400 transition-all duration-300 placeholder-primary-400"
          />
        </div>

        <div className="space-y-4">
          <label htmlFor="animalType" className="block text-xl font-bold text-primary-700 animate-pulse">
            🐾 ¿Cuál es tu animal favorito?
          </label>
          <input
            type="text"
            id="animalType"
            name="animalType"
            value={formData.animalType}
            onChange={handleChange}
            required
            placeholder="¿Un unicornio? ¿Un dragón? ¡Tú eliges!"
            className="mt-3 block w-full rounded-2xl border-3 border-rainbow px-6 py-5 text-xl shadow-lg bg-white/95 text-primary-800 focus:border-primary-500 focus:ring-4 focus:ring-primary-300 focus:ring-opacity-50 hover:border-primary-400 transition-all duration-300 placeholder-primary-400"
          />
        </div>

        <div className="space-y-4">
          <label htmlFor="theme" className="block text-xl font-bold text-primary-700 animate-pulse">
            🌈 ¿Sobre qué quieres que trate tu historia?
          </label>
          <select
            id="theme"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            required
            className="mt-2 block w-full rounded-2xl border-3 border-rainbow px-6 py-4 text-xl shadow-lg bg-white/95 text-primary-800 focus:border-primary-500 focus:ring-4 focus:ring-primary-300 focus:ring-opacity-50 hover:border-primary-400 transition-all duration-300"
          >
            <option value="">Elige una aventura mágica...</option>
            <option value="amistad">👥 Amistad y Compañerismo</option>
            <option value="valentia">🦁 Valentía y Coraje</option>
            <option value="honestidad">🌟 Honestidad y Verdad</option>
            <option value="familia">❤️ Amor Familiar</option>
            <option value="perseverancia">💪 Perseverancia y Esfuerzo</option>
            <option value="superacion">🌈 Superación Personal</option>
            <option value="medioambiente">🌍 Cuidado de la Naturaleza</option>
            <option value="trabajo_equipo">🤝 Trabajo en Equipo</option>
            <option value="creatividad">🎨 Imaginación y Creatividad</option>
            <option value="diversidad">🌎 Respeto a la Diversidad</option>
            <option value="aventuras">🗺️ Aventuras Mágicas</option>
            <option value="emociones">🎭 Manejo de Emociones</option>
            <option value="solidaridad">🤲 Ayuda a los Demás</option>
            <option value="autoestima">✨ Confianza en uno Mismo</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-5 px-8 mt-8 border-4 border-transparent rounded-2xl shadow-xl text-2xl font-bold text-white bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 hover:from-primary-600 hover:via-secondary-600 hover:to-primary-600 focus:outline-none focus:ring-4 focus:ring-primary-300 transform hover:scale-105 transition-all duration-300 ease-in-out animate-pulse"
        >
          🌟 ¡Crear Mi Historia Mágica! 🌟
        </button>
      </form>
    </div>
  );
};

export default StoryForm;