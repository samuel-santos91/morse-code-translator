import { TextToMorseCode, MorseCodeToText } from "../src/js/script.js";

describe("TextToMorseCode() tests", () => {
  it("Should throw an error if non-letter/number characters are typed into the input", () => {
    expect(() => {
      e.target.value = "hello!";
    }).toThrow(new Error("Your text can only contain letters or numbers"));
    expect(() => {
      e.target.value = "hello, are you ok?";
    }).toThrow(new Error("Your text can only contain letters or numbers"));
    expect(() => {
      e.target.value = "S.O.S.";
    }).toThrow(new Error("Your text can only contain letters or numbers"));
    expect(() => {
      e.target.value = "!@#$%^";
    }).toThrow(new Error("Your text can only contain letters or numbers"));
  });

  it("Should be able to handle uppercase and lowercase characters", () => {
    expect(TextToMorseCode("hello")).toBe(".... . .-.. .-.. ---");
    expect(TextToMorseCode("hElLo")).toBe(".... . .-.. .-.. ---");
    expect(TextToMorseCode("HEllo")).toBe(".... . .-.. .-.. ---");
    expect(TextToMorseCode("HELLO")).toBe(".... . .-.. .-.. ---");
  });

  it("Should transform any text string into morse code", () => {
    expect(TextToMorseCode("apple")).toBe(".- .--. .--. .-.. .");
    expect(TextToMorseCode("hello world")).toBe(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
    );
    expect(
      TextToMorseCode("there are over 7 billion people in the world")
    ).toBe(
      "- .... . .-. . / .- .-. . / --- ...- . .-. / --... / -... .. .-.. .-.. .. --- -. / .--. . --- .--. .-.. . / .. -. / - .... . / .-- --- .-. .-.. -.."
    );
    expect(TextToMorseCode("1997")).toBe(".---- ----. ----. --...");
  });
});


describe("MorseCodeToText() tests", () => {
  it("Should throw an error if any group of characters contain other types beyond the following: '.', '-' or '/' ", () => {
    expect(() => {
      e.target.value = ".... . .-.. .-.. --_";
    }).toThrow(new Error("Your morse code can only contain '.', '-' or '/'"));
    expect(() => {
      e.target.value = ".... . ._.. ._.. ___";
    }).toThrow(new Error("Your morse code can only contain '.', '-' or '/'"));
    expect(() => {
      e.target.value = ".... , .-.. .-.. ---";
    }).toThrow(new Error("Your morse code can only contain '.', '-' or '/'"));
    expect(() => {
      e.target.value = "hello";
    }).toThrow(new Error("Your morse code can only contain '.', '-' or '/'"));
  });

  it("Should throw an error if a block of morse code characters does not correspond a letter or number", () => {
    expect(() => {
      e.target.value = "......";
    }).toThrow(new Error("Does not correspond to a letter, word or number"));
    expect(() => {
      e.target.value = "./";
    }).toThrow(new Error("Does not correspond to a letter, word or number"));
    expect(() => {
      e.target.value = "./.";
    }).toThrow(new Error("Does not correspond to a letter, word or number"));
    expect(() => {
      e.target.value = "...s";
    }).toThrow(new Error("Does not correspond to a letter, word or number"));
    expect(() => {
      e.target.value = "..  ..";
    }).toThrow(new Error("Does not correspond to a letter, word or number"));
  });

  it("Should handle spaces between characters with a ' ' separator", () => {
    expect(TextToMorseCode(".")).toBe("e");
    expect(TextToMorseCode("..")).toBe("i");
    expect(TextToMorseCode(". .")).toBe("ee");
    expect(TextToMorseCode("...")).toBe("s");
    expect(TextToMorseCode(".. .")).toBe("ie");
  });

  it("Should handle spaces between words with a '/' separator", () => {
    expect(TextToMorseCode("..")).toBe("i");
    expect(TextToMorseCode(". / .")).toBe("e e");
    expect(TextToMorseCode(". / ..")).toBe("e i");
    expect(TextToMorseCode(".. / .")).toBe("i e");
    expect(TextToMorseCode(".... . .-.. .-.. --- / -.-- --- ..-")).toBe(
      "hello you"
    );
    expect(TextToMorseCode(".... . .-.. .-.. --- -.-- --- ..-")).toBe(
      "helloyou"
    );
  });

  it("Should transform any morse code string into text", () => {
    expect(TextToMorseCode("-.-- . .-.. .-.. --- .--")).toBe("yellow");
    expect(
      TextToMorseCode(
        "...-- / ..--- / .---- / .... . .-. . / .. / -.-. --- -- ."
      )
    ).toBe("3 2 1 here i come");
    expect(TextToMorseCode(".-. .- -. -.. --- -- / .-- --- .-. -.. ...")).toBe(
      "random words"
    );
    expect(TextToMorseCode("..--- ----- ..--- ...--")).toBe("2023");
  });
});
