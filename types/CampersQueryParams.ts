import { Engine, Form, Transmission } from "./unions";

export type CampersQueryParams = {
  page?: number;
  perPage?: number;
  location?: string;
  form?: Form | "";
  transmission?: Transmission | "";
  engine?: Engine | "";
};
