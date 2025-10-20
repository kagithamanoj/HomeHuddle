import { create } from "zustand";
import { HomeTask, Appliance } from "../types/home";

type HomeState = {
  tasks: HomeTask[];
  setTasks: (tasks: HomeTask[]) => void;
  appliances: Appliance[];
  setAppliances: (appliances: Appliance[]) => void;
};

export const useHomeStore = create<HomeState>((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  appliances: [],
  setAppliances: (appliances) => set({ appliances }),
}));
