export default function PlatformBadge({ platform, score, suggestion, improvedPost }) {
  const getScoreStyles = (s) => {
    if (s >= 80) return { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/50', bar: 'bg-gradient-to-b from-emerald-400 to-emerald-600' };
    if (s >= 60) return { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/50', bar: 'bg-gradient-to-b from-amber-400 to-amber-600' };
    return { bg: 'bg-rose-500/20', text: 'text-rose-400', border: 'border-rose-500/50', bar: 'bg-gradient-to-b from-rose-400 to-rose-600' };
  };

  const styles = getScoreStyles(score);

  return (
    <div className={`p-4 mb-5 rounded-2xl border ${styles.border} bg-slate-900/60 relative overflow-hidden group transition-all hover:bg-slate-800/80`}>
      <div className="absolute top-0 left-0 w-1.5 h-full opacity-70 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`h-full w-full ${styles.bar}`}></div>
      </div>
      <div className="pl-4">
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-bold text-white tracking-wide flex items-center text-sm md:text-base">
            {platform}
          </h4>
          <span className={`px-3 py-1.5 rounded-lg text-xs font-black tracking-wider uppercase ${styles.bg} ${styles.text} border ${styles.border} shadow-lg shadow-black/20`}>
            {score}% Match
          </span>
        </div>
        <p className="text-sm text-slate-300 font-medium relative z-10 leading-relaxed border-l-2 border-white/10 pl-3 italic py-1 mb-2">"{suggestion}"</p>
        {improvedPost && (
          <div className="mt-3 pt-3 border-t border-white/10 relative z-10">
            <h5 className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-2 flex items-center">
              <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
              AI Improved Version
            </h5>
            <div className="bg-slate-950/50 rounded-lg p-3 border border-white/5 relative group/post cursor-pointer hover:bg-slate-900/50 transition-colors" onClick={() => navigator.clipboard.writeText(improvedPost)} title="Click to copy">
              <p className="text-sm text-slate-200 whitespace-pre-wrap">{improvedPost}</p>
              <div className="absolute top-2 right-2 opacity-0 group-hover/post:opacity-100 transition-opacity">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
