const textInput = document.getElementById("text");
const playButton = document.getElementById("play");
const audioAPI = document.getElementById("audioFile");

const getAudio = async () => {
  const response = await fetch(
    `https://api.funtranslations.com/translate/morse/audio.json?text=${textInput.value}`
  );
  if (!response.ok) {
    throw new Error("Something Went Wrong");
  }

  const data = await response.json();
  console.log(data);

  const base64Data = data.contents.translated.audio.slice(23);

  // Decode the Base64 data
  const binaryData = atob(base64Data);

  // Create a Uint8Array from the binary data
  const byteArray = new Uint8Array(binaryData.length);
  for (let i = 0; i < binaryData.length; i++) {
    byteArray[i] = binaryData.charCodeAt(i);
  }

  // Create a Blob from the Uint8Array with MIME type 'audio/mpeg'
  const blob = new Blob([byteArray.buffer], { type: "audio/mpeg" });

  // Create a URL for the Blob
  const url = URL.createObjectURL(blob);
  return url;
};

playButton.addEventListener("click", async () => {
  const audio = await getAudio();

  audioAPI.src = audio;
  audioAPI.play();
});


//For public API calls this is 60 API calls a day with distribution of 5 calls an hour. 

