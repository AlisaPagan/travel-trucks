"use client";
import styles from "./CatalogPage.module.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCampers } from "@/lib/campersApi";
import { queryKeys } from "@/lib/queryKeys";
import CamperCard from "@/components/Catalog/CamperCard/CamperCard";
import { useState } from "react";
import { CampersQueryParams, CatalogFilters } from "@/types";

export default function Campers() {
  const [filters, setFilters] = useState<CatalogFilters>({
    location: "",
    form: "",
    transmission: "",
    engine: "",
  });

  const [draftFilters, setDraftFilters] = useState<CatalogFilters>({
    location: "",
    form: "",
    transmission: "",
    engine: "",
  });

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [queryKeys.campers, filters],
    queryFn: ({ pageParam }) => {
      const params: CampersQueryParams = { page: pageParam, perPage: 4 };
      if (filters.location !== "") {
        params.location = filters.location;
      }
      if (filters.form !== "") {
        params.form = filters.form;
      }
      if (filters.transmission !== "") {
        params.transmission = filters.transmission;
      }
      if (filters.engine !== "") {
        params.engine = filters.engine;
      }
      return fetchCampers(params);
    },

    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.totalPages) return lastPage.page + 1;
      return undefined;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong.</p>;

  const campersList = data?.pages.flatMap((page) => page.campers) ?? [];

  function handleFilterSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFilters(draftFilters);
  }

  const resetFiltersHandler = () => {
    setDraftFilters({
      location: "",
      form: "",
      transmission: "",
      engine: "",
    });

    setFilters({
      location: "",
      form: "",
      transmission: "",
      engine: "",
    });
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.filtersWrapper}>
          <form onSubmit={handleFilterSubmit}>
            <div className={styles.locationWrapper}>
              <label htmlFor="search">Location</label>
              <input
                type="text"
                id="search"
                value={draftFilters.location}
                onChange={(e) =>
                  setDraftFilters((prev) => ({
                    ...prev,
                    location: e.target.value,
                  }))
                }
              />
            </div>

            <div className={styles.radioGroup}>
              <p className={styles.radioGroupTitle}>Camper form</p>
              <label>
                <input
                  type="radio"
                  name="form"
                  value="alcove"
                  onChange={() =>
                    setDraftFilters((prev) => ({ ...prev, form: "alcove" }))
                  }
                  checked={draftFilters.form === "alcove"}
                />
                Alcove
              </label>
              <label>
                <input
                  type="radio"
                  name="form"
                  value="panel_van"
                  onChange={() =>
                    setDraftFilters((prev) => ({ ...prev, form: "panel_van" }))
                  }
                  checked={draftFilters.form === "panel_van"}
                />
                Panel Van
              </label>
              <label>
                <input
                  type="radio"
                  name="form"
                  value="integrated"
                  onChange={() =>
                    setDraftFilters((prev) => ({ ...prev, form: "integrated" }))
                  }
                  checked={draftFilters.form === "integrated"}
                />
                Integrated
              </label>
              <label>
                <input
                  type="radio"
                  name="form"
                  value="semi_integrated"
                  onChange={() =>
                    setDraftFilters((prev) => ({
                      ...prev,
                      form: "semi_integrated",
                    }))
                  }
                  checked={draftFilters.form === "semi_integrated"}
                />
                Semi integrates
              </label>
            </div>

            <div className={styles.filterButtons}>
              <button type="submit">Search</button>
              <button onClick={() => resetFiltersHandler()} type="button">
                Clear filters
              </button>
            </div>
          </form>
        </div>
        <div className={styles.contentWrapper}>
          <p className={styles.p}>hello campers</p>
          {campersList.map((camper) => (
            <CamperCard key={camper.id} camper={camper} />
          ))}

          {hasNextPage && (
            <button onClick={() => fetchNextPage()}>
              {isFetchingNextPage ? "Loading..." : "Load more"}
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
