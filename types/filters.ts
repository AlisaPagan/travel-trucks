import { Engine, Form, Transmission } from "./unions";

export type Filters = {
  forms: Form[];
  transmissions: Transmission[];
  engines: Engine[];
};
