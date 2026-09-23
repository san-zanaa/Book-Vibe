import { Ibook } from '@/types/books.type'
import React from 'react';
import Image from 'next/image'

interface IbookDetails {
    params: Promise<{
        id: "string";
    }>;
}

const getBooks = async () => {
    const response = await fetch("http://localhost:3000/booksData.json")
    const data = await response.json();
    return data;
}

const BookDetailsPage = async ({ params }: IbookDetails) => {
    const { id } = await params;
    const booksData = await getBooks()
    const book = booksData.find((book: Ibook) => String(book.bookId) === String(id)) as Ibook;
    return (
        <section className='flex gap-16 w-[90%] mx-auto px-10 py-12'>
            <div className='w-[1/2]'>
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={900}
                    height={900}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className='w-1/2'>
                <div>
                    <h1 className='text-6xl font-semibold mb-4'>{book.bookName}</h1>
                    <h5 className='text-2xl font-semibold mb-4 border-b-1 border-gray-300 pb-4'>By : {book.author}</h5>
                </div>
                <div className='text-2xl font-medium mb-3 border-b-1 border-gray-300 pb-4'>{book.category}</div>
                <div className='mt-6 text-[18px] border-b-1 border-gray-300 pb-6'>
                    <p><b>Review : </b>{book.review}</p>
                    <div className='mt-6 flex items-center gap-4'>
                    <span className='text-md font-bold '>Tag :</span> 
                    {book.tags.map((tag, idx) => (
                        <span key={idx} className=' font-medium rounded-full bg-blue-50 text-blue-700 px-6 py-2'>{tag}</span>
                    ))}
                     </div>
                </div>
                
                    <ul className='mt-4 grid grid-cols-[240px_1fr] gap-y-2 text-xl items-center'>
                        <li className="contents">Number of Pages : <b>{book.totalPages}</b></li>
                        <li className="contents">Year of Publishing : <b>{book.yearOfPublishing}</b></li>
                        <li className="contents">Publisher : <b>{book.publisher}</b></li>
                        <li className="contents">Rating : <b>{book.rating}</b></li>
                    </ul>
                </div>
        </section>
    );
};

export default BookDetailsPage;