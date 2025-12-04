export function setupMoodSlider() {
  const slider = document.getElementById("journalMood");
  const display = document.getElementById("moodValue");

  slider.oninput = () => {
    display.textContent = slider.value;
  };
}
