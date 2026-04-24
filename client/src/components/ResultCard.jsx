export default function ResultCard({ title, children, icon, delay = "0" }) {
  return (
    <div 
      className="glass-card p-7 flex flex-col h-full animate-fade-in-up" 
      style={{ animationFillMode: 'both', animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-6 pb-4 border-b border-white/10">
        <div className="w-10 h-10 rounded-full bg-slate-800/80 flex items-center justify-center mr-4 border border-white/5 shadow-inner">
          <span className="text-xl">{icon}</span>
        </div>
        <h3 className="text-lg font-bold text-white tracking-wide uppercase">{title}</h3>
      </div>
      <div className="flex-grow flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
}
