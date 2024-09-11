// components/SearchResults.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SearchResult } from "./SearchPage";

interface SearchResultsProps {
  results: SearchResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <ul className="flex justify-center text-white items-center gap-5 flex-wrap max-w-[1550px] mx-auto my-0 mt-10">
      {results.map(
        (item) =>
          item.image && (
            <li
              key={item._id}
              className="flex justify-center items-center gap-3 flex-col w-[300px]"
            >
              <Link
                href={`/books/${item._id}`}
                className="flex justify-start text-center items-center gap-3 flex-col"
              >
                <Image
                  width={128}
                  height={300}
                  quality={100}
                  loading="lazy"
                  className="w-[300px] md:w-[190px] h-auto hover:scale-105"
                  src={item.image}
                  alt={item.Title || "Book cover"}
                />
                <h1>{item.Title}</h1>
              </Link>
            </li>
          )
      )}
    </ul>
  );
};

export default SearchResults;
