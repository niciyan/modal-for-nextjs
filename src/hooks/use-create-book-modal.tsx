import { create } from "zustand";

interface CreateBookInterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useCreateBookModal = create<CreateBookInterface>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
