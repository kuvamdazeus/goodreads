import { Book } from "@/types";

interface Props {
  preview: Book[];
}

export default function Books({ preview }: Props) {
  return (
    <div className="pt-16 w-3/4 h-screen overflow-y-auto">
      <p className="mb-64">A</p>
      <p className="mb-64">B</p>
      <p className="mb-64">B</p>
      <p className="mb-64">B</p>
      <p className="mb-64">B</p>
      <p className="mb-64">B</p>
      <p className="mb-64">B</p>
      <p className="mb-64">B</p>
      <p className="mb-64">B</p>
      <p className="mb-64">B</p>
    </div>
  );
}
