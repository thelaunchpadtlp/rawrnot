const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

export const apiClient = {
  // Services & Marketplace
  getServices: async () => {
    const res = await fetch(`${API_BASE_URL}/services`);
    return res.json();
  },

  // Projects & Briefing
  createProject: async (data: any) => {
    const res = await fetch(`${API_BASE_URL}/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  // Shadow Profiles (Automatic on any intake)
  createShadowProfile: async (email: string, score: number) => {
    const res = await fetch(`${API_BASE_URL}/shadow-profiles`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, intent_score: score }),
    });
    return res.json();
  },

  // SINPE Transactions
  validateSinpe: async (data: any) => {
    const res = await fetch(`${API_BASE_URL}/sinpe/validate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.json();
  }
};
