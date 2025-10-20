import api from "./index";
import { HomeTask, Appliance } from "../types/home";

// Fetch home tasks
export const fetchHomeTasks = () =>
  api.get<HomeTask[]>("/home/tasks").then(res => res.data);

// Add a new home maintenance task
export const addHomeTask = (task: HomeTask) =>
  api.post<HomeTask>("/home/tasks", task).then(res => res.data);

// Get appliances
export const fetchAppliances = () =>
  api.get<Appliance[]>("/home/appliances").then(res => res.data);
