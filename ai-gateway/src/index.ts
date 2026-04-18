import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// --- MOCK AI ENGINE ROUTING ---

app.post('/api/refine-brief', async (req, res) => {
  const { narrative, language } = req.body;

  // In a real scenario, we would use:
  // const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  // This would call Llama-3 70B (Low cost, high speed worker)
  
  console.log(`[AI-GATEWAY] Refitting brief using Llama-3-70B for language: ${language}`);

  // Mock processing delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  const refinedText = language === 'es' 
    ? `[SÍNTESIS IA]: ${narrative}. Una exploración visceral que fusiona el instinto creativo con la precisión técnica de vanguardia.`
    : `[AI SYNTHESIS]: ${narrative}. A visceral exploration merging creative instinct with cutting-edge technical precision.`;

  res.json({ refinedText });
});

app.post('/api/generate-asset', async (req, res) => {
  const { prompt, type } = req.body;
  // This would route to Stable Diffusion (Images) or DeepSeek (Code)
  console.log(`[AI-GATEWAY] Routing asset generation to specialized worker: ${type}`);
  
  res.json({ 
    message: "Request queued in AI Gateway",
    status: "processing",
    worker: type === 'code' ? 'DeepSeek-V2' : 'FLUX-1'
  });
});

app.listen(port, () => {
  console.log(`[RAWRNOT AI GATEWAY] Running at http://localhost:${port}`);
});
