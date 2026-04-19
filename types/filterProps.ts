import { Dispatch, FormEvent, SetStateAction } from "react";
import { CatalogFilters } from "./catalogFilters";

export type FiltersProps = {
  draftFilters: CatalogFilters;
  setDraftFilters: Dispatch<SetStateAction<CatalogFilters>>;
  handleFilterSubmit: (event: FormEvent<HTMLFormElement>) => void;
  resetFiltersHandler: () => void;
};
