/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

export const useStore = create((set) => ({
  user: null,
  setUser: (user: any) => set({ user }),
}));
