import BookInput from "@/components/BookInput";
import Books from "@/components/Books";
import Navbar from "@/components/Navbar";

export default function IndexPage() {
  return (
    <section className="w-screen flex">
      <title>GoodReads - Match books according to genre / personality type!</title>

      <Navbar />

      <BookInput />

      <Books />
    </section>
  );
}
