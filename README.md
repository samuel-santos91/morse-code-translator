# morse-code-translator

## Description 
This app translates text into morse code and vice-versa.

## Preview
### Main 
<img width="500" alt="Screenshot 2023-09-17 at 20 43 53" src="https://github.com/samuel-santos91/morse-code-translator/assets/107240729/01827825-92f6-4d1c-af2f-daea92ff48e3">


### Error Messages
<img width="500" alt="Screenshot 2023-09-17 at 20 44 14" src="https://github.com/samuel-santos91/morse-code-translator/assets/107240729/a62ed66a-07a6-439a-ba96-e73805631b4b">


### Audio Button
<img width="500" alt="Screenshot 2023-09-17 at 20 46 03" src="https://github.com/samuel-santos91/morse-code-translator/assets/107240729/aee9ad80-cbe5-4b7f-b787-8e484c48be8b">

## About
### Purpose
This app was built with the purpose of practicing unit tests with <strong>Jest</strong>.
### Sections
* There are two different sections in this webpage:
  * Text and morse code inputs;
  * Error messages section;
* For the text input, whenever the user types into it, the text is translated and displayed on the morse code input. Same for the other way around.
### Features
* Next to the morse code input, there is a button that plays the morse code audio;
* The error section displays the error messages linked to wrong characters or irregular spaces between them. <br><br>

## Fetch API
The app uses an API to translate morse code into audio.<br><br>

## Running Tests
To execute tests, ensure you have <strong>Node.js</strong> installed. Then, run the 
following commands:
### Install Dependencies
```bash
npm install
```
### Run Tests
```bash
npm run test
```
The tests cover the following functionality:

### TextToMorseCode() function
* Validates input: Checks if non-letter/number characters are present.
* Handles uppercase and lowercase characters.
* Transforms text strings into Morse code.
### MorseCodeToText() function
* Ensures the input only contains valid Morse code characters.
* Handles spaces between characters and words in Morse code.
* Converts Morse code strings into text.
<br><br>

## Package Information

* Jest Version: 29.7.0
* Babel Version: 7.22.17
