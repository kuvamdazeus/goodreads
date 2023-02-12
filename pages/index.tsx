import BookInput from "@/components/BookInput";
import Books from "@/components/Books";
import Navbar from "@/components/Navbar";
import clientPromise from "@/mongodb";
import type { GetServerSideProps } from "next";
import type { Book } from "@/types";

interface Props {
  preview: Book[];
}

export default function IndexPage({ preview }: Props) {
  return (
    <section className="w-screen flex">
      <title>GoodReads - Match books according to genre / personality type!</title>

      <Navbar />

      <BookInput />

      <Books preview={preview} />
    </section>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const client = await clientPromise;
  const collection = client.db("data").collection("goodreads");

  const data = await collection
    .aggregate([
      {
        $sort: {
          reviews: -1,
          rating: -1,
        },
      },
      {
        $limit: 25,
      },
    ])
    .toArray();

  const preview = data.map((doc: any) => ({
    _id: "",
    author: doc.author || null,
    desc: doc.desc || null,
    bookformat: doc.bookformat || null,
    genre: doc.genre || null,
    img: doc.img || null,
    isbn: doc.isbn || null,
    pages: doc.pages || null,
    rating: doc.rating || null,
    reviews: doc.reviews || null,
    title: doc.title || null,
    totalratings: doc.totalratings || null,
    isbn13: doc.isbn13 || null,
    link: doc.link || null,
  }));

  console.log(preview);

  return {
    props: {
      preview,
    },
  };
};
