import { useQuery, useMutation, useQueryClient } from "react-query";
import { fetchPets, logPetActivity } from "../../api/pet";
import { PetActivity } from "../../types/pet";

export const usePetData = () => {
  const queryClient = useQueryClient();
  const petsQuery = useQuery("pets", fetchPets);

  const logActivityMutation = useMutation(logPetActivity, {
    onSuccess: () => queryClient.invalidateQueries("pets")
  });

  return { ...petsQuery, logActivity: logActivityMutation.mutate };
};
