import { ObjectId } from "mongodb";

export type Category =
  | "HEAVY"
  | "MEDIUM"
  | "LIGHT"
  | "WEAPON"
  | "JEWELLERY"
  | undefined;
export type ItemType =
  | "HELMET"
  | "CHEST"
  | "GLOVES"
  | "LEGS"
  | "BOOTS"
  | "AMULET"
  | "RING"
  | "EARRING"
  | "SWORD"
  | "SHIELD"
  | "HATCHET"
  | "SPEAR"
  | "FIRE_STAFF"
  | "GREAT_AXE"
  | "WAR_HAMMER"
  | "ICE_GAUNTLET"
  | "VOID_GAUNTLET"
  | "BOW"
  | "MUSKET"
  | "LIFE_STAFF"
  | undefined;

export type MarketItem = {
  _id?: ObjectId;
  name: string;
  type: ItemType;
  category: Category;
  link: string;
  price: number;
  seller: string;
  password: string;
};
