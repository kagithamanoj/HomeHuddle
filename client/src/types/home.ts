export interface HomeTask {
  id: string;
  title: string;
  dueDate: string;
  completed: boolean;
  notes?: string;
}

export interface Appliance {
  id: string;
  name: string;
  lastServiced: string;
  warrantyExpiry?: string;
}
