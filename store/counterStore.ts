import { create } from 'zustand';

// Define an interface for the store's state and actions
interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// Create the store with the defined interface
const useCounterStore = create<CounterState>((set) => ({
  // Initial state
  count: 0,

  // Actions
  increment: () => set((state) => ({ count: state.count + 1 })),

  decrement: () => set((state) => ({ count: state.count - 1 })),

  reset: () => set({ count: 0 }),
}));

export default useCounterStore;
