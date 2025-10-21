import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchPets, logPetActivity } from "../../api/pet";
import { Pet, PetActivity } from "../../types/pet"; // Assuming you have a Pet type defined

// Define a type for the variables our mutation will accept
interface LogActivityVariables {
  petId: string; // Or number, depending on your API
  activity: PetActivity;
}

export const usePetData = () => {
  const queryClient = useQueryClient();

  const petsQuery = useQuery<Pet[], Error>({
    queryKey: ["pets"],
    queryFn: fetchPets,
  });

  const logActivityMutation = useMutation({
    // The mutationFn now accepts a single object with all the needed variables
    mutationFn: ({ petId, activity }: LogActivityVariables) => 
      logPetActivity(petId, activity),
    
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pets"] });
    },
  });

  return { ...petsQuery, logActivity: logActivityMutation.mutate };
};