export interface IProduct {
  _id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ISize[];
  slug: string;
  tags: string[];
  title: string;
  type: IType;
  gender: "men" | "women" | "kid" | "unisex";
}

export type ISize = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
// type ValidSizes2 = '2'|4'|'6'|'8'|'10'|'12'|'14';
export type IType = "shirts" | "pants" | "hoodies" | "hats";
 