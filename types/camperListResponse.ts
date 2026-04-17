import { CamperListItem } from "./camperListItem";

export type CamperListResponse = {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: CamperListItem[];
};
