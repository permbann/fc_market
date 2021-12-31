import type { NextApiRequest, NextApiResponse } from "next";
import { InsertOneResult, ObjectId } from "mongodb";
import { getMongoClient } from "../../../util/mongo";

type ResponseData =
  | {
      acknowledged: boolean;
      insertedId: ObjectId;
    }
  | {
      error: string;
    };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    res.status(400).send({ error: "Invalid request method (expected POST)." });
    return;
  }

  if (req.headers.authorization != process.env.MARKET_API_KEY) {
    res.status(403).send({ error: "Invalid secret." });
    return;
  }

  const data = {
    name: req.body.item.name,
    type: req.body.item.type,
    category: req.body.item.category,
    link: req.body.item.link,
    price: req.body.item.price,
    seller: req.body.item.seller,
    password: req.body.item.password,
  };

  const mongoClient = getMongoClient();
  mongoClient.connect(async (err) => {
    const collection = mongoClient.db("market").collection("items");
    await collection.insertOne(data, (err, result) => {
      if (err) throw err;
      res.status(200).json(result as InsertOneResult<ResponseData>);
    });
    mongoClient.close();
  });
}
