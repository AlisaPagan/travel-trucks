"use client";
import styles from "./CatalogPage.module.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCampers } from "@/lib/campersApi";
import { queryKeys } from "@/lib/queryKeys";

export default function Campers() {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: queryKeys.campers,
    queryFn: ({ pageParam }) => fetchCampers({ page: pageParam, perPage: 4 }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.totalPages) return lastPage.page + 1;
      return undefined;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong.</p>;

  const campersList = data?.pages.flatMap((page) => page.campers) ?? [];
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.filtersWrapper}></div>
        <div className={styles.contentWrapper}>
          <p className={styles.p}>hello campers</p>
          {campersList.map((camper) => (
            <div key={camper.id}>
              <p>{camper.name}</p>
              <p>{camper.price}</p>
              <p>{camper.location}</p>
            </div>
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
