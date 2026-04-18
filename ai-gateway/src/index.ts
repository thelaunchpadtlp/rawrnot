import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// --- RAWRNOT AI ENGINE: CORE ENDPOINTS ---

// 1. TEXT REFINEMENT (Llama-3-70B / Gemini-1.5-Flash)
app.post('/api/refine-brief', async (req, res) => {
  const { narrative, language } = req.body;
  console.log(`[AI-GATEWAY] Refilling brief: ${language}`);
  
  await new Promise(resolve => setTimeout(resolve, 1500));

  const refinedText = language === 'es' 
    ? `[SÍNTESIS IA]: ${narrative}. Evolución táctica: Se ha inyectado profundidad visceral y precisión técnica en la narrativa central.`
    : `[AI SYNTHESIS]: ${narrative}. Tactical evolution: Visceral depth and technical precision have been injected into the core narrative.`;

  res.json({ refinedText });
});

// 2. VISUAL DNA GENERATION (Stable Diffusion XL / FLUX.1 / Gemini-1.5-Pro Vision)
app.post('/api/generate-visual-dna', async (req, res) => {
  const { prompt, style } = req.body;
  console.log(`[AI-GATEWAY] Generating Visual DNA for style: ${style}`);

  // Mocking high-fidelity image URLs based on style
  await new Promise(resolve => setTimeout(resolve, 3000));

  const images = style === 'obsidian' 
    ? [
        "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?auto=format&fit=crop&q=80&w=600"
      ]
    : [
        "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1620712943543-bcc4628c71d0?auto=format&fit=crop&q=80&w=600"
      ];

  res.json({ images });
});

// 3. MOTION & ANIMATION SYNTHESIS (Llama-3 for JSON structure / Framer Motion injection)
app.post('/api/generate-animation', async (req, res) => {
  const { concept, style } = req.body;
  console.log(`[AI-GATEWAY] Synthesizing Animation Logic: ${concept} in ${style}`);

  await new Promise(resolve => setTimeout(resolve, 1000));

  // Dynamic Framer Motion variant generation
  const animation = {
    initial: { opacity: 0, scale: 0.8, rotate: -5 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1],
        yoyo: concept === 'loop' ? Infinity : 0
      } 
    },
    hover: { 
      scale: 1.05, 
      filter: style === 'obsidian' ? "brightness(1.2) drop-shadow(0 0 20px #ff4d81)" : "brightness(0.9)",
      transition: { duration: 0.4 }
    }
  };

  res.json({ animation });
});

app.listen(port, () => {
  console.log(`[RAWRNOT AI GATEWAY] Running at http://localhost:${port}`);
});
