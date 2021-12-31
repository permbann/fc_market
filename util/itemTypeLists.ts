import { ItemType, Category } from "./types";

export const armor: ItemType[] = ["HELMET", "CHEST", "GLOVES", "LEGS", "BOOTS"];

export const jewellery: ItemType[] = ["AMULET", "RING", "EARRING"];

export const weapons: ItemType[] = [
  "SWORD",
  "SHIELD",
  "HATCHET",
  "SPEAR",
  "GREAT_AXE",
  "WAR_HAMMER",
  "BOW",
  "MUSKET",
  "FIRE_STAFF",
  "ICE_GAUNTLET",
  "VOID_GAUNTLET",
  "LIFE_STAFF",
];

export const itemTypes: ItemType[] = armor.concat(jewellery).concat(weapons);

export const armorWeights: Category[] = ["HEAVY", "MEDIUM", "LIGHT"];

export const weaponWeights: Category[] = ["WEAPON"];
export const jewelleryWeights: Category[] = ["JEWELLERY"];

export const itemWeights: Category[] = armorWeights
  .concat(weaponWeights)
  .concat(jewelleryWeights);
