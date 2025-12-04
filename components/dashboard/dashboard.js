import { TinyState } from "../../js/state.js";

export const Dashboard = {
  render() {
    return `
      <div id="dashboardPage" class="page">
        <h1>Today</h1>
        <div class="dash-item">Habits: ${TinyState.habits.length}</div>
        <div class="dash-item">Journal entries: ${TinyState.journal.length}</div>
        <div class="dash-item">Meals planned: ${TinyState.meals.length}</div>
        <div class="dash-item">Sleep logs: ${TinyState.sleep.length}</div>
        <div class="dash-item">Voice memos: ${TinyState.voice.length}</div>
      </div>
    `;
  }
};
