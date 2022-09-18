let sizeBooks = 20;
let pageBooks = 0;

getData(sizeBooks, pageBooks);

function insertCounterPages(counter) {
  pageBooks = counter - 1;

  document.querySelector('.pagination').innerHTML = "";
  document.querySelector('.books').innerHTML = "";

  getData(sizeBooks, pageBooks);
}

function getData(sizeBooks, pageBooks) {
  const url = `https://it-academy-js-api-zmicerboksha.vercel.app/api/course/books?size=${sizeBooks}&page=${pageBooks}`;

  axios.get(url).then(
    response => {
      //добавляем пагинацию
      let counterHTML = 1;
  
      for (let i = 0; i < response.data.totalPages; i++) {
        const pageItem = document.createElement("li");
        pageItem.classList.add('page-item');
        
        pageItem.innerHTML = `
          <a class="page-link" onclick="insertCounterPages(this.innerHTML)">${counterHTML++}</a>
        `;
  
        document.querySelector('.pagination').appendChild(pageItem);

        if (pageBooks === i) { pageItem.classList.add('active') }
      }
  
      console.log(response.data)
  
      // добавляем книги
      for (let i = 0; i < response.data.content.length; i++) {
        const book = response.data.content[i];
        const newDiv = document.createElement("div");
        newDiv.classList.add('book')
  
        newDiv.innerHTML = `
          <p class="book__id">${book.id}</p>
          <p class="book__title">${book.title}</p>
          <p class="book__author">${book.author}</p>
          <p class="book__year">${book.year}</p>
          <p class="book__price">${book.price}</p>
          <img src="${book.imageLink}"/>
        `;
  
        document.querySelector('.books').appendChild(newDiv);
      }
    },
  )
}