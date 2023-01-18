export default class handleLocalStorage {
  static addToStorage = (booksArr) => {
    const storage = localStorage.setItem(
      'books',
      JSON.stringify(booksArr),
    );
    return storage;
  };

  static getStorage = () => {
    const storage = localStorage.getItem('books') === null
      ? []
      : JSON.parse(localStorage.getItem('books'));
    return storage;
  };
}
