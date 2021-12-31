import type { NextApiRequest, NextApiResponse } from "next";
import { InsertOneResult, ObjectId, WithId } from "mongodb";
import { getMongoClient } from "../../../util/mongo";
import { MarketItem } from "../../../util/types";

type ResponseData =
  | MarketItem
  | {
      error: string;
    };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData[] | ResponseData>
) {
  if (req.method !== "GET") {
    res.status(400).send({ error: "Invalid request method (expected GET)." });
    return;
  }

  if (
    req.headers.authorization !=
    "5165067fb0198fe46aa412d21c1f235e6645f65dcbbcf3efec75b889d5352db8"
  ) {
    res.status(403).send({ error: "Invalid secret." });
    return;
  }

  const mongoClient = getMongoClient();
  mongoClient.connect(async (err) => {
    const collection = mongoClient.db("market").collection("items");
    if (!req.query || !req.query.type) {
      await collection.find({}).toArray((err, result) => {
        if (err) throw err;
        res.status(200).json((result as WithId<ResponseData>[]) || []);
      });
    } else {
      await collection.find({ type: req.query.type }).toArray((err, result) => {
        if (err) throw err;
        res.status(200).json((result as WithId<ResponseData>[]) || []);
      });
    }

    mongoClient.close();
  });
}
