import { useOutletContext } from 'react-router-dom';
import ResultCard from '../../components/ResultCard';

export default function ReportOverview() {
  const { result } = useOutletContext();

  const getSentimentStyles = (label) => {
    const l = label?.toLowerCase() || '';
    if (l.includes('positive')) return { bar: 'bg-emerald-500', text: 'text-emerald-400', shadow: 'shadow-emerald-500/40' };
    if (l.includes('negative')) return { bar: 'bg-rose-500', text: 'text-rose-400', shadow: 'shadow-rose-500/40' };
    if (l.includes('sarcastic')) return { bar: 'bg-amber-500', text: 'text-amber-400', shadow: 'shadow-amber-500/40' };
    return { bar: 'bg-blue-500', text: 'text-blue-400', shadow: 'shadow-blue-500/40' };
  };

  return (
    <div className="space-y-8 flex flex-col">
      <ResultCard title="Sentiment Classification" icon="🎭" delay="200">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Primary Vector</span>
            <span className={`text-4xl md:text-5xl font-extrabold ${getSentimentStyles(result.sentiment.label).text} drop-shadow-lg tracking-tight`}>
              {result.sentiment.label}
            </span>
          </div>
          <div className="text-left sm:text-right mt-4 sm:mt-0">
            <span className="text-4xl font-black text-white">{result.sentiment.score}</span>
            <span className="text-slate-500 font-bold ml-1">/100</span>
          </div>
        </div>
        
        <div className="w-full bg-slate-900/80 rounded-full h-4 mb-6 shadow-inner overflow-hidden border border-white/5 relative">
          <div 
            className={`h-full rounded-full ${getSentimentStyles(result.sentiment.label).bar} shadow-[0_0_15px_currentColor] transition-all duration-1500 ease-out`} 
            style={{ width: `${result.sentiment.score}%` }}
          ></div>
        </div>
        <div className="bg-gradient-to-r from-slate-800/40 to-slate-900/40 rounded-xl p-5 border border-white/5 shadow-inner">
          <p className="text-slate-300 font-medium italic text-sm md:text-base leading-relaxed">"{result.sentiment.explanation}"</p>
        </div>
      </ResultCard>

      <ResultCard title="Engagement Prognosis" icon="🚀" delay="300">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-white/5">
          <div className="mb-6 md:mb-0">
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Viral Probability</span>
            <span className="text-5xl font-black text-white tracking-tight">{result.engagement.score}</span>
            <span className="text-slate-500 text-xl font-bold ml-1">/100</span>
          </div>
          <div className="flex space-x-4">
            <div className="bg-slate-900/60 p-4 rounded-xl text-center border border-white/10 shadow-lg min-w-[110px]">
              <span className="block text-xs text-slate-400 uppercase font-bold tracking-widest mb-2">Hook</span>
              <span className="text-lg font-black text-indigo-400 uppercase tracking-wide">{result.engagement.hook_strength}</span>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl text-center border border-white/10 shadow-lg min-w-[110px]">
              <span className="block text-xs text-slate-400 uppercase font-bold tracking-widest mb-2">CTA Action</span>
              <span className={`text-lg font-black uppercase tracking-wide ${result.engagement.has_cta ? 'text-emerald-400' : 'text-rose-400'}`}>
                {result.engagement.has_cta ? 'Yes ✅' : 'No ❌'}
              </span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-4">Algorithmic Optimization Tips</h4>
          <ul className="space-y-3">
            {result.engagement.tips.map((tip, i) => (
              <li key={i} className="flex items-start bg-slate-800/30 p-4 rounded-xl border border-white/5 hover:bg-slate-800/50 transition-colors group">
                <svg className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <span className="text-sm text-slate-300 font-medium leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </ResultCard>
    </div>
  );
}
