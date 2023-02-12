import clientPromise from "@/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { genre } = req.query;

  if (!genre) return res.status(400).json({ error: "Missing search query" });

  const client = await clientPromise;
  const collection = client.db("data").collection("goodreads");

  const data = await collection
    .aggregate([
      {
        $search: {
          index: "text",
          text: {
            query: genre,
            path: "genre",
            fuzzy: {},
          },
        },
      },
      {
        $match: {
          img: { $ne: null },
        },
      },
      {
        $sort: {
          reviews: -1,
          rating: -1,
        },
      },
      { $sample: { size: 25 } },
    ])
    .toArray();

  return res.status(200).json(data);
}
