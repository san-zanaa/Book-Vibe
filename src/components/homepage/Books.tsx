import { Ibook } from '@/types/books.type';
import React from 'react';
import Cards from '../shared/Cards';

const getBooks = async() => {
    try {
    const response = await fetch("http://localhost:3000/booksData.json")
    const data = await response.json();
    return data;
} catch (error) {
    console.error("Error fetching books data: ", error);
    return [];
}
};
const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-[70px] px-4">

      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold">
          Books
        </h1>

        <p className="mt-3 text-gray-500">
          Discover your next favorite book
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {booksData.map((book: Ibook) => {
          return (
            <Cards
              key={book.bookId}
              book={book}/>
          );
        })}
      </div>

    </section>
  );
};
export default Books;