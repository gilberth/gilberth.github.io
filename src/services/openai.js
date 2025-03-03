import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const generateStory = async ({ childName, animalType, theme }) => {
  try {
    const prompt = `Genera un cuento infantil en español de al menos 1000 palabras sobre ${childName} y ${animalType}. 
    El cuento debe tener un mensaje sobre ${theme}. 
    El cuento debe ser mágico, divertido y apropiado para niños, con un inicio, desarrollo y final feliz. 
    Usa un lenguaje sencillo y descriptivo, con diálogos entretenidos.`;

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'Eres un experto narrador de cuentos infantiles en español, especializado en crear historias mágicas y educativas con animales.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      model: 'gpt-3.5-turbo',
      temperature: 0.8,
      max_tokens: 2000
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error al generar el cuento:', error);
    throw new Error('No se pudo generar el cuento. Por favor, intenta de nuevo.');
  }
};