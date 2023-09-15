import { TextToMorseCode, MorseCodeToText } from "./functions.js";

const textInput = document.getElementById("text");
const morseCodeInput = document.getElementById("morse");

textInput.addEventListener("input", (e) => {
  morseCodeInput.value = TextToMorseCode(e.target.value);
});

morseCodeInput.addEventListener("input", (e) => {
  textInput.value = MorseCodeToText(e.target.value);
});
