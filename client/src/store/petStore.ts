import { create } from "zustand";
import { Pet, PetActivity } from "../types/pet";

type PetState = {
  pets: Pet[];
  setPets: (pets: Pet[]) => void;
  activities: PetActivity[];
  setActivities: (activities: PetActivity[]) => void;
};

export const usePetStore = create<PetState>((set) => ({
  pets: [],
  setPets: (pets) => set({ pets }),
  activities: [],
  setActivities: (activities) => set({ activities }),
}));
