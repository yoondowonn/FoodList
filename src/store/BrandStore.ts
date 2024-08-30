import { create } from "zustand";
import { ServiceType } from "type/ServiceType";
import { persist } from "zustand/middleware";

export interface BrandStore {
  type: ServiceType;
  setBrandType: (brand: ServiceType) => void;
}

export const useBrandStore = create(
  persist(
    (set) => ({
      type: ServiceType.None,
      setBrandType: (brand: ServiceType) => set({ type: brand }),
    }),
    {
      name: "brand-storage",
      getStorage: () => localStorage,
    }
  )
);
