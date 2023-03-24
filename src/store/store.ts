import { atom } from "nanostores";

export const storeHost = atom("");
export const storeLoading = atom(true);
export const storeCategory = atom<category[]>([]);
export const storeFiltering = atom<category[]>([]);
export const storeData = atom<category[]>([]);
export const storeModal = atom(false);
export const storeTags = atom<tags[]>([]);
