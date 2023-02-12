import { Book } from "@/types";
import { useEffect, useRef } from "react";

interface Props {
  books: Book[];
  preview: Book[];
  searchTerm: string;
}

export default function Books({ books, preview, searchTerm }: Props) {
  const booksDivRef = useRef<HTMLDivElement | null>(null);

  const booksToRender = books.length === 0 ? preview : books;

  useEffect(() => {
    let interval: any = null;
    booksDivRef.current?.scrollTo(0, 0);

    if (books.length === 0)
      interval = setInterval(() => booksDivRef.current?.scrollTo(0, booksDivRef.current.scrollTop + 1), 40);

    return () => {
      clearInterval(interval);
    };
  }, [books]);

  console.log("Books", books);

  return (
    <div ref={booksDivRef} className="relative pt-20 w-3/4 h-screen overflow-y-auto">
      {searchTerm && <p className="text-xl font-bold ml-5">Showing results for "{searchTerm}"</p>}

      <div className="flex justify-center flex-wrap">
        {booksToRender.map((book) => (
          <div className="h-96 w-64 rounded-lg  m-5">
            <img src={book.img} className="h-full w-full object-cover rounded-lg" />
          </div>
        ))}
      </div>

      {books.length === 0 && (
        <div className="fixed bottom-0 right-0 w-3/4 h-full bg-gradient-to-b from-transparent to-black" />
      )}
    </div>
  );
}
