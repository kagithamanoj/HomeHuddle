// src/features/sharedLiving/AddChoreForm.tsx
import React, { useState } from 'react';
import { useSharedLiving } from './useSharedLiving';

export const AddChoreForm = () => {
  const { addExpense, isLoading } = useSharedLiving(); // Assuming useSharedLiving has addChore
  const [choreName, setChoreName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!choreName) return;
    
    // Call the mutation function from your hook!
    // addChore({ name: choreName, /* ...other chore properties */ });

    setChoreName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a New Chore</h3>
      <input 
        type="text"
        value={choreName}
        onChange={(e) => setChoreName(e.target.value)}
        placeholder="e.g., Water the plants"
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add Chore'}
      </button>
    </form>
  );
};