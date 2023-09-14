import morseCodeMap from "./data.js";

const textInput = document.getElementById("text");
const morseCodeInput = document.getElementById("morse");

export const TextToMorseCode = (e) => {
  const morseCodeArray = e.target.value
    .split("")
    .map((char) => morseCodeMap[char.toUpperCase()] + " ");

  morseCodeInput.value = morseCodeArray.join("");
  return morseCodeArray.join("");
};

export const MorseCodeToText = (e) => {
  const typedMorseCode = e.target.value.split(" ");

  let text = [];
  for (const block of typedMorseCode) {
    for (const key in morseCodeMap) {
      if (morseCodeMap[key] === block) {
        text.push(key);
        break;
      }
    }
  }
  textInput.value = text.join("");
  return text.join("");
};

textInput.addEventListener("input", TextToMorseCode);
morseCodeInput.addEventListener("input", MorseCodeToText);
