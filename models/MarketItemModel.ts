import {Schema, model} from 'mongoose';

const MarketItemSchema = new Schema(
    {
      name: String,
      type: {
        type: String,
        enum: [
          'HELMET',
          'CHEST',
          'GLOVES',
          'LEGS',
          'BOOTS',
          'AMULET',
          'RING',
          'EARRING',
          'SWORD',
          'SHIELD',
          'HATCHET',
          'SPEAR',
          'FIRE_STAFF',
          'GREAT_AXE',
          'WAR_HAMMER',
          'ICE_GAUNTLET',
          'VOID_GAUNTLET',
          'BOW',
          'MUSKET',
          'LIFE_STAFF',
        ],
      },
      category: {
        type: String,
        enum: ['HEAVY', 'MEDIUM', 'LIGHT', 'WEAPON', 'JEWELLERY'],
      },
      link: String,
      price: Number,
      seller: String,
      password: String,
    },
    {collection: 'market_items'},
);

const MarketItemModel = model('MarketItemModel', MarketItemSchema);

export default MarketItemModel;
