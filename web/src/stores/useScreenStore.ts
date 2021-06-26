import create from "zustand";
import { combine } from "zustand/middleware";

export const useScreenStore = create(
  combine(
    {
      isMobile: false,
    },
    (set) => ({
      setIsMobile: (value: boolean) => set({ isMobile: value }),
    })
  )
);
