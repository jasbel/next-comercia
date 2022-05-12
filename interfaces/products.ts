export interface IProduct {
  _id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ISizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ITypes;
  gender: "men" | "women" | "kid" | "unisex";
}

export type ISizes = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
// type ValidSizes2 = '2'|4'|'6'|'8'|'10'|'12'|'14';
export type ITypes = "shirts" | "pants" | "hoodies" | "hats";
 