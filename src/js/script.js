import { TextToMorseCode, MorseCodeToText } from "./functions.js";

const textInput = document.getElementById("text");
const morseCodeInput = document.getElementById("morse");
const errorTag = document.getElementById("errorMessage");
const errorSection = document.getElementById("errorSection");

const appendElementWithText = (text, parent) => {
  const textNode = document.createTextNode(text);
  parent.appendChild(textNode);
};

textInput.addEventListener("input", (e) => {
  errorSection.style.display = "none";
  errorTag.textContent = "";

  try {
    morseCodeInput.value = TextToMorseCode(e.target.value);
  } catch (error) {
    appendElementWithText(error.message, errorTag);
    errorSection.style.display = "flex";
    morseCodeInput.value = "";
  }
});

morseCodeInput.addEventListener("input", (e) => {
  errorSection.style.display = "none";
  errorTag.textContent = "";

  try {
    textInput.value = MorseCodeToText(e.target.value);
  } catch (error) {
    appendElementWithText(error.message, errorTag);
    errorSection.style.display = "flex";
    textInput.value = "";
  }
});
