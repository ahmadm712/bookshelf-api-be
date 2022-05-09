const filterByName = (books, name) => {

  if (name !== undefined) {
    return books.filter((book) => {
      const nameRegex = new RegExp(name, "gi");
      return nameRegex.test(book.name);
    });
  }
  
  return books;
};

const filterByReading = (books, reading) => {
  const result = reading !== undefined && [0, 1].includes(Number(reading));

  if (result) {
    return books.filter((book) => Number(book.reading) === Number(reading));
  }

  return books;
};

const filterByFinished = (books, finished) => {
  const result = finished !== undefined && [0, 1].includes(Number(finished));

  if (result) {
    return books.filter((book) => Number(book.finished) === Number(finished));
  }

  return books;
};

module.exports = { filterByName, filterByReading, filterByFinished };
