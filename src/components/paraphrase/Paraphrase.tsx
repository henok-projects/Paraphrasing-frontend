import React, { useState, useRef } from 'react';
import axios from 'axios';
import './Paraphrase.css';

function Paraphrase() {
  const [text, setText] = useState('');
  const [paraphrasedText, setParaphrasedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selection, setSelection] = useState<{ text: string; start: number; end: number } | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextSelection = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start !== end) {
      const selectedText = text.substring(start, end);
      setSelection({ text: selectedText, start, end });
    } else {
      setSelection(null);
    }
  };

  const paraphraseText = async () => {
    if (!selection) return;

    setIsLoading(true);
    try {
      const response = await axios.post(
        'https://paraphrasing-backend.onrender.com/paraphrase',
        { prompt: selection.text },
        { headers: { 'Content-Type': 'application/json' } }
      );

      // Only update the paraphrasedText state, not the original text
      setParaphrasedText(response.data.content);
      setSelection(null);
    } catch (error) {
      console.error(error);
      setParaphrasedText('Failed to paraphrase text');
    }
    setIsLoading(false);
  };

  return (
    <div className="App">
      <h1>AI Text Paraphraser</h1>
      <div className="editor-container">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={e => setText(e.target.value)}
          onMouseUp={handleTextSelection}
          onKeyUp={handleTextSelection}
          placeholder="Enter or paste your text here"
          rows={10}
        />
        {selection && (
          <div className="paraphrase-controls">
            <button onClick={paraphraseText} disabled={isLoading}>
              {isLoading ? 'Paraphrasing...' : 'Paraphrase Selected Text'}
            </button>
          </div>
        )}
      </div>
      {paraphrasedText && (
        <div className="result-container">
          <h2>Paraphrased Result:</h2>
          <div className="paraphrased-text">
            {paraphrasedText.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Paraphrase;
