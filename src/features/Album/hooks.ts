import { useInfiniteQuery, useQuery } from "react-query";
import { getAllImages } from "./api";
import { IInfinitePage } from "./types";

export const HOOKS_KEYS = {
  IMAGES: "images",
};

//SERVER DATA
export const useGetImages = () =>
  useInfiniteQuery<IInfinitePage, Error>("infinite", getAllImages, {
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
