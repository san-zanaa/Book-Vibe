import { Ibook } from '@/types/books.type';
import Image from "next/image";

const getBooks = async () => {
  try {
    const response = await fetch("http://localhost:3000/booksData.json");
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
    <section className="container w-[90%] mx-auto my-[70px] px-4">

      <div className="mb-10 text-center bg-slate-100 py-10 rounded-2xl">
        <h5 className="text-sm text-green-500 font-bold mb-2">
          OUR COLLECTION
        </h5>

        <h1 className="text-4xl font-bold">
          Explore All Books
        </h1>

        <p className="mt-3 text-gray-500">
          Discover amazing stories, timeless classics and inspiring books
          from timeless authors
        </p>
      </div>

      <div className="flex flex-col gap-6">

        {booksData.map((book: Ibook) => {
          return (
            <div
              key={book.bookId}
              className="flex flex-col md:flex-row gap-6 rounded-2xl bg-white border border-gray-300 p-6 shadow-md">

              <div className="w-full md:w-[220px] shrink-0">
                <Image
                  src={book.image}
                  alt='' height={280} width={280}
                  className="rounded-xl object-cover"/>
              </div>

              <div className="flex flex-col justify-center">

                <h2 className="text-2xl font-bold text-gray-800">
                  {book.bookName}
                </h2>

                <p className="mt-2 text-gray-500">
                  By {book.author}
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {book.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-green-50 px-3 py-1 text-sm text-green-600">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-6 text-sm text-gray-500">
                  <span>Rating : ⭐ {book.rating}</span>
                  <span>📖Page : {book.totalPages}</span>
                  <span>📅Year of publishing : {book.yearOfPublishing}</span>
                </div>

                <div className='flex gap-5 text-left'>
                    <button className="mt-5 w-fit rounded-full cursor-pointer bg-[#0077b6] px-6 py-3 font-semibold text-white hover:bg-[#1da108]">
                  Catagory : {book.category}
                </button>
                <button className="mt-5 w-fit rounded-full cursor-pointer bg-[#23BE0A] px-6 py-3 font-semibold text-white hover:bg-[#1da108]">
                  View Details 🡪
                </button>
                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
};

export default Books;