"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface SearchResult {
  _id: number;
  Title: string;
  image: string;
  // Add other fields as necessary
}

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://narratiq-server.vercel.app/search?name=${encodeURIComponent(
          query
        )}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result: SearchResult[] = await response.json();
      setData(result);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="seearch mt-10">
      <form
        onSubmit={handleSearch}
        className=" flex justify-center items-center gap-3 flex-wrap"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="peer w-[300px] md:w-[400px] bg-transparent outline-none px-6 py-2 text-base text-white rounded-xl border border-gray-50 focus:shadow-md"
          placeholder="Enter search term"
        />
        <button
          type="submit"
          className="bg-white w-[120px] text-black px-4 py-2 rounded-full text-center mt-2"
        >
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul className="flex justify-center text-white items-center gap-5 flex-wrap max-w-[1550px] mx-auto my-0 mt-10">
        {data.map(
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
                    className="w-[200px] h-auto hover:scale-105"
                    src={item.image}
                    alt={item.Title || "Book cover"}
                  />
                  <h1>{item.Title}</h1>
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default SearchPage;
