import mongoose from 'mongoose';
import {NextApiRequest, NextApiResponse} from 'next';

const mongoUri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@mongo:27017/market`;

const connectDB =
  (handler: (req: NextApiRequest, res: NextApiResponse) => void) =>
    async (req: NextApiRequest, res: NextApiResponse) => {
      console.log(mongoUri);
      if (mongoose.connections[0].readyState) {
      // Use current db connection
        return handler(req, res);
      }
      // Use new db connection
      await mongoose.connect(mongoUri);
      return handler(req, res);
    };

export default connectDB;
