const textToSpeak = document.getElementById("textToSpeak");
const speakButton = document.getElementById("speakButton");
const output = document.getElementById("output");
const synth = window.speechSynthesis;
const box = document.getElementById("animated-box");
const animateButton = document.getElementById("animate-button");

speakButton.addEventListener("click", () => {
    const text = textToSpeak.value;
    const utterance = new SpeechSynthesisUtterance(text);

    synth.speak(utterance);
    output.innerText = "Speaking...";
    utterance.onend = () => {
        output.innerText = "Speech Complete";
    };
});
