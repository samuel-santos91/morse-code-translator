import morseCodeMap from "./data.js";

export const TextToMorseCode = (text) => {
    if (text.match(/[^A-Za-z0-9\s]/)) {
      // morseCodeInput.value = "";
      throw new Error("Your text can only contain letters or numbers");
    }
  
    const morseCodeArray = text
      .split("")
      .map((char) => morseCodeMap[char.toUpperCase()] + " ");
  
    return morseCodeArray.join("");
  };
  
  export const MorseCodeToText = (code) => {
    if (code.match(/[^.\-\/\s]/)) {
      // textInput.value = "";
      throw new Error("Your morse code can only contain '.', '-' or '/'");
    }
    const typedMorseCode = code.split(" ");
    typedMorseCode.includes("") ? typedMorseCode.pop() : typedMorseCode;
  
    let text = [];
    for (const block of typedMorseCode) {
      for (const key in morseCodeMap) {
        if (morseCodeMap[key] === block) {
          text.push(key.toLowerCase());
          break;
        } else if (!Object.values(morseCodeMap).includes(block)) {
          // textInput.value = "";
          throw new Error("The space between characters is irregular");
        }
      }
    }
    return text.join("");
  };