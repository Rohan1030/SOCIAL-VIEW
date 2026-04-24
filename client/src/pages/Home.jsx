import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputForm from '../components/InputForm';

export default function Home() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleAnalyzeStart = () => {
    setError(null);
  };

  const handleAnalyzeSuccess = (data) => {
    navigate('/report', { state: { result: data } });
  };

  const handleAnalyzeError = (errMsg) => {
    setError(errMsg);
  };

  return (
    <div className="mb-12 text-center max-w-2xl mx-auto animate-fade-in-up">
      <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight drop-shadow-sm">Optimize Your Digital Reach</h2>
      <p className="text-slate-400 text-lg font-medium">Harness the power of Gemini AI to analyze sentiment, engage your audience, and tailor your content algorithmically.</p>
      
      <div className="mt-12 text-left" style={{ animationDelay: '100ms' }}>
        <InputForm 
          onAnalyzeStart={handleAnalyzeStart}
          onAnalyzeSuccess={handleAnalyzeSuccess}
          onAnalyzeError={handleAnalyzeError}
        />
      </div>

      {error && (
        <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 px-5 py-4 rounded-xl mt-10 shadow-lg backdrop-blur-md flex items-center animate-fade-in-up text-left">
          <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span className="block sm:inline font-medium">{error}</span>
        </div>
      )}
    </div>
  );
}
