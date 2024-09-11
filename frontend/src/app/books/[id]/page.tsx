import { notFound } from "next/navigation";
import { fetchBookById } from "@/app/api/fecth";
import Image from "next/image";
import Link from "next/link";

interface BookPageProps {
  params: {
    id: string;
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { id } = params;

  try {
    const book = await fetchBookById(id);
    return (
      <div className="flex relative justify-center items-center gap-10 flex-col h-[100vh] pb-5 z-50 bg-white">
        <Link href="/books" className="absolute top-6 left-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-current stroke-2 stroke-current cursor-pointer transition-all duration-300 ease-in-out hover:w-7 hover:h-7 hover:rounded-full hover:bg-white hover:p-2 hover:text-black"
            viewBox="0 0 24 24"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </Link>
        <Image
          width={128}
          height={300}
          quality={100}
          loading="lazy"
          className="w-[200px] h-auto mt-5"
          src={book.image}
          alt={book.Title || "Book cover"}
        />
        {book.Title && <h1>{book.Title}</h1>}
        {book.author && <p>{book.author}</p>}
        {book.description && <p className="text-center">{book.description}</p>}
        {book.publishedDate ? (
          new Date(book.publishedDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        ) : (
          <p>No publish date is available</p>
        )}

        {book.categories.length > 0 &&
          book.categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        {book.infoLink && (
          <Link href={book.infoLink} target="_blank" rel="noopener noreferrer">
            <span>More Info</span>
          </Link>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error loading book page:", error);
    notFound();
  }
}
