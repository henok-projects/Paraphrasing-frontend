import React, { useState } from 'react';
import axios from 'axios';
import './Poem.css';

function PoemGenerator() {
  const [prompt, setPrompt] = useState('');
  const [poem, setPoem] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generatePoem = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        'https://paraphrasing-backend.onrender.com/generate-poem',
        {
          prompt,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setPoem(response.data.content);
    } catch (error) {
      console.error(error);
      setPoem('Failed to generate poem');
    }
    setIsLoading(false);
  };

  return (
    <div className="App">
      <h1>AI Poem Generator</h1>
      <div>
        <input type="text" value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Enter a topic" />
        <button onClick={generatePoem} disabled={isLoading}>
          {isLoading ? 'Generating...' : 'Generate Poem'}
        </button>
      </div>
      {poem && (
        <div className="poem-container">
          <h2>Poem about {prompt}:</h2>
          <pre>{poem}</pre>
        </div>
      )}
    </div>
  );
}

export default PoemGenerator;
