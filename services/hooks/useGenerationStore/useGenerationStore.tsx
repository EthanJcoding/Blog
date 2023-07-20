import { create } from "zustand";

interface GenerationStore {
  isFolded: boolean;
  setFolded: (isFolded: boolean) => void;
}

export const useGenerationStore = create<GenerationStore>()((set) => ({
  isFolded: false,
  setFolded: (isFolded: boolean) => set({ isFolded }),
}));
