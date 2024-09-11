
export interface Book {
  _id: string;
  Title: string;
  author: string;
  description: string;
  image: string;
  publishedDate: number;
  infoLink: string;
  categories : [];
}

const BASE_URL = "https://narratiq-server.vercel.app";


export async function fetchBookById(id: string): Promise<Book> {
  try {
    const response = await fetch(`${BASE_URL}/books/${id}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch book with id: ${id}. Status: ${response.status}`);
    }

    const book: Book = await response.json();
    return book;
  } catch (error) {
    console.error('Error fetching book:', error);
    throw error;
  }
}


export interface BooksResponse {
  books: Book[];
  totalPages: number;
}

export async function fetchBooks(page: number): Promise<BooksResponse> {
  const response = await fetch(`http://localhost:3001/books?page=${page}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: BooksResponse = await response.json();
  return {
    books: data.books ?? [],
    totalPages: data.totalPages
  };
}

