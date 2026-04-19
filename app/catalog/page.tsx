"use client";
import styles from "./CatalogPage.module.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCampers } from "@/lib/campersApi";
import { queryKeys } from "@/lib/queryKeys";
import CamperCard from "@/components/Catalog/CamperCard/CamperCard";
import { useState } from "react";
import { CampersQueryParams, CatalogFilters } from "@/types";
import Filters from "@/components/Catalog/Filters/Filters";
import Button from "@/components/UI/Button/Button";

const initialFilters: CatalogFilters = {
  location: "",
  form: "",
  transmission: "",
  engine: "",
};

export default function CampersCatalog() {
  const [filters, setFilters] = useState<CatalogFilters>({ ...initialFilters });
  const [draftFilters, setDraftFilters] = useState<CatalogFilters>({
    ...initialFilters,
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
  function handleFilterSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFilters({ ...draftFilters });
  }

  const resetFiltersHandler = () => {
    setDraftFilters({ ...initialFilters });
    setFilters({ ...initialFilters });
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong.</p>;

  const campersList = data?.pages.flatMap((page) => page.campers) ?? [];

  return (
    <div>
      <main>
        <div className={`container ${styles.pageWrapper}`}>
          <h1 className={styles.visHidden}>Campers Catalog</h1>
          <Filters
            draftFilters={draftFilters}
            setDraftFilters={setDraftFilters}
            handleFilterSubmit={handleFilterSubmit}
            resetFiltersHandler={resetFiltersHandler}
          />
          <div className={styles.contentWrapper}>
            {campersList.map((camper) => (
              <CamperCard key={camper.id} camper={camper} />
            ))}

            {hasNextPage && (
              <Button
                className={styles.loadMoreBtn}
                variant="secondary"
                type="button"
                onClick={fetchNextPage}
              >
                {isFetchingNextPage ? "Loading..." : "Load more"}
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
