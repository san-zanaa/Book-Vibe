import React from 'react';
import Image from "next/image";
import { Ibook } from '@/types/books.type';

interface IbookCardProps {
    book : Ibook;
}

const BookCard = ({ book } : IbookCardProps) => {
    return (
        <div className="group rounded-2xl bg-white p-4 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="h-72 overflow-hidden rounded-xl bg-gray-100">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={900}
                    height={900}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>

            <div className="pt-5">

                <div className="flex flex-wrap gap-2 mb-3">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-[#23BE0A]">
                            {tag}
                        </span>
                    ))}
                </div>

                <h2 className="text-xl font-bold text-gray-800 line-clamp-1">
                    {book.bookName}
                </h2>

                <p className="mt-1 text-gray-500">
                    By {book.author}
                </p>

                <div className="mt-4 flex items-center justify-between">

                    <div className="flex items-center gap-1">
                        <span className="text-yellow-400 text-lg">★</span>
                        <span className="font-semibold text-gray-700">
                            {book.rating}
                        </span>
                    </div>

                    <span className="text-sm text-gray-500">
                        {book.totalPages} pages
                    </span>

                </div>

                <div className="mt-3 flex justify-between border-t border-gray-300 pt-3 text-sm text-gray-500">
                    <span>{book.category}</span>
                    <span>{book.yearOfPublishing}</span>
                </div>

                <button className="mt-5 w-full rounded-xl bg-[#23BE0A] py-3 font-semibold text-white hover:bg-[#1da108] transition">
                    View Details 🡪
                </button>

            </div>
        </div>
    );
};

export default BookCard;
