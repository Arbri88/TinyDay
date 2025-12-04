# TinyDay — Personal AI Wellbeing OS

TinyDay is a modular, AI-augmented wellbeing system featuring:

- Habits, journal, meals, sleep, and life-map tracking
- Voice journaling with transcription-ready storage hooks
- Social mode feed, reactions, friends, circles, and challenges
- AI copilot chat with RAG memory and personality engine
- Themeable, nav-based UI ready for GitHub Pages deployment

## Project layout

- `/index.html` — entry page rendering all panels and copilot UI
- `/css` — core styles plus themed palettes (light, dark, pastel, neon, glass)
- `/components` — UI panels for habits, journal, meals, sleep, life map, social, voice, settings, and copilot
- `/js` — state management, feature logic, and initializers
- `/ai` — copilot + personality engines
- `/social`, `/voice` — feature-specific logic modules
- `/manifest.json`, `/service-worker.js` — PWA + offline cache scaffolding

## Running

Open `index.html` locally (or serve with any static server). Update settings in the UI for your AI API key or proxy, and switch themes in Settings. Deploy to GitHub Pages using the included `README_DEPLOY.md` guidance.
