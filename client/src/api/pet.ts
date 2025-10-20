import api from "./index";
import { Pet, PetActivity } from "../types/pet";

// Get pets for a user
export const fetchPets = () =>
  api.get<Pet[]>("/pet/list").then(res => res.data);

// Log activity for a pet
export const logPetActivity = (petId: string, activity: PetActivity) =>
  api.post(`/pet/${petId}/activity`, activity);
