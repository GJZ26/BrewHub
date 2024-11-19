export type SortableKey = "name" | "email" | "createdAt";

export interface DataSorted {
  key: SortableKey;
  ascending: boolean;
}