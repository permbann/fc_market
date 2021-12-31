import type { NextApiRequest, NextApiResponse } from "next";
import { DeleteResult, ObjectId } from "mongodb";
import { getMongoClient } from "../../../util/mongo";

type ResponseData =
  | DeleteResult
  | {
      error: string;
    };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "DELETE") {
    res
      .status(400)
      .send({ error: "Invalid request method (expected DELETE)." });
    return;
  }

  if (
    req.headers.authorization !=
    "5165067fb0198fe46aa412d21c1f235e6645f65dcbbcf3efec75b889d5352db8"
  ) {
    res.status(403).send({ error: "Invalid secret." });
    return;
  }

  if (!req.query.id) {
    res.status(400).send({ error: "Request is missing item id in body." });
    return;
  }

  const mongoClient = getMongoClient();
  mongoClient.connect(async (err) => {
    const collection = mongoClient.db("market").collection("items");
    await collection.deleteOne(
      { _id: new ObjectId(req.query.id as string) },
      function (err, obj) {
        if (err) throw err;
        res.status(200).json(obj as DeleteResult);
      }
    );
    mongoClient.close();
  });
}
