import { TextToMorseCode, MorseCodeToText } from "../src/js/functions.js";

describe("TextToMorseCode() tests", () => {
  it("Should throw an error if non-letter/number characters are typed into the input", () => {
    expect(() => {
      TextToMorseCode("hello!");
    }).toThrow(new Error("Your text can only contain letters or numbers"));
    expect(() => {
      TextToMorseCode("hello, are you ok?");
    }).toThrow(new Error("Your text can only contain letters or numbers"));
    expect(() => {
      TextToMorseCode("S.O.S.");
    }).toThrow(new Error("Your text can only contain letters or numbers"));
    expect(() => {
      TextToMorseCode("!@#$%^");
    }).toThrow(new Error("Your text can only contain letters or numbers"));
  });

  it("Should be able to handle uppercase and lowercase characters", () => {
    expect(TextToMorseCode("hello")).toBe(".... . .-.. .-.. --- ");
    expect(TextToMorseCode("hElLo")).toBe(".... . .-.. .-.. --- ");
    expect(TextToMorseCode("HEllo")).toBe(".... . .-.. .-.. --- ");
    expect(TextToMorseCode("HELLO")).toBe(".... . .-.. .-.. --- ");
  });

  it("Should transform any text string into morse code", () => {
    expect(TextToMorseCode("apple")).toBe(".- .--. .--. .-.. . ");
    expect(TextToMorseCode("hello world")).toBe(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -.. "
    );
    expect(
      TextToMorseCode("there are over 7 billion people in the world")
    ).toBe(
      "- .... . .-. . / .- .-. . / --- ...- . .-. / --... / -... .. .-.. .-.. .. --- -. / .--. . --- .--. .-.. . / .. -. / - .... . / .-- --- .-. .-.. -.. "
    );
    expect(TextToMorseCode("1997")).toBe(".---- ----. ----. --... ");
  });
});

describe("MorseCodeToText() tests", () => {
  it("Should throw an error if any group of characters contain other types beyond the following: '.', '-' or '/' ", () => {
    expect(() => {
      MorseCodeToText(".... . .-.. .-.. --_");
    }).toThrow(new Error("Your morse code can only contain dot ( . ) , dash ( - ) or slash ( / )"));
    expect(() => {
      MorseCodeToText(".... . ._.. ._.. ___");
    }).toThrow(new Error("Your morse code can only contain dot ( . ) , dash ( - ) or slash ( / )"));
    expect(() => {
      MorseCodeToText(".... , .-.. .-.. ---");
    }).toThrow(new Error("Your morse code can only contain dot ( . ) , dash ( - ) or slash ( / )"));
    expect(() => {
      MorseCodeToText("hello");
    }).toThrow(new Error("Your morse code can only contain dot ( . ) , dash ( - ) or slash ( / )"));
  });

  it("Should throw an error if a block of morse code characters does not correspond a letter or number", () => {
    expect(() => {
      MorseCodeToText("......");
    }).toThrow(new Error("The space between characters is irregular"));
    expect(() => {
      MorseCodeToText("./");
    }).toThrow(new Error("The space between characters is irregular"));
    expect(() => {
      MorseCodeToText("./.");
    }).toThrow(new Error("The space between characters is irregular"));
    expect(() => {
      MorseCodeToText("..  ..");
    }).toThrow(new Error("The space between characters is irregular"));
  });

  it("Should handle spaces between characters with a ' ' separator", () => {
    expect(MorseCodeToText(".")).toBe("e");
    expect(MorseCodeToText("..")).toBe("i");
    expect(MorseCodeToText(". .")).toBe("ee");
    expect(MorseCodeToText("...")).toBe("s");
    expect(MorseCodeToText(".. .")).toBe("ie");
  });

  it("Should handle spaces between words with a '/' separator", () => {
    expect(MorseCodeToText("..")).toBe("i");
    expect(MorseCodeToText(". / .")).toBe("e e");
    expect(MorseCodeToText(". / ..")).toBe("e i");
    expect(MorseCodeToText(".. / .")).toBe("i e");
    expect(MorseCodeToText(".... . .-.. .-.. --- / -.-- --- ..-")).toBe(
      "hello you"
    );
    expect(MorseCodeToText(".... . .-.. .-.. --- -.-- --- ..-")).toBe(
      "helloyou"
    );
  });

  it("Should transform any morse code string into text", () => {
    expect(MorseCodeToText("-.-- . .-.. .-.. --- .--")).toBe("yellow");
    expect(
      MorseCodeToText(
        "...-- / ..--- / .---- / .... . .-. . / .. / -.-. --- -- ."
      )
    ).toBe("3 2 1 here i come");
    expect(MorseCodeToText(".-. .- -. -.. --- -- / .-- --- .-. -.. ...")).toBe(
      "random words"
    );
    expect(MorseCodeToText("..--- ----- ..--- ...--")).toBe("2023");
  });
});
