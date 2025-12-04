import { TinyState } from "./state.js";

export const generateWeeklyReport = () => {
  return {
    habits: TinyState.habits.length,
    journalEntries: TinyState.journal.length,
    mealsCooked: TinyState.meals.length,
    sleepLogs: TinyState.sleep.length
  };
};
