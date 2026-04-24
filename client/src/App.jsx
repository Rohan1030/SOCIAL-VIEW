import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import ReportOverview from './pages/report/ReportOverview';
import ReportPlatforms from './pages/report/ReportPlatforms';
import ReportHashtags from './pages/report/ReportHashtags';
import Login from './pages/Login';
import SocialBackground from './components/SocialBackground';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const isLogin = location.pathname === '/';

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (err) {
      console.error('Failed to disconnect session', err);
    }
  };

  return (
    <div className="min-h-screen text-slate-200 selection:bg-indigo-500/30 flex flex-col relative overflow-hidden">
      <SocialBackground />
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#030712]/80 border-b border-white/10 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-white m-0">Social<span className="text-gradient">view</span></h1>
              <p className="text-[10px] text-indigo-300 uppercase font-black tracking-widest block -mt-0.5 opacity-80">Deep Learning Engine</p>
            </div>
          </div>
          
          {currentUser && (
            <div className="flex items-center space-x-4 animate-fade-in-up">
              <span className="hidden sm:inline-flex items-center text-xs font-bold text-indigo-300 opacity-80">
                Node: {currentUser.email}
              </span>
              <button 
                onClick={handleLogout}
                className="bg-rose-500/10 border border-rose-500/30 hover:bg-rose-500/20 hover:border-rose-500/50 text-rose-400 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all shadow-sm active:scale-95"
               >
                Disconnect
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 flex-grow">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/report" element={
            <ProtectedRoute>
              <Report />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="overview" replace state={location.state} />} />
            <Route path="overview" element={<ReportOverview />} />
            <Route path="platforms" element={<ReportPlatforms />} />
            <Route path="hashtags" element={<ReportHashtags />} />
          </Route>
        </Routes>
      </main>
      
      <footer className="mt-auto py-6 border-t border-white/5 bg-[#030712]/50 text-center">
        <p className="text-slate-500 text-sm font-medium">Socialview Neural Network Edition • Developed for CS Capstone Project</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
