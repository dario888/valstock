import { IImage, IInfinitePage } from "../types";

export const getAllImages = async ({
  pageParam = 1,
}): Promise<IInfinitePage> => {
  const response = await fetch(
    `https://picsum.photos/v2/list?page=${pageParam}`
  );
  const data: IImage[] = await response.json();
  return {
    nextCursor: pageParam < 6 ? pageParam + 1 : undefined,
    images: data,
  };
};
