export interface Pet {
  id: string;
  name: string;
  species: string;         // e.g., "Dog", "Cat"
  breed?: string;          // optional
  age: number;
  ownerId: string;
  avatarUrl?: string;
  medicalRecords?: PetMedicalRecord[];
}

export interface PetActivity {
  id: string;
  petId: string;
  date: string;
  type: "feeding" | "walk" | "vet" | "medication" | "grooming" | "other";
  description?: string;
  completed: boolean;
}

export interface PetMedicalRecord {
  id: string;
  petId: string;
  date: string;
  type: "vaccination" | "checkup" | "surgery" | "illness";
  notes: string;
  vetName?: string;
}
