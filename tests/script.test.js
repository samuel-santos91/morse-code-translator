import { TextToMorseCode, MorseCodeToText } from "../src/js/script.js";

describe("TextToMorseCode() tests", () => {
  // it("Should throw an error if non-letter/number characters are typed into the input", () => {});

  it("Should be able to handle uppercase and lowercase characters", () => {
    expect(TextToMorseCode("hello")).toBe(".... . .-.. .-.. --- ")
    expect(TextToMorseCode("hElLo")).toBe(".... . .-.. .-.. --- ")
    expect(TextToMorseCode("HEllo")).toBe(".... . .-.. .-.. --- ")
    expect(TextToMorseCode("HELLO")).toBe(".... . .-.. .-.. --- ")
  });

  // it("Should transform any text string into morse code", () => {});
});

// describe("MorseCodeToText() tests", () => {
//   it("Should throw an error if any group of characters contain other types beyond the following: '.' or '-' ", () => {});

//   it("Should handle spaces between characters with a ' ' separator", () => {});

//   it("Should handle spaces between words with a '/' separator", () => {});

//   it("Should transform any morse code string into text", () => {});
// });
