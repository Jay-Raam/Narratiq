// app/SearchPage.tsx
"use client";

import React, { useState } from "react";
import Loader from "./Loader";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

// Define a type for search results
export interface SearchResult {
  _id: string;
  Title: string;
  author: string;
  description: string;
  image: string;
  publishedDate: number;
  infoLink: string;
  categories: string[];
}

const SearchPage: React.FC = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://localhost:3001/search?name=${query}`
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data: SearchResult[] = await response.json();
      console.log(data);

      setResults(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleClick = () => {
    handleSearch(query);
  };

  return (
    <div className="Search mt-10">
      <SearchForm query={query} onChange={handleChange} onClick={handleClick} />
      {loading && <Loader />}
      {error && <p>Error: {error}</p>}
      {results.length > 0 && <SearchResults results={results} />}
    </div>
  );
};

export default SearchPage;
