import { CamperImage } from "./camperImage";
import { Amenity, Engine, Form, Transmission } from "./unions";

export type CamperDetails = {
  id: string;
  name: string;
  price: number;
  rating: number;
  totalReviews: number;
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
  amenities: Amenity[];
  gallery: CamperImage[];
  createdAt: string;
  updatedAt: string;
};
