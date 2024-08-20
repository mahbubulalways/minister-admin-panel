export type TProduct = {
  _id: string;
  name: string;
  image: string;
  images: string[];
  price: string;
  offerPrice: string | number;
  mainCategory: string;
  subCategory: string;
  productType: string;
  sale: boolean;
  isDeleted: boolean;
};
