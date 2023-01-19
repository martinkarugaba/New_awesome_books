// eslint-disable-next-line import/extensions
import Book from './book.js';
// eslint-disable-next-line import/extensions
import Storage from './localStorage.js';

const form = document.querySelector('.form');
const bookTitle = document.querySelector('.title');
const bookAuthor = document.querySelector('.author');
const booksContainer = document.querySelector('.books-container');

let booksArr = Storage.getStorage();

class UI {
  static displayData = () => {
    const displayData = booksArr.map((item) => {
      const { id, title, author } = item;
      return `
        <div class="flex justify-between items-center px-4 py-3 text-lg w-[100%]">
          <p><strong>"${title}"</strong> by ${author}</p>
          <button class="remove py-1 px-4 border-2 border-black" data-id=${id}>remove</button>
        </div>
      `;
    });
    booksContainer.innerHTML = displayData.join(' ');
  };

  static removeBook = () => {
    booksContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove')) {
        // remove from ui
        e.target.parentElement.remove();
      }
      // remove from array
      const btnId = e.target.dataset.id;
      UI.removeArrayBook(btnId);
    });
  };

  static removeArrayBook(id) {
    booksArr = booksArr.filter((item) => item.id !== +id);
    Storage.addToStorage(booksArr);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  UI.displayData();
  UI.removeBook();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = Math.random() * 1000000;
  const book = new Book(id, bookTitle.value, bookAuthor.value);
  booksArr = [...booksArr, book];
  // display data
  UI.displayData();
  // clear form
  form.reset();
  // remove book
  UI.removeBook();
  // add book to local storage
  Storage.addToStorage(booksArr);
});
