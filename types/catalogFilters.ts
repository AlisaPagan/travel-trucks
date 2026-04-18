import { Engine, Form, Transmission } from "./unions";

export type CatalogFilters = {
  location: string;
  form: "" | Form;
  transmission: "" | Transmission;
  engine: "" | Engine;
};
