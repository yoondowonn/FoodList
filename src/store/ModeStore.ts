import { create } from "zustand";
import { ServiceType } from "type/ServiceType";
import { persist } from "zustand/middleware";

export interface ModeStore {
  type: ServiceType;
  setModeType: (mode: ServiceType) => void;
}

export const useModeStore = create<ModeStore>()(
  persist(
    (set) => ({
      type: ServiceType.None,
      setModeType: (mode: ServiceType) => set({ type: mode }),
    }),
    {
      name: "mode-storage",
      getStorage: () => localStorage,
    }
  )
);
