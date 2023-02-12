import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import type { Book } from "@/types";

interface Props {
  setBooks: (books: Book[]) => void;
  setSearchTerm: (genre: string) => void;
}

export default function BookInput({ setBooks, setSearchTerm }: Props) {
  const [genreInput, setGenreInput] = useState("");
  const [personalityInput, setPersonalityInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchGenre = async () => {
    setIsLoading(true);
    setSearchTerm(genreInput);

    const res = await fetch(`/api/search_books?genre=${genreInput}`);
    const data = await res.json();

    setBooks(data);
    setIsLoading(false);
  };

  return (
    <div className="pt-16 h-screen w-1/4 border-r border-gray-500 flex flex-col justify-between items-center">
      <div />

      <div className="w-full px-12">
        <p className="text-3xl mb-1">Enter genre type</p>
        <input
          onChange={(e) => setGenreInput(e.target.value)}
          placeholder="e.g history, fantasy, romance..."
          className="mb-16 p-2 bg-transparent outline-none text-sm font-sans text-accent border border-accent w-full rounded"
        />

        <div className="w-full flex items-center mb-10">
          <div className="h-px w-1/2 bg-gray-500" />
          <p className="text-gray-500 mx-5 text-xs tracking font-bold tracking-widest font-sans">OR</p>
          <div className="h-px w-1/2 bg-gray-500" />
        </div>

        <p className="text-3xl mb-1">Personality type</p>
        <input
          onChange={(e) => setPersonalityInput(e.target.value)}
          placeholder="e.g INTP, INTJ, ENFP..."
          className="p-2 text-sm bg-transparent outline-none font-sans text-accent border border-accent w-full rounded"
        />
      </div>

      <button
        onClick={searchGenre}
        className="py-5 hover:opacity-80 transition-all duration-300 text-3xl font-bold w-full bg-primary"
      >
        {isLoading ? <BeatLoader /> : "Find a book!"}
      </button>
    </div>
  );
}
