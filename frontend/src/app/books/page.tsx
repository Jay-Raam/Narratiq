// components/BooksList.tsx
"use client";

import React, { useState, useEffect } from "react";
import ShimmerButton from "@/components/magicui/ui/ButtonShack";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export interface Book {
  _id: string;
  Title: string;
  author: string;
  description: string;
  image: string;
  publishedDate: number;
  infoLink: string;
  categories: string[];
}

const BooksList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/books?page=${page}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBooks(data);
        setTotalPages((prev) => prev + 1);
      } catch (err) {
        setError("Failed to fetch books");
      }
    };

    loadBooks();
  }, [page]);

  if (error) return <div>{error}</div>;

  return (
    <div className="Book mt-10">
      <div className="container">
        <ul className="flex justify-center items-start gap-5 flex-wrap mt-5 text-white">
          {books.length > 0 ? (
            books.map(
              (book) =>
                book.image && (
                  <li
                    key={book._id}
                    className="flex text-center justify-center items-center gap-5 flex-col w-[300px] md:w-[400px]"
                  >
                    <Link href={`/books/${book._id}`}>
                      <Image
                        width={128}
                        height={300}
                        quality={100}
                        loading="lazy"
                        className="w-[190px] h-auto hover:scale-105"
                        src={book.image}
                        alt={book.Title || "Book cover"}
                      />
                    </Link>
                    <Link href={`/books/${book._id}`}>
                      <h1>
                        {book.Title} by {book.author}
                      </h1>
                    </Link>
                  </li>
                )
            )
          ) : (
            <li>Loading...</li>
          )}
        </ul>
        {books.length > 0 && (
          <div className="flex justify-end items-end gap-5 flex-wrap mt-5 mr-5">
            <ShimmerButton
              className="shadow-2xl px-2 py-2"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              <span className="text-center leading-none tracking-tight text-white">
                <ChevronLeft className="w-6 h-6" />
              </span>
            </ShimmerButton>
            <ShimmerButton
              className="shadow-2xl px-2 py-2"
              onClick={() => setPage(page + 1)}
            >
              <span className="text-center leading-none tracking-tight text-white">
                <ChevronLeft className="w-6 h-6 rotate-180 transform" />
              </span>
            </ShimmerButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default BooksList;
