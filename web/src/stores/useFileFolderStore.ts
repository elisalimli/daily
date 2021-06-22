import create from "zustand";
import { combine } from "zustand/middleware";

export const useFileFolderStore = create(
  combine(
    {
      rootId: "",
      currentFileOrFolderId: "",
      isRecord: false,
      loading: true,
    },
    (set) => ({
      setRootId: (rootId: string) => {
        return set({
          rootId,
        });
      },
      setCurrentFileOrFolderId: (id: string) => {
        return set({ currentFileOrFolderId: id });
      },
      setIsRecord: (value: boolean) => set({ isRecord: value }),
      setLoading: (value: boolean) => set({ loading: value }),
    })
  )
);
