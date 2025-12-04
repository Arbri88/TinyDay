import { Copilot } from "../ai/copilot/copilot-core.js";
import { setupCopilotUI } from "../components/copilot/copilot-panel.js";
import { PersonalityEngine } from "../ai/personality/personality-engine.js";
import { TinyState } from "./state.js";
import { Dashboard } from "../components/dashboard/dashboard.js";
import { HabitsPanel } from "../components/habits/habits-panel.js";
import { JournalPanel } from "../components/journal/journal-panel.js";
import { MealsPanel } from "../components/meals/meals-panel.js";
import { SleepPanel } from "../components/sleep/sleep-panel.js";
import { LifeMapPanel } from "../components/lifemap/lifemap-panel.js";
import { SocialPanel } from "../components/social/social-panel.js";
import { VoicePanel } from "../components/voice/voice-panel.js";
import { SettingsPanel } from "../components/settings/settings-panel.js";
import { setupNavigation } from "../components/navigation/nav.js";
import { initTheme } from "./theme-switcher.js";

window.TinyState = TinyState;

function renderAppShell() {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <nav id="mainNav">
      <button data-page="dashboardPage">Dashboard</button>
      <button data-page="habitsPage">Habits</button>
      <button data-page="journalPage">Journal</button>
      <button data-page="mealsPage">Meals</button>
      <button data-page="sleepPage">Sleep</button>
      <button data-page="lifeMapPage">Life Map</button>
      <button data-page="socialPage">Social</button>
      <button data-page="voicePage">Voice</button>
      <button data-page="settingsPage">Settings</button>
    </nav>
    ${[
      Dashboard.render(),
      HabitsPanel.render(),
      JournalPanel.render(),
      MealsPanel.render(),
      SleepPanel.render(),
      LifeMapPanel.render(),
      SocialPanel.render(),
      VoicePanel.render(),
      SettingsPanel.render()
    ].join("")}
  `;
}

document.addEventListener("DOMContentLoaded", async () => {
  initTheme();
  renderAppShell();
  setupNavigation();

  HabitsPanel.init();
  JournalPanel.init();
  MealsPanel.init();
  SleepPanel.init();
  LifeMapPanel.init();
  SocialPanel.init();
  VoicePanel.init();
  SettingsPanel.init();

  PersonalityEngine.init();
  await Copilot.init();
  setupCopilotUI();
});
