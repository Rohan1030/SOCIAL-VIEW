import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login, signup, currentUser } = useAuth();
  const navigate = useNavigate();

  if (currentUser) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      if (isRegistering) {
        await signup(email, password);
      } else {
        await login(email, password);
      }
      navigate('/dashboard');
    } catch (err) {
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
         setError('Invalid identity or cryptographic key.');
      } else {
         setError(err.message || 'Failed to authenticate against the Neural Engine.');
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 animate-fade-in-up md:mt-4">
      <div className="mb-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl shadow-indigo-500/30 mb-6 border border-white/10">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
          </svg>
        </div>
        <h2 className="text-4xl font-extrabold text-white mb-2 tracking-tight drop-shadow-sm text-gradient">
          {isRegistering ? 'Create Node' : 'Initialize Session'}
        </h2>
        <p className="text-slate-400 font-medium tracking-wide text-sm">
          {isRegistering ? 'Register a new developer credential.' : 'Authenticate to access the neural network capabilities.'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="glass-card p-10 w-full max-w-md border-t-2 border-t-indigo-500 shadow-[0_0_40px_rgba(99,102,241,0.15)] relative">
        {error && (
          <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 px-4 py-3 rounded-lg mb-6 flex items-start text-sm shadow-inner overflow-hidden">
            <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span className="font-semibold">{error}</span>
          </div>
        )}

        <div className="mb-5">
          <label className="block text-[11px] font-black text-indigo-300 uppercase tracking-widest mb-2 opacity-90">Developer Identity (Email)</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@socialview.ai"
            className="glass-input w-full rounded-xl p-3.5 font-medium tracking-wide shadow-inner text-sm"
            required
          />
        </div>

        <div className="mb-8">
          <label className="block text-[11px] font-black text-indigo-300 uppercase tracking-widest mb-2 opacity-90">Cryptographic Key (Password)</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••••••"
            className="glass-input w-full rounded-xl p-3.5 font-medium tracking-wide shadow-inner text-sm"
            required
            minLength="6"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || !email.trim() || !password.trim()}
          className="group relative w-full overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold rounded-xl text-sm px-8 py-4 transition-all shadow-lg hover:shadow-indigo-500/40 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center backdrop-blur-sm mb-5 border border-white/10"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-20 rotate-12 group-hover:-translate-x-[400px] ease"></span>
          {isLoading ? (
            <svg aria-hidden="true" className="w-5 h-5 text-indigo-200 animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
          ) : (
            <>{isRegistering ? 'Initialize Sequence' : 'Authenticate Block'} <svg className="w-4 h-4 ml-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></>
          )}
        </button>
        
        <div className="text-center">
           <button 
             type="button" 
             onClick={() => { setIsRegistering(!isRegistering); setError(''); }}
             className="text-[10px] font-black text-indigo-400/80 hover:text-indigo-300 transition-colors uppercase tracking-widest"
           >
             {isRegistering ? 'Switch to Authentication' : 'Create New Identity'}
           </button>
        </div>
      </form>
    </div>
  );
}
