import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NexusHub from './pages/NexusHub';
import Marketplace from './pages/Marketplace';
import TheEcho from './pages/TheEcho';
import ClientPortal from './pages/ClientPortal';
import CheckoutBooking from './pages/CheckoutBooking';
import QuotingBriefing from './pages/QuotingBriefing';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { GoogleLogin } from '@react-oauth/google';
import DynamicPage from './pages/DynamicPage';
import TheArchitect from './pages/TheArchitect';
import MasterBlueprint from './pages/MasterBlueprint';

function AppContent() {
  const { user, loginWithGoogle, logout } = useAuth();
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Apply theme to HTML tag
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <div className="min-h-screen bg-background text-on-background font-body selection:bg-primary/20 transition-colors duration-500">
        
        {/* Navigation Bar */}
        <nav className="fixed top-0 w-full liquid-glass z-50 border-b border-outline/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              
              {/* Logo / Brand */}
              <div className="flex-shrink-0 flex items-center cursor-pointer group">
                <Link to="/" className="font-headline text-3xl font-semibold tracking-tighter text-on-background group-hover:text-primary transition-colors">
                  rawr'not<span className="text-primary text-xl">.</span>
                </Link>
              </div>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/portfolio" className="text-sm font-medium text-on-background hover:text-primary transition-colors uppercase tracking-widest">Portfolio</Link>
                <Link to="/marketplace" className="text-sm font-medium text-on-background hover:text-primary transition-colors uppercase tracking-widest">Services</Link>
                <Link to="/journal" className="text-sm font-medium text-on-background hover:text-primary transition-colors uppercase tracking-widest">Journal</Link>
                <Link to="/quote" className="text-sm font-medium text-on-background hover:text-primary transition-colors uppercase tracking-widest">Quote</Link>
              </div>

              {/* Actions & Auth */}
              <div className="flex items-center space-x-4">
                <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-on-background/5 transition-colors text-on-background" aria-label="Toggle Theme">
                  <span className="material-symbols-outlined text-xl">
                    {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                  </span>
                </button>
                
                {user ? (
                  <div className="flex items-center space-x-4">
                    {user.role === 'OWNER' && (
                      <Link to="/architect" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors uppercase tracking-widest hidden sm:block">
                        The Architect
                      </Link>
                    )}
                    <Link to={user.role === 'OWNER' ? "/nexus" : "/portal"} className="text-sm font-medium text-on-background hover:text-primary transition-colors uppercase tracking-widest">
                      {user.role === 'OWNER' ? 'Nexus' : 'Portal'}
                    </Link>
                    <button onClick={logout} className="text-sm font-medium text-on-background/60 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-xl">logout</span>
                    </button>
                  </div>
                ) : (
                  <GoogleLogin
                    onSuccess={credentialResponse => {
                      if (credentialResponse.credential) {
                        loginWithGoogle(credentialResponse.credential);
                      }
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                    useOneTap
                    shape="pill"
                    theme={theme === 'dark' ? 'filled_black' : 'outline'}
                    text="continue_with"
                  />
                )}
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Area with top padding for fixed nav */}
        <div className="relative z-10 pt-20">
          <Routes>
            {/* Dynamic Public Routes */}
            <Route path="/" element={<DynamicPage />} />
            <Route path="/p/:slug" element={<DynamicPage />} />
            <Route path="/portfolio" element={<DynamicPage />} />
            <Route path="/journal" element={<DynamicPage />} />
            
            {/* Fixed Public Routes */}
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/echo" element={<TheEcho />} />
            <Route path="/quote" element={<QuotingBriefing />} />

            {/* Protected Client Routes */}
            <Route path="/portal" element={
              <ProtectedRoute requiredRole="CLIENT">
                <ClientPortal />
              </ProtectedRoute>
            } />
            <Route path="/checkout" element={
              <ProtectedRoute requiredRole="CLIENT">
                <CheckoutBooking />
              </ProtectedRoute>
            } />

            {/* Protected Owner Routes */}
            <Route path="/nexus" element={
              <ProtectedRoute requiredRole="OWNER">
                <NexusHub />
              </ProtectedRoute>
            } />
            <Route path="/architect" element={
              <ProtectedRoute requiredRole="OWNER">
                <TheArchitect />
              </ProtectedRoute>
            } />
            <Route path="/blueprint" element={
              <ProtectedRoute requiredRole="OWNER">
                <MasterBlueprint />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </div>
    </Router>
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
