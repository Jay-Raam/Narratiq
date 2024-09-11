"use client";

import React, { useEffect, useState } from "react";
import quotes from "@/components/data";

// Define the type for a quote
type QuoteType = string;

const Quote: React.FC = () => {
  const [dailyQuotes, setDailyQuotes] = useState<QuoteType[]>([]);

  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
        (1000 * 60 * 60 * 24)
    );

    // Generate 5 unique indices for quotes
    const quoteIndices = new Set<number>();
    while (quoteIndices.size < 5) {
      const randomIndex =
        (dayOfYear + Math.floor(Math.random() * 100)) % quotes.length;
      quoteIndices.add(randomIndex);
    }

    setDailyQuotes(Array.from(quoteIndices).map((index) => quotes[index]));
  }, []);

  // Define the Quote component within the same file
  const QuoteItem: React.FC<{ quote: string }> = ({ quote }) => {
    return (
      <blockquote className="mx-5 pl-4 text-white font-thin border-l-2 border-white hover:border-red-950 transition-colors">
        {quote}
      </blockquote>
    );
  };

  return (
    <div className="w-full p-5 flex justify-center items-center gap-5 flex-col">
      {dailyQuotes.length ? (
        dailyQuotes.map((quote, index) => (
          <QuoteItem key={index} quote={quote} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Quote;
