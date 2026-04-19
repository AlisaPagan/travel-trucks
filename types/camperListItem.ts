import { Engine, Form, Transmission } from "./unions";

export type CamperListItem = {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: Form;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: Transmission;
  engine: Engine;
  amenities: string[];
  coverImage: string;
  totalReviews: number;
};
