import MarketItemModel from '../../../models/MarketItemModel';
import connectDB from './../../../middleware/mongodb';

import type {NextApiRequest, NextApiResponse} from 'next';
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(400).send({error: 'Invalid request method (expected POST).'});
    return;
  }

  if (req.headers.authorization != process.env.MARKET_API_KEY) {
    res.status(403).send({error: 'Invalid secret.'});
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

  MarketItemModel.create(data, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
};

export default connectDB(handler);
