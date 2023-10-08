const textToSpeak = document.getElementById("textToSpeak");
const speakButton = document.getElementById("speakButton");
const clearButton = document.getElementById("clearButton");
const output = document.getElementById("output");
const synth = window.speechSynthesis;
const box = document.getElementById("animated-box");
const animateButton = document.getElementById("animate-button");
clearButton.disabled = true;

document.addEventListener("DOMContentLoaded", function () {
  speakButton.addEventListener("click", () => {
    const text = textToSpeak.value;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
    output.innerText = "Speaking...";
    utterance.onend = () => {
      output.innerText = "Speech Complete";
    };
  });

  const clearButton = document.getElementById("clearButton");
  const textToSpeak = document.getElementById("textToSpeak");

  function toggleButtons() {
    if (textToSpeak.value.trim() === "") {
      clearButton.disabled = true;
      speakButton.disabled = true;
    } else {
      clearButton.disabled = false;
      speakButton.disabled = false;
    }
  }

  textToSpeak.addEventListener("input", toggleButtons);
  clearButton.addEventListener("click", function () {
    textToSpeak.value = ""; 

    toggleButtons(); 
  });

  toggleButtons();
});
