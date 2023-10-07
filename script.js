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


let voices = [];


speechSynthesis.addEventListener('voiceschanged', event => {
    voices = speechSynthesis.getVoices();
    // if (!CONFIG.DEFAULT) {
    //     textToSpeak.voice = voices.find(voice => voice.name === CONFIG.VOICE);
    // }
});

textToSpeak.onend = function(event) {
    robot.classList.remove('robot_speaking');
}

robot.addEventListener('click', event => {
    if (speechSynthesis.speaking) {
        robot.classList.remove('robot_speaking');
        speechSynthesis.cancel();
    } else {
        robot.classList.add('robot_speaking');
        speechSynthesis.speak(textToSpeak);
    }
});

