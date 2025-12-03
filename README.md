📘 TinyDay — Your Personal AI Lifestyle OS

TinyDay is an offline-first, browser-based personal assistant built with:

AI habit coaching

Long-term life planning

CBT therapist mode

Voice memories

Automatic meal planning & budgeting

Daily quests

Emotion analytics & timeline graphs

Full gamification (XP + levels)

Cloud sync (optional)

Everything runs locally with optional Firebase sync.
Designed for lightweight, fast, private use.

🚀 Features
🌟 AI Systems

TinyAI Assistant

Life Map Generator (long-term vision planning)

CBT Therapist Mode

Sentiment analysis (transformer-based)

Emotion timeline graph

Auto habit suggestions

Meal planning AI

Personalized daily quests

AI Routine Builder

🧠 Cognitive Features

Emotion recognition from journals

Stress event detection

Circadian-aware suggestions

Sleep tracking & insights

🎙 Voice Features

“Hey TinyDay” voice assistant

Voice Memories (audio → transcript → emotion)

🎮 Gamification

XP system

Level progression

Rewards

Shareable social cards

🔧 Technical Highlights

100% client-side

Modular ES6 architecture

LocalStorage persistence

Optional Firebase Cloud sync

Offline-friendly

No backend required

📁 Folder Structure

(Shows entire file tree as structured above)

🔧 Installation

Clone the repo:

git clone https://github.com/YOURUSERNAME/TinyDay.git
cd TinyDay


Open locally:

open index.html


Or run with a simple local dev server:

npx serve

🔥 Optional Setup — Firebase Sync

Fill in js/cloud.js:

export const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

🧠 AI Models

TinyDay uses the lightweight browser transformer:

@xenova/transformers
Model: distilbert-base-uncased-finetuned-sst-2


Runs entirely client-side.

🌍 Deploy to GitHub Pages

Push repo to GitHub

Go to Settings → Pages

Select branch: main → /root

Done

Your app is live at:

https://yourusername.github.io/TinyDay/

🤝 Contributing

Pull requests welcome.

📄 License

MIT License.
