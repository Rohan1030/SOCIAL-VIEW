import { useState } from 'react';
import axios from 'axios';

export default function InputForm({ onAnalyzeStart, onAnalyzeSuccess, onAnalyzeError }) {
  const [content, setContent] = useState('');
  const [platform, setPlatform] = useState('Twitter');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsLoading(true);
    onAnalyzeStart();

    try {
      const response = await axios.post('/api/analyze', {
        content,
        platform
      });
      onAnalyzeSuccess(response.data);
    } catch (err) {
      onAnalyzeError(err.response?.data?.error || 'Analysis failed. Make sure the backend server is running.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 mb-10 border-t-2 border-t-indigo-500 shadow-[0_-5px_30px_rgba(99,102,241,0.1)]">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mr-4 border border-indigo-500/30">
          <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white tracking-wide">Input Parameters</h2>
          <p className="text-sm text-slate-400 mt-1">Configure your target platform and content payload for AI ingestion.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-1">
          <label className="block text-xs font-bold text-indigo-300 uppercase tracking-widest mb-3">Target Platform</label>
          <div className="relative">
            <select 
              value={platform} 
              onChange={(e) => setPlatform(e.target.value)}
              className="glass-input w-full rounded-xl p-3.5 appearance-none font-medium tracking-wide"
            >
              <option value="Twitter" className="bg-slate-800 text-white">Twitter / X</option>
              <option value="LinkedIn" className="bg-slate-800 text-white">LinkedIn</option>
              <option value="Instagram" className="bg-slate-800 text-white">Instagram</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-indigo-300 uppercase tracking-widest mb-3">Algorithm Input (Content Payload)</label>
          <textarea
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Paste your drafted social media post here..."
            className="glass-input w-full rounded-xl p-4 resize-y font-medium min-h-[120px]"
            required
          ></textarea>
        </div>
      </div>

      <div className="flex justify-end mt-6 pt-6 border-t border-white/5">
        <button
          type="submit"
          disabled={isLoading || !content.trim()}
          className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold rounded-xl text-sm px-8 py-3.5 transition-all shadow-lg hover:shadow-indigo-500/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-20 rotate-12 group-hover:-translate-x-40 ease"></span>
          {isLoading ? (
            <>
              <svg aria-hidden="true" className="w-5 h-5 text-indigo-200 animate-spin fill-white mr-3" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              Processing via Deep Learning Engine...
            </>
          ) : (
            <>Execute Analysis <svg className="w-5 h-5 ml-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></>
          )}
        </button>
      </div>
    </form>
  );
}
