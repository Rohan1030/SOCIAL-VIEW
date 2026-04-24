import { useLocation, useNavigate, Navigate, Outlet, NavLink } from 'react-router-dom';

export default function Report() {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result;

  if (!result) {
    return <Navigate to="/" replace />;
  }

  const tabStyles = ({ isActive }) => 
    `px-5 py-3 text-sm font-bold tracking-widest uppercase transition-all border-b-2 rounded-t-lg ${
      isActive 
        ? 'text-indigo-400 border-indigo-500 bg-indigo-500/10 shadow-[inset_0_-2px_10px_rgba(99,102,241,0.1)]' 
        : 'text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-800/50'
    }`;

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 border-b border-white/10 pb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <h3 className="text-2xl font-extrabold text-white flex items-center tracking-wide mb-4 sm:mb-0">
          <svg className="w-6 h-6 mr-3 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
          AI Diagnostic Report
        </h3>
        <button 
          onClick={() => navigate('/dashboard')}
          className="bg-bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center text-sm shadow-sm"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          New Analysis
        </button>
      </div>
      
      <div className="mb-8 flex space-x-1 border-b border-white/10 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
        <NavLink to="overview" state={{ result }} className={tabStyles}>Overview</NavLink>
        <NavLink to="platforms" state={{ result }} className={tabStyles}>Platforms</NavLink>
        <NavLink to="hashtags" state={{ result }} className={tabStyles}>Hashtags</NavLink>
      </div>

      <div className="relative">
        <Outlet context={{ result }} />
      </div>
    </div>
  );
}
