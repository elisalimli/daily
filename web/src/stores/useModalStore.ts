import create from "zustand";
import { combine } from "zustand/middleware";

export const useModalStore = create(
  combine(
    {
      openFile: false,
      openFolder: false,
      openRecord: false,
    },
    (set) => ({
      setOpenFile: (value: boolean) => set({ openFile: value }),
      setOpenFolder: (value: boolean) => set({ openFolder: value }),
      setOpenRecord: (value: boolean) => set({ openRecord: value }),
    })
  )
);
