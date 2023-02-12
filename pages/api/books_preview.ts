import clientPromise from "@/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
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

  return res.status(200).json(data);
}
