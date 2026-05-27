import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Determine the Gemini Key. Fall back safely to the user's provided key if not set.
const rawKey = process.env.GEMINI_API_KEY;
const isPlaceholder = !rawKey || rawKey === "MY_GEMINI_API_KEY" || rawKey === "";
const geminiApiKey = isPlaceholder ? "AIzaSyCLKX2tohQTHF9Gk06XqqlT-tXUjVSOYBU" : rawKey;

// Lazy initialize general Gemini Client
let ai: GoogleGenAI | null = null;
function getGenAI() {
  if (!ai) {
    ai = new GoogleGenAI({
      apiKey: geminiApiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return ai;
}

// System Instruction for the site assistant
const SYSTEM_INSTRUCTION = `You are a friendly, highly helpful AI cinematic consultant for "Movie Night Outdoor Theater", an outdoor movie screen rental and event production business.
Location: Missouri (MO). We serve major areas in Missouri including Kansas City, Independence, Lee's Summit, Blue Springs, Liberty, Overland Park, and surrounding areas.
Phone: 816-621-0299
Email: mike.rentie63@gmail.com
Website: movienightoutdoortheater.com

Services we offer:
- Backyard Movie Nights (perfect for families, neighbors, intimate gatherings. Includes high-quality inflatable screen, premium projector, sound, and media player setup).
- School Events (field days, end-of-year celebrations, family fun nights, fundraisers)
- Church Gatherings (youth group events, community outreach, holy week screenings)
- Corporate Events (outdoor presentations, team appreciation nights, advertising)
- Community Movie Nights (park departments, HOA gatherings, town squares)
- Birthday Parties & Graduation Celebrations (customized themed movie nights, gaming tournaments)
- Fundraisers & Charity Drives (charge for admission/concessions with a large crowd-sourced feel)
- Drive-In Style Events (FM transmitter audio routed straight to car stereos, giant screens up to 40ft)
- Equipment Rentals (screens, HD and 4K laser projectors, high-fidelity concert sound systems, popcorn machines, comfortable outdoor loungers, LED lighting, ambient uplights, and silent disco headphones).

Our competitive advantages:
- Heavy-duty, professional grade screens that don't blow over easily.
- High-intensity laser projectors for vibrant imagery even during twilight.
- Full setup, teardown, and on-site media hosting technicians so the customer doesn't have to lift a finger.
- Weather-friendly flexible booking policy: if bad weather strikes, we offer painless, free rescheduling.

Be charming, enthusiastic, professional, and highlight our contact info (Phone: 816-621-0299, Email: mike.rentie63@gmail.com) and offer to help customers choose a package or service. Keep your answers reasonably concise, structured, and use friendly formatting with markdown list elements where appropriate. Do not invent details beyond these facts, but feel free to recommend movies, explain how setup works (we arrive 1.5 hours before dusk, handle all wiring, run the screening, and pack up within an hour after the film ends).`;

// Create Chat session or respond directly
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required." });
    }

    const genAI = getGenAI();
    
    // Convert client messages into Gemini contents list
    const geminiContents = messages.map((msg: any) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }]
    }));

    const response = await genAI.models.generateContent({
      model: "gemini-3.5-flash",
      contents: geminiContents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    const text = response.text || "I am here to help you coordinate your perfect movie night!";
    res.json({ text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Failed to communicate with AI helper.", details: error.message });
  }
});

// Mock database endpoints for contact queries and booking quotes
app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log("Contact submission:", { name, email, phone, message });
  return res.json({ success: true, message: "Thank you! We have received your message and will follow up with you within 24 hours." });
});

app.post("/api/quote", (req, res) => {
  const { name, email, phone, date, eventType, location, guestCount, comments } = req.body;
  console.log("Quote request received:", { name, email, phone, date, eventType, location, guestCount, comments });
  return res.json({ success: true, message: "Quote request received! Our outdoor theater coordinator will contact you shortly with customized pricing for your event." });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
