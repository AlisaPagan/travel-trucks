export const queryKeys = {
  campers: ["campers"] as const,
  filters: ["filters"] as const,
  camper: (camperId: string) => ["camper", camperId] as const,
  reviews: (camperId: string) => ["reviews", camperId] as const,
};
