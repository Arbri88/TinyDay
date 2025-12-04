import { addJournalEntry, renderJournal } from "../../js/journal.js";

export const JournalPanel = {
  render() {
    return `
      <div id="journalPage" class="page hidden">
        <h1>2-Minute Journal</h1>

        <textarea id="jGood" placeholder="Something good..."></textarea>
        <textarea id="jBad" placeholder="What stressed you..."></textarea>
        <textarea id="jChange" placeholder="What will you change..."></textarea>

        <label>Mood:
          <select id="jMood">
            <option value="1">1/5</option>
            <option value="2">2/5</option>
            <option value="3" selected>3/5</option>
            <option value="4">4/5</option>
            <option value="5">5/5</option>
          </select>
        </label>

        <button id="saveJournal">Save</button>

        <h2>Entries</h2>
        <div id="journalList"></div>
      </div>
    `;
  },

  init() {
    document.querySelector("#saveJournal").onclick = () => {
      const good = document.querySelector("#jGood").value;
      const bad = document.querySelector("#jBad").value;
      const change = document.querySelector("#jChange").value;
      const mood = document.querySelector("#jMood").value;

      addJournalEntry(good, bad, change, mood);
      renderJournal();
    };

    renderJournal();
  }
};
