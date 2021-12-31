import { MongoClient } from "mongodb";

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/myFirstDatabase?retryWrites=true&w=majority`;

export const getMongoClient = () => {
  return new MongoClient(mongoUri, {});
};
