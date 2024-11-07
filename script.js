let speech = new SpeechSynthesisUtterance()

const textArea = document.getElementById("textArea");
const listenBtn = document.getElementById("listenBtn");

listenBtn.addEventListener("click", ()=>{
    speech.text = textArea.value
    window.speechSynthesis.speak(speech)
})

let voices = []
let voiceSelect = document.querySelector("select")

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value]
})