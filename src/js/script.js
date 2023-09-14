import morseCodeMap from "./data.js";

const textInput = document.getElementById("text");
const morseCodeInput = document.getElementById("morse");

export const TextToMorseCode = (e) => {
  if (e.target.value.match(/[^A-Za-z0-9\s]/)) {
    morseCodeInput.value = "";
    throw new Error("Your text can only contain letters or numbers");
  }

  const morseCodeArray = e.target.value
    .split("")
    .map((char) => morseCodeMap[char.toUpperCase()] + " ");

  morseCodeInput.value = morseCodeArray.join("");
  return morseCodeArray.join("");
};

export const MorseCodeToText = (e) => {
  if (e.target.value.match(/[^.\-\/\s]/)) {
    textInput.value = "";
    throw new Error("Your morse code can only contain '.', '-' or '/'");
  }
  const typedMorseCode = e.target.value.split(" ");
  typedMorseCode.includes("") ? typedMorseCode.pop() : typedMorseCode;

  let text = [];
  for (const block of typedMorseCode) {
    for (const key in morseCodeMap) {
      if (morseCodeMap[key] === block) {
        text.push(key.toLowerCase());
        break;
      } else if (!Object.values(morseCodeMap).includes(block)) {
        textInput.value = "";
        throw new Error("Does not correspond to a letter, word or number");
      }
    }
  }
  textInput.value = text.join("");
  return text.join("");
};

textInput.addEventListener("input", TextToMorseCode);
morseCodeInput.addEventListener("input", MorseCodeToText);
