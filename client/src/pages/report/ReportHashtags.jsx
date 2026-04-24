import { useOutletContext } from 'react-router-dom';
import ResultCard from '../../components/ResultCard';

export default function ReportHashtags() {
  const { result } = useOutletContext();

  return (
    <div className="space-y-8 flex flex-col">
      <ResultCard title="Hashtag Distribution" icon="🏷️" delay="500">
        <div className="mb-8">
          <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-4">Recommended Vectors</h4>
          <div className="flex flex-wrap gap-2.5">
            {result.hashtags.recommended.map((tag, i) => (
              <span 
                key={i} 
                title="Click to copy to clipboard"
                className="cursor-pointer bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 px-3.5 py-1.5 rounded-lg text-sm font-bold hover:bg-indigo-500/20 hover:border-indigo-400/50 transition-all shadow-[0_0_10px_rgba(99,102,241,0.1)] hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] active:scale-95"
                onClick={() => navigator.clipboard.writeText(tag)}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-4">Negative Vectors (Avoid)</h4>
          <div className="flex flex-wrap gap-2.5">
            {result.hashtags.avoid?.length > 0 ? result.hashtags.avoid.map((tag, i) => (
              <span key={i} className="bg-rose-500/10 text-rose-300 border border-rose-500/30 px-3.5 py-1.5 rounded-lg text-sm font-bold line-through opacity-80">
                {tag}
              </span>
            )) : (
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-3 rounded-xl text-sm font-semibold flex items-center w-full shadow-inner">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                No negative impact tags detected.
              </div>
            )}
          </div>
        </div>
        
        {result.hashtags.extracted_topics?.length > 0 && (
            <div className="mt-8 pt-6 border-t border-white/5">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Identified Semantic Topics</h4>
              <div className="flex flex-wrap gap-2">
                {result.hashtags.extracted_topics.map((topic, i) => (
                    <span key={i} className="text-xs font-bold tracking-wide text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-md border border-white/10 shadow-sm">{topic}</span>
                ))}
              </div>
            </div>
        )}
      </ResultCard>
    </div>
  );
}
