import create from "zustand";

type State = {
  user: string | null;
  setUser: (user: string | null) => void;
};

export const useAppStore = create<State>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
