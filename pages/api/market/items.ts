import MarketItemModel from '../../../models/MarketItemModel';
import connectDB from './../../../middleware/mongodb';

import type {NextApiRequest, NextApiResponse} from 'next';
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(400).send({error: 'Invalid request method (expected GET).'});
    return;
  }

  if (req.headers.authorization != process.env.MARKET_API_KEY) {
    res.status(403).send({error: 'Invalid secret.'});
    return;
  }

  if (!req.query || !req.query.type) {
    MarketItemModel.find({}, (err, result) => {
      if (err) throw err;
      res.status(200).json(result);
    });
  } else {
    MarketItemModel.find({type: req.query.type}, (err, result) => {
      if (err) throw err;
      res.status(200).json(result);
    });
  }
};

export default connectDB(handler);
