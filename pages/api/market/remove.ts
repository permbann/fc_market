import { ObjectId } from "mongodb";

import connectDB from "../../../middleware/mongodb";
import MarketItemModel from "../../../models/MarketItemModel";

import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "DELETE") {
    res
      .status(400)
      .send({ error: "Invalid request method (expected DELETE)." });
    return;
  }

  if (req.headers.authorization != process.env.MARKET_API_KEY) {
    res.status(403).send({ error: "Invalid secret." });
    return;
  }

  if (!req.query.id) {
    res.status(400).send({ error: "Request is missing item id in body." });
    return;
  }

  MarketItemModel.deleteOne({ _id: new ObjectId(req.query.id as string) })
    .then(() => {
      res.status(200).json({ message: "item deleted" });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

export default connectDB(handler);
