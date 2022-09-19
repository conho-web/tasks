function getData() {
  let wordContent = document.querySelector('.word__content');
  let wordSearch = document.querySelector('.word__search').value;

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordSearch}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.title) {  
        wordContent.innerHTML = `
          <p class="error">${data.title}</p>
        `;
      }

      else {
        console.log(data) 
        wordContent.innerHTML = `
          <p>Word: ${data[0].word}</p>
          <p>Phonetic: ${data[0].phonetic}</p>
          <audio controls>
            <source src="${data[0].phonetics[0].audio}" type="audio/mpeg">
          </audio>
          <p>Meanings:</p>
          <p>Part of speech: ${data[0].meanings[0].partOfSpeech}</p>
          <p>Source URLS: <a href="${data[0].sourceUrls}" target="_blank"> ${data[0].sourceUrls} </a></p>
        `;
      }
    });
}