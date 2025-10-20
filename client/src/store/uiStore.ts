import { create } from "zustand";

type UIState = {
  toast: { message: string; type?: "success" | "error" | "info" } | null;
  showToast: (message: string, type?: "success" | "error" | "info") => void;
  hideToast: () => void;
  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  toast: null,
  showToast: (message, type = "info") => set({ toast: { message, type } }),
  hideToast: () => set({ toast: null }),
  modalOpen: false,
  openModal: () => set({ modalOpen: true }),
  closeModal: () => set({ modalOpen: false }),
}));
