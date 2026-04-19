import React, { useState, useEffect } from 'react';
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
...
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
